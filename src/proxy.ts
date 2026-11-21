import { NextRequest, NextResponse } from "next/server";

/**
 * Keep the unfinished storefront and checkout unavailable in deployed builds.
 * Explicitly enable only after product, fulfilment and payment review.
 */
export function proxy(request: NextRequest) {
  const marketplaceEnabled = process.env.MARKETPLACE_ENABLED === "true";
  if (!marketplaceEnabled) {
    return NextResponse.redirect(new URL("/", request.url), 307);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/marketplace/:path*", "/api/checkout/:path*"],
};
