"use client";

import { useState } from "react";
import { UserRound } from "lucide-react";

interface ProfessionalPortraitProps {
  initialSrc: string | null;
  name: string;
}

const FALLBACK_CANDIDATES = [
  "/mauricio-perfil.png",
  "/mauricio-perfil.jpg",
  "/mauricio-perfil.jpeg",
];

export function ProfessionalPortrait({
  initialSrc,
  name,
}: ProfessionalPortraitProps) {
  const sources = initialSrc
    ? [initialSrc, ...FALLBACK_CANDIDATES.filter((s) => s !== initialSrc)]
    : [];

  const [attemptIndex, setAttemptIndex] = useState(0);
  const allFailed = !initialSrc || attemptIndex >= sources.length;

  if (allFailed) {
    return (
      <div
        className="flex aspect-[4/5] w-full flex-col items-center justify-center rounded-2xl border border-gold-rose/45 bg-obsidian/80 p-6 text-center shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(245,223,196,0.22)]"
        role="img"
        aria-label={`Retrato profissional de ${name}`}
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-rose/45 bg-charcoal text-gold-champagne shadow-lg">
          <UserRound className="h-8 w-8" aria-hidden="true" />
        </span>
        <p className="mt-4 font-serif text-xl font-semibold text-ivory">
          {name}
        </p>
        <p className="mt-2 max-w-[26ch] text-xs leading-relaxed text-platinum">
          Salve sua foto como{" "}
          <code className="rounded bg-charcoal px-1.5 py-0.5 text-[11px] text-gold-champagne">
            public/mauricio-perfil.png
          </code>{" "}
          ou{" "}
          <code className="rounded bg-charcoal px-1.5 py-0.5 text-[11px] text-gold-champagne">
            .jpg
          </code>{" "}
          para exibi-la aqui automaticamente.
        </p>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gold-rose/45 bg-charcoal/80 p-1.5 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(245,223,196,0.28)] backdrop-blur-xl">
      <div className="relative h-full w-full overflow-hidden rounded-[inherit] border border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={sources[attemptIndex]}
          alt={`Retrato profissional de ${name}`}
          onError={() => setAttemptIndex((prev) => prev + 1)}
          style={{
            display: "block",
            objectFit: "cover",
            objectPosition: "top center",
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
          }}
        />
      </div>
    </div>
  );
}
