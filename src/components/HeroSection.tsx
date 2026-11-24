"use client";

import { ArrowDownRight, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { WhatsappButton } from "./WhatsappButton";
import { HeroSculpture3D } from "./HeroSculpture3D";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-24 overflow-hidden pt-10 pb-20 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28"
    >
      {/* Subtle Ambient Charcoal & Golden Halo Behind Right Composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-8 h-[24rem] w-[24rem] rounded-full bg-charcoal/80 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[4%] top-6 h-[32rem] w-[32rem] rounded-full bg-radial from-gold-rose/22 via-gold-bronze/8 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Clinical Authority & Editorial Copywriting */}
          <div className="min-w-0 lg:col-span-6">
            <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-gold-rose/45 bg-charcoal/80 px-4 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.14em] text-gold-rose shadow-[0_10px_24px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(245,223,196,0.18)] backdrop-blur-xl sm:text-[11px]">
              <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-champagne opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-rose shadow-[0_0_8px_#F5DFC4]" />
              </span>
              <span>PORTO ALEGRE - RS • ATENDIMENTO EXCLUSIVO EM DOMICÍLIO</span>
            </div>

            <h1
              id="hero-heading"
              className="text-left text-wrap hyphens-none break-normal [word-spacing:normal] mt-6 max-w-[560px] font-serif text-[clamp(2.1rem,3.05vw,2.75rem)] font-semibold leading-[1.12] tracking-tight text-ivory"
            >
              Acupuntura e Ventosaterapia{" "}
              <span className="text-liquid-gold">
                no conforto da sua casa
              </span>
            </h1>

            {/* Editorial Institutional Copy Block */}
            <div className="mt-6 border-l-2 border-gold-rose pl-5">
              <p
                lang="pt-BR"
                className="text-justified [word-spacing:0.08em] tracking-[0.01em] max-w-[56ch] text-[15px] leading-relaxed text-platinum sm:text-base"
              >
                Uno a precisão clínica da Acupuntura e da Ventosaterapia em
                sessões personalizadas no conforto do seu lar. Um cuidado
                terapêutico completo para alívio profundo de dores musculares,
                liberação miofascial, redução do estresse e reequilíbrio físico
                e energético sem que você precise enfrentar deslocamentos ou
                trânsito em Porto Alegre.
              </p>
            </div>

            {/* Tactile Action Buttons */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
              <WhatsappButton
                label="Agendar pelo WhatsApp"
                variant="gold"
                size="lg"
              />
              <a
                href="#como-funciona"
                className="btn-liquid-gold group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-center text-base font-semibold transition-all duration-200 sm:whitespace-nowrap"
              >
                <span>Como funciona</span>
                <ArrowDownRight
                  className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* 3 Symmetric Bottom Differentials */}
            <ul
              aria-label="Credenciais e diferenciais"
              className="mt-10 grid divide-y divide-gold-rose/25 rounded-2xl border border-white/10 bg-charcoal/55 backdrop-blur-xl sm:grid-cols-[1fr_0.95fr_1.35fr] sm:divide-x sm:divide-y-0"
            >
              <li className="flex items-start gap-2.5 px-3.5 py-3.5 text-left text-xs font-medium leading-snug text-white hyphens-none">
                <Award
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-rose"
                  aria-hidden="true"
                />
                <span>Fisioterapeuta • PUCRS (2007)</span>
              </li>
              <li className="flex items-start gap-2.5 px-3.5 py-3.5 text-left text-xs font-medium leading-snug text-white hyphens-none">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-rose"
                  aria-hidden="true"
                />
                <span>+10 Anos de Experiência</span>
              </li>
              <li className="flex items-start gap-2.5 px-3.5 py-3.5 text-left text-xs font-medium leading-snug text-white hyphens-none">
                <ShieldCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-rose"
                  aria-hidden="true"
                />
                <span>Materiais Estéreis &amp; Ventosas Higienizadas</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Unobstructed Interactive 3D WebGL Sculpture */}
          <div className="min-w-0 lg:col-span-6">
            <div className="relative mx-auto flex max-w-xl items-center justify-center lg:max-w-none">
              <HeroSculpture3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
