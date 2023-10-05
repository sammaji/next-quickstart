"use client";

import * as React from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	const isDarkTheme = theme === "dark";

	const toggleTheme = () => {
	  setTheme(isDarkTheme ? "light" : "dark");
	};

	return (

				<Button variant="outline" size="icon" onClick={toggleTheme}>
					<BiSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<BiMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
	);
}
