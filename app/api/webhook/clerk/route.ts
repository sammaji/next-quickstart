import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createHmac } from "crypto";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
	// You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
	const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET_KEY;

	if (!WEBHOOK_SECRET) {
		throw new Error(
			"webhook: invalid webhook secret (check CLERK_WEBHOOK_SECRET_KEY env variable)",
		);
	}

	// Get the headers
	const headerPayload = headers();
	const svix_id = headerPayload.get("svix-id");
	const svix_timestamp = headerPayload.get("svix-timestamp");
	const svix_signature = headerPayload.get("svix-signature");

	// If there are no headers, error out
	if (!svix_id || !svix_timestamp || !svix_signature) {
		return new Response("webhook: no svix headers", {
			status: 400,
		});
	}

	// Get the body
	const payload = await req.json();
	const body = JSON.stringify(payload);
	const signedContent = `${svix_id}.${svix_timestamp}.${body}`;

	// Need to base64 decode the secret
	const secretBytes = Buffer.from(WEBHOOK_SECRET.split("_")[1], "base64");
	const signature = createHmac("sha256", secretBytes)
		.update(signedContent)
		.digest("base64");

	if (svix_signature.replace("v1,", "") !== signature) {
		const message = "webhook: no matching signature found";
		console.error(message);
		return NextResponse.json(message, { status: 400 });
	}

	const evt = payload as WebhookEvent;

	const eventType = evt.type;

	let primaryEmail;
	if (eventType == "user.created" || eventType == "user.updated") {
		primaryEmail = evt.data.email_addresses.find(value => value.id === evt.data.primary_email_address_id)?.email_address
	}

	switch (eventType) {
		case "user.created":
			await prisma.user.create({
				data: {
					id: evt.data.id,
					email: primaryEmail as string,
					fname: evt.data.first_name,
					lname: evt.data.last_name,
					username: evt.data.username
				},
			});
			break;

		case "user.updated":
			await prisma.user.update({
				where: {
					id: evt.data.id,
				},
				data: {
					email: primaryEmail,
					username: evt.data.username,
					fname: evt.data.first_name,
					lname: evt.data.last_name
				},
			});
			break;

		case "user.deleted":
			await prisma.user.delete({
				where: {
					id: evt.data.id,
				},
			});
			break;
	}

	return new NextResponse("success", { status: 201 });
}
