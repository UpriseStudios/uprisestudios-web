import Link from "next/link";
import { PRIVACY_NOTICES, type AppKey } from "@/lib/privacyNotices";

export default function PrivacyNoticePage({ params }: { params: { app: string } }) {
  const key = (params.app ?? "uprise") as AppKey;
  const notice = PRIVACY_NOTICES[key];

  if (!notice) {
    return (
      <main className="min-h-screen" style={{ background: "var(--uprise-bg)", color: "var(--uprise-ink)" }}>
        <div className="mx-auto max-w-4xl px-6 py-12">
          <Link href="/privacy" className="text-sm text-slate-700 underline hover:text-slate-900">
            Back to privacy notices
          </Link>
          <h1 className="mt-6 text-2xl font-semibold">Privacy notice not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen" style={{ background: "var(--uprise-bg)", color: "var(--uprise-ink)" }}>
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
          <Link href="/" className="underline hover:text-slate-900">
            Uprise
          </Link>
          <span className="text-slate-400">/</span>
          <Link href="/privacy" className="underline hover:text-slate-900">
            Privacy
          </Link>
          <span className="text-slate-400">/</span>
          <span className="font-medium text-slate-900">{notice.name}</span>
        </div>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight">{notice.name} privacy notice</h1>
        <p className="mt-3 text-slate-700">{notice.summary}</p>

        <div className="mt-6 rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] p-5">
          <div className="text-sm text-slate-700">Last updated: {notice.lastUpdated}</div>
          <div className="mt-2 text-sm text-slate-700">
            Contact:{" "}
            <a className="underline hover:text-slate-900" href={`mailto:${notice.contactEmail}`}>
              {notice.contactEmail}
            </a>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {notice.sections.map((s) => (
            <section key={s.title} className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-panel)] p-6 shadow-sm">
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {s.body.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
