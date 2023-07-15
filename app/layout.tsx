import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const title = "Created By Samyabrata Maji";
const description = "Next 13 Starter Template";
const keywords = ["samyabrata maji"];

export const metadata: Metadata = {
	title,
	description,
	keywords,
	icons: ["https://vercel.pub/favicon.ico"],
	openGraph: {
		title,
		description,
		images: [],
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: [],
		creator: "@samyabrata-maji",
	},
	metadataBase: new URL("https://vercel.pub"),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ClerkProvider>{children}</ClerkProvider>
			</body>
		</html>
	);
}
