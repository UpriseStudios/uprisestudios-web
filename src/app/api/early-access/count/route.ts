import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const campaign = searchParams.get("campaign") ?? "lumen";

    const supabaseUrl = process.env.SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    // OR use SUPABASE_ANON_KEY if you store it that way

    if (!supabaseUrl) {
        return NextResponse.json({ ok: false, error: "Missing SUPABASE_URL" }, { status: 500 });
    }
    if (!supabaseAnonKey) {
        return NextResponse.json({ ok: false, error: "Missing NEXT_PUBLIC_SUPABASE_ANON_KEY" }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { data, error } = await supabase.rpc("get_early_access_count", {
        p_campaign: campaign,
    });

    if (error) {
        return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, count: data ?? 0 });
}