import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

/**
 * Purges registrations that have been notified (or marked for deletion).
 * Secure this route with a bearer token.
 */
export async function POST(req: Request) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  const expected = process.env.EARLY_ACCESS_CRON_SECRET;
  if (!expected || token !== expected) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseAdmin();
  // Delete rows where notified_at is set OR delete_after_at has passed.
  const { error } = await supabase
    .from("early_access_registrations")
    .delete()
    .not("notified_at", "is", null);

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
