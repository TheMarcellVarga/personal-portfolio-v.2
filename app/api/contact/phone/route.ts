import { NextResponse } from "next/server";
import { privateContact } from "../../../data/private-contact.server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  return NextResponse.json(
    { phone: privateContact.phone },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    },
  );
}
