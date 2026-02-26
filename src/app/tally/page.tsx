// app/tally/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Tally — Privacy first finance | Uprise Studios",
  description:
    "A calm, privacy first way to understand your money. Local first by default, runway forecasting, recurring bills, and optional end to end encrypted sync.",
};

const CONTACT_EMAIL = "tally@uprisestudios.co.uk";

// Update these when ready:
const BETA_LINK = "/tally/beta";
const PRIVACY_LINK = "/tally/privacy";

const ASSETS = {
  icon: "/tally/icon.png",

  heroToday: "/tally/today-manual.png",
  heroRunway: "/tally/runway.png",

  insights: "/tally/insights.png",
  foresights: "/tally/foresights.png",
  privacy: "/tally/privacy-model-change.png",

  playBadge: "/badges/google-play-coming-soon.svg",
  appStoreBadge: "/badges/app-store-coming-soon.svg",

  privacySlides: ["/tally/privacy-1.png", "/tally/privacy-2.png", "/tally/privacy-3.png"],
};

export default function TallyPage() {
  return (
    <main className="min-h-screen bg-[#070B12] text-[#EAF2FF]">
      <PremiumBackground />
      <Header />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-6">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.15fr]">
          <HeroCopy />
          <HeroPhonesStable />
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section id="showcase" className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">The product, at a glance</h2>
            <p className="mt-2 max-w-3xl text-[rgba(234,242,255,0.72)]">
              Real screens. On device insights. Privacy explained clearly.
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
          <ShowcaseCard kicker="Insights" title="Your financial picture, on device" desc="Foresights, patterns, subscriptions all computed locally." accent="teal">
            <div className="mt-5">
              <ScreenTeaser src={ASSETS.insights} alt="Insights screen" accent="teal" />
            </div>
          </ShowcaseCard>

          <ShowcaseCard kicker="Foresights" title="Warnings before problems happen" desc="Buffer low, spending accelerating, income changes all surfaced early." accent="purple">
            <div className="mt-5">
              <ScreenTeaser src={ASSETS.foresights} alt="Foresights screen" accent="purple" />
            </div>
          </ShowcaseCard>

          <ShowcaseCard kicker="Privacy" title="Consent-driven, end-to-end encryption" desc="Device-only by default. If you enable sync, encryption happens before upload." accent="gold">
            <div className="mt-5">
              <ScreenTeaser src={ASSETS.privacy} alt="Privacy screen" accent="gold" />
            </div>
          </ShowcaseCard>
        </div>

        <div className="mt-6 rounded-3xl bg-[rgba(255,255,255,0.04)] p-6 ring-1 ring-[rgba(255,255,255,0.08)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold">Premium from the first moment</div>
              <div className="mt-1 text-sm text-[rgba(234,242,255,0.70)]">
                A finance tool should feel calm, trustworthy, and clear. Instantly.
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Pill>Local-first</Pill>
              <Pill>Works offline</Pill>
              <Pill>No ads</Pill>
              <Pill>No trackers</Pill>
              <Pill>Optional encrypted sync</Pill>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TALLY */}
      <section id="difference" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">How Tally is different</h2>
        <p className="mt-2 max-w-3xl text-[rgba(234,242,255,0.72)]">
          Most finance apps are built around tracking, ads, and nudges. Tally is built around calm clarity — with
          privacy as a first-class feature.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Pillar title="Local-first by default" desc="Your data stays on your device. No background uploads. No silent analytics." tag="Sovereignty" />
          <Pillar title="Runway beats budgets" desc="Instead of guilt driven budgets, Tally shows what’s safe to spend and what’s coming next." tag="Clarity" />
          <Pillar title="Privacy is a feature" desc="If you enable sync, encryption happens on device first. Server stores ciphertext only." tag="Trust" />
        </div>

        <div className="mt-6 rounded-3xl bg-[rgba(0,0,0,0.22)] p-6 ring-1 ring-[rgba(255,255,255,0.08)]">
          <div className="text-sm font-semibold">The promise</div>
          <div className="mt-2 text-sm text-[rgba(234,242,255,0.72)]">
            No shame. No manipulation. No selling your data. Just a calm financial picture you can trust.
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">What Tally helps with</h2>
        <p className="mt-2 max-w-2xl text-[rgba(234,242,255,0.72)]">
          Built to be calm and clear with forecasting, recurring bills, and privacy first defaults.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Feature title="Runway & foresight" desc="Know what’s safe to spend and get early warnings before problems happen." />
          <Feature title="Recurring bills & salary" desc="Set up direct debits and paydays so your month is predictable." />
          <Feature title="Manual first, bank optional" desc="Track privately with manual entries. Connect a bank only if you want." />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Feature title="Cash-flow calendar" desc="See bills and income plotted against your balance, always know what’s coming." />
          <Feature title="Subscriptions & ROI" desc="Understand recurring costs and what’s worth keeping." />
          <Feature title="Mood & money (optional)" desc="A gentle wellbeing layer, no judgement, no manipulation." />
        </div>
      </section>

      {/* PRIVACY */}
      <section id="privacy" className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Privacy promise</h2>
            <p className="mt-2 max-w-3xl text-[rgba(234,242,255,0.72)]">
              Device-only by default. If you enable multi-device sync, your data is encrypted on-device before upload
              and stored as ciphertext only.
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

        <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-[rgba(255,255,255,0.06)] p-6 ring-1 ring-[rgba(255,255,255,0.10)]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[rgba(30,255,221,0.95)]" />
              <div className="text-xs font-semibold tracking-wide text-[rgba(234,242,255,0.70)]">PRIVACY MODEL</div>
            </div>
            <div className="mt-3 text-lg font-semibold">Device-only → optional encrypted sync</div>
            <p className="mt-2 text-sm leading-relaxed text-[rgba(234,242,255,0.72)]">
              Turning on sync changes your privacy model. Tally explains this clearly and requires consent — you stay in control.
            </p>

            <div className="mt-5">
              <PrivacyMiniCarousel slides={ASSETS.privacySlides} />
            </div>
          </div>

          <div className="rounded-3xl bg-[rgba(255,255,255,0.04)] p-6 ring-1 ring-[rgba(255,255,255,0.08)]">
            <div className="text-sm font-semibold">What we do (and don’t do)</div>
            <ul className="mt-4 space-y-3 text-sm text-[rgba(234,242,255,0.72)]">
              <li className="flex gap-2"><Check /> No ads, no trackers, no third-party analytics.</li>
              <li className="flex gap-2"><Check /> Local first by default. Works offline.</li>
              <li className="flex gap-2"><Check /> Sync is optional and end to end encrypted.</li>
              <li className="flex gap-2"><Check /> You can disable sync at any time.</li>
              <li className="flex gap-2"><Warn /> Cloud provider stores encrypted data (cannot read it).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BETA */}
      <section id="beta" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl bg-[rgba(255,255,255,0.06)] p-8 ring-1 ring-[rgba(255,255,255,0.10)]">
          <h2 className="text-2xl font-semibold tracking-tight">Join the closed beta</h2>
          <p className="mt-2 max-w-3xl text-[rgba(234,242,255,0.72)]">
            Looking for ~100 testers who care about privacy and calm design. During beta, everyone gets Pro so we can focus on
            stability and premium polish.
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
            <Mini title="What you get" desc="Full Pro access while testing. Fast iteration from feedback." />
            <Mini title="Privacy expectation" desc="No hidden uploads. Sync is optional and consent-driven." />
          </div>

          <div className="mt-7 flex flex-wrap gap-3 opacity-90">
            <StoreBadge src={ASSETS.playBadge} alt="Google Play — coming soon" />
            <StoreBadge src={ASSETS.appStoreBadge} alt="App Store — coming soon" />
          </div>

          <div className="mt-5 text-sm text-[rgba(234,242,255,0.55)]">
            Contact:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[rgba(30,255,221,0.95)] hover:underline">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* =============================== HERO PHONES =============================== */
function HeroPhonesStable() {
  return (
    <div
      className="relative"
      style={{ animation: "fadeInUp 0.9s ease-out both" }}
    >
      {/* Ambient aura */}
      <div
        className="pointer-events-none absolute right-0 top-8 h-[560px] w-[560px] rounded-full blur-[44px]"
        style={{ background: "radial-gradient(circle, rgba(30,255,221,0.22), transparent 62%)" }}
      />
      <div
        className="pointer-events-none absolute right-24 top-44 h-[500px] w-[500px] rounded-full blur-[52px]"
        style={{ background: "radial-gradient(circle, rgba(136,77,255,0.12), transparent 66%)" }}
      />

      <div className="grid items-center gap-4 md:grid-cols-2">
        <div className="flex justify-end">
          <PhoneFrame
            src={ASSETS.heroToday}
            alt="Tally Today — Manual mode"
            priority
            tilt="left"
          />
        </div>
        <div className="flex justify-start">
          <PhoneFrame
            src={ASSETS.heroRunway}
            alt="Tally Runway"
            priority
            tilt="right"
          />
        </div>
      </div>

      {/* Tip */}
      <div className="mt-8 rounded-3xl bg-[rgba(255,255,255,0.06)] p-5 ring-1 ring-[rgba(255,255,255,0.10)]">
        <div className="text-sm font-semibold">Tip</div>
        <div className="mt-1.5 text-sm text-[rgba(234,242,255,0.72)]">
          Use runway + foresights to get warnings <span className="font-semibold">before</span> problems happen.
        </div>
      </div>
    </div>
  );
}

/* Phone frame — visible even without images */
function PhoneFrame({
  src,
  alt,
  priority,
  tilt,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  tilt: "left" | "right";
}) {
  const transform =
    tilt === "left"
      ? "perspective(1200px) rotateY(16deg) rotateX(8deg) rotateZ(-5deg) translateY(6px)"
      : "perspective(1200px) rotateY(-16deg) rotateX(8deg) rotateZ(5deg) translateY(-6px)";

  return (
    <div
      className="relative w-full max-w-[210px] transition-transform duration-300 hover:scale-[1.02]"
      style={{ transform, willChange: "transform" }}
    >
      {/* Subtle outer glow */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-[52px] blur-[30px]"
        style={{ background: "radial-gradient(circle at 50% 40%, rgba(30,255,221,0.18), transparent 65%)" }}
      />

      {/* Phone body */}
      <div
        className="relative rounded-[44px] p-[11px]"
        style={{
          background: "linear-gradient(160deg, rgba(55,65,81,0.90) 0%, rgba(31,41,55,0.95) 60%, rgba(17,24,39,1) 100%)",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.18), 0 40px 120px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.12)",
        }}
      >
        {/* Rim highlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[44px]"
          style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.14) 0%, transparent 20%, transparent 80%, rgba(255,255,255,0.07) 100%)" }}
        />

        {/* Top notch bar */}
        <div className="pointer-events-none absolute left-1/2 top-[9px] z-10 h-[8px] w-[80px] -translate-x-1/2 rounded-full bg-[rgba(255,255,255,0.10)]" />

        {/* Inner bevel ring */}
        <div className="pointer-events-none absolute inset-[6px] rounded-[38px] ring-1 ring-[rgba(0,0,0,0.55)]" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[34px] bg-[#050709] ring-1 ring-[rgba(255,255,255,0.09)]">
          <div className="relative" style={{ aspectRatio: "9/19.5" }}>
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              className="object-cover object-top"
              sizes="210px"
            />
          </div>
          {/* Glass sheen overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(130deg, rgba(255,255,255,0.10) 0%, transparent 28%, transparent 72%, rgba(255,255,255,0.06) 100%)" }}
          />
        </div>
      </div>
    </div>
  );
}

/* =============================== FLAT SCREENSHOT TEASER =============================== */
/**
 * Shows the top portion of a screenshot as a "teaser" — flat card, not a phone frame.
 * Bottom fades out to suggest there's more below.
 */
function ScreenTeaser({
  src,
  alt,
  accent = "teal",
}: {
  src: string;
  alt: string;
  accent?: "teal" | "purple" | "gold";
}) {
  const glowColor =
    accent === "teal"
      ? "rgba(30,255,221,0.10)"
      : accent === "purple"
      ? "rgba(136,77,255,0.10)"
      : "rgba(255,199,77,0.10)";

  const ringColor =
    accent === "teal"
      ? "rgba(30,255,221,0.18)"
      : accent === "purple"
      ? "rgba(136,77,255,0.18)"
      : "rgba(255,199,77,0.18)";

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-[#04060C]"
      style={{
        aspectRatio: "9/13",
        boxShadow: `0 0 0 1px ${ringColor}, 0 20px 60px rgba(0,0,0,0.55)`,
      }}
    >
      {/* Screenshot — shows only the top portion */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 90vw, 360px"
      />

      {/* Accent glow at top edge */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{ background: `radial-gradient(ellipse at 50% -10%, ${glowColor} 0%, transparent 70%)` }}
      />

      {/* Bottom fade-out — the "teaser" effect */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0"
        style={{
          height: "55%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(4,6,12,0.80) 60%, rgba(4,6,12,0.97) 100%)",
        }}
      />

      {/* "More below" hint */}
      <div className="pointer-events-none absolute bottom-3 left-0 right-0 flex justify-center">
        <span className="text-[10px] text-[rgba(234,242,255,0.35)] tracking-widest">SCROLL TO SEE MORE</span>
      </div>
    </div>
  );
}

/* =============================== BACKGROUND / HEADER / COPY / FOOTER =============================== */

function PremiumBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[rgba(30,255,221,0.18)] blur-[90px]" />
      <div className="absolute -bottom-56 right-[-120px] h-[620px] w-[620px] rounded-full bg-[rgba(136,77,255,0.12)] blur-[110px]" />
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,18,0.10),rgba(7,11,18,0.90))]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.30)_1px,transparent_1px)] [background-size:18px_18px]" />
    </div>
  );
}

function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-[rgba(255,255,255,0.06)] ring-1 ring-[rgba(255,255,255,0.10)] overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,255,221,0.18),transparent_55%)]" />
          <Image src={ASSETS.icon} alt="Tally" width={30} height={30} className="rounded-xl" priority />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold tracking-tight">Uprise Studios</div>
          <div className="text-xs text-[rgba(234,242,255,0.68)]">Tally</div>
        </div>
      </Link>

      <nav className="hidden items-center gap-3 text-sm md:flex">
        <a href="#showcase" className="rounded-full px-3 py-2 text-[rgba(234,242,255,0.78)] hover:bg-[rgba(255,255,255,0.06)]">
          Product
        </a>
        <a href="#difference" className="rounded-full px-3 py-2 text-[rgba(234,242,255,0.78)] hover:bg-[rgba(255,255,255,0.06)]">
          Why Tally
        </a>
        <a href="#privacy" className="rounded-full px-3 py-2 text-[rgba(234,242,255,0.78)] hover:bg-[rgba(255,255,255,0.06)]">
          Privacy
        </a>
        <a href="#beta" className="rounded-full px-3 py-2 text-[rgba(234,242,255,0.78)] hover:bg-[rgba(255,255,255,0.06)]">
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
  );
}

function HeroCopy() {
  return (
    <div className="animate-[fadeInUp_0.8s_ease-out]">
      <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,255,255,0.06)] px-3 py-1 text-xs text-[rgba(234,242,255,0.78)] ring-1 ring-[rgba(255,255,255,0.10)]">
        <span className="h-2 w-2 rounded-full bg-[rgba(30,255,221,0.95)]" />
        Privacy-first finance • Local-first by default
      </div>

      <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">Understand your money calmly and clearly.</h1>

      <p className="mt-4 max-w-xl text-lg leading-relaxed text-[rgba(234,242,255,0.84)]">
        See what’s safe to spend, spot issues early, and plan the month without ads, trackers, or judgement.
        Works offline. Sync is optional and end to end encrypted.
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
      </div>

      <div className="mt-4 text-sm text-[rgba(234,242,255,0.55)]">
        Contact:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-[rgba(30,255,221,0.95)] hover:underline">
          {CONTACT_EMAIL}
        </a>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-[rgba(234,242,255,0.72)]">
        {["Works offline", "No ads", "No trackers", "Manual or bank", "Runway foresight", "Encrypted sync (optional)"].map((chip) => (
          <span key={chip} className="rounded-full bg-[rgba(255,255,255,0.05)] px-3 py-1 ring-1 ring-[rgba(255,255,255,0.10)]">
            {chip}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 opacity-90">
        <StoreBadge src={ASSETS.playBadge} alt="Google Play — coming soon" />
        <StoreBadge src={ASSETS.appStoreBadge} alt="App Store — coming soon" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-start justify-between gap-4 border-t border-[rgba(255,255,255,0.08)] pt-8 md:flex-row md:items-center">
        <div className="text-sm text-[rgba(234,242,255,0.62)]">© {new Date().getFullYear()} Uprise Studios • Tally</div>
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
  );
}

/* =============================== UI bits =============================== */

function StoreBadge({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-xl bg-[rgba(255,255,255,0.04)] px-3 py-2 ring-1 ring-[rgba(255,255,255,0.08)]">
      <Image src={src} alt={alt} width={170} height={52} />
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

function PillTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-[rgba(30,255,221,0.12)] px-3 py-1 text-xs font-semibold text-[rgba(234,242,255,0.88)] ring-1 ring-[rgba(30,255,221,0.22)]">
      {children}
    </span>
  );
}

function Pillar({ title, desc, tag }: { title: string; desc: string; tag: string }) {
  return (
    <div className="rounded-3xl bg-[rgba(255,255,255,0.06)] p-6 ring-1 ring-[rgba(255,255,255,0.10)]">
      <div className="flex items-start justify-between gap-4">
        <div className="text-lg font-semibold">{title}</div>
        <PillTag>{tag}</PillTag>
      </div>
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
      className={[
        "group rounded-3xl bg-[rgba(255,255,255,0.06)] p-6",
        "ring-1 ring-[rgba(255,255,255,0.10)]",
        accentRing,
        "transition duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:-translate-y-[2px]",
        "hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
      ].join(" ")}
    >
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${accentDot}`} />
        <div className="text-xs font-semibold tracking-wide text-[rgba(234,242,255,0.70)]">{kicker.toUpperCase()}</div>
      </div>

      <div className="mt-3 text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-[rgba(234,242,255,0.72)]">{desc}</div>

      <div className="transition group-hover:opacity-95">{children}</div>
    </div>
  );
}

function PrivacyMiniCarousel({ slides }: { slides: string[] }) {
  const usable = slides.filter(Boolean);
  if (usable.length < 2) {
    return (
      <div className="rounded-2xl bg-[rgba(0,0,0,0.22)] p-5 ring-1 ring-[rgba(255,255,255,0.08)]">
        <div className="text-sm font-semibold">Add privacy slides</div>
        <div className="mt-2 text-sm text-[rgba(234,242,255,0.70)]">
          Put 2–3 images in <code className="text-[rgba(30,255,221,0.95)]">/public/tally/privacy-1.png</code> etc.
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl bg-[rgba(0,0,0,0.22)] ring-1 ring-[rgba(255,255,255,0.08)]">
      <div className="flex w-full snap-x snap-mandatory overflow-x-auto">
        {usable.map((src, idx) => (
          <div key={src} className="relative w-full shrink-0 snap-center p-5">
            <div className="text-xs font-semibold text-[rgba(234,242,255,0.70)]">Step {idx + 1}</div>
            <div className="mt-3">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#05070C] ring-1 ring-[rgba(255,255,255,0.10)]">
                <Image src={src} alt={`Privacy slide ${idx + 1}`} fill className="object-cover" sizes="(max-width: 768px) 90vw, 560px" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-5 pb-4 text-xs text-[rgba(234,242,255,0.55)]">
        <span>Swipe</span>
        <span>Device-only → Encrypted sync</span>
      </div>
    </div>
  );
}

/* =============================== Icons =============================== */

function Check() {
  return (
    <span className="mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(30,255,221,0.14)] ring-1 ring-[rgba(30,255,221,0.26)]">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path d="M20 6L9 17l-5-5" stroke="rgba(234,242,255,0.92)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Warn() {
  return (
    <span className="mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(255,199,77,0.14)] ring-1 ring-[rgba(255,199,77,0.26)]">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 9v5m0 4h.01M10.29 3.86l-8.2 14.2A2 2 0 003.82 21h16.36a2 2 0 001.73-2.94l-8.2-14.2a2 2 0 00-3.46 0z"
          stroke="rgba(234,242,255,0.92)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/**
 * Add to globals.css once:
 *
 * @keyframes fadeInUp {
 *   from { opacity: 0; transform: translateY(14px); }
 *   to { opacity: 1; transform: translateY(0); }
 * }
 */