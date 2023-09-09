import React from "react";
import { TypographyH2 } from "./ui/typography";
import ImgFaq from "@/public/assets/img/faq.png";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

type Faqs = {
	question: string;
	answer: string;
};

const faqs: Faqs[] = [
	{
		question: "What is Next Starter?",
		answer: "Next Starter is a powerful cloud-based platform that simplifies project management and enhances team collaboration, empowering businesses to achieve their goals efficiently.",
	},
	{
		question: "Can I try Next Starter before committing to a subscription?",
		answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card is required during the trial period, so you can explore Next Starter risk-free.",
	},
	{
		question: "How secure is my data with Next Starter?",
		answer: "We take data security seriously. Your data is protected with bank-level encryption and stored on secure servers. We follow industry best practices to ensure your information remains safe and confidential.",
	},
	{
		question: "Does Next Starter integrate with other tools we use?",
		answer: "Yes! Next Starter seamlessly integrates with popular apps and services like Slack, Microsoft 365, Google Workspace, and more. Enhance your existing workflow by connecting your favorite tools.",
	},
];

export default function FaqSection() {
	return (
		<section className="pt-16 pb-24 px-24 max-sm:px-8 grid grid-cols-2 gap-8">
			<div className="flex items-center justify-center max-md:hidden">
				<img src={ImgFaq.src} className="w-full h-auto" />
			</div>
			<div className="max-md:col-span-2">
				<TypographyH2 className="border-none font-extrabold">
					Frequently Asked Questions
				</TypographyH2>
				<Accordion type="single" collapsible className="w-full">
					{faqs.map((faq, index) => (
						<AccordionItem value={`item-${index}`} key={index}>
							<AccordionTrigger>{faq.question}</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
