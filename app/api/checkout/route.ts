import { NextResponse } from "next/server";
import { Stripe } from "stripe";

export async function GET() {
	return NextResponse.json({ message: "success" }, { status: 200 });
}
export async function POST(request: Request) {
	const stripe = new Stripe(process.env.STRIPE_API_SECRET as string, {
		apiVersion: "2022-11-15",
	});

	const data = await request.json();
	const price_id = data.price_id;
	const mode = data.mode;

	if (!price_id || !mode) {
		return NextResponse.json(
			"create-checkout: please provide a valid price id or payment mode",
			{ status: 422 },
		);
	}

	let event;
	try {
		event = await stripe.checkout.sessions.create({
			success_url: process.env.STRIPE_SUCCESS_URL as string,
			cancel_url: process.env.STRIPE_CANCEL_URL as string,
			mode,
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
		return NextResponse.json({
			status: error?.status || 512,
			statusText:
				`create-checkout: ${error?.message || "unexpected error"}` ||
				"unexpected error",
		});
	}
}
