import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { prepareEarlyAccessRecord } from "@/lib/earlyAccess";

export const runtime = "nodejs";

function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const email = body?.email;
    const campaign = body?.campaign ?? "lumen";

    if (typeof email !== "string" || email.trim().length < 5) {
      return jsonError("Please enter a valid email address.");
    }
    if (campaign !== "lumen") {
      return jsonError("Unknown campaign.");
    }

    const supabase = getSupabaseAdmin();
    const record = prepareEarlyAccessRecord(email, "lumen");

    // Insert if not already present (unique on campaign+email_hash).
    const { error } = await supabase
      .from("early_access_registrations")
      .insert(record);

    // Unique violation -> treat as success (already registered).
    if (error && !String(error.message).toLowerCase().includes("duplicate")) {
      return jsonError(error.message ?? "Failed to save registration.", 500);
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return jsonError(err?.message ?? "Unexpected error.", 500);
  }
}
