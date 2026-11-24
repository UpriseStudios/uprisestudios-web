import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRIVACY_NOTICES, type AppKey } from "@/lib/privacyNotices";

type Props = { params: Promise<{ app: string }> };

function findNotice(app: string) {
  return Object.prototype.hasOwnProperty.call(PRIVACY_NOTICES, app)
    ? PRIVACY_NOTICES[app as AppKey]
    : undefined;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { app } = await params;
  const notice = findNotice(app);
  if (!notice) return { title: "Privacy notice not found", robots: { index: false, follow: false } };
  return {
    title: `${notice.name} privacy notice | Uprise Studios`,
    description: notice.summary,
    alternates: { canonical: `/privacy/${notice.key}` },
    ...(notice.key === "calmbet" ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function PrivacyNoticePage({ params }: Props) {
  const { app } = await params;
  const notice = findNotice(app);

  if (!notice) notFound();

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
