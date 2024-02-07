import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET() {
  return NextResponse.json(
    { status: 'Heart is beating....' },
    { status: 200 }
  );
}
