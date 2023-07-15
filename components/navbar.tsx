import { TypographyH3 } from "@/components/ui/typography";
import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignOutButton,
	SignUpButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import UserAvatar from "./user-avatar";

export default function Navbar() {
	return (
		<nav className="w-full h-[56px] flex items-center justify-between">
			<TypographyH3 className="mt-0 font-extrabold">
				{"Next Starter"}
			</TypographyH3>
			<div className="flex items-center justify-center gap-2">
				<UserAvatar />
				<SignedIn>
					<SignOutButton>
						<Button>Sign Out</Button>
					</SignOutButton>
				</SignedIn>

				<SignedOut>
					<SignInButton>
						<Button variant="link">Login</Button>
					</SignInButton>
					<SignUpButton>
						<Button>Join</Button>
					</SignUpButton>
				</SignedOut>
			</div>
		</nav>
	);
}
