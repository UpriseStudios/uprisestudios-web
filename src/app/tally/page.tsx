import Link from "next/link";

export default function TallyPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(900px circle at 60% -10%, rgba(56, 189, 248, 0.18), transparent 55%), var(--uprise-bg)",
        color: "var(--uprise-ink)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm text-slate-700 underline hover:text-slate-900">
            ← Back to Uprise
          </Link>
          <span className="rounded-full border border-[var(--uprise-border)] bg-[var(--uprise-card)] px-3 py-1 text-xs text-slate-700">
            Finance companion (in progress)
          </span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1 className="text-5xl font-semibold tracking-tight">Tally</h1>
            <p className="mt-3 text-lg text-slate-700">A calm, premium budgeting companion — privacy-first by design.</p>

            <p className="mt-6 max-w-xl leading-relaxed text-slate-700">
              Tally helps you understand your runway, plan your month, and stay grounded with money — without turning your life into a
              gamified engagement loop.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-xl bg-[var(--uprise-navy)] px-5 py-3 text-sm font-medium text-white">
                Android first
              </span>
              <span className="rounded-xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] px-5 py-3 text-sm font-medium text-slate-900">
                Local-first core
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <section className="rounded-3xl border border-[var(--uprise-border)] bg-[var(--uprise-panel)] shadow-sm">
              <div className="px-7 py-7">
                <div className="text-xs font-semibold tracking-widest text-slate-700">STYLE HINTS</div>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] p-5">
                    <div className="font-semibold">Premium finance feel</div>
                    <div className="mt-1 text-sm text-slate-700">Crisp typography, soft depth, and a subtle blue accent.</div>
                  </div>
                  <div className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] p-5">
                    <div className="font-semibold">Clarity over complexity</div>
                    <div className="mt-1 text-sm text-slate-700">Runway, recurring, and simple “what happens next” forecasting.</div>
                  </div>
                  <div className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] p-5 md:col-span-2">
                    <div className="font-semibold">Privacy-first by default</div>
                    <div className="mt-1 text-sm text-slate-700">Most intelligence runs on-device. Connections are optional.</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-12">
          <section className="rounded-3xl border border-[var(--uprise-border)] bg-[var(--uprise-panel)] shadow-sm">
            <div className="px-7 py-7">
              <div className="text-xs font-semibold tracking-widest text-slate-700">CORE FEATURES</div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {[
                  { t: "Runway & foresight", d: "See how long your money lasts and what to change before payday." },
                  { t: "Manual + bank transactions", d: "Manual always works. Bank connections are optional (open banking)." },
                  { t: "Recurring & bills", d: "Recurring items so the month makes sense at a glance." },
                  { t: "Calm notifications", d: "Helpful nudges — never guilt, streaks, or pressure." },
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] p-5">
                    <div className="font-semibold">{x.t}</div>
                    <div className="mt-1 text-sm text-slate-700">{x.d}</div>
                  </div>
                ))}
              </div>
              <div className="mt-7 text-sm text-slate-700">
                Privacy notice:{" "}
                <Link href="/privacy/tally" className="underline hover:text-slate-900">
                  Tally privacy notice
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
