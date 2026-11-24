import type { Metadata } from "next";
import V2Home from "./v2-home";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Uprise Studios — Familiar by design. Different by nature.",
    description: "Independent software, games and creative experiences. Thoughtful technology with humanity at its core.",
    url: "/",
    siteName: "Uprise Studios",
    locale: "en_GB",
    type: "website",
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.uprisestudios.co.uk/#organization",
  name: "Uprise Studios",
  legalName: "Uprise Studios Ltd",
  url: "https://www.uprisestudios.co.uk/",
  logo: "https://www.uprisestudios.co.uk/uprise-cat-silhouette.webp",
  email: "hello@uprisestudios.co.uk",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
      <V2Home />
    </>
  );
}
