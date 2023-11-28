import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({ cl: "bg-green-700" }, {status: 200})
}