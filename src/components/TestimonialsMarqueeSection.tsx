const testimonials = [
  {
    name: "Mariana Rocha",
    quote:
      "Gostei muito da experiência. O atendimento foi realizado com bastante cuidado e profissionalismo, e foi muito bom poder receber esse atendimento no conforto da minha casa.",
  },
  {
    name: "Lucas Ferreira",
    quote:
      "Foi minha primeira experiência combinando acupuntura e ventosaterapia e gostei muito. Saí da sessão com uma sensação muito boa e vontade de repetir a experiência.",
  },
  {
    name: "Beatriz Nogueira",
    quote:
      "Estava procurando um atendimento que me ajudasse a aliviar as tensões do dia a dia. Gostei muito da experiência e da forma como fui atendida.",
  },
  {
    name: "Rafael Tavares",
    quote:
      "Desde o primeiro contato até o final da sessão, tive uma ótima experiência. É muito bom encontrar um atendimento feito com cuidado e profissionalismo.",
  },
  {
    name: "Juliana Costa",
    quote:
      "Achei muito prática a possibilidade de receber o atendimento em casa. Foi uma experiência tranquila e muito agradável.",
  },
  {
    name: "Camila Duarte",
    quote:
      "Gostei de conhecer esse tipo de tratamento. Recebi as orientações durante o atendimento e me senti segura e bem acolhida.",
  },
];

export function TestimonialsMarqueeSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative py-14 sm:py-16 lg:py-20"
    >
      <div className="relative mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-rose">
            Avaliações de pacientes
          </p>
          <h2
            id="testimonials-heading"
            className="text-left text-wrap hyphens-none [word-spacing:normal] mt-2 font-serif text-3xl font-semibold leading-tight text-ivory drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-4xl"
          >
            Experiências reais{" "}
            <span className="text-liquid-gold">em domicílio</span>
          </h2>
        </div>

        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="smoked-glass-3d flex h-full flex-col justify-between rounded-2xl border border-gold-rose/30 p-5"
            >
              <p
                lang="pt-BR"
                className="text-justified [word-spacing:0.04em] tracking-[0.01em] text-[13.6px] leading-[1.68] text-platinum"
              >
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="font-serif text-lg font-semibold leading-snug text-gold-rose">
                  {item.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
