import Link from "next/link";

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

function IconCheck({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

export default function MarketplaceSuccess() {
    return (
        <main className="min-h-screen bg-[var(--uprise-bg)] text-[var(--uprise-ink)] flex flex-col">

            {/* Ambient background */}
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-emerald-200/20 blur-[100px]" />
                <div className="absolute inset-0 dot-grid opacity-30" />
            </div>

            {/* Nav */}
            <header className="border-b border-[var(--uprise-border-subtle)] bg-[var(--uprise-card)]/85 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
                    <Link href="/" className="flex items-center gap-3">
                        <LogoMark size={30} />
                        <span className="text-sm font-semibold tracking-tight hidden sm:block">Uprise Studios</span>
                    </Link>
                    <Link href="/marketplace"
                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                        ← Back to Marketplace
                    </Link>
                </div>
            </header>

            {/* Content */}
            <div className="flex-1 flex items-center justify-center px-6 py-20">
                <div className="w-full max-w-lg text-center animate-fade-in-up">

                    {/* Success icon */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="h-24 w-24 rounded-full bg-emerald-100 border-2 border-emerald-200 flex items-center justify-center text-emerald-600 shadow-lg">
                                <IconCheck size={40} />
                            </div>
                            <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-emerald-500 border-2 border-[var(--uprise-bg)] flex items-center justify-center">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="white" stroke="none">
                                    <polyline points="20 6 9 17 4 12" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="text-[10px] font-bold tracking-[0.2em] text-emerald-700 mb-3">PAYMENT CONFIRMED</div>
                    <h1 className="text-4xl font-semibold tracking-tight text-[var(--uprise-ink)] mb-4">
                        Purchase complete.
                    </h1>
                    <p className="text-slate-600 leading-relaxed mb-8 max-w-sm mx-auto">
                        Thank you for your purchase. You'll receive your receipt by email shortly.
                        Download and delivery instructions will be included.
                    </p>

                    {/* Info cards */}
                    <div className="grid gap-3 mb-8 text-left">
                        {[
                            { label: "Receipt", desc: "A payment receipt has been sent to your email address." },
                            { label: "Download", desc: "Download links and instructions will arrive in the same email." },
                            { label: "Support", desc: "Questions? Reach us at hello@uprisestudios.co.uk anytime." },
                        ].map((item) => (
                            <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-[var(--uprise-border-subtle)] bg-[var(--uprise-card)] px-5 py-4 shadow-sm">
                                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 mt-0.5">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/marketplace"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--uprise-navy)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--uprise-navy-hover)] shadow-md transition-all hover:-translate-y-0.5">
                            Back to Marketplace
                        </Link>
                        <a href="mailto:hello@uprisestudios.co.uk"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] px-6 py-3.5 text-sm font-semibold text-slate-900 hover:bg-[var(--uprise-panel)] shadow-sm transition-all hover:-translate-y-0.5">
                            Need help?
                        </a>
                    </div>

                    <div className="mt-10 text-xs text-slate-400">
                        © {new Date().getFullYear()} Uprise Studios · No dark patterns, ever.
                    </div>
                </div>
            </div>
        </main>
    );
}
