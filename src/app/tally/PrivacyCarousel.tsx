"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Slide = {
  src: string;
  title: string;
  caption: string;
};

export default function PrivacyCarousel() {
  const slides: Slide[] = useMemo(
    () => [
      {
        src: "/tally/privacy-device-only.png",
        title: "Device-only by default",
        caption: "Your data lives only on this device — maximum privacy.",
      },
      {
        src: "/tally/privacy-model-change.png",
        title: "Consent-driven sync",
        caption: "Enabling sync changes your privacy model. Data is encrypted before upload.",
      },
    ],
    []
  );

  const [i, setI] = useState(0);
  const active = slides[i];

  return (
    <div className="rounded-3xl bg-[rgba(255,255,255,0.06)] p-6 ring-1 ring-[rgba(255,255,255,0.10)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold">{active.title}</div>
          <div className="mt-1 text-sm text-[rgba(234,242,255,0.70)]">{active.caption}</div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setI((v) => (v - 1 + slides.length) % slides.length)}
            className="rounded-xl bg-[rgba(0,0,0,0.20)] px-3 py-2 text-sm font-semibold ring-1 ring-[rgba(255,255,255,0.10)] hover:bg-[rgba(0,0,0,0.28)]"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => setI((v) => (v + 1) % slides.length)}
            className="rounded-xl bg-[rgba(0,0,0,0.20)] px-3 py-2 text-sm font-semibold ring-1 ring-[rgba(255,255,255,0.10)] hover:bg-[rgba(0,0,0,0.28)]"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-[340px_1fr]">
        <div className="mx-auto w-full max-w-[340px]">
          <div className="relative aspect-[9/19] w-full overflow-hidden rounded-3xl ring-1 ring-[rgba(255,255,255,0.10)]">
            <Image src={active.src} alt={active.title} fill className="object-cover" sizes="340px" />
          </div>

          <div className="mt-3 flex justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setI(idx)}
                className={`h-2.5 w-2.5 rounded-full ring-1 ring-[rgba(255,255,255,0.18)] ${
                  idx === i ? "bg-[rgba(30,255,221,0.95)]" : "bg-[rgba(255,255,255,0.20)] hover:bg-[rgba(255,255,255,0.30)]"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[rgba(0,0,0,0.22)] p-6 ring-1 ring-[rgba(255,255,255,0.08)]">
          <div className="text-sm font-semibold">The Tally privacy model</div>
          <ul className="mt-3 space-y-2 text-sm text-[rgba(234,242,255,0.70)]">
            <li>• Local-first by default (works offline).</li>
            <li>• Sync is optional and consent-driven.</li>
            <li>• Encrypted on-device before upload.</li>
            <li>• Server stores ciphertext only — never plaintext.</li>
            <li>• Disable sync any time.</li>
          </ul>

          <div className="mt-5 rounded-2xl bg-[rgba(255,255,255,0.05)] p-4 ring-1 ring-[rgba(255,255,255,0.10)]">
            <div className="text-xs text-[rgba(234,242,255,0.70)]">Positioning</div>
            <div className="mt-1 text-sm">
              Finance that respects sovereignty — privacy is a first-class feature, not fine print.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}