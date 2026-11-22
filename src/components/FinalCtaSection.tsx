import { WhatsappButton } from "./WhatsappButton";
import { Tilt3DCard } from "./Tilt3DCard";

export function FinalCtaSection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Tilt3DCard intensity={2.5}>
          <div className="smoked-glass-3d relative overflow-hidden rounded-3xl px-6 py-12 text-ivory sm:px-12 sm:py-16 lg:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-rose/18 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-burgundy-mist/65 blur-3xl"
            />

            <div className="relative mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-rose">
                Agendamento em Porto Alegre – RS
              </p>
              <h2
                id="final-cta-heading"
                className="text-left text-wrap hyphens-none [word-spacing:normal] mt-3 font-serif text-3xl font-semibold leading-tight text-ivory sm:text-4xl lg:text-5xl"
              >
                Agende seu momento de cuidado{" "}
                <span className="text-liquid-gold">no conforto de casa</span>
              </h2>
              <p className="text-justified mx-auto mt-4 max-w-[54ch] text-base leading-relaxed text-platinum sm:text-lg">
                Envie uma mensagem pelo WhatsApp para tirar suas dúvidas,
                informar seu bairro em Porto Alegre e consultar os horários
                disponíveis para acupuntura e ventosaterapia.
              </p>
              <div className="mt-8 flex justify-center">
                <WhatsappButton
                  label="Conversar pelo WhatsApp"
                  variant="gold"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </Tilt3DCard>
      </div>
    </section>
  );
}
