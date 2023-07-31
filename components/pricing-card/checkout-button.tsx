"use client";

import React, { useState } from "react";
import { Button, ButtonProps } from "../ui/button";
import LoadingDots from "../ui/loading-dots";
import {  useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { PricingTiers } from "./pricing-card";

export default function CheckoutButton({
	children,
	tier,
	paymentMode,
	priceId,
	...rest
}: ButtonProps & {
	priceId: string;
	tier: PricingTiers;
	paymentMode?: "subscription" | "payment";
}) {
	const [isLoading, setLoadingState] = useState<boolean>(false);
	const { isLoaded, isSignedIn } = useUser();
	const router = useRouter();

	const handleCheckout = async (
		priceId: string,
		tier: PricingTiers,
		paymentMode?: "subscription" | "payment",
	) => {
		if (isLoaded && !isSignedIn) {
			router.push("/join");
			return;
		} else if (!isLoaded) {
			alert(
				"Just wait a second or two for your account information to load.",
			);
			return;
		}

		if (tier === PricingTiers.FREE) {
			router.push(process.env.NEXT_PUBLIC_APP_URL as string);
			return;
		}

		setLoadingState(true);

		let response;
		try {
			console.log("Loading");
			response = await fetch("/api/checkout", {
				method: "POST",
				body: JSON.stringify({
					price_id: priceId,
					mode: paymentMode || "",
				}),
			});
		} catch (error: any) {
			setLoadingState(false);
			throw new Error(
				`client(${error?.status || 500}): ${
					error?.statusText || "unexpected error"
				}`,
			);
		}

		if (!response || !response.ok) {
			throw new Error(
				`client(${response?.status || 500}): ${
					response?.statusText || "unexpected error"
				}`,
			);
		}

		const data = await response.json();
		console.log(data);
		const checkout_url = data?.checkout_url;
		if (!checkout_url) {
			setLoadingState(false);
			throw new Error("client: no checkout_url found, please try again");
		}

		setLoadingState(false);
		router.push(checkout_url);
		// window.location = checkout_url;
	};

	return (
		<Button
			{...rest}
			disabled={isLoading}
			onClick={() => handleCheckout(priceId, tier, paymentMode)}
		>
			{isLoading ? <LoadingDots /> : children}
		</Button>
	);
}
