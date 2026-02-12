import crypto from "node:crypto";

const ALG = "aes-256-gcm";

/**
 * Encrypts a UTF-8 string using AES-256-GCM.
 * Returns base64 payload of: iv(12) + tag(16) + ciphertext(n)
 */
export function encryptString(plaintext: string, keyB64: string): string {
  const key = Buffer.from(keyB64, "base64");
  if (key.length !== 32) {
    throw new Error("EARLY_ACCESS_ENCRYPTION_KEY must be 32 bytes base64 (44 chars).");
  }
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv(ALG, key, iv);
  const ciphertext = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, ciphertext]).toString("base64");
}

export function decryptString(payloadB64: string, keyB64: string): string {
  const key = Buffer.from(keyB64, "base64");
  const payload = Buffer.from(payloadB64, "base64");
  const iv = payload.subarray(0, 12);
  const tag = payload.subarray(12, 28);
  const ciphertext = payload.subarray(28);
  const decipher = crypto.createDecipheriv(ALG, key, iv);
  decipher.setAuthTag(tag);
  const plaintext = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  return plaintext.toString("utf8");
}

export function sha256Hex(input: string): string {
  return crypto.createHash("sha256").update(input, "utf8").digest("hex");
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}
