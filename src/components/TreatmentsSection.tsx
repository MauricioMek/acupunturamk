import { Disc, Layers, Sparkles } from "lucide-react";
import { siteConfig, TreatmentItem } from "@/config/site";
import { Tilt3DCard } from "./Tilt3DCard";

const iconMap: Record<TreatmentItem["iconName"], React.ElementType> = {
  Sparkles,
  Disc,
  Layers,
};

const techniqueDetails = [
  {
    name: "Acupuntura.",
    description:
      "A Acupuntura é uma especialidade milenar da Medicina Tradicional Chinesa que consiste na aplicação de agulhas extremamente finas em pontos específicos do corpo, chamados de meridianos. Esses estímulos atuam diretamente sobre o sistema nervoso, promovendo a liberação de endorfinas, serotonina e outros neurotransmissores naturais que combatem a dor e reduzem processos inflamatórios. Altamente eficaz para dores agudas e crônicas, enxaquecas, ansiedade e estresse, a técnica restabelece o equilíbrio energético natural do organismo, proporcionando um profundo alívio e bem-estar.",
    image: "/images/acupuntura.jpg",
    alt: "Aplicação de acupuntura nas costas do paciente",
  },
  {
    name: "Ventosaterapia.",
    description:
      "A Ventosaterapia é uma técnica terapêutica milenar que utiliza cúpulas de sucção controlada sobre a pele para criar pressão negativa local. Esse estímulo aumenta imediatamente a circulação sanguínea e linfática na região, promove liberação miofascial profunda, oxigena os tecidos, elimina aderências musculares e proporciona alívio rápido de contraturas, dores na coluna e sobrecargas físicas.",
    image: "/images/ventosaterapia.jpg",
    alt: "Paciente recebendo sessão de ventosaterapia em domicílio",
  },
  {
    name: "Eletroterapia.",
    description:
      "A Eletroterapia é o uso de correntes elétricas de baixa e média frequência para fins terapêuticos e de reabilitação. Através de eletrodos aplicados diretamente sobre a pele, as correntes TENS (para alívio da dor) e FES (para estimulação muscular) atuam no bloqueio de sinais dolorosos ao cérebro e na melhora do tônus muscular. Essa técnica estimula a circulação local, reduz edemas, acelera a cicatrização de tecidos e relaxa a musculatura, sendo indispensável para o tratamento de dores intensas, tensões acumuladas e na reabilitação física.",
    image: "/images/eletroterapia.jpg",
    alt: "Paciente recebendo sessão de eletroterapia em domicílio",
  },
];

export function TreatmentsSection() {
  return (
    <section
      id="tratamentos"
      aria-labelledby="treatments-heading"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-gold-rose/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-[560px] flex-col items-start text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-rose">
            Tratamentos em domicílio
          </p>
          <h2
            id="treatments-heading"
            className="text-left text-wrap hyphens-none [word-spacing:normal] mt-2 w-full font-serif text-3xl font-semibold leading-tight text-ivory sm:text-4xl lg:text-[2.65rem]"
          >
            Acupuntura &amp;{" "}
            <span className="text-liquid-gold">Ventosaterapia</span> integradas
          </h2>
          <p className="text-justified mt-4 w-full text-base leading-relaxed text-platinum">
            Cada atendimento combina técnicas milenares e recursos clínicos
            contemporâneos, ajustados às necessidades musculares, funcionais e
            emocionais de cada paciente.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
          {siteConfig.treatments.map((item) => {
            const Icon = iconMap[item.iconName];
            return (
              <Tilt3DCard key={item.id} intensity={5} className="h-full">
                <article className="smoked-glass-3d flex h-full flex-col rounded-3xl px-5 py-6 sm:px-5 sm:py-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-rose/45 bg-gradient-to-br from-gold-champagne/18 to-obsidian text-gold-champagne shadow-[0_8px_20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(245,223,196,0.28)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-gold-rose/35 bg-obsidian/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-gold-champagne">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-left text-wrap hyphens-none mt-6 font-serif text-2xl font-semibold leading-snug text-gold-rose">
                    {item.title}
                  </h3>

                  <p className="text-justified mt-3 flex-1 text-[14.4px] leading-[1.6] tracking-[-0.012em] [word-spacing:-0.02em] text-platinum">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-white/10 pt-5 text-xs text-ivory/80">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-rose shadow-[0_0_6px_rgba(212,163,115,0.75)]"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Tilt3DCard>
            );
          })}
        </div>

        {/* Subseções Explicativas: Acupuntura, Ventosaterapia e Eletroterapia */}
        <div className="mt-16 space-y-16 lg:space-y-24">
          {techniqueDetails.map((technique, index) => (
            <div
              key={technique.name}
              className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-16 ${
                index < techniqueDetails.length - 1
                  ? "border-b border-white/[0.03] pb-16 lg:pb-24"
                  : ""
              }`}
            >
              <div className="min-w-0 lg:col-span-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-rose">
                  Conheça a técnica
                </p>
                <h3 className="text-left text-wrap hyphens-none [word-spacing:normal] mt-2 font-serif text-3xl font-semibold leading-tight text-ivory drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-4xl">
                  O que é a{" "}
                  <span className="text-liquid-gold">{technique.name}</span>
                </h3>
                <p className="text-justified [word-spacing:normal] mt-4 max-w-[56ch] text-base leading-relaxed text-platinum">
                  {technique.description}
                </p>
              </div>

              <div className="min-w-0 lg:col-span-6">
                <Tilt3DCard intensity={4}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold-rose/35 bg-charcoal/80 shadow-[0_28px_56px_-14px_rgba(0,0,0,0.88),inset_0_1px_0_rgba(245,223,196,0.2)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={technique.image}
                      alt={technique.alt}
                      className="h-full w-full object-cover object-center"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-obsidian/25 via-transparent to-obsidian/15 shadow-[inset_0_0_32px_rgba(5,5,7,0.45)] ring-1 ring-inset ring-gold-champagne/15"
                    />
                  </div>
                </Tilt3DCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
