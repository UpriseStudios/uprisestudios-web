import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            {/* Soft background haze */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-200/50 blur-3xl" />
                <div className="absolute top-24 right-[-120px] h-[420px] w-[420px] rounded-full bg-indigo-200/40 blur-3xl" />
                <div className="absolute bottom-[-140px] left-[-140px] h-[460px] w-[460px] rounded-full bg-slate-100 blur-3xl" />
            </div>


            {/* Top bar */}
            <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-xl bg-slate-900/90" />
                        <div className="font-semibold tracking-tight">Uprise Studios</div>
                    </div>

                    <nav className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
                        <a href="#mission" className="hover:text-slate-900">
                            Mission
                        </a>
                        <a href="#products" className="hover:text-slate-900">
                            Products
                        </a>
                        <a href="#lumen" className="hover:text-slate-900">
                            Lumen
                        </a>
                        <a href="#contact" className="hover:text-slate-900">
                            Contact
                        </a>

                        <a
                            href="#lumen"
                            className="ml-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800"
                        >
                            Coming soon
                        </a>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="mx-auto max-w-6xl px-6 pb-16 pt-14">
                <div className="grid items-center gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-900/70" />
                            Building calm technology across apps, books, and games
                        </div>

                        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                            Building calm, human-sovereign technology.
                        </h1>

                        <p className="mt-4 max-w-2xl text-base text-slate-600">
                            A human-first AI studio for calm companions, creative tools, and everyday life.
                        </p>


                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                            Uprise Studios builds thoughtful tools — apps, books, and games —
                            designed to reduce cognitive load, support wellbeing, and respect
                            the human holding the device.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href="#lumen"
                                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
                            >
                                Explore Lumen
                            </a>
                            <a
                                href="#products"
                                className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-medium text-slate-900 hover:border-slate-300"
                            >
                                View products
                            </a>
                            <span className="text-sm text-slate-500">
                                Early access registration will live on the Lumen page.
                            </span>
                        </div>
                    </div>

                    {/* Hero visual (abstract, premium, zero assets) */}
                    <div className="lg:col-span-5">
                        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
                            <div className="relative">
                                <div className="text-xs font-medium tracking-wide text-slate-600">
                                    THE HEARTBEAT
                                </div>
                                <div className="mt-2 text-2xl font-semibold tracking-tight">
                                    Lumen (coming soon)
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    A protective AI companion designed to reduce cognitive stress,
                                    interrupt destructive spirals, and support long-term wellbeing —
                                    without dark patterns or data extraction.
                                </p>

                                <div className="mt-6 grid gap-3">
                                    {[
                                        { k: "Local-first", v: "Works offline. Your device is the source of truth." },
                                        { k: "Consent-first", v: "Memory only with explicit, revocable consent." },
                                        { k: "No dark patterns", v: "No streaks. No guilt. No engagement loops." },
                                    ].map((x) => (
                                        <div
                                            key={x.k}
                                            className="rounded-2xl border border-slate-200 bg-white/70 p-4"
                                        >
                                            <div className="text-sm font-medium">{x.k}</div>
                                            <div className="mt-1 text-xs text-slate-600">{x.v}</div>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="/lumen"
                                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
                                >
                                    Open Lumen page
                                </a>
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
                        We build small, well-designed products that help people feel lighter,
                        clearer, and more in control — without engagement traps, data
                        extraction, or hidden incentives.
                    </p>

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        {[
                            { title: "Sovereignty", desc: "People stay in control of what’s stored, remembered, and shared." },
                            { title: "Care", desc: "Trauma-informed tone. Consent-first design. No pressure mechanics." },
                            { title: "Craft", desc: "Simple, durable, and calm — designed to be used for years." },
                        ].map((x) => (
                            <div
                                key={x.title}
                                className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm"
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
                    Uprise spans multiple arms — wellbeing tools, creative work, and practical guides.
                    Each product exists for a reason: to reduce friction, increase clarity,
                    and give people something genuinely useful.
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {[
                        {
                            title: "Lumen (coming soon)",
                            desc: "Our crown jewel in the making — a protective AI companion for emotional regulation, decision clarity, and long-term wellbeing.",
                            tag: "Heartbeat",
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
                    ].map((p) => (
                        <div
                            key={p.title}
                            className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div className="font-medium">{p.title}</div>
                                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                                    {p.tag}
                                </div>
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lumen spotlight */}
            <section id="lumen" className="mx-auto max-w-6xl px-6 pb-16">
                <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm sm:p-10">
                    <div className="max-w-3xl">
                        <div className="text-xs font-medium tracking-wide text-slate-600">COMING SOON</div>
                        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Lumen</h2>
                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Your grounding, reflective life companion.
                        </p>
                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Lumen is a protective AI companion designed to support emotional
                            regulation, decision clarity, and long-term wellbeing. It helps
                            interrupt destructive spirals, reflect emotional and behavioural
                            patterns, and provide grounded perspective during moments of stress,
                            impulsivity, or emotional overload.
                        </p>
                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Because most of us have felt alone in those moments — and no one should have to.
                        </p>
                        <p className="text-slate-600 leading-relaxed">A consent-first AI that helps with neurodivergent patterns like rumination or impulse, without exploitation.</p>
                        <p className="mt-4 text-slate-600 leading-relaxed">
                            <li>Protective memory: Only saves what you allow, revokes instantly</li>
                            <li>Harm reduction: Gentle interruptions for spirals</li>
                            <li>Zero dark patterns: No notifications, no gamification</li>
                            <li>Civilizational hedge: Local-first, sovereign data</li>
                            <li>Moonshot ready: Substrate for Neuralink-like integrations</li>
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="/lumen"
                                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
                            >
                                Go to Lumen page
                            </a>
                            <a
                                href="#contact"
                                className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-medium text-slate-900 hover:border-slate-300"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rest of your sections (Principles, Team, Contact)  */}
            <section className="py-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Principles</h2>
                <ul className="max-w-3xl mx-auto space-y-6 text-slate-600">
                    <li>Protective AI: Lumen shields users from harm, with explicit consent only.</li>
                    <li>Neurodivergent Focus: Reduces rumination, impulse — real harm reduction.</li>
                    <li>No Dark Patterns: Calm design, no addiction loops.</li>
                    <li>Civilizational Hedge: Local data, revoke-anytime for sovereignty.</li>
                    <li>Long-Term Moonshot: Building for a future where AI enhances humanity.</li>
                </ul>
            </section>

            {/* Contact */}
            <footer id="contact" className="mx-auto max-w-6xl px-6 py-14">
                <div className="border-t border-slate-200/70 pt-8 text-sm text-slate-600">
                    <p>Uprise Studios is a small, independent studio. We build slowly. We build carefully.</p>
                    <p className="mt-3">
                        📩{" "}
                        <a className="underline hover:text-slate-900" href="mailto:hello@uprisestudios.co.uk">
                            hello@uprisestudios.co.uk
                        </a>
                    </p>
                    <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Uprise Studios</p>
                </div>
            </footer>
        </main>
    );
}

