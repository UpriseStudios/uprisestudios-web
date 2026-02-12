import Link from "next/link";
import { PRIVACY_LIST } from "@/lib/privacyNotices";

export default function PrivacyIndex() {
  return (
    <main className="min-h-screen" style={{ background: "var(--uprise-bg)", color: "var(--uprise-ink)" }}>
      <div className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy notices</h1>
        <p className="mt-3 text-slate-700">
          Each Uprise product is designed to minimise data collection and keep you in control.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {PRIVACY_LIST.map((p) => (
            <Link
              key={p.key}
              href={`/privacy/${p.key}`}
              className="rounded-2xl border border-[var(--uprise-border)] bg-[var(--uprise-card)] p-5 shadow-sm hover:shadow"
            >
              <div className="font-semibold">{p.name}</div>
              <div className="mt-1 text-sm text-slate-700">{p.summary}</div>
              <div className="mt-3 text-xs text-slate-600">Last updated: {p.lastUpdated}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
