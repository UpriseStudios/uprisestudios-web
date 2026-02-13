"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";

export default function LumenPage() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [message, setMessage] = useState<string>("");

    // Count badge state
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

            if (!res.ok || !json?.ok) {
                setSafeCount(null);
                setCountStatus("error");
                return;
            }

            const n = Number(json.count ?? 0);
            setSafeCount(Number.isFinite(n) ? n : 0);
            setCountStatus("ok");
        } catch {
            setSafeCount(null);
            setCountStatus("error");
        }
    }, []);

    useEffect(() => {
        let cancelled = false;

        const run = async () => {
            if (cancelled) return;
            await loadCount();
        };

        run();
        const t = setInterval(run, 60_000);

        return () => {
            cancelled = true;
            clearInterval(t);
        };
    }, [loadCount]);

    async function submit() {
        setStatus("sending");
        setMessage("");
        try {
            const res = await fetch("/api/early-access", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ campaign: "lumen", email }),
            });

            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data?.ok) throw new Error(data?.error || "Could not save your registration.");

            setStatus("success");
            setMessage("You’re on the list. We’ll email you when early access opens.");
            setEmail("");

            // premium touch: refresh the badge immediately
            loadCount();
        } catch (e: any) {
            setStatus("error");
            setMessage(e?.message || "Something went wrong.");
        }
    }

    return (
        <main
            className="min-h-screen"
            style={{
                background:
                    "radial-gradient(1200px circle at 50% -20%, rgba(var(--lumen-soft), 0.35), transparent 55%), var(--uprise-bg)",
                color: "var(--uprise-ink)",
            }}
        >
            <div className="mx-auto max-w-6xl px-6 py-10">
                {/* Top row */}
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-sm">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
                        >
                            <span aria-hidden>←</span> Back to Uprise
                        </Link>

                        <span className="text-slate-300">/</span>

                        <span className="rounded-full border border-[var(--uprise-border)] bg-[var(--uprise-card)] px-3 py-1 text-xs text-slate-700">
                            The heartbeat (coming soon)
                        </span>
                    </div>

                    {/* Interest badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--uprise-border)] bg-[var(--uprise-card)] px-3 py-1 text-xs text-slate-700 shadow-sm">
                        <span
                            className={[
                                "h-2 w-2 rounded-full",
                                countStatus === "ok"
                                    ? "bg-emerald-400"
                                    : countStatus === "loading"
                                        ? "bg-amber-400"
                                        : "bg-slate-300",
                            ].join(" ")}
                            aria-hidden
                            title={
                                countStatus === "ok"
                                    ? "Live count"
                                    : countStatus === "loading"
                                        ? "Refreshing"
                                        : "Count unavailable"
                            }
                        />
                        <span className="text-slate-600">Interest</span>
                        <span className="font-semibold tabular-nums min-w-[1.25rem] text-right">
                            {safeCount === null ? "—" : safeCount}
                        </span>
                    </div>
                </div>

                {/* Hero + Principles */}
                <div className="mt-10 grid gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-6">
                        <div className="flex items-center gap-3">
                            <div className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] shadow-sm">
                                <span className="text-sm" aria-hidden>
                                    ✦
                                </span>
                            </div>
                            <h1 className="text-5xl font-semibold tracking-tight">Lumen</h1>
                        </div>

                        <p className="mt-3 text-lg text-slate-700">Your grounding, reflective life companion.</p>

                        <p className="mt-6 max-w-xl leading-relaxed text-slate-700">
                            Lumen is a protective AI companion designed to support emotional regulation, decision
                            clarity, and long-term wellbeing. It helps interrupt destructive spirals, reflect
                            patterns, and offer grounded perspective during moments of stress, impulsivity, or
                            overload.
                        </p>

                        <p className="mt-5 max-w-xl leading-relaxed text-slate-700">
                            Because most of us have felt alone in those moments, and no one should have to.
                        </p>
                    </div>

                    <div className="lg:col-span-6">
                        <section className="rounded-3xl border border-[var(--uprise-border)] bg-[var(--uprise-panel)] shadow-sm">
                            <div className="px-7 py-7">
                                <div className="text-xs font-semibold tracking-widest text-slate-700">
                                    DESIGN PRINCIPLES
                                </div>

                                <div className="mt-5 grid gap-4 md:grid-cols-2">
                                    <div className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] p-5">
                                        <div className="font-semibold">Local-first</div>
                                        <div className="mt-1 text-sm text-slate-700">
                                            Works offline. Your device is the source of truth.
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] p-5">
                                        <div className="font-semibold">Relational Memory</div>
                                        <div className="mt-1 text-sm text-slate-700">
                                            Memory only with explicit, revocable consent.
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] p-5">
                                        <div className="font-semibold">No dark patterns</div>
                                        <div className="mt-1 text-sm text-slate-700">
                                            No streaks. No guilt. No addiction loops.
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] p-5">
                                        <div className="font-semibold">Compassion-first by design</div>
                                        <div className="mt-1 text-sm text-slate-700">
                                            Prioritises genuine emotional safety and harm reduction over any form of user
                                            retention or optimisation.
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] p-5 md:col-span-2">
                                        <div className="text-sm text-slate-700">
                                            Cloud sync will be opt-in only. If enabled, it will be end-to-end encrypted.
                                            Consent can be withdrawn and data purged immediately.
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 text-center text-sm text-slate-600">
                                    Early access is coming soon. Lumen is in active development.
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Features */}
                <div className="mt-12">
                    <section className="rounded-3xl border border-[var(--uprise-border)] bg-[var(--uprise-panel)] shadow-sm">
                        <div className="px-7 py-7">
                            <div className="text-xs font-semibold tracking-widest text-slate-700">
                                LUMEN FEATURES
                            </div>

                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                                <div className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] p-5">
                                    <div className="font-semibold">Contextual Understanding</div>
                                    <div className="mt-1 text-sm text-slate-700">
                                        Learns your patterns and preferences with explicit consent to offer more
                                        grounded, relevant support over time.
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] p-5">
                                    <div className="font-semibold">Harm Reduction</div>
                                    <div className="mt-1 text-sm text-slate-700">
                                        Helps interrupt rumination and impulse spirals with gentle check-ins.
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] p-5">
                                    <div className="font-semibold">Moonshot</div>
                                    <div className="mt-1 text-sm text-slate-700">
                                        Substrate for future BCI/Neuralink integrations.
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] p-5">
                                    <div className="font-semibold">Grounded Reflection</div>
                                    <div className="mt-1 text-sm text-slate-700">
                                        Helps you slow down, externalise thoughts, and see patterns clearly — without
                                        judgement or pressure.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Early access */}
                <div className="mt-12">
                    <section className="rounded-3xl border border-[var(--uprise-border)] bg-[var(--uprise-panel)] shadow-sm">
                        <div className="px-7 py-7">
                            <h2 className="text-xl font-semibold">Early access registration</h2>
                            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700">
                                Register your interest and we will email you when early access opens. Email
                                addresses cannot be accessed by a human, will never be used for anything else and
                                will be deleted after notification.
                            </p>

                            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="h-12 w-full rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] px-4 text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-amber-200"
                                    disabled={!enabled || status === "sending"}
                                    inputMode="email"
                                    autoComplete="email"
                                />
                                <button
                                    onClick={submit}
                                    disabled={!enabled || status === "sending" || email.trim().length < 5}
                                    className="h-12 rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-navy)] px-5 text-sm font-medium text-white shadow-sm hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {enabled ? (status === "sending" ? "Registering…" : "Register") : "Coming soon"}
                                </button>
                            </div>

                            <div className="mt-3 text-xs text-slate-600">
                                Note: The early access registration is fully automated, no human access is wired
                                in for total privacy.
                            </div>

                            {message ? (
                                <div
                                    className={[
                                        "mt-4 rounded-2xl border px-4 py-3 text-sm",
                                        status === "success"
                                            ? "border-emerald-900/40 bg-emerald-50 text-emerald-900"
                                            : "border-rose-900/40 bg-rose-50 text-rose-900",
                                    ].join(" ")}
                                >
                                    {message}
                                </div>
                            ) : null}
                        </div>
                    </section>
                </div>

                {/* Contact */}
                <div className="mt-14 pb-10">
                    <div className="text-sm text-slate-700">
                        For general enquiries:{" "}
                        <a className="underline hover:text-slate-900" href="mailto:hello@uprisestudios.co.uk">
                            hello@uprisestudios.co.uk
                        </a>
                    </div>
                    <div className="mt-3 text-xs text-slate-600">
                        <Link href="/privacy/lumen" className="underline hover:text-slate-900">
                            Lumen privacy notice
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
