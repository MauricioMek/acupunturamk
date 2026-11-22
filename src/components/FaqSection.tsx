"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="duvidas"
      aria-labelledby="faq-heading"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-rose">
            Perguntas frequentes
          </p>
          <h2
            id="faq-heading"
            className="mt-2 font-serif text-3xl font-semibold leading-tight text-ivory drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-4xl"
          >
            Dúvidas sobre{" "}
            <span className="text-liquid-gold">o atendimento domiciliar</span>
          </h2>
          <p className="text-justified mx-auto mt-4 max-w-[56ch] text-base leading-relaxed text-platinum">
            Reunimos as principais orientações sobre como preparar sua casa e
            realizar o agendamento em Porto Alegre.
          </p>
        </div>

        <div className="mt-10 space-y-3.5">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={faq.question}
                className="smoked-glass-3d overflow-hidden rounded-2xl transition-all duration-200 hover:border-gold-rose/35"
              >
                <h3 className="font-sans">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.03]"
                  >
                    <span className="font-serif text-xl font-semibold leading-snug text-gold-rose sm:text-2xl">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gold-rose transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="border-t border-white/10 px-6 pb-5 pt-4"
                  >
                    <p className="text-justified max-w-[68ch] text-sm leading-relaxed text-platinum sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
