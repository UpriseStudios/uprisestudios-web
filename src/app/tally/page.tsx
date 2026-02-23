// app/tally/page.tsx
import Link from "next/link";
import Image from "next/image";
import PrivacyCarousel from "./PrivacyCarousel";

export const metadata = {
  title: "Tally — Privacy-first finance | Uprise Studios",
  description:
    "A calm, privacy-first way to understand your money. Local-first by default, runway forecasting, recurring bills, and optional end-to-end encrypted sync.",
};

const CONTACT_EMAIL = "tally@uprisestudios.co.uk";

// Change when ready:
const BETA_LINK = "/tally/beta"; // or your Play closed-test link
const PRIVACY_LINK = "/privacy"; // or /tally/privacy

// Screenshot paths (put these in /public/tally/)
const SHOTS = {
  heroToday: "/tally/today-manual.png",
  heroRunway: "/tally/runway.png",
  showcaseInsights: "/tally/insights.png",
  showcaseForesights: "/tally/foresights.png",
  showcaseRunway: "/tally/runway.png",
  showcasePrivacy: "/tally/privacy-model-change.png",
  icon: "/tally/icon.png", // your Tally icon
};

export default function TallyPage() {
  return (
    <main className="min-h-screen bg-[#070B12] text-[#EAF2FF]">
      {/* Premium background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[rgba(30,255,221,0.18)] blur-[90px]" />
        <div className="absolute -bottom-56 right-[-120px] h-[620px] w-[620px] rounded-full bg-[rgba(136,77,255,0.12)] blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,18,0.10),rgba(7,11,18,0.80))]" />
      </div>

      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[rgba(255,255,255,0.06)] ring-1 ring-[rgba(255,255,255,0.10)]">
            <Image src={SHOTS.icon} alt="Tally" width={30} height={30} className="rounded-xl" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">Uprise Studios</div>
            <div className="text-xs text-[rgba(234,242,255,0.68)]">Tally</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 text-sm md:flex">
          <a
            href="#showcase"
            className="rounded-full px-3 py-2 text-[rgba(234,242,255,0.78)] hover:bg-[rgba(255,255,255,0.06)]"
          >
            Product
          </a>
          <a
            href="#features"
            className="rounded-full px-3 py-2 text-[rgba(234,242,255,0.78)] hover:bg-[rgba(255,255,255,0.06)]"
          >
            Features
          </a>
          <a
            href="#privacy"
            className="rounded-full px-3 py-2 text-[rgba(234,242,255,0.78)] hover:bg-[rgba(255,255,255,0.06)]"
          >
            Privacy
          </a>
          <a
            href="#beta"
            className="rounded-full px-3 py-2 text-[rgba(234,242,255,0.78)] hover:bg-[rgba(255,255,255,0.06)]"
          >
            Beta
          </a>
          <Link
            href={BETA_LINK}
            className="rounded-full bg-[rgba(30,255,221,0.14)] px-4 py-2 font-semibold text-[rgba(234,242,255,0.95)] ring-1 ring-[rgba(30,255,221,0.30)] hover:bg-[rgba(30,255,221,0.20)]"
          >
            Join beta
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-6">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.2fr]">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,255,255,0.06)] px-3 py-1 text-xs text-[rgba(234,242,255,0.78)] ring-1 ring-[rgba(255,255,255,0.10)]">
              <span className="h-2 w-2 rounded-full bg-[rgba(30,255,221,0.95)]" />
              Privacy-first finance • Local-first by default
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Understand your money — calmly.
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[rgba(234,242,255,0.72)]">
              See what’s safe to spend, spot issues early, and plan the month without ads, trackers,
              or judgement. Works offline. Sync is optional and end-to-end encrypted.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={BETA_LINK}
                className="rounded-2xl bg-[rgba(30,255,221,0.16)] px-5 py-3 font-semibold text-[rgba(234,242,255,0.95)] ring-1 ring-[rgba(30,255,221,0.34)] hover:bg-[rgba(30,255,221,0.22)]"
              >
                Join the beta
              </Link>

              <a
                href="#privacy"
                className="rounded-2xl bg-[rgba(255,255,255,0.06)] px-5 py-3 font-semibold text-[rgba(234,242,255,0.90)] ring-1 ring-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.09)]"
              >
                Privacy promise
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Tally Beta — I’d like to help test")}`}
                className="rounded-2xl bg-[rgba(255,255,255,0.04)] px-5 py-3 font-semibold text-[rgba(234,242,255,0.80)] ring-1 ring-[rgba(255,255,255,0.10)] hover:bg-[rgba(255,255,255,0.07)]"
              >
                Email: {CONTACT_EMAIL}
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-6 text-sm text-[rgba(234,242,255,0.55)]">
              Private by default. No ads. No data selling.
            </div>

            {/* Chips */}
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-[rgba(234,242,255,0.70)]">
              {[
                "Works offline",
                "No ads",
                "No trackers",
                "Manual or bank",
                "Runway foresight",
                "Encrypted sync (optional)",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-[rgba(255,255,255,0.05)] px-3 py-1 ring-1 ring-[rgba(255,255,255,0.10)]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Hero screenshots */}
          <div className="relative">
            <div className="rounded-3xl bg-[rgba(255,255,255,0.06)] p-6 ring-1 ring-[rgba(255,255,255,0.06)]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">Real app UI</div>
                  <div className="mt-1 text-sm text-[rgba(234,242,255,0.68)]">
                    Calm, premium finance design from the first moment.
                  </div>
                </div>
                <div className="rounded-full bg-[rgba(30,255,221,0.14)] px-3 py-1 text-xs font-semibold ring-1 ring-[rgba(30,255,221,0.28)]">
                  Beta
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <PhoneShot src={SHOTS.heroToday} label="Today (Manual mode)" maxW={300} />
                <PhoneShot src={SHOTS.heroRunway} label="Runway" maxW={300} />
              </div>

              <div className="mt-5 rounded-2xl bg-[rgba(0,0,0,0.22)] p-4 ring-1 ring-[rgba(255,255,255,0.08)]">
                <div className="text-xs text-[rgba(234,242,255,0.70)]">Tip</div>
                <div className="mt-1 text-sm">
                  Use the runway + foresights to get warnings{" "}
                  <span className="font-semibold">before</span> problems happen.
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-[rgba(30,255,221,0.18)] blur-[80px]" />
          </div>
        </div>
      </section>

      {/* PERFECT Screenshot Showcase */}
      <section id="showcase" className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">The product, at a glance</h2>
            <p className="mt-2 max-w-3xl text-[rgba(234,242,255,0.70)]">
              Everything you see here is real. Tally computes insights on-device and keeps privacy
              explicit — not buried in fine print.
            </p>
          </div>

          <Link
            href={BETA_LINK}
            className="w-fit rounded-2xl bg-[rgba(30,255,221,0.14)] px-5 py-3 font-semibold text-[rgba(234,242,255,0.95)] ring-1 ring-[rgba(30,255,221,0.30)] hover:bg-[rgba(30,255,221,0.20)]"
          >
            Join beta
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <ShowcaseCard
            kicker="Insights"
            title="Your financial picture, on-device"
            desc="Foresights, patterns, subscriptions, categories — computed locally."
            accent="teal"
          >
            <WideShot src={SHOTS.showcaseInsights} />
          </ShowcaseCard>

          <ShowcaseCard
            kicker="Foresights"
            title="Warnings before problems happen"
            desc="Buffer low, spending accelerating, income changes — surfaced early."
            accent="purple"
          >
            <WideShot src={SHOTS.showcaseForesights} />
          </ShowcaseCard>

          <ShowcaseCard
            kicker="Privacy"
            title="Consent-driven, end-to-end encryption"
            desc="Device-only by default. If you enable sync, encryption happens before upload."
            accent="gold"
          >
            <WideShot src={SHOTS.showcasePrivacy} />
          </ShowcaseCard>
        </div>

        <div className="mt-6 rounded-3xl bg-[rgba(255,255,255,0.04)] p-6 ring-1 ring-[rgba(255,255,255,0.08)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold">Premium by default</div>
              <div className="mt-1 text-sm text-[rgba(234,242,255,0.70)]">
                A finance tool should feel calm and trustworthy from the very first moment.
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Pill>Local-first</Pill>
              <Pill>Offline support</Pill>
              <Pill>No ads</Pill>
              <Pill>No trackers</Pill>
              <Pill>Optional encrypted sync</Pill>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">What Tally helps with</h2>
        <p className="mt-2 max-w-2xl text-[rgba(234,242,255,0.70)]">
          Built to be calm and clear — with powerful forecasting, recurring bills, and privacy-first
          defaults.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Feature
            title="Runway & foresight"
            desc="Know what’s safe to spend and get early warnings before problems happen."
          />
          <Feature
            title="Recurring bills & salary"
            desc="Set up direct debits and paydays so your month is always predictable."
          />
          <Feature
            title="Manual first, bank optional"
            desc="Track privately with manual entries — connect a bank only if you want."
          />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Feature
            title="Cash-flow calendar"
            desc="See upcoming bills and income plotted against your balance — always know what’s coming."
          />
          <Feature
            title="Subscriptions & ROI"
            desc="Track recurring costs and understand what’s worth keeping."
          />
          <Feature
            title="Mood & money (optional)"
            desc="A gentle layer for financial wellbeing — no judgement, no manipulation."
          />
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Privacy promise</h2>
            <p className="mt-2 max-w-3xl text-[rgba(234,242,255,0.72)]">
              Device-only by default. If you enable multi-device sync, your data is encrypted on-device
              before upload and stored as ciphertext only.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={PRIVACY_LINK}
              className="rounded-2xl bg-[rgba(255,255,255,0.06)] px-5 py-3 font-semibold text-[rgba(234,242,255,0.90)] ring-1 ring-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.09)]"
            >
              Privacy details
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-2xl bg-[rgba(30,255,221,0.14)] px-5 py-3 font-semibold text-[rgba(234,242,255,0.95)] ring-1 ring-[rgba(30,255,221,0.30)] hover:bg-[rgba(30,255,221,0.20)]"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-6">
          <PrivacyCarousel />
        </div>
      </section>

      {/* Beta */}
      <section id="beta" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl bg-[rgba(255,255,255,0.06)] p-8 ring-1 ring-[rgba(255,255,255,0.10)]">
          <h2 className="text-2xl font-semibold tracking-tight">Join the closed beta</h2>
          <p className="mt-2 max-w-3xl text-[rgba(234,242,255,0.72)]">
            Looking for ~100 testers who care about privacy and calm design. During beta, everyone gets
            full Pro access so we can focus on stability and premium polish.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={BETA_LINK}
              className="rounded-2xl bg-[rgba(30,255,221,0.16)] px-6 py-3 font-semibold text-[rgba(234,242,255,0.95)] ring-1 ring-[rgba(30,255,221,0.34)] hover:bg-[rgba(30,255,221,0.22)]"
            >
              Join beta
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Tally Beta — Feedback / bug report")}`}
              className="rounded-2xl bg-[rgba(255,255,255,0.06)] px-6 py-3 font-semibold text-[rgba(234,242,255,0.90)] ring-1 ring-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.09)]"
            >
              Send feedback
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Mini title="What to test" desc="Manual + recurring, runway, notifications, lock, onboarding clarity." />
            <Mini title="What you get" desc="Full Pro access while testing. Fast iteration based on feedback." />
            <Mini title="Privacy expectation" desc="No hidden uploads. Sync is optional and consent-driven." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-[rgba(255,255,255,0.08)] pt-8 md:flex-row md:items-center">
          <div className="text-sm text-[rgba(234,242,255,0.62)]">
            © {new Date().getFullYear()} Uprise Studios • Tally
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href={PRIVACY_LINK} className="text-[rgba(234,242,255,0.70)] hover:text-[rgba(234,242,255,0.95)]">
              Privacy
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[rgba(234,242,255,0.70)] hover:text-[rgba(234,242,255,0.95)]">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function PhoneShot({
  src,
  label,
  maxW,
}: {
  src: string;
  label: string;
  maxW: number;
}) {
  return (
    <div className="rounded-2xl bg-[rgba(0,0,0,0.20)] p-4 ring-1 ring-[rgba(255,255,255,0.08)]">
      <div className="mb-3 text-xs font-semibold text-[rgba(234,242,255,0.72)]">{label}</div>
      <div
        className="relative mx-auto aspect-[9/19] w-full overflow-hidden rounded-3xl ring-1 ring-[rgba(255,255,255,0.10)]"
        style={{ maxWidth: `${maxW}px` }}
      >
        <Image src={src} alt={label} fill className="object-cover" sizes={`${maxW}px`} />
      </div>
    </div>
  );
}

function WideShot({ src }: { src: string }) {
  return (
    <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[rgba(0,0,0,0.20)] ring-1 ring-[rgba(255,255,255,0.08)]">
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
    </div>
  );
}

function ShowcaseCard({
  kicker,
  title,
  desc,
  accent,
  children,
}: {
  kicker: string;
  title: string;
  desc: string;
  accent: "teal" | "purple" | "gold";
  children: React.ReactNode;
}) {
  const accentRing =
    accent === "teal"
      ? "ring-[rgba(30,255,221,0.18)]"
      : accent === "purple"
      ? "ring-[rgba(136,77,255,0.18)]"
      : "ring-[rgba(255,199,77,0.18)]";

  const accentDot =
    accent === "teal"
      ? "bg-[rgba(30,255,221,0.90)]"
      : accent === "purple"
      ? "bg-[rgba(136,77,255,0.90)]"
      : "bg-[rgba(255,199,77,0.90)]";

  return (
    <div
      className={`group rounded-3xl bg-[rgba(255,255,255,0.06)] p-6 ring-1 ring-[rgba(255,255,255,0.10)] ${accentRing} transition hover:bg-[rgba(255,255,255,0.07)]`}
    >
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${accentDot}`} />
        <div className="text-xs font-semibold tracking-wide text-[rgba(234,242,255,0.70)]">
          {kicker.toUpperCase()}
        </div>
      </div>

      <div className="mt-3 text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-[rgba(234,242,255,0.70)]">{desc}</div>

      <div className="transition group-hover:opacity-95">{children}</div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-[rgba(255,255,255,0.05)] px-3 py-1 text-xs text-[rgba(234,242,255,0.72)] ring-1 ring-[rgba(255,255,255,0.10)]">
      {children}
    </span>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl bg-[rgba(255,255,255,0.06)] p-6 ring-1 ring-[rgba(255,255,255,0.10)]">
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-[rgba(234,242,255,0.72)]">{desc}</div>
    </div>
  );
}

function Mini({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-[rgba(0,0,0,0.20)] p-5 ring-1 ring-[rgba(255,255,255,0.08)]">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-[rgba(234,242,255,0.70)]">{desc}</div>
    </div>
  );
}