import React from "react";
import { TypographyH3, TypographyP } from "./ui/typography";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Footer = { title: string; items: { title: string; url: string }[] };

const footer: Footer[] = [
	{
		title: "Resources",
		items: [
			{
				title: "Blog",
				url: "#",
			},
			{
				title: "Releases",
				url: "#",
			},
			{
				title: "Docs",
				url: "#",
			},
		],
	},
	{
		title: "Company",
		items: [
			{
				title: "Blog",
				url: "#",
			},
			{
				title: "Releases",
				url: "#",
			},
			{
				title: "Docs",
				url: "#",
			},
		],
	},
	{
		title: "Legal",
		items: [
			{
				title: "Blog",
				url: "#",
			},
			{
				title: "Releases",
				url: "#",
			},
			{
				title: "Docs",
				url: "#",
			},
		],
	},
	{
		title: "Support",
		items: [
			{
				title: "Blog",
				url: "#",
			},
			{
				title: "Releases",
				url: "#",
			},
			{
				title: "Docs",
				url: "#",
			},
		],
	},
];

export default function FooterSection() {
	return (
		<footer>
			<div className="flex max-md:flex-col items-center justify-center gap-8 px-8 pt-8">
				<div className="grid grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-2 gap-8 flex-shrink-0">
					{footer.map((footer_group_item, index) => (
						<ul key={index}>
							<TypographyH3 className="m-0 p-0 text-lg">
								{footer_group_item.title}
							</TypographyH3>
							{footer_group_item.items.map(
								(footer_item, index_2) => (
									<li key={index_2}>
										<a href={footer_item.url}>
											{footer_item.title}
										</a>
									</li>
								),
							)}
						</ul>
					))}
				</div>
				<div className="space-y-2">
					<TypographyH3 className="m-0 p-0 text-lg">
						Subscribe to our newsletter
					</TypographyH3>
					<TypographyP className="text-md">
						Subscribe to the Next Quickstart newsletter and stay
						updated on new releases and features, guides, and case
						studies.
					</TypographyP>
					<form className="flex gap-4">
						<Input type="email" placeholder="you@example.com" />
						<Button>Subscribe</Button>
					</form>
				</div>
			</div>
			<div className="px-8 pb-8">
				<TypographyH3 className="font-extrabold">
					Next Quickstart
				</TypographyH3>
				<TypographyP className="text-xs text-gray-500">
					© 2023 Sam Maji, Inc. All rights reserved.
				</TypographyP>
			</div>
		</footer>
	);
}
