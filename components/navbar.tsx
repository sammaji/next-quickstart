import { TypographyH3 } from "@/components/ui/typography";
import {
	ClerkLoaded,
	ClerkLoading,
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import LoadingCircle from "./ui/loading-dots/loading-circle";

export default function Navbar({
	children,
}: {
	children: React.ReactNode | undefined;
}) {
	return (
		<nav className="w-full h-[56px] px-8 flex items-center justify-between border-b-[1px]">
			<TypographyH3 className="mt-0 font-extrabold text-md">
				{"Next Quickstart"}
			</TypographyH3>
			<div className="flex items-center justify-center gap-2">
				{children}
				<ModeToggle />
			</div>
		</nav>
	);
}

export function NavbarWithAuth() {
	return (
		<Navbar>
			<ClerkLoaded>
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
			</ClerkLoaded>
			<ClerkLoading>
				<LoadingCircle dimensions="h-6 w-8" />
			</ClerkLoading>
		</Navbar>
	);
}
