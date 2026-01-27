import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Uprise Studios — Calm, Human-Sovereign Technology",
    description: "Building Lumen: A calm AI companion for neurodivergent harm reduction. Protective, consent-first tech.",
    openGraph: {
        title: "Uprise Studios",
        description: "Calm AI for real human flourishing.",
        images: "/og-image.png", // add a 1200x630 image later
        url: "https://uprisestudios.co.uk",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} font-sans`}>
            <body className="antialiased bg-[var(--uprise-bg)] text-slate-900">
                {children}
            </body>
        </html>
    );
}