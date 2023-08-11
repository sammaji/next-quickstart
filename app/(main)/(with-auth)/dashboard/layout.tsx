import Navbar, { NavbarWithAuth } from "@/components/navbar";

export default function LayoutMain({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<NavbarWithAuth />
			{children}
		</div>
	);
}
