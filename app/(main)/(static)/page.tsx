"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import ImgDashboard from "@/public/assets/img/intellij.png";
import { PricingSection } from "@/components/pricing-card";
import FooterSection from "@/components/footer-section";
import FaqSection from "@/components/faq-section";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	return (
		<>
			<main className="flex flex-col min-h-[calc(100vh-56px)] gap-8 p-24 max-sm:px-8 max-sm:py-16 items-center justify-center">
				<TypographyH1 className="text-8xl lg:text-7xl">
					Launch in Seconds
				</TypographyH1>
				<TypographyP className="text-2xl w-2/3 max-sm:w-full text-center">
					A simple customizable starter kit to quickly bootstrap a
					Next.js project.
				</TypographyP>
				<div className="space-x-4 max-sm:space-y-4 max-sm:space-x-0">
					<Button
						size="lg"
						className="max-sm:w-[100%]"
						onClick={() => router.push("/dashboard")}
					>
						Get Started
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="max-sm:w-[100%]"
					>
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
