"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const products: Array<{
        title: string;
        desc: string;
        tag: string;
        href?: string;
        highlight?: boolean;
    }> = [
            {
                title: "Lumen (coming soon)",
                desc: "Our crown jewel in the making — a protective AI companion for emotional regulation, decision clarity, and long-term wellbeing.",
                tag: "Heartbeat",
                href: "/lumen",
                highlight: true,
            },
            {
                title: "Tally",
                desc: "A premium, privacy-first finance companion — budgeting, cashflow, and clarity. Built to scale internationally once stable.",
                tag: "Core app",
                href: "/tally",
                highlight: true,
            },
            {
                title: "Anchor",
                desc: "A simple thought-unloader: write the thought, give it a category and weight, and set it down.",
                tag: "Live",
            },
            {
                title: "Ember",
                desc: "Grounding exercises and supportive prompts for moments of stress or overwhelm.",
                tag: "In progress",
            },
            {
                title: "Books, games & guides",
                desc: "Creative projects and practical PDFs that teach, entertain, and help people build.",
                tag: "Studio",
            },
        ];

    return (
        <main className="min-h-screen bg-[var(--uprise-bg)] text-[var(--uprise-ink)]">
            {/* Soft background haze */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-200/25 blur-3xl" />
                <div className="absolute top-24 right-[-120px] h-[420px] w-[420px] rounded-full bg-amber-100/20 blur-3xl" />
                <div className="absolute bottom-[-140px] left-[-140px] h-[460px] w-[460px] rounded-full bg-[var(--uprise-card)] blur-3xl" />
            </div>

            {/* Top bar */}
            <header className="sticky top-0 z-50 border-b border-[var(--uprise-border)] bg-[var(--uprise-card)]/80 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-xl bg-[var(--uprise-navy)]/90" />
                        <div className="font-semibold tracking-tight">Uprise Studios</div>
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
                        <a href="#mission" className="hover:text-slate-900">
                            Mission
                        </a>
                        <a href="#products" className="hover:text-slate-900">
                            Products
                        </a>
                        <Link href="/tally" className="hover:text-slate-900">
                            Tally
                        </Link>
                        <Link href="/lumen" className="hover:text-slate-900">
                            Lumen
                        </Link>
                        <a href="#contact" className="hover:text-slate-900">
                            Contact
                        </a>

                        <Link
                            href="/lumen"
                            className="ml-2 rounded-xl bg-[var(--uprise-navy)] px-4 py-2 text-xs font-medium text-white hover:opacity-95"
                        >
                            Coming soon
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen((v) => !v)}
                        className="sm:hidden inline-flex items-center justify-center rounded-xl border border-[var(--uprise-border)] bg-[var(--uprise-card)]/80 px-3 py-2 text-sm text-slate-700 hover:opacity-95"
                        aria-expanded={mobileOpen}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? "Close" : "Menu"}
                    </button>
                </div>

                {/* Mobile dropdown */}
                {mobileOpen ? (
                    <div className="sm:hidden border-t border-[var(--uprise-border)] bg-[var(--uprise-card)]/90 backdrop-blur">
                        <div className="mx-auto max-w-6xl px-6 py-4">
                            <div className="grid gap-2 text-sm text-slate-700">
                                <a
                                    href="#mission"
                                    onClick={() => setMobileOpen(false)}
                                    className="rounded-xl px-3 py-2 hover:bg-[var(--uprise-card)]"
                                >
                                    Mission
                                </a>
                                <a
                                    href="#products"
                                    onClick={() => setMobileOpen(false)}
                                    className="rounded-xl px-3 py-2 hover:bg-[var(--uprise-card)]"
                                >
                                    Products
                                </a>
                                <Link
                                    href="/tally"
                                    onClick={() => setMobileOpen(false)}
                                    className="rounded-xl px-3 py-2 hover:bg-[var(--uprise-card)]"
                                >
                                    Tally
                                </Link>
                                <Link
                                    href="/lumen"
                                    onClick={() => setMobileOpen(false)}
                                    className="rounded-xl px-3 py-2 hover:bg-[var(--uprise-card)]"
                                >
                                    Lumen
                                </Link>
                                <a
                                    href="#contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="rounded-xl px-3 py-2 hover:bg-[var(--uprise-card)]"
                                >
                                    Contact
                                </a>

                                <div className="mt-2 grid gap-2">
                                    <Link
                                        href="/tally"
                                        onClick={() => setMobileOpen(false)}
                                        className="inline-flex items-center justify-center rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] px-4 py-3 text-sm font-medium text-slate-900 hover:opacity-95"
                                    >
                                        View Tally
                                    </Link>
                                    <Link
                                        href="/lumen"
                                        onClick={() => setMobileOpen(false)}
                                        className="inline-flex items-center justify-center rounded-2xl bg-[var(--uprise-navy)] px-4 py-3 text-sm font-medium text-white hover:opacity-95"
                                    >
                                        Explore Lumen
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </header>

            {/* Hero */}
            <section className="mx-auto max-w-6xl px-6 pb-16 pt-14">
                <div className="grid items-center gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--uprise-border)] bg-[var(--uprise-card)] px-3 py-1 text-xs text-slate-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--uprise-navy)]/70" />
                            Building calm technology across apps, books, and games
                        </div>

                        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                            Building calm, human-sovereign technology.
                        </h1>

                        <p className="mt-4 max-w-2xl text-base text-slate-600">
                            Uprise is a human-first AI studio creating calm, ethical digital companions and
                            tools for emotional support, creativity, and everyday life.
                        </p>

                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                            Uprise Studios builds thoughtful tools — apps, books, and games — designed to reduce
                            cognitive load, support wellbeing, and respect the human holding the device.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <Link
                                href="/lumen"
                                className="rounded-xl bg-[var(--uprise-navy)] px-5 py-3 text-sm font-medium text-white shadow-sm hover:opacity-95"
                            >
                                Explore Lumen
                            </Link>
                            <Link
                                href="/tally"
                                className="rounded-xl border border-[var(--uprise-border)] bg-[var(--uprise-card)]/80 px-5 py-3 text-sm font-medium text-slate-900 hover:opacity-95"
                            >
                                View Tally
                            </Link>
                            <a
                                href="#products"
                                className="rounded-xl border border-[var(--uprise-border)] bg-[var(--uprise-card)]/80 px-5 py-3 text-sm font-medium text-slate-900 hover:opacity-95"
                            >
                                View products
                            </a>
                            <span className="text-sm text-slate-500">
                                Early access registration lives on the Lumen page.
                            </span>
                        </div>
                    </div>

                    {/* Hero visual */}
                    <div className="lg:col-span-5">
                        <div className="relative overflow-hidden rounded-3xl border border-[var(--uprise-border)] bg-[var(--uprise-card)]/80 p-6 shadow-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
                            <div className="relative">
                                <div className="text-xs font-medium tracking-wide text-slate-600">THE HEARTBEAT</div>
                                <div className="mt-2 text-2xl font-semibold tracking-tight">Lumen (coming soon)</div>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    A protective AI companion designed to reduce cognitive stress, interrupt destructive
                                    spirals, and support long-term wellbeing — without dark patterns or data extraction.
                                </p>

                                <div className="mt-6 grid gap-3">
                                    {[
                                        { k: "Local-first", v: "Works offline. Your device is the source of truth." },
                                        { k: "Consent-first", v: "Memory only with explicit, revocable consent." },
                                        { k: "No dark patterns", v: "No streaks. No guilt. No engagement loops." },
                                    ].map((x) => (
                                        <div
                                            key={x.k}
                                            className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)]/80 p-4"
                                        >
                                            <div className="text-sm font-medium">{x.k}</div>
                                            <div className="mt-1 text-xs text-slate-600">{x.v}</div>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/lumen"
                                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[var(--uprise-navy)] px-5 py-3 text-sm font-medium text-white hover:opacity-95"
                                >
                                    Open Lumen page
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="mx-auto max-w-6xl px-6">
                <div className="h-px w-full bg-slate-200/70" />
            </div>

            {/* Mission */}
            <section id="mission" className="mx-auto max-w-6xl px-6 py-16">
                <div className="max-w-3xl">
                    <h2 className="text-2xl font-semibold tracking-tight">Mission</h2>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        We build small, well-designed products that help people feel lighter, clearer, and more
                        in control — without engagement traps, data extraction, or hidden incentives.
                    </p>

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        {[
                            { title: "Sovereignty", desc: "People stay in control of what’s stored, remembered, and shared." },
                            { title: "Care", desc: "Trauma-informed tone. Consent-first design. No pressure mechanics." },
                            { title: "Craft", desc: "Simple, durable, and calm — designed to be used for years." },
                        ].map((x) => (
                            <div
                                key={x.title}
                                className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)]/80 p-5 shadow-sm"
                            >
                                <div className="font-medium">{x.title}</div>
                                <div className="mt-2 text-sm text-slate-600">{x.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products */}
            <section id="products" className="mx-auto max-w-6xl px-6 pb-16">
                <h2 className="text-2xl font-semibold tracking-tight">Products</h2>
                <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">
                    Uprise spans multiple arms — wellbeing tools, creative work, and practical guides. Each
                    product exists for a reason: to reduce friction, increase clarity, and give people
                    something genuinely useful.
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {products.map((p) => {
                        const inner = (
                            <>
                                <div className="flex items-center justify-between gap-4">
                                    <div className="font-medium">{p.title}</div>
                                    <div
                                        className={[
                                            "rounded-full px-3 py-1 text-xs",
                                            p.highlight
                                                ? "bg-amber-100 text-amber-900 border border-amber-200"
                                                : "bg-[var(--uprise-card)] text-slate-700 border border-[var(--uprise-border)]",
                                        ].join(" ")}
                                    >
                                        {p.tag}
                                    </div>
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                            </>
                        );

                        return p.href ? (
                            <Link
                                key={p.title}
                                href={p.href}
                                className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)]/80 p-6 shadow-sm hover:opacity-95"
                            >
                                {inner}
                            </Link>
                        ) : (
                            <div
                                key={p.title}
                                className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)]/80 p-6 shadow-sm"
                            >
                                {inner}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Lumen spotlight */}
            <section id="lumen" className="mx-auto max-w-6xl px-6 pb-16">
                <div className="rounded-3xl border border-[var(--uprise-border)] bg-[var(--uprise-card)]/80 p-8 shadow-sm sm:p-10">
                    <div className="max-w-3xl">
                        <div className="text-xs font-medium tracking-wide text-slate-600">COMING SOON</div>
                        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Lumen</h2>

                        <p className="mt-4 text-slate-600 leading-relaxed">Your grounding, reflective life companion.</p>

                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Lumen is a protective AI companion designed to support emotional regulation, decision clarity, and long-term wellbeing.
                            It helps interrupt destructive spirals, reflect emotional and behavioural patterns, and provide grounded perspective
                            during moments of stress, impulsivity, or emotional overload.
                        </p>

                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Because most of us have felt alone in those moments — and no one should have to.
                        </p>

                        <p className="mt-4 text-slate-600 leading-relaxed">
                            A consent-first AI that helps with neurodivergent patterns like rumination or impulse, without exploitation.
                        </p>

                        <ul className="mt-6 space-y-2 text-slate-700">
                            <li>Protective memory: Only saves what you allow, revokes instantly.</li>
                            <li>Harm reduction: Gentle interruptions for rumination and impulse spirals.</li>
                            <li>Neurodivergent-aware: Built for minds that loop, fixate, or overload — without punishment or pressure.</li>
                            <li>Protective AI: Designed to shield users from harm, not extract value or optimise behaviour.</li>
                            <li>Zero dark patterns: No notifications, no gamification, no engagement tricks.</li>
                            <li>Civilisational hedge: Local-first, sovereign data by default.</li>
                            <li>Moonshot ready: Substrate for future Neuralink-like integrations.</li>
                        </ul>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/lumen"
                                className="rounded-xl bg-[var(--uprise-navy)] px-5 py-3 text-sm font-medium text-white hover:opacity-95"
                            >
                                Go to Lumen page
                            </Link>
                            <a
                                href="#contact"
                                className="rounded-xl border border-[var(--uprise-border)] bg-[var(--uprise-card)]/80 px-5 py-3 text-sm font-medium text-slate-900 hover:opacity-95"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section className="mt-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="rounded-3xl bg-[var(--uprise-panel-soft)] px-10 py-14">
                        <div className="mx-auto max-w-4xl">
                            <div className="text-xs font-semibold tracking-widest text-slate-600">UPRISE PRINCIPLES</div>

                            <h2 className="mt-3 text-2xl font-semibold text-slate-900">Calm technology, built with care.</h2>

                            <p className="mt-4 text-slate-700">
                                Uprise exists to build small, thoughtful tools that respect the human holding the device.
                                We design for sovereignty, emotional safety, and long-term wellbeing — not engagement,
                                extraction, or growth at all costs.
                            </p>

                            <div className="mt-10 space-y-8">
                                <div>
                                    <div className="text-lg font-semibold text-slate-900">Sovereignty</div>
                                    <p className="mt-1 text-slate-700">
                                        People stay in control of what’s stored, remembered, and shared. Consent is explicit, revocable, and respected by default.
                                    </p>
                                </div>

                                <div>
                                    <div className="text-lg font-semibold text-slate-900">Care</div>
                                    <p className="mt-1 text-slate-700">
                                        Trauma-informed tone. Consent-first design. No pressure mechanics, no coercive UX, no optimisation against human vulnerability.
                                    </p>
                                </div>

                                <div>
                                    <div className="text-lg font-semibold text-slate-900">Craft</div>
                                    <p className="mt-1 text-slate-700">
                                        Simple, durable, and calm — designed to be used for years, not churned through in weeks.
                                    </p>
                                </div>

                                <div>
                                    <div className="text-lg font-semibold text-slate-900">Ethics over growth</div>
                                    <p className="mt-1 text-slate-700">
                                        No dark patterns. No data extraction. No engagement traps. We choose slower, healthier progress over scale at any cost.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-14">
                                <p className="w-full text-center text-lg font-light italic text-slate-700">
                                    We are not building technology to capture attention. We are building technology to give it back.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <footer id="contact" className="mx-auto max-w-6xl px-6 py-14">
                <div className="border-t border-[var(--uprise-border)] pt-8 text-sm text-slate-600">
                    <p>Uprise Studios is a small, independent studio. We build slowly. We build carefully.</p>
                    <p className="mt-3">
                        📩{" "}
                        <a className="underline hover:text-slate-900" href="mailto:hello@uprisestudios.co.uk">
                            hello@uprisestudios.co.uk
                        </a>
                    </p>
                    <p className="mt-3 text-xs text-slate-600">
                        Privacy:{" "}
                        <Link className="underline hover:text-slate-900" href="/privacy">
                            privacy notices
                        </Link>
                    </p>
                    <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Uprise Studios</p>
                </div>
            </footer>
        </main>
    );
}
