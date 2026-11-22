import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumen | Consent-First AI Companion | Uprise Studios",
  description: "Explore Lumen, a privacy-conscious AI companion designed for reflection and clearer decisions. Register interest in early access.",
  alternates: { canonical: "/lumen" },
  openGraph: {
    title: "Lumen | Uprise Studios",
    description: "A consent-first AI companion designed for grounded reflection.",
    url: "/lumen",
    type: "website",
  },
};

export default function LumenLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
