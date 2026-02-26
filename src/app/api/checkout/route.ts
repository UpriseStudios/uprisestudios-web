import { NextResponse } from "next/server";
import Stripe from "stripe";
import { STRIPE_PRICE_IDS, type BuyMode } from "@/lib/stripePriceMap";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    const kind = body?.kind as "product" | "bundle" | undefined;
    const id = body?.id as string | undefined;
    const mode = (body?.mode as BuyMode | undefined) ?? "personal";

    if (!kind || !id) {
      return NextResponse.json({ error: "Missing kind or id" }, { status: 400 });
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

    // Lookup Stripe price id
    const entry = STRIPE_PRICE_IDS[id];
    if (!entry) {
      return NextResponse.json({ error: `No Stripe price configured for '${id}'` }, { status: 400 });
    }

    const priceId = mode === "enterprise" ? entry.enterprise : entry.personal;

    if (!priceId) {
      return NextResponse.json(
        { error: `No ${mode} price configured for '${id}'` },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      success_url: `${siteUrl}/marketplace/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/marketplace?canceled=1`,
      metadata: {
        kind,
        id,
        mode,
      },
      // Optional: collect tax details / invoice details for business buyers
      customer_creation: "if_required",
      billing_address_collection: "auto",
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message ?? "Checkout creation failed" },
      { status: 500 }
    );
  }
}
