import React from "react";
import { TypographyH2, TypographyP } from "../ui/typography";
import PricingCard, { PricingOptions, PricingTiers } from "./pricing-card";

export const pricing_perks: PricingOptions[] = [
	{
		tier: PricingTiers.FREE,
		title: "Free",
		description: "For new users",
		callToAction: "Try for free",
		perks: [
			"10 searches / month",
			"Scan 100 Jobs at a time",
			"24/7 Support",
		],
		priceId: process.env
			.NEXT_PUBLIC_STRIPE_PRICE_ID_SUBSCRIPTION_FREE as string,
	},
	{
		tier: PricingTiers.HOBBY,
		title: "Pro",
		description: "For freelancers and individuals",
		callToAction: "Buy $9 / month",
		perks: [
			"1000 searches / month",
			"Scan 5000+ Jobs at a time",
			"Advanced Searches",
			"Filter by client info",
			"Priority Support",
		],
		priceId: process.env
			.NEXT_PUBLIC_STRIPE_PRICE_ID_SUBSCRIPTION_HOBBY as string,
	},
	{
		tier: PricingTiers.LIFETIME,
		title: "Lifetime",
		description: "For companies and enterprises",
		callToAction: "Buy $69",
		perks: [
			"Unlimited searches",
			"Scan 5000+ Jobs at a time",
			"Advanced Searches",
			"Filter by client info",
			"Priority Support",
		],
		priceId: process.env
			.NEXT_PUBLIC_STRIPE_PRICE_ID_SUBSCRIPTION_LIFETIME as string,
	},
];

export default function PricingSection() {
	return (
		<section className="grid grid-rows-[auto_1fr] grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8 pt-8 pb-16 px-24 max-md:px-8">
			<div className="col-span-3 max-md:col-span-2 max-sm:col-span-1 w-2/3 max-sm:w-full flex flex-col items-center justify-center justify-self-center">
				<TypographyH2 className="border-none font-extrabold text-center">
					Why Next Starter?
				</TypographyH2>
				<TypographyP className="text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Repellat quae incidunt dicta quis ipsam nulla vero facilis
					mollitia, aliquam illo quam assumenda.
				</TypographyP>
			</div>
			{pricing_perks.map((item, index) => (
				<PricingCard key={index} {...item} />
			))}
		</section>
	);
}
