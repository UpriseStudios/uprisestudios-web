export type BuyMode = "personal" | "enterprise";

type PriceEntry = {
  personal?: string; // Stripe Price ID
  enterprise?: string; // Stripe Price ID
};

export const STRIPE_PRICE_IDS: Record<string, PriceEntry> = {
  // PRODUCTS (example)
  "coda-studio": {
    // If Coda is free download, you can omit personal and handle differently
    personal: "price_1T4uNJFnu2Tq1agAdsHR83T6",
    enterprise: "price_1T4uNJFnu2Tq1agAdsHR83T6",
  },
  "caretaker": {
    personal: "price_abc",
    enterprise: "price_def",
  },
  "sanctuary": {
    personal: "price_xyz",
    enterprise: "price_qwe",
  },

  // BUNDLES (example)
  "bundle-utilities": {
    personal: "price_util_bundle",
  },
  "bundle-professional": {
    personal: "price_pro_bundle",
  },
  "bundle-platform": {
    personal: "price_platform_bundle",
  },
};
