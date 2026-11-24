import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.siteUrl),
  title: {
    default:
      "Acupuntura e Ventosaterapia Domiciliar em Porto Alegre – RS | Atendimento em Casa",
    template: "%s | Acupuntura & Ventosaterapia Porto Alegre",
  },
  description:
    "Atendimento domiciliar de acupuntura e ventosaterapia em Porto Alegre – RS. Alívio de dores, liberação miofascial e equilíbrio energético no conforto da sua casa.",
  keywords: [
    "acupuntura domiciliar em Porto Alegre",
    "ventosaterapia domiciliar em Porto Alegre",
    "acupunturista a domicílio em Porto Alegre",
    "liberação miofascial com ventosas Porto Alegre",
    "atendimento de acupuntura em casa",
    "acupuntura nos bairros de Porto Alegre",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Acupuntura & Ventosaterapia Porto Alegre",
    title:
      "Acupuntura e Ventosaterapia Domiciliar em Porto Alegre – RS | Atendimento em Casa",
    description:
      "Receba atendimento de acupuntura e ventosaterapia no conforto do seu lar em Porto Alegre. Materiais estéreis, maca portátil e agendamento prático via WhatsApp.",
    images: [
      {
        url: "/images/hero-acupuntura.jpg",
        width: 1408,
        height: 768,
        alt: "Preparação de sessão de acupuntura e ventosaterapia domiciliar em Porto Alegre",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteConfig.brand.name,
    description:
      "Serviço de acupuntura e ventosaterapia com atendimento domiciliar em Porto Alegre – RS.",
    url: siteConfig.brand.siteUrl,
    areaServed: {
      "@type": "City",
      name: "Porto Alegre",
      addressRegion: "RS",
      addressCountry: "BR",
    },
    medicalSpecialty: "Acupuncture",
  };

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                localStorage.setItem('nl-hud:public:v1', 'hidden:' + (Date.now() + 604800000));
              } catch (e) {}
              if (typeof document !== 'undefined') {
                const removeBadge = () => {
                  const el = document.getElementById('nl-badge-frame') || document.getElementById('nl-hud-frame');
                  if (el && el.tagName === 'IFRAME') el.remove();
                };
                const observer = new MutationObserver(removeBadge);
                observer.observe(document.documentElement, { childList: true, subtree: true });
              }
            `,
          }}
        />
      </head>
      <body className="bg-obsidian-atmosphere relative min-h-screen flex flex-col text-platinum">
        <div id="nl-badge-frame" style={{ display: "none" }} aria-hidden="true" />
        <div
          aria-hidden="true"
          className="bg-noise-grain pointer-events-none fixed inset-0 z-0"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
