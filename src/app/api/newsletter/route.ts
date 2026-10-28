import { NextResponse } from "next/server";
import { getDb, isDatabaseConfigured } from "@/db";
import { subscribers } from "@/db/schema";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    if (!isDatabaseConfigured()) {
      console.error("newsletter: DATABASE_URL is not configured — subscription not saved");
      return NextResponse.json({ error: "Subscription temporarily unavailable." }, { status: 503 });
    }

    await getDb()
      .insert(subscribers)
      .values({ email: email.trim().toLowerCase().slice(0, 200) })
      .onConflictDoNothing();

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("newsletter:insert failed", err);
    return NextResponse.json({ error: "Subscription failed. Try again." }, { status: 500 });
  }
}
