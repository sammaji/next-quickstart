"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { useTransition } from "react";
import ImgDashboard from "@/public/assets/img/intellij.png";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	PricingOptions,
	PricingTiers,
} from "@/components/pricing-card/pricing-card";
import { PricingSection } from "@/components/pricing-card";
import FooterSection from "@/components/footer-section";
import FaqSection from "@/components/faq-section";

export default function Home() {
	return (
		<>
			<main className="flex flex-col min-h-[calc(100vh-56px)] gap-8 p-24 items-center justify-center">
				<TypographyH1 className="text-8xl lg:text-7xl">
					Launch in Seconds
				</TypographyH1>
				<TypographyP className="text-2xl w-2/3 text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Unde aut quas provident vero illum.
				</TypographyP>
				<div className="space-x-4">
					<Button size="lg">Get Started</Button>
					<Button size="lg" variant="outline">
						Read Docs
					</Button>
				</div>
				<div>
					<img
						src={ImgDashboard.src}
						className="rounded-lg mt-8 box-shadow"
					/>
				</div>
			</main>
			<PricingSection />
			<FaqSection />
			<Separator orientation="horizontal" />
			<FooterSection />
		</>
	);
}
