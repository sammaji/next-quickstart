import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { TypographyP } from "../ui/typography";
import CheckoutButton from "./checkout-button";

export enum PricingTiers {
	FREE,
	HOBBY,
	ENTERPRISE,
}

export type PricingOptions = {
	tier: PricingTiers;
	title: string;
	price: number;
	description: string;
	callToAction: string;
	perks: string[];
};

type CardProps = React.ComponentProps<typeof Card> & PricingOptions;

export default function PricingCard({
	className,
	tier,
	title,
	description,
	callToAction,
	price,
	perks,
	...props
}: CardProps) {
	return (
		<Card
			className={cn("w-full flex flex-col hover:border-black", className)}
			{...props}
		>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4 grow">
				<div>
					{perks.map((perk, index) => (
						<div
							key={index}
							className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
						>
							<Check className="mr-2 h-4 w-4" />
							<div className="space-y-1">
								<p className="text-sm font-medium leading-none">
									{perk}
								</p>
							</div>
						</div>
					))}
				</div>
			</CardContent>
			<CardFooter className="flex flex-col items-center justify-center gap-2">
				{tier === PricingTiers.FREE && (
					<TypographyP className="text-sm font-medium leading-none">
						*No credit cards required
					</TypographyP>
				)}
				<CheckoutButton
					variant={tier === PricingTiers.FREE ? "outline" : "default"}
					className="w-full"
				>
					{callToAction}
				</CheckoutButton>
			</CardFooter>
		</Card>
	);
}
