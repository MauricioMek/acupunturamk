import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade e proteção de dados pessoais do serviço de Acupuntura e Ventosaterapia Domiciliar em Porto Alegre – RS.",
  alternates: {
    canonical: "/privacidade",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-rose transition-colors hover:text-gold-champagne"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Voltar para a página inicial</span>
          </Link>

          <article className="smoked-glass-3d mt-6 rounded-3xl p-6 sm:p-10">
            <h1 className="font-serif text-3xl font-semibold text-ivory sm:text-4xl">
              Política de Privacidade
            </h1>
            <p className="mt-3 text-sm text-platinum">
              Serviço: {siteConfig.brand.name} — Porto Alegre, RS
            </p>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-platinum sm:text-base">
              <section>
                <h2 className="font-serif text-2xl font-semibold text-ivory">
                  1. Natureza deste site institucional
                </h2>
                <p className="text-justified mt-2">
                  Este site tem caráter exclusivamente informativo e
                  institucional, destinado a apresentar os serviços de
                  acupuntura e ventosaterapia com atendimento domiciliar em
                  Porto Alegre – RS e facilitar o contato inicial via WhatsApp.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-ivory">
                  2. Dados pessoais e contato pelo WhatsApp
                </h2>
                <p className="text-justified mt-2">
                  Ao clicar nos botões de contato, você será direcionado ao
                  aplicativo ou versão web do WhatsApp para conversar diretamente
                  com o atendimento responsável. Eventuais informações
                  compartilhadas voluntariamente por você — como nome, bairro,
                  disponibilidade de horário e dúvidas iniciais — são utilizadas
                  unicamente para responder à solicitação, verificar a
                  disponibilidade de agenda e viabilizar o atendimento
                  domiciliar.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-ivory">
                  3. Sigilo e proteção de dados (LGPD)
                </h2>
                <p className="text-justified mt-2">
                  O tratamento de dados pessoais observa os princípios da Lei
                  Geral de Proteção de Dados (Lei nº 13.709/2018), incluindo
                  finalidade, necessidade, segurança e confidencialidade. Seus
                  dados não são comercializados nem compartilhados com
                  terceiros para fins publicitários.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-ivory">
                  4. Direitos do titular e contato
                </h2>
                <p className="text-justified mt-2">
                  Você pode solicitar esclarecimentos, atualização ou exclusão
                  de dados tratados durante o contato inicial diretamente pelos
                  canais oficiais informados no rodapé deste site (
                  {siteConfig.contact.email}).
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
