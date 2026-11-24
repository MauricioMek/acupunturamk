function YinYangEmblem() {
  return (
    <span
      className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold-rose/55 bg-obsidian/75 shadow-[0_6px_18px_rgba(0,0,0,0.75),inset_0_1px_1px_rgba(245,223,196,0.3)] backdrop-blur-md sm:h-9 sm:w-9"
      aria-hidden="true"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="carousel-yy-rim"
            x1="4"
            y1="4"
            x2="28"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFF7EB" />
            <stop offset="50%" stopColor="#F5DFC4" />
            <stop offset="100%" stopColor="#D4A373" />
          </linearGradient>
          <radialGradient id="carousel-yy-yang" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="50%" stopColor="#F5DFC4" />
            <stop offset="100%" stopColor="#D4A373" />
          </radialGradient>
          <radialGradient id="carousel-yy-yin" cx="65%" cy="70%" r="75%">
            <stop offset="0%" stopColor="#2A2C38" />
            <stop offset="100%" stopColor="#050507" />
          </radialGradient>
        </defs>
        <circle cx="16" cy="16" r="13.5" fill="url(#carousel-yy-yin)" />
        <path
          d="M16 2.5A13.5 13.5 0 0 0 16 29.5A6.75 6.75 0 0 0 16 16A6.75 6.75 0 0 1 16 2.5Z"
          fill="url(#carousel-yy-yang)"
        />
        <circle cx="16" cy="9.25" r="2.2" fill="url(#carousel-yy-yin)" />
        <circle cx="16" cy="22.75" r="2.2" fill="url(#carousel-yy-yang)" />
        <circle
          cx="16"
          cy="16"
          r="13.5"
          stroke="url(#carousel-yy-rim)"
          strokeWidth="1.2"
        />
      </svg>
    </span>
  );
}

const slides = [
  {
    src: "/images/ventosaterapia_premium.jpg",
    title: "VENTOSATERAPIA",
    subtitle: "Equilíbrio, bem-estar e alívio das tensões.",
    alt: "Cúpulas de ventosaterapia em vidro sobre madeira quente com toalha enrolada, pedras escuras e símbolo Yin-Yang iluminado ao fundo",
    showEmblem: true,
  },
  {
    src: "/images/acupuntura_premium_v2.jpg",
    title: "ACUPUNTURA",
    subtitle: "Harmonia para o corpo, equilíbrio para a mente.",
    alt: "Agulhas finas de acupuntura organizadas sobre bandeja de madeira com símbolo Yin-Yang iluminado ao fundo",
    showEmblem: true,
  },
  {
    src: "/images/eletroterapia_premium.jpg",
    title: "ELETROTERAPIA",
    subtitle: "Tecnologia a favor da sua saúde.",
    alt: "Aparelho clínico de eletroterapia e eletrodos conectados sobre toalha em ambiente com iluminação acolhedora",
    showEmblem: true,
  },
  {
    src: "/images/massagem_terapeutica_v2.jpg",
    title: "MASSAGEM TERAPÊUTICA",
    subtitle: "Relaxamento, saúde e qualidade de vida.",
    alt: "Aplicação de massagem terapêutica na região cervical e ombros em ambiente tranquilo com símbolo Yin-Yang iluminado ao fundo",
    showEmblem: true,
  },
];

export function GalleryMarqueeSection() {
  const loopSlides = [...slides, ...slides];

  return (
    <section
      id="procedimentos"
      aria-labelledby="gallery-marquee-heading"
      className="relative scroll-mt-24 overflow-hidden py-10 sm:py-12 lg:py-14"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-rose">
            Procedimentos terapêuticos
          </p>
          <h2
            id="gallery-marquee-heading"
            className="text-left text-wrap hyphens-none [word-spacing:normal] mt-2 font-serif text-3xl font-semibold leading-tight text-ivory drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-4xl"
          >
            Técnicas e cuidado{" "}
            <span className="text-liquid-gold">em cada sessão</span>
          </h2>
        </div>
      </div>

      <div
        className="relative mt-8 w-full overflow-hidden"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Carrossel de procedimentos terapêuticos"
      >
        <div
          className="flex w-max gap-5 pr-5"
          style={{
            animation: "marquee-rtl 34s linear infinite",
            willChange: "transform",
          }}
        >
          {loopSlides.map((slide, idx) => (
            <figure
              key={`${slide.title}-${idx}`}
              aria-hidden={idx >= slides.length}
              className="smoked-glass-3d relative h-[235px] w-[290px] shrink-0 overflow-hidden rounded-2xl border border-gold-rose/35 sm:h-[280px] sm:w-[380px] lg:h-[320px] lg:w-[480px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/25 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-col items-start p-4 sm:p-6">
                {slide.showEmblem && <YinYangEmblem />}
                <h3 className="font-serif text-xl font-semibold tracking-[0.06em] text-liquid-gold drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] sm:text-2xl">
                  {slide.title}
                </h3>
                <p className="mt-1 max-w-md text-xs leading-relaxed text-ivory/95 sm:text-sm">
                  {slide.subtitle}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
