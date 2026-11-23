import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Tilt3DCard } from "./Tilt3DCard";

export function ServiceSection() {
  return (
    <section
      id="atendimento"
      aria-labelledby="service-heading"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-burgundy-mist/55 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="order-2 min-w-0 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <Tilt3DCard intensity={5} className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-charcoal shadow-[0_30px_60px_-15px_rgba(0,0,0,0.85)]">
                  <Image
                    src="/images/atendimento-domiciliar.jpg"
                    alt="Profissional realizando aplicação cuidadosa de acupuntura em ambiente residencial tranquilo"
                    fill
                    quality={95}
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="scale-[1.01] object-cover object-center brightness-[0.95] contrast-[1.04]"
                  />
                </div>
              </Tilt3DCard>
            </div>
          </div>

          <div className="order-1 min-w-0 lg:order-2 lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-rose">
              O atendimento
            </p>
            <h2
              id="service-heading"
              className="text-left text-wrap hyphens-none [word-spacing:normal] mt-2 font-serif text-3xl font-semibold leading-tight text-ivory drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-[2.65rem]"
            >
              Cuidado terapêutico{" "}
              <span className="text-liquid-gold">
                levado até o seu ambiente
              </span>
            </h2>
            <p className="text-justified mt-4 max-w-[64ch] text-base leading-relaxed text-platinum">
              A acupuntura e a ventosaterapia domiciliares oferecem a mesma
              atenção técnica de um consultório, com a vantagem de acontecerem
              no espaço onde você já se sente à vontade. Levo a estrutura
              completa até a sua casa — incluindo maca portátil, ventosas
              higienizadas e agulhas estéreis descartáveis.
            </p>
            <p className="text-justified mt-3.5 max-w-[64ch] text-base leading-relaxed text-platinum">
              Cada acompanhamento é conduzido de forma ética, respeitando o
              ritmo e o histórico de cada pessoa, sem promessas irreais e com
              foco em conforto, escuta e segurança.
            </p>

            <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2">
              {siteConfig.service.servicePillars.map((pillar) => (
                <Tilt3DCard key={pillar.title} intensity={4} className="h-full">
                  <div className="smoked-glass-3d flex h-full flex-col rounded-2xl px-5 py-5">
                    <h3 className="text-left text-wrap hyphens-none font-serif text-xl font-semibold text-gold-rose">
                      {pillar.title}
                    </h3>
                    <p className="text-justified mt-2 text-[13.5px] leading-[1.62] text-platinum">
                      {pillar.description}
                    </p>
                  </div>
                </Tilt3DCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
