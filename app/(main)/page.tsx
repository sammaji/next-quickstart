"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import ImgDashboard from "@/public/assets/img/intellij.png";
import { PricingSection } from "@/components/pricing-card";
import FooterSection from "@/components/footer-section";
import FaqSection from "@/components/faq-section";
import { ArrowRight } from "lucide-react";

export default function Home() {
	return (
		<>
			<main className="flex flex-col min-h-[calc(100vh-56px)] gap-8 p-24 max-md:p-8 items-center justify-center">
				<TypographyH1 className="text-7xl lg:text-6xl max-sm:text-3xl text-center">
					Optimize Your Upwork Profile
				</TypographyH1>
				<TypographyP className="text-xl w-2/3 max-sm:w-full text-center text-gray-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Unde aut quas provident vero illum.
				</TypographyP>
				<div className="space-x-4">
					<Button size="lg" className="text-md">
						Get Started&ensp;
						<ArrowRight size={18} />
					</Button>
					{/* <Button size="lg" variant="outline">
						Read Docs
					</Button> */}
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
