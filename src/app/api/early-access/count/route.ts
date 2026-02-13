import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // ensure no caching issues

function pickEnv(...keys: string[]) {
    for (const k of keys) {
        const v = process.env[k];
        if (v && v.trim().length > 0) return v.trim();
    }
    return "";
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const campaign = searchParams.get("campaign") ?? "lumen";

    const supabaseUrl = pickEnv("SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_URL");
    const supabaseAnonKey = pickEnv("SUPABASE_ANON_KEY", "NEXT_PUBLIC_SUPABASE_ANON_KEY");

    if (!supabaseUrl) {
        return NextResponse.json({ ok: false, error: "Missing SUPABASE_URL / NEXT_PUBLIC_SUPABASE_URL" }, { status: 500 });
    }
    if (!supabaseAnonKey) {
        return NextResponse.json({ ok: false, error: "Missing SUPABASE_ANON_KEY / NEXT_PUBLIC_SUPABASE_ANON_KEY" }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
        auth: { persistSession: false },
    });

    const { data, error } = await supabase.rpc("get_early_access_count", {
        p_campaign: campaign,
    });

    if (error) {
        // Common causes: function not in public schema, permissions, or RLS interacting with the function
        return NextResponse.json(
            {
                ok: false,
                error: error.message,
                hint:
                    "Check function exists in public schema + GRANT EXECUTE to anon/authenticated + search_path public + SECURITY DEFINER set.",
            },
            { status: 500 }
        );
    }

    // Supabase may return bigint as string depending on driver
    const n = typeof data === "string" ? Number(data) : Number(data ?? 0);

    return NextResponse.json(
        { ok: true, count: Number.isFinite(n) ? n : 0 },
        {
            headers: {
                "Cache-Control": "no-store, max-age=0",
            },
        }
    );
}
