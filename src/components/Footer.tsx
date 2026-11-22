import Link from "next/link";
import { MapPin } from "lucide-react";
import { buildWhatsappUrl, siteConfig } from "@/config/site";
import { BrandMark } from "./BrandMark";
import { WhatsappIcon } from "./WhatsappButton";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-obsidian/90 text-platinum backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BrandMark />
            <p className="text-justified mt-4 max-w-[42ch] text-sm leading-relaxed text-platinum">
              {siteConfig.brand.tagline}
            </p>
            <div className="mt-5 space-y-2 text-xs text-platinum/85">
              <p className="font-medium text-ivory">
                {siteConfig.professional.name}
              </p>
              <p>{siteConfig.professional.registrationLabel}</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-serif text-xl font-semibold text-ivory">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-platinum">
              <li>
                <Link href="/#tratamentos" className="hover:text-gold-champagne transition-colors">
                  Tratamentos
                </Link>
              </li>
              <li>
                <Link href="/#atendimento" className="hover:text-gold-champagne transition-colors">
                  O atendimento
                </Link>
              </li>
              <li>
                <Link href="/#profissional" className="hover:text-gold-champagne transition-colors">
                  Sobre o profissional
                </Link>
              </li>
              <li>
                <Link href="/#indicacoes" className="hover:text-gold-champagne transition-colors">
                  Indicações e abordagens
                </Link>
              </li>
              <li>
                <Link href="/#regioes" className="hover:text-gold-champagne transition-colors">
                  Regiões atendidas
                </Link>
              </li>
              <li>
                <Link href="/#duvidas" className="hover:text-gold-champagne transition-colors">
                  Perguntas frequentes
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="font-serif text-xl font-semibold text-ivory">
              Contato e Região
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-platinum">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-rose"
                  aria-hidden="true"
                />
                <span>Atendimento domiciliar em Porto Alegre – RS</span>
              </li>
              <li>
                <a
                  href={buildWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-ivory hover:text-gold-champagne transition-colors"
                >
                  <WhatsappIcon className="h-4 w-4 shrink-0 text-gold-rose" />
                  <span>{siteConfig.contact.whatsappDisplay}</span>
                </a>
              </li>
              <li className="text-xs text-platinum/80">
                E-mail: {siteConfig.contact.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-platinum/75 sm:flex-row sm:items-center">
          <p>
            © {currentYear} {siteConfig.brand.name} — Porto Alegre, RS. Todos os
            direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacidade"
              className="hover:text-gold-champagne transition-colors underline underline-offset-4"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
