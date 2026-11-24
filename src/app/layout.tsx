import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.uprisestudios.co.uk"),
    title: "Uprise Studios — Familiar by design. Different by nature.",
    description: "Independent software, games and creative experiences. Thoughtful technology with humanity at its core.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-GB" className={`${inter.variable} font-sans`}>
            <body className="antialiased bg-[var(--uprise-bg)] text-slate-900">
                {children}
            </body>
        </html>
    );
}