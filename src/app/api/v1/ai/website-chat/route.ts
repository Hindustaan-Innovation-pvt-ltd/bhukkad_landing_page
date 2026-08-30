import { NextResponse } from "next/server";

// This route is no longer used.
// The frontend calls https://apibhukkad.allindiahub.com/api/ai/website-chat directly.
export async function POST() {
  return NextResponse.json({ message: "Deprecated. Use the backend API directly." }, { status: 410 });
}
