import { TypographyH3 } from "@/components/ui/typography";
import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";

export default function Navbar() {
	return (
		<nav className="w-full h-[56px] px-8 flex items-center justify-between border-b-[1px] overflow-y-auto">
			<TypographyH3 className="mt-0 font-extrabold text-md">
				{"Upbuddy"}
			</TypographyH3>
			<div className="flex items-center justify-center gap-2">
				<div className="max-md:hidden flex items-center justify-center gap-4">
					<a href="/pricing">Pricing</a>
					<p>/</p>
					<a href="/blogs/getting-started-with-upbuddy">Guide</a>
					<p>/</p>
					<a href="/support">Support</a>
				</div>

				<SignedIn>
					<UserButton />
				</SignedIn>

				<SignedOut>
					<SignInButton>
						<Button size="sm" className="px-6" variant="ghost">
							Login
						</Button>
					</SignInButton>
					<SignUpButton>
						<Button size="sm" className="px-6">
							Join
						</Button>
					</SignUpButton>
				</SignedOut>

				<div className="max-md:block hidden">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								size={"icon"}
								variant={"outline"}
								className="md:hidden"
							>
								<MenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
								<X className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
								{/* <span className="sr-only"></span> */}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem>
								<a href="/pricing">Pricing</a>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<a href="/blogs/getting-started-with-upbuddy">
									Guide
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<a href="/support">Support</a>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				{/* <ModeToggle /> */}
			</div>
		</nav>
	);
}
