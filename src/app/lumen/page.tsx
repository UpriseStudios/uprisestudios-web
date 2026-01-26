// src/app/Lumen/page.tsx
import Link from "next/link";

export default function LumenPage() {
    return (
        <div className="min-h-screen bg-[var(--uprise-bg)] text-slate-900">
            <main className="mx-auto max-w-6xl px-6 py-14">
                {/* Top nav */}
                <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Link href="/" className="inline-flex items-center gap-2 hover:text-slate-900">
                        <span aria-hidden="true">←</span>
                        <span>Back to Uprise</span>
                    </Link>

                    <span className="text-slate-300">/</span>

                    <span className="inline-flex items-center rounded-full border border-[var(--uprise-border)] bg-[#fdfbf6] px-3 py-1 text-xs text-slate-700">
                        The heartbeat (coming soon)
                    </span>
                </div>

                {/* Hero */}
                <section className="relative mt-10">
                    {/* Chef's kiss aura */}
                    <div
                        className="
              pointer-events-none absolute inset-x-0 -top-28 h-72
              bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.18),transparent_70%)]
              blur-3xl
            "
                    />

                    <div className="relative">
                        <div className="flex items-start gap-3">
                            <div className="mt-2 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--uprise-border)] bg-[#fdfbf6] shadow-sm">
                                <span aria-hidden="true" className="text-lg">
                                    ✦
                                </span>
                            </div>

                            <div>
                                <h1 className="text-5xl font-semibold tracking-tight text-slate-900">
                                    Lumen
                                </h1>
                                <p className="mt-2 text-lg text-slate-700">
                                    Your grounding, reflective life companion.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 max-w-2xl space-y-4 text-slate-700">
                            <p>
                                Lumen is a protective AI companion designed to support emotional
                                regulation, decision clarity, and long-term wellbeing. It helps
                                interrupt destructive spirals, reflect patterns, and offer
                                grounded perspective during moments of stress, impulsivity, or
                                overload.
                            </p>
                            <p className="text-slate-600">
                                Because most of us have felt alone in those moments, and no one
                                should have to.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Principles panel */}
                <section
                    className="
            mt-12 rounded-2xl border border-[var(--uprise-border)]
            bg-[var(--uprise-panel)] shadow-sm
          "
                >
                    <div className="px-6 py-6">
                        <div className="text-xs font-semibold tracking-widest text-slate-600">
                            DESIGN PRINCIPLES
                        </div>

                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            <div className="rounded-xl border border-[var(--uprise-border)] bg-[#fdfbf6] p-5">
                                <div className="font-semibold text-slate-900">Local-first</div>
                                <div className="mt-1 text-sm text-slate-600">
                                    Works offline. Your device is the source of truth.
                                </div>
                            </div>

                            <div className="rounded-xl border border-[var(--uprise-border)] bg-[#fdfbf6] p-5">
                                <div className="font-semibold text-slate-900">Consent-first</div>
                                <div className="mt-1 text-sm text-slate-600">
                                    Memory only with explicit, revocable consent.
                                </div>
                            </div>

                            <div className="rounded-xl border border-[var(--uprise-border)] bg-[#fdfbf6] p-5 md:col-span-1">
                                <div className="font-semibold text-slate-900">No dark patterns</div>
                                <div className="mt-1 text-sm text-slate-600">
                                    No streaks. No guilt. No engagement loops.
                                </div>
                            </div>

                            <div className="rounded-xl border border-[var(--uprise-border)] bg-[#fdfbf6] p-5 md:col-span-2">
                                <div className="text-sm text-slate-700">
                                    Cloud sync will be opt-in only. If enabled, it will be end-to-end
                                    encrypted. Consent can be withdrawn and data purged immediately.
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 text-center text-sm text-slate-600">
                            Early access is coming soon. Lumen is in active development.
                        </div>
                    </div>
                </section>

                {/* Early access panel (placeholder mode) */}
                <section
                    className="
            mt-10 rounded-2xl border border-[var(--uprise-border)]
            bg-[var(--uprise-panel)] shadow-sm
          "
                >
                    <div className="px-6 py-6">
                        <h2 className="text-lg font-semibold text-slate-900">
                            Early access registration
                        </h2>

                        <p className="mt-2 max-w-2xl text-sm text-slate-700">
                            Register your interest and we will email you when early access opens.
                            Email addresses will not be used for anything else and will be deleted
                            after notification.
                        </p>

                        <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center">
                            <input
                                disabled
                                placeholder="you@example.com"
                                className="
                  w-full rounded-xl border border-[var(--uprise-border)]
                  bg-[#fdfbf6] px-4 py-3 text-sm text-slate-900
                  placeholder:text-slate-400
                  md:flex-1
                "
                            />

                            <button
                                disabled
                                className="
                  rounded-xl border border-[var(--uprise-border)]
                  bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-500
                "
                            >
                                Coming soon
                            </button>
                        </div>

                        <div className="mt-3 text-xs text-slate-500">
                            Note: This form will go live once the automated, no-human-access storage
                            is wired in.
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section className="mt-12 pb-8">
                    <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
                    <p className="mt-2 text-sm text-slate-700">
                        For general enquiries:{" "}
                        <a className="underline hover:text-slate-900" href="mailto:hello@uprisestudios.co.uk">
                            hello@uprisestudios.co.uk
                        </a>
                    </p>
                </section>
            </main>
        </div>
    );
}
