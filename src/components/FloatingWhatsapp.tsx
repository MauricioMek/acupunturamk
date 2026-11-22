import { buildWhatsappUrl } from "@/config/site";
import { WhatsappIcon } from "./WhatsappButton";

export function FloatingWhatsapp() {
  return (
    <a
      href={buildWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar atendimento de acupuntura e ventosaterapia domiciliar pelo WhatsApp"
      style={{ position: "fixed" }}
      className="btn-liquid-gold fixed bottom-5 right-5 z-50 inline-flex w-fit items-center justify-center gap-2 rounded-full px-4 py-2 text-center text-sm font-semibold whitespace-nowrap transition-all duration-200 sm:bottom-6 sm:right-6"
    >
      <WhatsappIcon className="h-4 w-4 shrink-0" />
      <span>Agendar via WhatsApp</span>
    </a>
  );
}
