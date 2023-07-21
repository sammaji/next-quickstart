import { TypographyH3 } from "@/components/ui/typography";
import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignOutButton,
	SignUpButton,
	useAuth,
	UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";

export default function Navbar() {
	return (
		<nav className="w-full h-[56px] px-8 flex items-center justify-between">
			<TypographyH3 className="mt-0 font-extrabold text-md">
				{"Next Starter"}
			</TypographyH3>
			<div className="flex items-center justify-center gap-2">
				<SignedIn>
					<UserButton />
				</SignedIn>

				<SignedOut>
					<SignInButton>
						<Button variant="link">Login</Button>
					</SignInButton>
					<SignUpButton>
						<Button>Join</Button>
					</SignUpButton>
				</SignedOut>

				<ModeToggle />
			</div>
		</nav>
	);
}
