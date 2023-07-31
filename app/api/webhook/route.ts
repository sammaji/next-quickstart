import { NextResponse } from "next/server";
export async function POST(request: Request) {
	const userId = "";
	let responseFromClerk;
	try {
		responseFromClerk = await fetch(
			`https://api.clerk.com/v1/users/${userId}/`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
				},
				body: JSON.stringify({
					// metadata
				}),
			},
		);
	} catch (err: any) {
		return NextResponse.json(
			{},
			{
				status: 500,
				statusText:
					"api/webhook: " + (err?.message || "some internal error"),
			},
		);
	}

	if (!responseFromClerk.ok)
		return NextResponse.json(
			{},
			{ status: 500, statusText: "api/webhook: no response from clerk" },
		);
	return NextResponse.json({}, { status: 200, statusText: "success" });
}
