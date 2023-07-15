import React from "react";

export default function LayoutAuth({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen flex items-center justify-center py-8 px-2">
			{children}
		</div>
	);
}
