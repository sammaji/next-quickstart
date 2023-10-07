import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { FaArrowLeft } from "react-icons/fa";
import React from "react";

export default function PageWelcome() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-center gap-8">
			<TypographyH1 className="w-2/3">{"Welcome"}</TypographyH1>
			<TypographyP className="text-xl w-1/3 max-md:w-2/3">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
				numquam, natus ipsum odit cupiditate similique non delectus eius
				facilis modi magnam, assumenda deleniti.
			</TypographyP>
			<a href="/dashboard">
				<Button size="lg" variant={"outline"}>
					{<FaArrowLeft size={12} />}&ensp;Continue
				</Button>
			</a>
		</div>
	);
}
