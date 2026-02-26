"use client";

import { useState } from "react";
import Link from "next/link";

/* ── Inline SVG icons ───────────────────────────────── */
function IconShield({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    );
}
function IconZap({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
    );
}
function IconHeart({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
    );
}
function IconLock({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
    );
}
function IconStar({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}
function IconArrow({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    );
}
function IconPackage({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
    );
}
function IconMonitor({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
        </svg>
    );
}
function IconSmartphone({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
    );
}
function IconBook({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        </svg>
    );
}

/* ── Logo mark ──────────────────────────────────────── */
function LogoMark({ size = 32 }: { size?: number }) {
    return (
        <div
            className="flex-shrink-0 overflow-hidden rounded-xl bg-[#0b1220] flex items-center justify-center"
            style={{ width: size, height: size }}
        >
            <img
                src="/uprise-cat-silhouette.webp"
                alt=""
                style={{ width: "85%", height: "85%", objectFit: "contain" }}
            />
        </div>
    );
}

/* ── Products data ──────────────────────────────────── */
const PRODUCTS = [
    {
        id: "lumen",
        title: "Lumen",
        tagline: "Your protective AI companion",
        desc: "A consent-first AI designed to support emotional regulation, interrupt destructive spirals, and protect long-term wellbeing — without dark patterns.",
        tag: "Coming soon",
        tagStyle: "bg-amber-100 text-amber-900 border border-amber-200",
        href: "/lumen",
        icon: <IconHeart size={22} />,
        accent: "from-amber-50 to-orange-50",
        accentBorder: "border-amber-200/60",
        highlight: true,
        category: "Mobile · AI",
    },
    {
        id: "tally",
        title: "Tally",
        tagline: "Privacy-first finance companion",
        desc: "Runway forecasting, cashflow clarity, and local-first privacy. Built to scale internationally — no trackers, no ads, no dark patterns.",
        tag: "Beta",
        tagStyle: "bg-emerald-100 text-emerald-900 border border-emerald-200",
        href: "/tally",
        icon: <IconSmartphone size={22} />,
        accent: "from-emerald-50 to-teal-50",
        accentBorder: "border-emerald-200/60",
        highlight: true,
        category: "Mobile · Finance",
    },
    {
        id: "coda",
        title: "Coda Studio",
        tagline: "AI-native desktop IDE",
        desc: "Autonomous, multi-step coding agent with cross-project context awareness and professional UI. Built for serious workflows.",
        tag: "Flagship",
        tagStyle: "bg-[#0b1220] text-white border border-[#0b1220]",
        href: "/marketplace",
        icon: <IconMonitor size={22} />,
        accent: "from-slate-50 to-blue-50",
        accentBorder: "border-slate-200/60",
        highlight: false,
        category: "Desktop · IDE",
    },
    {
        id: "caretaker",
        title: "Caretaker",
        tagline: "Enterprise PC health guardian",
        desc: "Identify health risks, apply safe maintenance with transparent previews, and generate audit-ready diagnostics.",
        tag: "In progress",
        tagStyle: "bg-violet-100 text-violet-900 border border-violet-200",
        href: "/marketplace",
        icon: <IconShield size={22} />,
        accent: "from-violet-50 to-purple-50",
        accentBorder: "border-violet-200/60",
        highlight: false,
        category: "Desktop · Utilities",
    },
    {
        id: "sanctuary",
        title: "Uprise Sanctuary",
        tagline: "Calm desktop environment platform",
        desc: "A premium calm companion environment — local-first, Steam-ready, and built as the foundation for the Uprise desktop ecosystem.",
        tag: "Coming soon",
        tagStyle: "bg-sky-100 text-sky-900 border border-sky-200",
        href: "/marketplace",
        icon: <IconPackage size={22} />,
        accent: "from-sky-50 to-cyan-50",
        accentBorder: "border-sky-200/60",
        highlight: false,
        category: "Desktop · Platform",
    },
    {
        id: "studio",
        title: "Books, Games & Guides",
        tagline: "Creative projects and practical PDFs",
        desc: "Thoughtfully designed books, interactive guides, and games that teach, entertain, and help people build better habits.",
        tag: "Studio",
        tagStyle: "bg-rose-100 text-rose-900 border border-rose-200",
        href: "/marketplace",
        icon: <IconBook size={22} />,
        accent: "from-rose-50 to-pink-50",
        accentBorder: "border-rose-200/60",
        highlight: false,
        category: "Creative · Studio",
    },
];

const PRINCIPLES = [
    {
        icon: <IconShield size={20} />,
        title: "Sovereignty",
        desc: "People stay in control of what's stored, remembered, and shared. Consent is explicit, revocable, and respected by default.",
    },
    {
        icon: <IconHeart size={20} />,
        title: "Care",
        desc: "Trauma-informed tone. Consent-first design. No pressure mechanics, no coercive UX.",
    },
    {
        icon: <IconStar size={20} />,
        title: "Craft",
        desc: "Simple, durable, and calm — designed to be used for years, not churned through in weeks.",
    },
    {
        icon: <IconZap size={20} />,
        title: "Ethics over growth",
        desc: "No dark patterns. No data extraction. No engagement traps. Slower, healthier progress.",
    },
];

/* ── Page component ─────────────────────────────────── */
export default function Home() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <main className="min-h-screen bg-[var(--uprise-bg)] text-[var(--uprise-ink)] overflow-x-hidden">

            {/* ── Ambient background ────────────────────── */}
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-32 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-amber-200/20 blur-[100px]" />
                <div className="absolute top-40 right-[-200px] h-[500px] w-[500px] rounded-full bg-amber-100/15 blur-[80px]" />
                <div className="absolute bottom-[-200px] left-[-150px] h-[600px] w-[600px] rounded-full bg-[var(--uprise-panel)] blur-[100px]" />
                <div className="absolute inset-0 dot-grid opacity-40" />
            </div>

            {/* ══════════════════════════════════════════════
                NAVIGATION
            ══════════════════════════════════════════════ */}
            <header className="sticky top-0 z-50 border-b border-[var(--uprise-border-subtle)] bg-[var(--uprise-card)]/85 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <LogoMark size={34} />
                        <div>
                            <div className="text-sm font-semibold tracking-tight leading-none">Uprise Studios</div>
                            <div className="text-[10px] text-slate-500 tracking-wide leading-none mt-0.5">Calm technology</div>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-1 lg:flex">
                        {[
                            { label: "Mission", href: "#mission" },
                            { label: "Products", href: "#products" },
                            { label: "Tally", href: "/tally" },
                            { label: "Lumen", href: "/lumen" },
                            { label: "Marketplace", href: "/marketplace" },
                        ].map((item) => (
                            item.href.startsWith("#") ? (
                                <a key={item.label} href={item.href}
                                    className="rounded-xl px-3.5 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-[var(--uprise-panel)] transition-colors">
                                    {item.label}
                                </a>
                            ) : (
                                <Link key={item.label} href={item.href}
                                    className="rounded-xl px-3.5 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-[var(--uprise-panel)] transition-colors">
                                    {item.label}
                                </Link>
                            )
                        ))}
                    </nav>

                    {/* CTA group */}
                    <div className="hidden items-center gap-2 lg:flex">
                        <a href="#contact"
                            className="rounded-xl px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
                            Contact
                        </a>
                        <Link href="/lumen"
                            className="inline-flex items-center gap-2 rounded-xl bg-[var(--uprise-navy)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--uprise-navy-hover)] transition-colors shadow-sm">
                            Register interest
                            <IconArrow size={14} />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button type="button" onClick={() => setMobileOpen(v => !v)}
                        className="lg:hidden inline-flex items-center justify-center rounded-xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] px-3 py-2 text-sm text-slate-700 hover:bg-[var(--uprise-panel)] transition-colors"
                        aria-expanded={mobileOpen} aria-label="Toggle menu">
                        {mobileOpen ? "✕" : "Menu"}
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="lg:hidden border-t border-[var(--uprise-border-subtle)] bg-[var(--uprise-card)]/95 backdrop-blur-xl">
                        <div className="mx-auto max-w-7xl px-6 py-5 grid gap-1">
                            {[
                                { label: "Mission", href: "#mission" },
                                { label: "Products", href: "#products" },
                                { label: "Tally", href: "/tally" },
                                { label: "Lumen", href: "/lumen" },
                                { label: "Marketplace", href: "/marketplace" },
                                { label: "Contact", href: "#contact" },
                            ].map((item) => (
                                item.href.startsWith("#") ? (
                                    <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
                                        className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-[var(--uprise-panel)] transition-colors">
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
                                        className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-[var(--uprise-panel)] transition-colors">
                                        {item.label}
                                    </Link>
                                )
                            ))}
                            <div className="mt-3 pt-3 border-t border-[var(--uprise-border-subtle)] flex gap-2">
                                <Link href="/lumen" onClick={() => setMobileOpen(false)}
                                    className="flex-1 inline-flex items-center justify-center rounded-xl bg-[var(--uprise-navy)] px-4 py-3 text-sm font-medium text-white">
                                    Register interest
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* ══════════════════════════════════════════════
                HERO
            ══════════════════════════════════════════════ */}
            <section className="mx-auto max-w-7xl px-6 pt-20 pb-20">
                <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

                    {/* Left: Copy */}
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-800 tracking-wide mb-7">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                            Independently built · Privacy-first · No dark patterns
                        </div>

                        <h1 className="text-[3.5rem] leading-[1.08] font-semibold tracking-[-0.03em] text-[var(--uprise-ink)] sm:text-[4.5rem]">
                            Building calm,{" "}
                            <span className="gradient-text-amber">human-sovereign</span>{" "}
                            technology.
                        </h1>

                        <p className="mt-7 text-lg leading-relaxed text-slate-600 max-w-lg">
                            Uprise Studios creates thoughtful digital companions — apps, desktop tools, and creative
                            works — designed to reduce cognitive load, protect wellbeing, and respect the human
                            holding the device.
                        </p>

                        {/* Stats */}
                        <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                            {[
                                { num: "12+", label: "Products in development" },
                                { num: "100%", label: "Privacy-first design" },
                                { num: "0", label: "Dark patterns, ever" },
                            ].map((s) => (
                                <div key={s.label} className="rounded-2xl border border-[var(--uprise-border-subtle)] bg-[var(--uprise-card)] p-4 text-center shadow-sm">
                                    <div className="text-2xl font-bold tracking-tight text-[var(--uprise-ink)]">{s.num}</div>
                                    <div className="mt-1 text-[10px] text-slate-500 leading-tight">{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA buttons */}
                        <div className="mt-10 flex flex-wrap items-center gap-3">
                            <Link href="/lumen"
                                className="inline-flex items-center gap-2 rounded-xl bg-[var(--uprise-navy)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--uprise-navy-hover)] shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                                Explore Lumen
                                <IconArrow size={15} />
                            </Link>
                            <Link href="/tally"
                                className="inline-flex items-center gap-2 rounded-xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] px-6 py-3.5 text-sm font-semibold text-slate-900 hover:bg-[var(--uprise-panel)] shadow-sm transition-all hover:-translate-y-0.5">
                                View Tally
                            </Link>
                            <Link href="/marketplace"
                                className="inline-flex items-center gap-2 rounded-xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] px-6 py-3.5 text-sm font-semibold text-slate-900 hover:bg-[var(--uprise-panel)] shadow-sm transition-all hover:-translate-y-0.5">
                                Browse marketplace
                            </Link>
                        </div>
                    </div>

                    {/* Right: Feature preview card */}
                    <div className="animate-fade-in-up delay-200">
                        <div className="relative rounded-[32px] border border-[var(--uprise-border-subtle)] bg-[var(--uprise-card)]/90 p-6 shadow-xl backdrop-blur-md overflow-hidden">
                            {/* Ambient glow inside card */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-transparent to-orange-50/40 pointer-events-none" />

                            <div className="relative">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="flex gap-1.5">
                                        <div className="h-3 w-3 rounded-full bg-red-400/70" />
                                        <div className="h-3 w-3 rounded-full bg-amber-400/70" />
                                        <div className="h-3 w-3 rounded-full bg-green-400/70" />
                                    </div>
                                    <div className="ml-2 flex-1 h-6 rounded-lg bg-[var(--uprise-panel)] flex items-center px-3">
                                        <span className="text-[10px] text-slate-500 font-mono">uprisestudios.co.uk/lumen</span>
                                    </div>
                                </div>

                                <div className="text-[10px] font-bold tracking-[0.15em] text-amber-700 mb-2">THE HEARTBEAT PROJECT</div>
                                <div className="text-2xl font-semibold tracking-tight mb-3">Lumen <span className="text-sm font-normal text-slate-500 ml-1">— coming soon</span></div>
                                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                                    A protective AI companion for emotional regulation, decision clarity, and long-term wellbeing — without dark patterns or data extraction.
                                </p>

                                <div className="grid gap-2">
                                    {[
                                        { icon: <IconLock size={14} />, label: "Local-first", note: "Your device is the source of truth" },
                                        { icon: <IconShield size={14} />, label: "Consent-first", note: "Memory only with explicit, revocable consent" },
                                        { icon: <IconHeart size={14} />, label: "No dark patterns", note: "No streaks, no guilt, no engagement loops" },
                                    ].map((f) => (
                                        <div key={f.label} className="flex items-start gap-3 rounded-2xl border border-[var(--uprise-border-subtle)] bg-[var(--uprise-card)] px-4 py-3">
                                            <div className="mt-0.5 text-amber-600">{f.icon}</div>
                                            <div>
                                                <div className="text-xs font-semibold text-slate-900">{f.label}</div>
                                                <div className="text-[11px] text-slate-500 mt-0.5">{f.note}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/lumen"
                                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--uprise-navy)] px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition-opacity">
                                    Register early access <IconArrow size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Floating trust badge */}
                        <div className="mt-4 flex justify-end">
                            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-[11px] font-medium text-emerald-800">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                Tally beta now available
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                TRUST STRIP
            ══════════════════════════════════════════════ */}
            <div className="border-y border-[var(--uprise-border-subtle)] bg-[var(--uprise-panel)]/60">
                <div className="mx-auto max-w-7xl px-6 py-4">
                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[11px] font-semibold tracking-widest text-slate-500 uppercase">
                        {[
                            "Local-first by default",
                            "No telemetry",
                            "Consent-driven memory",
                            "No ads · No trackers",
                            "Independently built",
                            "Trauma-informed design",
                        ].map((item) => (
                            <span key={item} className="flex items-center gap-2">
                                <span className="h-1 w-1 rounded-full bg-amber-400" />
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════════════
                PRODUCTS SECTION
            ══════════════════════════════════════════════ */}
            <section id="products" className="mx-auto max-w-7xl px-6 py-24">
                <div className="mb-14">
                    <div className="text-[10px] font-bold tracking-[0.2em] text-amber-700 mb-3">OUR PRODUCTS</div>
                    <h2 className="text-4xl font-semibold tracking-tight max-w-2xl">
                        A full ecosystem of calm, ethical software.
                    </h2>
                    <p className="mt-4 text-slate-600 max-w-2xl leading-relaxed">
                        From mobile companions to desktop platforms — each product exists to reduce friction, increase clarity, and give people something genuinely useful.
                    </p>
                </div>

                {/* Products grid */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {PRODUCTS.map((p, i) => {
                        const card = (
                            <div className={`group relative h-full rounded-[28px] border bg-gradient-to-br ${p.accent} ${p.accentBorder} p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden`}>
                                {/* Hover shimmer */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/30 group-hover:via-white/10 group-hover:to-white/0 transition-all duration-300 pointer-events-none rounded-[28px]" />

                                <div className="relative">
                                    <div className="flex items-start justify-between gap-3 mb-5">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 border border-white/60 shadow-sm text-[var(--uprise-navy)]">
                                            {p.icon}
                                        </div>
                                        <span className={`rounded-full px-3 py-1 text-[10px] font-semibold ${p.tagStyle}`}>
                                            {p.tag}
                                        </span>
                                    </div>

                                    <div className="text-[10px] font-semibold tracking-widest text-slate-500 mb-1">{p.category}</div>
                                    <h3 className="text-xl font-semibold tracking-tight text-[var(--uprise-ink)]">{p.title}</h3>
                                    <div className="text-sm font-medium text-slate-600 mt-0.5">{p.tagline}</div>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.desc}</p>

                                    {p.href && (
                                        <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[var(--uprise-navy)] group-hover:gap-2.5 transition-all">
                                            Learn more <IconArrow size={12} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        );

                        return p.href ? (
                            <Link key={p.id} href={p.href} className="block h-full">
                                {card}
                            </Link>
                        ) : (
                            <div key={p.id} className="h-full">
                                {card}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 flex justify-center">
                    <Link href="/marketplace"
                        className="inline-flex items-center gap-2 rounded-xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] px-6 py-3.5 text-sm font-semibold text-slate-900 hover:bg-[var(--uprise-panel)] shadow-sm transition-all hover:-translate-y-0.5">
                        Browse full marketplace
                        <IconArrow size={14} />
                    </Link>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                DARK MISSION SECTION
            ══════════════════════════════════════════════ */}
            <section id="mission" className="relative overflow-hidden">
                <div className="bg-[#0d1117] py-24">
                    {/* Ambient glow */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-amber-500/8 blur-[100px]" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-6">
                        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] items-center">

                            <div>
                                <div className="text-[10px] font-bold tracking-[0.2em] text-amber-500/80 mb-4">OUR MISSION</div>
                                <h2 className="text-4xl font-semibold tracking-tight text-white leading-tight">
                                    We build tools that give{" "}
                                    <span className="text-amber-400">attention back</span>{" "}
                                    — not capture it.
                                </h2>
                                <p className="mt-6 text-slate-400 leading-relaxed text-lg">
                                    Most technology is designed to extract value from its users. Uprise exists as a deliberate alternative: small, well-designed products that help people feel lighter, clearer, and more in control.
                                </p>
                                <p className="mt-4 text-slate-400 leading-relaxed">
                                    Without engagement traps, data extraction, or hidden incentives. Without shame, pressure, or coercive design. Just tools that work — and get out of the way.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Link href="/lumen"
                                        className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-400 transition-colors shadow-lg">
                                        See our vision <IconArrow size={14} />
                                    </Link>
                                    <a href="#contact"
                                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 hover:border-white/30 hover:text-white transition-colors">
                                        Get in touch
                                    </a>
                                </div>
                            </div>

                            {/* Principles grid */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                {PRINCIPLES.map((p) => (
                                    <div key={p.title}
                                        className="rounded-2xl border border-white/8 bg-white/4 p-5 hover:bg-white/6 transition-colors backdrop-blur">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 mb-4">
                                            {p.icon}
                                        </div>
                                        <div className="font-semibold text-white mb-2">{p.title}</div>
                                        <div className="text-sm text-slate-400 leading-relaxed">{p.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Manifesto quote */}
                        <div className="mt-20 border-t border-white/8 pt-12 text-center">
                            <blockquote className="text-xl font-light italic text-white/60 max-w-3xl mx-auto leading-relaxed">
                                "We are not building technology to capture attention. We are building technology to give it back."
                            </blockquote>
                            <div className="mt-4 text-xs text-white/30 tracking-widest">— UPRISE STUDIOS MISSION STATEMENT</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                LUMEN SPOTLIGHT
            ══════════════════════════════════════════════ */}
            <section className="mx-auto max-w-7xl px-6 py-24">
                <div className="rounded-[40px] border border-amber-200/60 bg-gradient-to-br from-amber-50 via-orange-50/50 to-[var(--uprise-bg)] p-10 shadow-xl overflow-hidden relative">
                    <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-amber-300/20 blur-[80px]" />

                    <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 border border-amber-200 px-4 py-1.5 text-xs font-bold text-amber-800 tracking-widest mb-6">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                                COMING SOON — THE HEARTBEAT
                            </div>

                            <h2 className="text-4xl font-semibold tracking-tight text-[var(--uprise-ink)] mb-4">
                                Lumen — your protective AI companion.
                            </h2>

                            <p className="text-slate-600 leading-relaxed mb-6">
                                A consent-first AI designed to support emotional regulation, interrupt destructive spirals, and provide grounded perspective during moments of stress — without dark patterns, engagement traps, or data extraction.
                            </p>

                            <ul className="space-y-3 mb-8">
                                {[
                                    "Protective memory: saves only what you allow, revokes instantly",
                                    "Harm reduction: gentle interruptions for rumination & impulse spirals",
                                    "Neurodivergent-aware: built for minds that loop, fixate, or overload",
                                    "Zero dark patterns: no notifications, no gamification, no guilt",
                                    "Civilisational hedge: local-first, sovereign data by default",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-amber-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-3">
                                <Link href="/lumen"
                                    className="inline-flex items-center gap-2 rounded-xl bg-[var(--uprise-navy)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--uprise-navy-hover)] shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                                    Go to Lumen page <IconArrow size={14} />
                                </Link>
                                <a href="#contact"
                                    className="inline-flex items-center gap-2 rounded-xl border border-[var(--uprise-border)] bg-white/60 px-6 py-3.5 text-sm font-semibold text-slate-900 hover:bg-white/80 transition-all hover:-translate-y-0.5">
                                    Contact us
                                </a>
                            </div>
                        </div>

                        {/* Spec cards */}
                        <div className="grid gap-3">
                            {[
                                { label: "Architecture", value: "Local-first · On-device AI inference", icon: <IconMonitor size={16} /> },
                                { label: "Privacy model", value: "Zero server memory by default", icon: <IconLock size={16} /> },
                                { label: "Design approach", value: "Trauma-informed · Neurodivergent-aware", icon: <IconHeart size={16} /> },
                                { label: "Business model", value: "No ads · No data sales · Subscription", icon: <IconShield size={16} /> },
                                { label: "Future scope", value: "BCI / Neuralink-ready substrate", icon: <IconZap size={16} /> },
                            ].map((spec) => (
                                <div key={spec.label} className="flex items-center gap-4 rounded-2xl border border-amber-200/50 bg-white/60 px-5 py-4">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                                        {spec.icon}
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold tracking-widest text-slate-500">{spec.label.toUpperCase()}</div>
                                        <div className="text-sm font-medium text-slate-800 mt-0.5">{spec.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                CONTACT / FOOTER
            ══════════════════════════════════════════════ */}
            <footer id="contact" className="border-t border-[var(--uprise-border-subtle)] bg-[var(--uprise-panel)]/50">
                <div className="mx-auto max-w-7xl px-6 py-16">
                    <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <LogoMark size={36} />
                                <div>
                                    <div className="font-semibold tracking-tight">Uprise Studios</div>
                                    <div className="text-[10px] text-slate-500">Calm technology</div>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                                A small, independent studio building calm, ethical digital companions and tools for real human flourishing.
                            </p>
                            <div className="mt-5">
                                <a href="mailto:hello@uprisestudios.co.uk"
                                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
                                    <span className="text-amber-600">✉</span>
                                    hello@uprisestudios.co.uk
                                </a>
                            </div>
                        </div>

                        {/* Products */}
                        <div>
                            <div className="text-[10px] font-bold tracking-widest text-slate-500 mb-4">PRODUCTS</div>
                            <div className="grid gap-2">
                                {[
                                    { label: "Lumen", href: "/lumen" },
                                    { label: "Tally", href: "/tally" },
                                    { label: "Marketplace", href: "/marketplace" },
                                    { label: "Coda Studio", href: "/marketplace" },
                                ].map((l) => (
                                    <Link key={l.label} href={l.href}
                                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                                        {l.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Company */}
                        <div>
                            <div className="text-[10px] font-bold tracking-widest text-slate-500 mb-4">COMPANY</div>
                            <div className="grid gap-2">
                                {[
                                    { label: "Mission", href: "#mission" },
                                    { label: "Privacy notices", href: "/privacy" },
                                    { label: "Contact", href: "#contact" },
                                ].map((l) => (
                                    l.href.startsWith("#") ? (
                                        <a key={l.label} href={l.href}
                                            className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                                            {l.label}
                                        </a>
                                    ) : (
                                        <Link key={l.label} href={l.href}
                                            className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                                            {l.label}
                                        </Link>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* Values */}
                        <div>
                            <div className="text-[10px] font-bold tracking-widest text-slate-500 mb-4">OUR VALUES</div>
                            <div className="grid gap-2">
                                {["Sovereignty", "Care first", "Craft over scale", "Ethics always"].map((v) => (
                                    <div key={v} className="flex items-center gap-2 text-sm text-slate-600">
                                        <span className="h-1 w-1 rounded-full bg-amber-400" />
                                        {v}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-14 flex flex-col gap-3 border-t border-[var(--uprise-border-subtle)] pt-8 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-slate-500">
                            © {new Date().getFullYear()} Uprise Studios. Built slowly. Built carefully.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-700 transition-colors">Privacy notices</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
