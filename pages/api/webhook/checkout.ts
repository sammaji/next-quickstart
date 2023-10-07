import type { NextApiRequest, NextApiResponse } from "next";
import type { Readable } from "node:stream";
import Stripe from "stripe";

export const config = {
	api: {
		bodyParser: false,
	},
};

async function getRawBody(readable: Readable): Promise<Buffer> {
	const chunks = [];
	for await (const chunk of readable) {
		chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
	}
	return Buffer.concat(chunks);
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method != "POST") res.status(405).end();

	const stripe = new Stripe(process.env.STRIPE_API_SECRET as string, {
		apiVersion: "2023-08-16",
	});

	const payload = await getRawBody(req);
	// const data = JSON.parse(Buffer.from(payload).toString("utf8"));

	const sig = req.headers["stripe-signature"];
	if (!sig) {
		res.status(422).send("webhook/checkout: No signature found");
		return;
	}

	let event: Stripe.Event;

	try {
		event = stripe.webhooks.constructEvent(
			payload,
			sig,
			process.env.STRIPE_WEBHOOK_SECRET as string,
		);
	} catch (error: any) {
		return res
			.status(400)
			.send(
				`webhook/checkout: ${
					error.message ?? "failed to validate signature"
				}`,
			);
	}

	let session;
	switch (event.type) {
		case "checkout.session.completed":
			session = event.data.object as Stripe.Checkout.Session;
			break;

		case "checkout.session.async_payment_succeeded":
			session = event.data.object as Stripe.Checkout.Session;
			break;

		case "checkout.session.async_payment_failed":
			session = event.data.object as Stripe.Checkout.Session;
			break;
	}

	res.status(200).end();
}
