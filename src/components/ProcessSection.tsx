import { siteConfig } from "@/config/site";
import { WhatsappButton } from "./WhatsappButton";
import { Tilt3DCard } from "./Tilt3DCard";

export function ProcessSection() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="process-heading"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold-rose/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-rose">
              Passo a passo
            </p>
            <h2
              id="process-heading"
              className="text-left text-wrap hyphens-none [word-spacing:normal] mt-2 font-serif text-3xl font-semibold leading-tight text-ivory drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-[2.65rem]"
            >
              Como funciona{" "}
              <span className="text-liquid-gold">
                o atendimento domiciliar
              </span>
            </h2>
            <p className="text-justified mt-4 max-w-[58ch] text-base leading-relaxed text-platinum">
              Do primeiro contato até a sessão em sua casa, o processo é simples,
              transparente e pensado para a sua comodidade.
            </p>
          </div>
          <div className="shrink-0">
            <WhatsappButton
              label="Iniciar conversa no WhatsApp"
              variant="gold"
              size="md"
            />
          </div>
        </div>

        <ol className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.processSteps.map((item) => (
            <li key={item.step} className="h-full">
              <Tilt3DCard intensity={4.5} className="h-full">
                <div className="smoked-glass-3d flex h-full flex-col rounded-2xl px-4 py-6 sm:px-5">
                  <span className="inline-flex w-fit items-center rounded-full border border-gold-rose/45 bg-obsidian/80 px-3.5 py-1 font-serif text-lg font-semibold text-gold-champagne shadow-inner">
                    {item.step}
                  </span>
                  <h3 className="text-left text-wrap hyphens-none mt-4 font-serif text-2xl font-semibold leading-snug text-gold-rose">
                    {item.title}
                  </h3>
                  <p className="text-justified mt-2.5 text-[13.5px] leading-[1.62] text-platinum">
                    {item.description}
                  </p>
                </div>
              </Tilt3DCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
