import {
  Activity,
  Brain,
  HeartHandshake,
  Info,
  Moon,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { IndicationItem, siteConfig } from "@/config/site";
import { Tilt3DCard } from "./Tilt3DCard";

const iconMap: Record<IndicationItem["iconName"], React.ElementType> = {
  Activity,
  Brain,
  Moon,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
};

export function IndicationsSection() {
  return (
    <section
      id="indicacoes"
      aria-labelledby="indications-heading"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-10 h-80 w-80 rounded-full bg-burgundy-mist/45 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-rose">
            Indicações e abordagens
          </p>
          <h2
            id="indications-heading"
            className="text-left text-wrap hyphens-none [word-spacing:normal] mt-2 font-serif text-3xl font-semibold leading-tight text-ivory drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-[2.65rem]"
          >
            Para que a acupuntura{" "}
            <span className="text-liquid-gold">costuma ser procurada</span>
          </h2>
          <p className="text-justified mt-4 max-w-[62ch] text-base leading-relaxed text-platinum">
            Reconhecida como prática integrativa e complementar, a acupuntura
            aliada à ventosaterapia atua como apoio terapêutico para diferentes
            demandas físicas e emocionais, sempre respeitando a individualidade
            de cada paciente.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.indications.map((item) => {
            const Icon = iconMap[item.iconName];
            return (
              <Tilt3DCard key={item.id} intensity={4.5} className="h-full">
                <article className="smoked-glass-3d flex h-full flex-col rounded-2xl px-5 py-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-rose/40 bg-gradient-to-br from-gold-champagne/18 to-obsidian text-gold-champagne shadow-[0_8px_18px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(245,223,196,0.22)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-left text-wrap hyphens-none mt-5 font-serif text-2xl font-semibold leading-snug text-gold-rose">
                    {item.title}
                  </h3>
                  <p className="text-justified mt-2.5 text-[14px] leading-[1.6] tracking-[-0.01em] text-platinum">
                    {item.description}
                  </p>
                </article>
              </Tilt3DCard>
            );
          })}
        </div>

        <div className="smoked-glass-3d mt-8 flex items-start gap-3 rounded-2xl px-5 py-4">
          <Info
            className="mt-0.5 h-5 w-5 shrink-0 text-gold-rose"
            aria-hidden="true"
          />
          <p className="text-justified text-xs leading-relaxed text-platinum sm:text-sm">
            <strong className="font-semibold text-ivory">
              Nota informativa:
            </strong>{" "}
            A acupuntura e a ventosaterapia atuam como cuidados terapêuticos
            complementares e não substituem diagnóstico, acompanhamento ou
            tratamento médico. A resposta ao atendimento varia conforme cada
            organismo e contexto clínico.
          </p>
        </div>
      </div>
    </section>
  );
}
