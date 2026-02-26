"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";

/* ── Inline SVG icons ─────────────────────────────────── */
function IconShield({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    );
}
function IconHeart({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
    );
}
function IconLock({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
    );
}
function IconBrain({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.5 2A2.5 2.5 0 007 4.5v0A2.5 2.5 0 004.5 7v0a2.5 2.5 0 000 5v0A2.5 2.5 0 007 14.5V17a2 2 0 002 2h2" />
            <path d="M14.5 2A2.5 2.5 0 0117 4.5v0A2.5 2.5 0 0119.5 7v0a2.5 2.5 0 010 5v0A2.5 2.5 0 0117 14.5V17a2 2 0 01-2 2h-2" />
            <line x1="12" y1="7" x2="12" y2="19" /><line x1="9" y1="10" x2="15" y2="10" />
        </svg>
    );
}
function IconZap({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
    );
}
function IconEye({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
        </svg>
    );
}
function IconUsers({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
    );
}
function IconArrow({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
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

/* ── Lumen symbol ────────────────────────────────────── */
function LumenMark({ size = 52 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <circle cx="26" cy="26" r="26" fill="rgba(245,158,11,0.12)" />
            <circle cx="26" cy="26" r="18" fill="rgba(245,158,11,0.15)" />
            <path d="M26 12 L26 24" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M26 28 L26 40" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <circle cx="26" cy="26" r="3.5" fill="#f59e0b" />
            <path d="M14 20 L22 24" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <path d="M30 24 L38 20" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        </svg>
    );
}

/* ═════════════════════════════════════════════════════════
   PAGE
═════════════════════════════════════════════════════════ */
export default function LumenPage() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [message, setMessage] = useState<string>("");
    const [safeCount, setSafeCount] = useState<number | null>(null);
    const [countStatus, setCountStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

    const enabled = useMemo(
        () => (process.env.NEXT_PUBLIC_LUMEN_EARLY_ACCESS_ENABLED ?? "false") === "true",
        []
    );

    const loadCount = useCallback(async () => {
        setCountStatus((s) => (s === "ok" ? "ok" : "loading"));
        try {
            const res = await fetch("/api/early-access/count?campaign=lumen", { cache: "no-store" });
            const json = await res.json().catch(() => null);
            if (!res.ok || !json?.ok) { setSafeCount(null); setCountStatus("error"); return; }
            const n = Number(json.count ?? 0);
            setSafeCount(Number.isFinite(n) ? n : 0);
            setCountStatus("ok");
        } catch { setSafeCount(null); setCountStatus("error"); }
    }, []);

    useEffect(() => {
        let cancelled = false;
        const run = async () => { if (!cancelled) await loadCount(); };
        run();
        const t = setInterval(run, 60_000);
        return () => { cancelled = true; clearInterval(t); };
    }, [loadCount]);

    async function submit() {
        setStatus("sending"); setMessage("");
        try {
            const res = await fetch("/api/early-access", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ campaign: "lumen", email }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data?.ok) throw new Error(data?.error || "Could not save your registration.");
            setStatus("success");
            setMessage("You're on the list. We'll email you when early access opens.");
            setEmail("");
            loadCount();
        } catch (e: any) {
            setStatus("error");
            setMessage(e?.message || "Something went wrong.");
        }
    }

    const PRINCIPLES = [
        {
            icon: <IconLock size={20} />,
            title: "Local-first",
            desc: "Works offline. Your device is the source of truth. Nothing leaves without your explicit say-so.",
            color: "from-sky-500/10 to-blue-500/5 border-sky-200/50",
            iconColor: "text-sky-600 bg-sky-100",
        },
        {
            icon: <IconShield size={20} />,
            title: "Relational Memory",
            desc: "Memory is only created with explicit, revocable consent. You can purge everything instantly.",
            color: "from-emerald-500/10 to-green-500/5 border-emerald-200/50",
            iconColor: "text-emerald-600 bg-emerald-100",
        },
        {
            icon: <IconHeart size={20} />,
            title: "No dark patterns",
            desc: "No streaks. No guilt mechanics. No notifications designed to create anxiety. Ever.",
            color: "from-rose-500/10 to-pink-500/5 border-rose-200/50",
            iconColor: "text-rose-600 bg-rose-100",
        },
        {
            icon: <IconUsers size={20} />,
            title: "Compassion-first",
            desc: "Prioritises genuine emotional safety over any form of user retention or engagement optimisation.",
            color: "from-violet-500/10 to-purple-500/5 border-violet-200/50",
            iconColor: "text-violet-600 bg-violet-100",
        },
    ];

    const FEATURES = [
        {
            icon: <IconBrain size={22} />,
            title: "Contextual Understanding",
            desc: "Learns your patterns and preferences with explicit consent to offer more grounded, relevant support over time.",
            tag: "AI Core",
        },
        {
            icon: <IconZap size={22} />,
            title: "Harm Reduction",
            desc: "Helps interrupt rumination and impulse spirals with gentle, non-coercive check-ins that never punish you for declining.",
            tag: "Wellbeing",
        },
        {
            icon: <IconEye size={22} />,
            title: "Grounded Reflection",
            desc: "Helps you slow down, externalise thoughts, and see patterns clearly — without judgement, labels, or pressure to change.",
            tag: "Clarity",
        },
        {
            icon: <IconShield size={22} />,
            title: "Protective AI",
            desc: "Designed to shield users from harm, not extract value. No engagement loops. No optimising against your vulnerability.",
            tag: "Ethics",
        },
        {
            icon: <IconLock size={22} />,
            title: "Sovereign Data",
            desc: "Local-first by default. Cloud sync is opt-in and end-to-end encrypted. Consent can be withdrawn immediately with full data purge.",
            tag: "Privacy",
        },
        {
            icon: <IconZap size={22} />,
            title: "Moonshot Ready",
            desc: "Built as a substrate for future BCI and Neuralink-like integrations — a civilisational hedge for human-AI companionship.",
            tag: "Future",
        },
    ];

    return (
        <main className="min-h-screen overflow-x-hidden bg-[#0d1117] text-[#e2e8f0]">

            {/* ── Ambient background ─────────────────────── */}
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 65%)" }} />
                <div className="absolute top-1/3 right-[-150px] h-[500px] w-[500px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(244,63,94,0.06) 0%, transparent 60%)" }} />
                <div className="absolute bottom-1/4 left-[-100px] h-[400px] w-[400px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)" }} />
                <div className="absolute inset-0 dot-grid opacity-20" />
            </div>

            {/* ── Navigation ─────────────────────────────── */}
            <header className="sticky top-0 z-50 border-b border-white/8 glass-dark">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
                    <div className="flex items-center gap-4 text-sm">
                        <Link href="/" className="flex items-center gap-2.5">
                            <LogoMark size={30} />
                            <span className="font-semibold tracking-tight text-white/90 hidden sm:block">Uprise Studios</span>
                        </Link>
                        <span className="text-white/20 hidden sm:block">/</span>
                        <div className="flex items-center gap-2">
                            <span className="text-amber-400">✦</span>
                            <span className="font-semibold text-white/80">Lumen</span>
                        </div>
                    </div>

                    {/* Interest counter */}
                    <div className="hidden sm:flex items-center gap-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-1.5 text-xs">
                            <span className={[
                                "h-2 w-2 rounded-full",
                                countStatus === "ok" ? "bg-emerald-400" :
                                    countStatus === "loading" ? "bg-amber-400 animate-pulse" :
                                        "bg-white/30"
                            ].join(" ")} />
                            <span className="text-white/60">Interest registered</span>
                            <span className="font-bold tabular-nums text-white">
                                {safeCount === null ? "—" : safeCount.toLocaleString()}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link href="/tally"
                            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-white/12 px-4 py-2 text-xs font-semibold text-white/70 hover:border-white/25 hover:text-white transition-all">
                            View Tally
                        </Link>
                        <a href="#register"
                            className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-4 py-2 text-xs font-semibold text-white hover:bg-amber-400 shadow-lg transition-all">
                            Register interest <IconArrow size={12} />
                        </a>
                    </div>
                </div>
            </header>

            {/* ══════════════════════════════════════════════
                HERO
            ══════════════════════════════════════════════ */}
            <section className="mx-auto max-w-7xl px-6 pt-24 pb-20">
                <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] items-center">

                    {/* Left */}
                    <div className="animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-8">
                            <LumenMark size={52} />
                            <div>
                                <div className="text-[10px] font-bold tracking-[0.2em] text-amber-500/80">THE HEARTBEAT PROJECT</div>
                                <div className="text-sm text-white/50 mt-0.5">Coming soon · In active development</div>
                            </div>
                        </div>

                        <h1 className="text-[3.8rem] sm:text-[5rem] font-semibold tracking-[-0.04em] leading-[0.95] text-white">
                            Lumen
                        </h1>

                        <p className="mt-5 text-xl text-amber-400/90 font-light italic">
                            Your grounding, reflective life companion.
                        </p>

                        <p className="mt-7 text-lg leading-relaxed text-white/65 max-w-lg">
                            A protective AI companion designed to support emotional regulation, decision clarity, and long-term wellbeing.
                            It helps interrupt destructive spirals, reflect patterns, and offer grounded perspective during moments of
                            stress, impulsivity, or overload.
                        </p>

                        <p className="mt-4 text-base text-white/50 max-w-md leading-relaxed">
                            Because most of us have felt alone in those moments — and no one should have to.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <a href="#register"
                                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-amber-400 shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-amber-500/25 hover:shadow-2xl">
                                Register early access <IconArrow size={15} />
                            </a>
                            <a href="#features"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/70 hover:border-white/30 hover:text-white transition-all">
                                See features
                            </a>
                        </div>

                        {/* Trust micro-badges */}
                        <div className="mt-8 flex flex-wrap gap-2">
                            {["Consent-first", "Local-first", "No dark patterns", "Neurodivergent-aware", "Privacy sovereign"].map((b) => (
                                <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/50">
                                    <span className="h-1 w-1 rounded-full bg-amber-400" />
                                    {b}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Principles preview card */}
                    <div className="animate-fade-in-up delay-200">
                        <div className="rounded-[32px] border border-white/10 bg-white/4 p-7 backdrop-blur">
                            <div className="text-[10px] font-bold tracking-[0.2em] text-amber-400/70 mb-5">DESIGN PRINCIPLES</div>

                            <div className="grid gap-3">
                                {PRINCIPLES.map((p) => (
                                    <div key={p.title}
                                        className={`flex items-start gap-4 rounded-2xl border bg-gradient-to-br px-5 py-4 ${p.color}`}>
                                        <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${p.iconColor}`}>
                                            {p.icon}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white text-sm">{p.title}</div>
                                            <div className="mt-1 text-xs text-white/55 leading-relaxed">{p.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 text-center text-xs text-white/35 leading-relaxed px-4">
                                Cloud sync is opt-in only. If enabled, data is end-to-end encrypted
                                and can be purged at any time.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                FEATURES GRID
            ══════════════════════════════════════════════ */}
            <section id="features" className="mx-auto max-w-7xl px-6 py-20">
                <div className="text-center mb-14">
                    <div className="text-[10px] font-bold tracking-[0.2em] text-amber-500/70 mb-3">WHAT LUMEN DOES</div>
                    <h2 className="text-4xl font-semibold tracking-tight text-white">
                        A companion that protects, not extracts.
                    </h2>
                    <p className="mt-4 text-white/50 max-w-2xl mx-auto leading-relaxed">
                        Every feature is designed around genuine wellbeing — not engagement metrics, retention rates, or behavioural optimisation.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((f, i) => (
                        <div key={f.title}
                            className="group rounded-[24px] border border-white/8 bg-white/4 p-6 backdrop-blur transition-all duration-300 hover:border-amber-500/20 hover:bg-white/6 hover:-translate-y-0.5">
                            <div className="flex items-center justify-between gap-3 mb-5">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/12 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                                    {f.icon}
                                </div>
                                <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[10px] font-bold text-white/50 tracking-widest">
                                    {f.tag.toUpperCase()}
                                </span>
                            </div>

                            <h3 className="font-semibold text-white tracking-tight mb-2">{f.title}</h3>
                            <p className="text-sm text-white/55 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                MANIFESTO SECTION
            ══════════════════════════════════════════════ */}
            <section className="mx-auto max-w-7xl px-6 py-10 mb-10">
                <div className="rounded-[40px] border border-amber-500/15 bg-gradient-to-br from-amber-500/8 via-amber-500/4 to-transparent p-10 sm:p-14 overflow-hidden relative">
                    <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[400px] rounded-full"
                        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.1), transparent 65%)" }} />

                    <div className="relative max-w-3xl">
                        <div className="text-[10px] font-bold tracking-[0.2em] text-amber-500/70 mb-6">THE PHILOSOPHY BEHIND LUMEN</div>
                        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-tight mb-6">
                            A consent-first AI that helps with neurodivergent patterns —
                            <span className="text-amber-400"> without exploitation.</span>
                        </h2>
                        <div className="space-y-5 text-white/65 leading-relaxed">
                            <p>
                                Most AI products are designed to keep you engaged. Their success metrics are time-on-app, retention rate, and daily active users.
                                Lumen's success metric is the opposite: <em className="text-white/85">does the person feel better when they put it down?</em>
                            </p>
                            <p>
                                Lumen is built for minds that loop, fixate, or overload — without punishment or pressure. It works when you open it, and leaves you alone when you don't.
                                No streaks. No notifications designed to create anxiety about missing a day.
                            </p>
                            <p>
                                It's also designed as a civilisational hedge: local-first, sovereign data by default, and built as a substrate for future BCI integrations
                                — because human-AI companionship is coming, and it should be ethical from the start.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                EARLY ACCESS REGISTRATION
            ══════════════════════════════════════════════ */}
            <section id="register" className="mx-auto max-w-7xl px-6 py-10 mb-10">
                <div className="max-w-2xl mx-auto">
                    <div className="rounded-[32px] border border-white/10 bg-white/4 p-8 sm:p-10 backdrop-blur text-center">
                        <div className="flex justify-center mb-6">
                            <LumenMark size={60} />
                        </div>

                        <div className="text-[10px] font-bold tracking-[0.2em] text-amber-500/70 mb-3">EARLY ACCESS</div>
                        <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
                            Be among the first.
                        </h2>
                        <p className="text-white/55 leading-relaxed mb-2">
                            Register your interest and we'll email you when early access opens.
                        </p>
                        <p className="text-xs text-white/35 leading-relaxed mb-8">
                            Addresses are stored securely and used only for this notification. No human access.
                            Deleted after we send the launch email. No marketing.
                        </p>

                        {/* Interest count */}
                        {safeCount !== null && (
                            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-400 font-medium mb-8">
                                <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                                <span className="font-bold">{safeCount.toLocaleString()}</span>
                                <span className="text-amber-400/70">people already registered</span>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="h-13 flex-1 rounded-2xl border border-white/15 bg-white/8 px-5 text-sm text-white placeholder:text-white/35 outline-none ring-0 focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                                style={{ height: "52px" }}
                                disabled={!enabled || status === "sending"}
                                inputMode="email"
                                autoComplete="email"
                                onKeyDown={(e) => e.key === "Enter" && email.trim().length >= 5 && submit()}
                            />
                            <button
                                onClick={submit}
                                disabled={!enabled || status === "sending" || email.trim().length < 5}
                                className="h-13 rounded-2xl bg-amber-500 px-6 text-sm font-semibold text-white shadow-lg hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                                style={{ height: "52px" }}
                            >
                                {!enabled ? "Coming soon" : status === "sending" ? "Registering…" : "Register interest"}
                            </button>
                        </div>

                        {message && (
                            <div className={[
                                "mt-5 rounded-2xl border px-5 py-4 text-sm text-left",
                                status === "success"
                                    ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-300"
                                    : "border-rose-500/25 bg-rose-500/10 text-rose-300",
                            ].join(" ")}>
                                {message}
                            </div>
                        )}

                        <p className="mt-6 text-[10px] text-white/25">
                            Fully automated · No human access · GDPR-compliant
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                FOOTER
            ══════════════════════════════════════════════ */}
            <footer className="border-t border-white/8 mt-10">
                <div className="mx-auto max-w-7xl px-6 py-12">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                            <LogoMark size={30} />
                            <div>
                                <div className="text-sm font-semibold text-white/80">Uprise Studios</div>
                                <div className="text-[10px] text-white/35">Lumen — The Heartbeat Project</div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-xs text-white/40">
                            <Link href="/" className="hover:text-white/70 transition-colors">← Uprise Studios</Link>
                            <Link href="/tally" className="hover:text-white/70 transition-colors">Tally</Link>
                            <Link href="/marketplace" className="hover:text-white/70 transition-colors">Marketplace</Link>
                            <Link href="/privacy/lumen" className="hover:text-white/70 transition-colors">Privacy notice</Link>
                            <a href="mailto:hello@uprisestudios.co.uk" className="hover:text-white/70 transition-colors">Contact</a>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/6 text-[11px] text-white/25">
                        © {new Date().getFullYear()} Uprise Studios · Built slowly, with care · Lumen is in active development
                    </div>
                </div>
            </footer>
        </main>
    );
}
