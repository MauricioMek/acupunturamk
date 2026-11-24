"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { WhatsappButton } from "./WhatsappButton";

const navItems = [
  { label: "Início", href: "/#hero" },
  { label: "Tratamentos", href: "/#tratamentos" },
  { label: "Procedimentos", href: "/#procedimentos" },
  { label: "Atendimento", href: "/#atendimento" },
  { label: "Profissional", href: "/#profissional" },
  { label: "Indicações", href: "/#indicacoes" },
  { label: "Regiões", href: "/#regioes" },
  { label: "Dúvidas", href: "/#duvidas" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-3 z-40 px-3 sm:px-6 lg:px-6 xl:px-4">
      <div className="dark-crystal-nav mx-auto flex w-full max-w-[1580px] flex-nowrap items-center justify-between gap-2.5 rounded-full px-3 py-2 sm:px-4 xl:gap-3 xl:pl-4 xl:pr-4 2xl:gap-4 2xl:pr-5">
        <BrandMark />

        <nav
          aria-label="Navegação principal"
          className="hidden flex-nowrap items-center gap-1 xl:flex 2xl:gap-1.5"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative inline-flex items-center gap-1.5 rounded-full border border-gold-rose/30 bg-gradient-to-b from-white/[0.05] to-white/[0.02] px-2 py-1.5 text-[12.5px] font-medium tracking-[0.02em] text-gold-rose whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(212,180,140,0.18)] backdrop-blur-md transition-all duration-200 hover:border-gold-rose/70 hover:text-gold-champagne hover:shadow-[0_6px_16px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(245,223,196,0.28)] 2xl:px-2.5 2xl:text-[13px]"
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-champagne opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-rose shadow-[0_0_8px_#F5DFC4]" />
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 xl:block">
          <WhatsappButton
            label="Agendar via WhatsApp"
            variant="gold"
            size="sm"
          />
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-charcoal/80 text-ivory transition-colors hover:border-gold-rose/60 xl:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="smoked-glass-3d mx-auto mt-2.5 max-w-[1440px] rounded-3xl px-4 py-5 xl:hidden"
        >
          <nav aria-label="Navegação móvel" className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-base font-medium tracking-[0.03em] text-platinum transition-colors hover:bg-white/5 hover:text-gold-champagne"
              >
                {item.label}
              </a>
            ))}
            <div className="flex justify-end pt-2">
              <WhatsappButton
                label="Agendar via WhatsApp"
                variant="gold"
                size="sm"
                className="w-fit"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
