import { Compass, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsappButton } from "./WhatsappButton";
import { Tilt3DCard } from "./Tilt3DCard";

export function NeighborhoodsSection() {
  return (
    <section
      id="regioes"
      aria-labelledby="neighborhoods-heading"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-burgundy-mist/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="min-w-0 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-rose">
              Regiões atendidas
            </p>
            <h2
              id="neighborhoods-heading"
              className="text-left text-wrap hyphens-none [word-spacing:normal] mt-2 max-w-none font-serif text-[1.75rem] font-semibold leading-tight text-ivory drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-[2.05rem]"
            >
              Acupuntura e Ventosaterapia{" "}
              <span className="text-liquid-gold">
                nos bairros de Porto Alegre – RS
              </span>
            </h2>
            <p className="text-justified mt-4 max-w-[54ch] text-base leading-relaxed text-platinum">
              O atendimento domiciliar é organizado por regiões para garantir
              pontualidade e tranquilidade em cada visita. Abaixo estão alguns
              bairros de referência na capital gaúcha.
            </p>

            <Tilt3DCard intensity={3.5} className="mt-6">
              <div className="smoked-glass-3d rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <Compass
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold-rose"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gold-rose">
                      Seu bairro não está na lista?
                    </p>
                    <p className="text-justified mt-1.5 text-sm leading-relaxed text-platinum">
                      Consulte a disponibilidade de rota para outros bairros de
                      Porto Alegre e regiões próximas diretamente pelo WhatsApp.
                    </p>
                    <div className="mt-4">
                      <WhatsappButton
                        label="Consultar meu bairro"
                        customMessage="Olá! Gostaria de verificar a disponibilidade de acupuntura e ventosaterapia domiciliar para o meu bairro em Porto Alegre."
                        variant="glass"
                        size="sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <Tilt3DCard intensity={2.5}>
              <div className="smoked-glass-3d rounded-3xl p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <h3 className="font-serif text-2xl font-semibold text-gold-rose">
                    Bairros de referência
                  </h3>
                  <span className="rounded-full border border-gold-rose/40 bg-obsidian/80 px-3 py-1 text-xs font-medium text-gold-champagne">
                    Sujeito à confirmação de agenda
                  </span>
                </div>

                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {siteConfig.neighborhoods.map((neighborhood) => (
                    <li
                      key={neighborhood.name}
                      className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-obsidian/60 px-4 py-3 transition-colors hover:border-gold-rose/40"
                    >
                      <span className="flex items-center gap-2.5 text-sm font-medium text-ivory">
                        <MapPin
                          className="h-4 w-4 shrink-0 text-gold-rose"
                          aria-hidden="true"
                        />
                        <span>{neighborhood.name}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-justified mt-5 text-xs leading-relaxed text-platinum/80">
                  * Lista inicial de referência para Porto Alegre – RS. A
                  cobertura efetiva e eventuais deslocamentos são confirmados
                  previamente no contato inicial via WhatsApp.
                </p>
              </div>
            </Tilt3DCard>
          </div>
        </div>
      </div>
    </section>
  );
}
