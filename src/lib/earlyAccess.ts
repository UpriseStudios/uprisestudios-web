import { encryptString, normalizeEmail, sha256Hex } from "./crypto";

export type EarlyAccessCampaign = "lumen";

export function prepareEarlyAccessRecord(emailRaw: string, campaign: EarlyAccessCampaign) {
  const email = normalizeEmail(emailRaw);
  const key = process.env.EARLY_ACCESS_ENCRYPTION_KEY;
  if (!key) throw new Error("Missing EARLY_ACCESS_ENCRYPTION_KEY env var.");
  const encrypted_email = encryptString(email, key);
  const email_hash = sha256Hex(email);
  return { campaign, encrypted_email, email_hash };
}
