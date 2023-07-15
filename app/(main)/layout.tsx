import Navbar from "@/components/navbar";

export default function LayoutMain({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
}
