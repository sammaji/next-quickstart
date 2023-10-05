import { NextResponse } from "next/server";
import { Stripe } from "stripe";

export async function POST(request: Request) {
	const stripe = new Stripe(process.env.STRIPE_API_SECRET as string, {
		apiVersion: "2023-08-16",
	});

	const data = await request.json();
	const price_id = data.price_id;

	if (!price_id) {
		return NextResponse.json(
			"create-checkout: please provide a valid price id",
			{ status: 422 },
		);
	}

	let event;
	try {
		event = await stripe.checkout.sessions.create({
			success_url: process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL as string,
			cancel_url: process.env.NEXT_PUBLIC_STRIPE_CANCEL_URL as string,
			mode: "subscription",
			line_items: [
				{
					price: price_id,
					quantity: 1,
				},
			],
		});
		return NextResponse.json(
			{ message: "success", checkout_url: event.url },
			{ status: 200 },
		);
	} catch (error: any) {
		return NextResponse.json(
			{
				message: `create-checkout: ${
					error?.message || "unexpected error"
				}`,
			},
			{
				status: error?.status || 512,
				statusText: error || "unexpected error",
			},
		);
	}
}
