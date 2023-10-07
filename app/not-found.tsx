import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-8 items-center justify-center">
      <TypographyH1>Page Not Found</TypographyH1>
      <Link href="/"><Button size="lg" variant="outline">Return to home</Button></Link>
    </div>
  );
}