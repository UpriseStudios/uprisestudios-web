"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
    BUNDLES,
    PRODUCTS,
    TIER_ORDER,
    gbp,
    type Product,
    type Bundle,
} from "@/lib/marketplaceCatalog";

type BuyMode = "personal" | "enterprise";

function cx(...xs: Array<string | false | null | undefined>) {
    return xs.filter(Boolean).join(" ");
}

/* ── Inline SVG icons ─────────────────────────────────── */
function IconArrow({ size = 14 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
    );
}
function IconSearch({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
    );
}
function IconShield({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    );
}
function IconPackage({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
    );
}
function IconTag({ size = 14 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
    );
}
function IconCheck({ size = 14 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}
function IconBuilding({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="9" height="14" /><path d="M16 1H9a1 1 0 00-1 1v5" /><path d="M22 23V10a1 1 0 00-1-1h-5v14" /><line x1="5" y1="11" x2="5" y2="11" /><line x1="5" y1="15" x2="5" y2="15" /><line x1="5" y1="19" x2="5" y2="19" />
        </svg>
    );
}
function IconLock({ size = 14 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
    );
}

/* ── Logo mark ──────────────────────────────────────── */
function LogoMark({ size = 28 }: { size?: number }) {
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

/* ── Pill badge ─────────────────────────────────────── */
function Pill({
    children,
    tone = "neutral",
}: {
    children: React.ReactNode;
    tone?: "neutral" | "brand" | "success" | "warning" | "amber";
}) {
    const cls =
        tone === "brand" ? "bg-[var(--uprise-navy)] text-white" :
            tone === "success" ? "bg-emerald-600 text-white" :
                tone === "warning" ? "bg-amber-500 text-white" :
                    tone === "amber" ? "bg-amber-100 text-amber-900 border border-amber-200" :
                        "bg-black/6 text-slate-700 border border-black/8";

    return (
        <span className={cx("inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold", cls)}>
            {children}
        </span>
    );
}

/* ── Product art gradient panel ──────────────────────── */
function ProductArt({
    label,
    accent = "amber",
    large = false,
}: {
    label: string;
    accent?: "amber" | "navy" | "emerald" | "violet" | "sky" | "rose";
    large?: boolean;
}) {
    const configs: Record<string, { from: string; via: string; to: string; dot: string; ring: string }> = {
        navy: { from: "from-slate-900", via: "via-slate-800", to: "to-slate-700", dot: "bg-blue-400/80", ring: "ring-blue-500/30" },
        emerald: { from: "from-emerald-800", via: "via-emerald-600", to: "to-emerald-400/60", dot: "bg-emerald-300", ring: "ring-emerald-400/30" },
        violet: { from: "from-violet-800", via: "via-violet-600", to: "to-violet-300/50", dot: "bg-violet-300", ring: "ring-violet-400/30" },
        sky: { from: "from-sky-800", via: "via-sky-600", to: "to-sky-300/50", dot: "bg-sky-300", ring: "ring-sky-400/30" },
        rose: { from: "from-rose-800", via: "via-rose-600", to: "to-rose-300/50", dot: "bg-rose-300", ring: "ring-rose-400/30" },
        amber: { from: "from-amber-700", via: "via-amber-500", to: "to-amber-200/50", dot: "bg-amber-200", ring: "ring-amber-400/30" },
    };
    const cfg = configs[accent] || configs.amber;
    const initials = label.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");

    return (
        <div className={cx("relative overflow-hidden rounded-2xl", large ? "h-52" : "h-44")}>
            <div className={cx("absolute inset-0 bg-gradient-to-br", cfg.from, cfg.via, cfg.to)} />
            {/* Noise / highlight overlay */}
            <div className="absolute inset-0"
                style={{ backgroundImage: "radial-gradient(circle at 25% 15%, rgba(255,255,255,0.2), transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.08), transparent 45%)" }} />
            {/* Ring */}
            <div className={cx("absolute inset-0 ring-1 ring-inset", cfg.ring)} />
            {/* App icon */}
            <div className="absolute left-4 top-4">
                <div className={cx("grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur-sm shadow-lg")}>
                    <span className="text-base font-bold text-white/95">{initials}</span>
                </div>
            </div>
            {/* Subtle decorative dots */}
            <div className={cx("absolute right-5 top-5 h-2 w-2 rounded-full opacity-60", cfg.dot)} />
            <div className={cx("absolute right-9 top-8 h-1.5 w-1.5 rounded-full opacity-40", cfg.dot)} />
            {/* Label */}
            <div className="absolute bottom-4 left-4 right-4">
                <div className="text-[9px] font-bold tracking-[0.2em] text-white/60 mb-1">UPRISE STUDIOS</div>
                <div className="text-base font-semibold tracking-tight text-white line-clamp-1">{label}</div>
            </div>
        </div>
    );
}

/* ── External/internal link ─────────────────────────── */
function SmartLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
    return href.startsWith("http") ? (
        <a href={href} target="_blank" rel="noreferrer" className={className}>{children}</a>
    ) : (
        <Link href={href} className={className}>{children}</Link>
    );
}

/* ── Checkout ───────────────────────────────────────── */
async function startCheckout(args: { kind: "product" | "bundle"; id: string; mode: BuyMode }) {
    const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok || !json?.url) throw new Error(json?.error || "Checkout could not be started.");
    window.location.href = json.url;
}

/* ── Accent helper ──────────────────────────────────── */
function getAccent(p: Product): "amber" | "navy" | "emerald" | "violet" | "sky" | "rose" {
    if (p.id.includes("coda")) return "navy";
    if (p.id.includes("caretaker")) return "emerald";
    if (p.id.includes("sanctuary") || p.id.includes("worlds") || p.id.includes("focus") || p.id.includes("workspace")) return "sky";
    if (p.id.includes("aura")) return "violet";
    if (p.id.includes("studio") || p.id.includes("screensaver")) return "rose";
    if (p.tier.includes("Flagship")) return "navy";
    return "amber";
}

/* ── Product tile (catalog) ──────────────────────────── */
function ProductTile({ p, mode, featured = false }: { p: Product; mode: BuyMode; featured?: boolean }) {
    const price = mode === "enterprise" ? (p.price.enterprise ?? p.price.personal) : p.price.personal;
    const hasEnterprise = Boolean(p.price.enterprise);
    const buyDisabled = mode === "enterprise" && !hasEnterprise;
    const accent = getAccent(p);

    return (
        <div className={cx(
            "group relative flex flex-col rounded-[24px] bg-[var(--uprise-card)] ring-1 ring-black/8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-black/12 overflow-hidden",
            featured && "lg:col-span-2"
        )}>
            {/* Hover gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-50/0 group-hover:to-amber-50/40 transition-all duration-500 pointer-events-none rounded-[24px]" />

            <div className="relative p-5 flex-1 flex flex-col">
                <ProductArt label={p.name} accent={accent} large={featured} />

                <div className="mt-4 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-slate-900 tracking-tight truncate">{p.name}</h3>
                            <p className="text-xs text-slate-500 mt-0.5">{p.tagline}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                            {p.badge && <Pill tone="brand">{p.badge}</Pill>}
                            {p.status && <Pill>{p.status}</Pill>}
                        </div>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 flex-1">
                        {p.description}
                    </p>

                    {p.highlights?.length ? (
                        <ul className="mt-3 space-y-1.5">
                            {p.highlights.slice(0, featured ? 5 : 3).map((h) => (
                                <li key={h} className="flex items-start gap-2 text-xs text-slate-600">
                                    <span className="mt-0.5 flex-shrink-0 text-emerald-600"><IconCheck size={12} /></span>
                                    <span>{h}</span>
                                </li>
                            ))}
                        </ul>
                    ) : null}

                    {/* Price + actions */}
                    <div className="mt-5 pt-4 border-t border-black/6 flex items-center justify-between gap-3 flex-wrap">
                        <div>
                            {price === 0 ? (
                                <div className="font-bold text-slate-900 text-lg">Free</div>
                            ) : (
                                <div>
                                    <span className="text-xs text-slate-400">From </span>
                                    <span className="font-bold text-slate-900 text-lg">{gbp(price)}</span>
                                </div>
                            )}
                            {mode === "enterprise" && !hasEnterprise && (
                                <div className="text-[10px] text-slate-400 mt-0.5">Enterprise pricing not set</div>
                            )}
                        </div>

                        <div className="flex gap-2 flex-wrap">
                            <button
                                onClick={() => startCheckout({ kind: "product", id: p.id, mode })}
                                disabled={buyDisabled}
                                className={cx(
                                    "inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold transition-all",
                                    buyDisabled
                                        ? "cursor-not-allowed bg-black/5 text-slate-400"
                                        : price === 0
                                            ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
                                            : "bg-[var(--uprise-navy)] text-white hover:bg-[var(--uprise-navy-hover)] shadow-sm"
                                )}
                            >
                                {price === 0 ? "Get free" : "Buy direct"}
                            </button>

                            {p.href && (
                                <Link href={p.href}
                                    className="inline-flex items-center gap-1.5 rounded-xl bg-black/5 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-black/10 transition-colors">
                                    Details
                                </Link>
                            )}

                            {p.links?.slice(0, 1).map((l) => (
                                <SmartLink key={l.label} href={l.href}
                                    className="inline-flex items-center gap-1.5 rounded-xl bg-black/5 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-black/10 transition-colors">
                                    {l.label}
                                </SmartLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ── Bundle card ────────────────────────────────────── */
function BundleCard({ b }: { b: Bundle }) {
    const savings = Math.max(0, b.value - b.bundlePrice);
    const savingsPercent = Math.round((savings / b.value) * 100);

    const isDesktop = b.id.includes("platform") || b.id.includes("desktop");
    const isPro = b.id.includes("professional");

    const accentClass = isDesktop
        ? "from-slate-900 via-slate-800 to-slate-700"
        : isPro
            ? "from-violet-900 via-violet-700 to-violet-500"
            : "from-amber-700 via-amber-500 to-amber-300";

    return (
        <div className="group relative flex flex-col rounded-[24px] overflow-hidden shadow-lg ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            {/* Header */}
            <div className={cx("relative bg-gradient-to-br px-6 py-7", accentClass)}>
                <div className="absolute inset-0"
                    style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent 50%)" }} />
                <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <div className="text-[9px] font-bold tracking-[0.2em] text-white/60 mb-1">BUNDLE</div>
                            <h3 className="text-xl font-semibold text-white tracking-tight">{b.name}</h3>
                            <p className="text-sm text-white/70 mt-1">{b.tagline}</p>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="rounded-full bg-white/15 border border-white/25 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                                Save {savingsPercent}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="flex-1 flex flex-col bg-[var(--uprise-card)] px-6 py-5">
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{b.description}</p>

                {/* Price comparison */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                        { label: "RRP value", value: gbp(b.value), sub: "if bought separately" },
                        { label: "Bundle price", value: gbp(b.bundlePrice), sub: "one payment", highlight: true },
                        { label: "You save", value: gbp(savings), sub: `${savingsPercent}% off` },
                    ].map((s) => (
                        <div key={s.label}
                            className={cx("rounded-xl p-3 text-center", s.highlight ? "bg-[var(--uprise-navy)] text-white" : "bg-black/5")}>
                            <div className={cx("text-[10px] font-semibold tracking-wide mb-1", s.highlight ? "text-white/70" : "text-slate-500")}>
                                {s.label.toUpperCase()}
                            </div>
                            <div className={cx("text-lg font-bold", s.highlight ? "text-white" : "text-slate-900")}>
                                {s.value}
                            </div>
                            <div className={cx("text-[10px] mt-0.5", s.highlight ? "text-white/60" : "text-slate-400")}>
                                {s.sub}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Includes */}
                <div className="mb-5">
                    <div className="text-[10px] font-bold tracking-widest text-slate-500 mb-2">INCLUDES</div>
                    <div className="flex flex-wrap gap-1.5">
                        {b.includes.map((id) => {
                            const name = PRODUCTS.find((p) => p.id === id)?.name;
                            return name ? (
                                <span key={id} className="inline-flex items-center gap-1 rounded-lg bg-black/5 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                                    <IconCheck size={10} /> {name}
                                </span>
                            ) : null;
                        })}
                    </div>
                </div>

                <div className="mt-auto flex gap-2">
                    <button
                        onClick={() => startCheckout({ kind: "bundle", id: b.id, mode: "personal" })}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--uprise-navy)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--uprise-navy-hover)] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                        Buy bundle <IconArrow size={14} />
                    </button>
                    <Link href="/#contact"
                        className="inline-flex items-center justify-center rounded-xl bg-black/5 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-black/10 transition-colors">
                        Enterprise
                    </Link>
                </div>
            </div>
        </div>
    );
}

const MARKETPLACE_ENABLED =
    process.env.NEXT_PUBLIC_MARKETPLACE_ENABLED === "true";

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */
export default function MarketplaceHubPage() {
    if (process.env.NODE_ENV === "production" && !MARKETPLACE_ENABLED) {
        return (
            <main className="min-h-screen bg-[var(--uprise-bg)] text-[var(--uprise-ink)]">
                <div className="mx-auto max-w-3xl px-6 py-16">
                    <div className="rounded-3xl border border-[var(--uprise-border)] bg-[var(--uprise-panel)] p-10 shadow-sm">
                        <div className="text-xs font-semibold tracking-widest text-slate-500">
                            UPRISE MARKETPLACE
                        </div>
                        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                            Coming soon
                        </h1>
                        <p className="mt-3 text-slate-600">
                            We&apos;re preparing downloads, licensing, and fulfilment. The marketplace will open shortly.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="/"
                                className="rounded-2xl border border-[var(--uprise-border)] bg-white px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors"
                            >
                                Back to Uprise
                            </Link>
                            <a
                                href="mailto:hello@uprisestudios.co.uk"
                                className="rounded-2xl bg-[#0b1220] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    const [mode, setMode] = useState<BuyMode>("personal");
    const [query, setQuery] = useState("");
    const [tier, setTier] = useState<string>("All");

    const tierTabs = useMemo(() => ["All", ...TIER_ORDER], []);

    const featuredIds = useMemo(() => ["coda-studio", "caretaker", "sanctuary"], []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return PRODUCTS.filter((p) => {
            const matchesTier = tier === "All" ? true : p.tier === tier;
            const hay = `${p.name} ${p.tagline} ${p.description} ${p.badge ?? ""} ${p.status ?? ""}`.toLowerCase();
            return matchesTier && (q ? hay.includes(q) : true);
        });
    }, [query, tier]);

    const featured = useMemo(() => {
        const byId = new Map(PRODUCTS.map((p) => [p.id, p] as const));
        return featuredIds.map((id) => byId.get(id)).filter(Boolean) as Product[];
    }, [featuredIds]);

    return (
        <main className="min-h-screen bg-[var(--uprise-bg)] text-[var(--uprise-ink)] overflow-x-hidden">

            {/* Ambient background */}
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 left-1/3 h-[600px] w-[600px] rounded-full bg-amber-200/15 blur-[100px]" />
                <div className="absolute top-1/2 right-[-200px] h-[500px] w-[500px] rounded-full bg-violet-100/10 blur-[80px]" />
                <div className="absolute inset-0 dot-grid opacity-30" />
            </div>

            {/* ── Navigation ─────────────────────────────── */}
            <header className="sticky top-0 z-50 border-b border-[var(--uprise-border-subtle)] bg-[var(--uprise-card)]/85 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
                    <div className="flex items-center gap-4 text-sm">
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <LogoMark size={30} />
                            <span className="font-semibold tracking-tight text-[var(--uprise-ink)] hidden sm:block">Uprise Studios</span>
                        </Link>
                        <span className="text-slate-300 hidden sm:block">/</span>
                        <div className="flex items-center gap-2">
                            <IconPackage size={14} />
                            <span className="font-semibold text-slate-700">Marketplace</span>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-2">
                        <Pill>Direct purchase</Pill>
                        <Pill>Stripe-ready</Pill>
                        <Pill>Local-first</Pill>
                    </div>

                    <div className="flex items-center gap-2">
                        <a href="mailto:hello@uprisestudios.co.uk"
                            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-[var(--uprise-panel)] transition-colors">
                            Enterprise licensing
                        </a>
                        <Link href="/"
                            className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--uprise-navy)] px-4 py-2 text-xs font-semibold text-white hover:bg-[var(--uprise-navy-hover)] transition-colors">
                            ← Back home
                        </Link>
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-6 py-12">

                {/* ══════════════════════════════════════════
                    HERO
                ══════════════════════════════════════════ */}
                <section className="mb-16">
                    <div className="rounded-[40px] overflow-hidden border border-[var(--uprise-border-subtle)] bg-[var(--uprise-card)]/80 backdrop-blur shadow-xl">
                        {/* Dark header band */}
                        <div className="relative bg-[#0d1117] px-10 py-14 overflow-hidden">
                            <div className="pointer-events-none absolute inset-0">
                                <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[350px] w-[700px] rounded-full bg-amber-500/8 blur-[80px]" />
                                <div className="absolute inset-0 dot-grid opacity-20" />
                            </div>

                            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                                <div>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-400 tracking-widest mb-6">
                                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                                        UPRISE STORE — OFFICIAL
                                    </div>

                                    <h1 className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight">
                                        Premium desktop software,{" "}
                                        <br className="hidden sm:block" />
                                        <span className="text-amber-400">built to last.</span>
                                    </h1>

                                    <p className="mt-5 max-w-2xl text-slate-400 leading-relaxed text-base">
                                        Local-first by default. No dark patterns. Enterprise-grade stability.
                                        Buy direct for the best value, or find us on Etsy and Steam when you prefer.
                                    </p>

                                    <div className="mt-7 flex flex-wrap gap-3">
                                        {[
                                            { icon: <IconShield size={13} />, text: "No telemetry by default" },
                                            { icon: <IconLock size={13} />, text: "Clear, honest pricing" },
                                            { icon: <IconCheck size={13} />, text: "Clean uninstall guarantee" },
                                            { icon: <IconBuilding size={13} />, text: "Enterprise licensing available" },
                                        ].map((t) => (
                                            <div key={t.text} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-1.5 text-xs font-medium text-white/75">
                                                <span className="text-amber-400">{t.icon}</span>
                                                {t.text}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Pricing mode + search */}
                                <div className="w-full lg:w-80">
                                    <div className="rounded-2xl border border-white/10 bg-white/6 backdrop-blur p-5">
                                        <div className="text-[10px] font-bold tracking-widest text-white/50 mb-3">PRICING MODE</div>
                                        <div className="flex gap-2 mb-4">
                                            <button onClick={() => setMode("personal")}
                                                className={cx(
                                                    "flex-1 rounded-xl py-2.5 text-sm font-semibold transition-all",
                                                    mode === "personal" ? "bg-amber-500 text-white shadow-md" : "bg-white/10 text-white/70 hover:bg-white/15"
                                                )}>
                                                Personal
                                            </button>
                                            <button onClick={() => setMode("enterprise")}
                                                className={cx(
                                                    "flex-1 rounded-xl py-2.5 text-sm font-semibold transition-all",
                                                    mode === "enterprise" ? "bg-amber-500 text-white shadow-md" : "bg-white/10 text-white/70 hover:bg-white/15"
                                                )}>
                                                Enterprise
                                            </button>
                                        </div>

                                        <div className="relative">
                                            <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40">
                                                <IconSearch size={15} />
                                            </div>
                                            <input
                                                value={query}
                                                onChange={(e) => setQuery(e.target.value)}
                                                placeholder="Search products…"
                                                className="h-11 w-full rounded-xl bg-white/10 pl-10 pr-4 text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-white/15 focus:ring-amber-400/40 transition-all"
                                            />
                                        </div>

                                        {mode === "enterprise" && (
                                            <p className="mt-3 text-[10px] text-white/40 leading-relaxed">
                                                Enterprise mode shows rollout readiness, policy support, and managed deployment pricing.
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick stats bar */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[var(--uprise-border-subtle)] bg-[var(--uprise-panel)]/60">
                            {[
                                { label: "Products", value: `${PRODUCTS.length}+` },
                                { label: "Bundles", value: `${BUNDLES.length}` },
                                { label: "Price range", value: "£3.99–£24.99" },
                                { label: "Enterprise", value: "Available" },
                            ].map((s) => (
                                <div key={s.label} className="py-4 px-6 text-center">
                                    <div className="text-lg font-bold text-[var(--uprise-ink)]">{s.value}</div>
                                    <div className="text-[10px] text-slate-500 font-semibold tracking-wide mt-0.5">{s.label.toUpperCase()}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    FEATURED PRODUCTS
                ══════════════════════════════════════════ */}
                <section className="mb-16">
                    <div className="flex items-end justify-between gap-4 mb-8">
                        <div>
                            <div className="text-[10px] font-bold tracking-[0.2em] text-amber-700 mb-2">EDITOR'S PICKS</div>
                            <h2 className="text-3xl font-semibold tracking-tight">Start here.</h2>
                            <p className="mt-2 text-slate-600 max-w-xl">The flagship IDE, the guardian-tier protector, and the calm desktop platform.</p>
                        </div>
                        <a href="mailto:hello@uprisestudios.co.uk"
                            className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-[var(--uprise-panel)] shadow-sm transition-colors">
                            Need a licence? <IconArrow size={13} />
                        </a>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-3">
                        {featured.map((p) => (
                            <ProductTile key={p.id} p={p} mode={mode} />
                        ))}
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    BUNDLES
                ══════════════════════════════════════════ */}
                <section className="mb-16">
                    <div className="flex items-end justify-between gap-4 mb-8">
                        <div>
                            <div className="text-[10px] font-bold tracking-[0.2em] text-amber-700 mb-2">BEST VALUE</div>
                            <h2 className="text-3xl font-semibold tracking-tight">Bundle & save.</h2>
                            <p className="mt-2 text-slate-600 max-w-xl">
                                The smartest way to buy — curated bundles that communicate ecosystem and drive real value.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {BUNDLES.map((b) => (
                            <BundleCard key={b.id} b={b} />
                        ))}
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    FULL CATALOGUE
                ══════════════════════════════════════════ */}
                <section className="mb-16">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-8">
                        <div>
                            <div className="text-[10px] font-bold tracking-[0.2em] text-amber-700 mb-2">FULL CATALOGUE</div>
                            <h2 className="text-3xl font-semibold tracking-tight">Browse everything.</h2>
                            <p className="mt-2 text-slate-600 max-w-xl">Filter by tier to find exactly what you need.</p>
                        </div>

                        {/* Tier filter tabs */}
                        <div className="flex flex-wrap gap-2">
                            {tierTabs.map((t) => (
                                <button key={t} onClick={() => setTier(t)}
                                    className={cx(
                                        "rounded-full px-4 py-2 text-xs font-semibold transition-all border",
                                        tier === t
                                            ? "bg-[var(--uprise-navy)] text-white border-[var(--uprise-navy)] shadow-sm"
                                            : "bg-[var(--uprise-card)] text-slate-600 border-[var(--uprise-border-subtle)] hover:bg-[var(--uprise-panel)] hover:text-slate-900"
                                    )}>
                                    {t === "All" ? "All products" : t.replace("Uprise ", "").replace(" Platform", "")}
                                </button>
                            ))}
                        </div>
                    </div>

                    {filtered.length > 0 ? (
                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {filtered.map((p) => (
                                <ProductTile key={p.id} p={p} mode={mode} />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-[24px] bg-[var(--uprise-card)] ring-1 ring-black/8 p-10 text-center">
                            <div className="text-slate-400 mb-2">No products match your search.</div>
                            <button onClick={() => { setQuery(""); setTier("All"); }}
                                className="text-sm font-semibold text-[var(--uprise-navy)] hover:underline">
                                Clear filters
                            </button>
                        </div>
                    )}
                </section>

                {/* ══════════════════════════════════════════
                    TRUST / FOOTER PANEL
                ══════════════════════════════════════════ */}
                <section className="pb-10">
                    <div className="rounded-[32px] bg-[#0d1117] p-10 shadow-xl overflow-hidden relative">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute top-0 right-0 h-[300px] w-[400px] rounded-full bg-amber-500/6 blur-[80px]" />
                        </div>

                        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <div className="text-[10px] font-bold tracking-widest text-amber-400/80 mb-3">OUR PROMISE</div>
                                <h3 className="text-2xl font-semibold text-white tracking-tight mb-4">
                                    Built for ownership — not extraction.
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 max-w-2xl">
                                    Local-first by default. No telemetry unless you opt in. Clear pricing with no hidden fees.
                                    Clean uninstall that leaves no trace. Real diagnostics that explain what they do.
                                    Direct purchase always offers the best value — marketplaces remain available for those who prefer them.
                                </p>

                                <div className="grid gap-3 sm:grid-cols-2 max-w-xl">
                                    {[
                                        { icon: <IconLock size={14} />, text: "Privacy-first architecture" },
                                        { icon: <IconShield size={14} />, text: "No dark patterns or coercive UX" },
                                        { icon: <IconCheck size={14} />, text: "Transparent about what software does" },
                                        { icon: <IconBuilding size={14} />, text: "Enterprise support available" },
                                    ].map((t) => (
                                        <div key={t.text} className="flex items-center gap-3 text-sm text-white/70">
                                            <span className="text-emerald-400">{t.icon}</span>
                                            {t.text}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <Link href="/privacy"
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 hover:border-white/30 hover:text-white transition-all">
                                    Privacy notices
                                </Link>
                                <a href="mailto:hello@uprisestudios.co.uk"
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-400 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">
                                    Contact sales / enterprise
                                    <IconArrow size={14} />
                                </a>
                                <Link href="/"
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-6 py-3 text-sm font-semibold text-white/60 hover:text-white/80 transition-colors">
                                    ← Back to Uprise Studios
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
