"use client";

import React, { useState } from "react";
import { Button, ButtonProps } from "../ui/button";
import LoadingDots from "../ui/loading-dots";

export default function CheckoutButton({ children, ...rest }: ButtonProps) {
	const [isLoading, setLoadingState] = useState<boolean>(false);

	const handleCheckout = async () => {
		setLoadingState(true);
		const response = await fetch("/api/checkout", {
			method: "POST",
			body: JSON.stringify({
				price_id:
					process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_SUBSCRIPTION_HOBBY,
			}),
		});

		if (!response.ok) {
			throw new Error(
				`client(${response.status}): ${
					response.statusText || "unexpected error"
				}`,
			);
		}

		const data = await response.json();
		const checkout_url = data?.checkout_url;
		if (!checkout_url)
			throw new Error("client: no checkout_url found, please try again");

		setLoadingState(false);
		window.open(checkout_url);
	};

	return (
		<Button {...rest} disabled={isLoading} onClick={handleCheckout}>
			{isLoading ? <LoadingDots /> : children}
		</Button>
	);
}
