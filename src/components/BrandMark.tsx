import Link from "next/link";
import { siteConfig } from "@/config/site";

export function BrandMark() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-3 group focus-visible:outline-none"
      aria-label={`${siteConfig.brand.name} - ${siteConfig.brand.subtitle}`}
    >
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-rose/50 bg-gradient-to-br from-charcoal to-obsidian text-gold-champagne shadow-[0_8px_22px_rgba(0,0,0,0.75),inset_0_1px_1px_rgba(245,223,196,0.32)]"
        aria-hidden="true"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]"
        >
          <defs>
            <linearGradient id="yy-gold-rim" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF7EB" />
              <stop offset="45%" stopColor="#F5DFC4" />
              <stop offset="80%" stopColor="#D4A373" />
              <stop offset="100%" stopColor="#8C6239" />
            </linearGradient>
            <radialGradient id="yy-yang-light" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFDF9" />
              <stop offset="45%" stopColor="#F5DFC4" />
              <stop offset="85%" stopColor="#D4A373" />
              <stop offset="100%" stopColor="#A67C52" />
            </radialGradient>
            <radialGradient id="yy-yin-dark" cx="65%" cy="70%" r="75%">
              <stop offset="0%" stopColor="#2A2C38" />
              <stop offset="55%" stopColor="#14151C" />
              <stop offset="100%" stopColor="#050507" />
            </radialGradient>
            <radialGradient id="yy-dome-sheen" cx="32%" cy="24%" r="55%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.42)" />
              <stop offset="55%" stopColor="rgba(255,255,255,0.06)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.22)" />
            </radialGradient>
          </defs>

          {/* Base dark metallic Yin circle */}
          <circle cx="16" cy="16" r="13.5" fill="url(#yy-yin-dark)" />

          {/* Light champagne/ivory Yang half */}
          <path
            d="M16 2.5A13.5 13.5 0 0 0 16 29.5A6.75 6.75 0 0 0 16 16A6.75 6.75 0 0 1 16 2.5Z"
            fill="url(#yy-yang-light)"
          />

          {/* Contrasting 3D dots */}
          <circle cx="16" cy="9.25" r="2.25" fill="url(#yy-yin-dark)" stroke="rgba(245,223,196,0.35)" strokeWidth="0.5" />
          <circle cx="16" cy="22.75" r="2.25" fill="url(#yy-yang-light)" stroke="rgba(5,5,7,0.5)" strokeWidth="0.5" />

          {/* 3D spherical dome sheen & subtle inner shadow */}
          <circle cx="16" cy="16" r="13.5" fill="url(#yy-dome-sheen)" />

          {/* Metallic gold outer bevel */}
          <circle cx="16" cy="16" r="13.5" stroke="url(#yy-gold-rim)" strokeWidth="1.2" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-serif text-lg sm:text-[1.25rem] font-semibold tracking-tight text-ivory whitespace-nowrap">
          {siteConfig.brand.name}
        </span>
        <span className="text-[10.5px] sm:text-[11px] uppercase tracking-[0.14em] font-medium text-gold-rose sm:whitespace-nowrap">
          {siteConfig.brand.subtitle}
        </span>
      </span>
    </Link>
  );
}
