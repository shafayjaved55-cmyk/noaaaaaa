import { sql } from "drizzle-orm";
import { getDb, isDatabaseConfigured } from "@/db";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isDatabaseConfigured()) {
    // The app's pages are fully static, so a missing database is a degraded
    // (not broken) state — only the form endpoints are affected.
    return Response.json({ ok: true, db: "not_configured" });
  }

  try {
    await getDb().execute(sql`select 1`);
    return Response.json({ ok: true, db: "connected" });
  } catch {
    return Response.json({ ok: false, db: "error" }, { status: 500 });
  }
}
