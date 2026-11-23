import fs from "node:fs";
import path from "node:path";
import { Award } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Tilt3DCard } from "./Tilt3DCard";
import { ProfessionalPortrait } from "./ProfessionalPortrait";

function resolvePortraitSrc(configuredPath: string): string | null {
  const candidates = [
    configuredPath,
    "/mauricio-perfil.png",
    "/mauricio-perfil.jpg",
    "/mauricio-perfil.jpeg",
  ].filter(Boolean);

  for (const relPath of candidates) {
    const absPath = path.join(
      process.cwd(),
      "public",
      relPath.replace(/^\//, "")
    );
    if (fs.existsSync(absPath)) {
      return relPath;
    }
  }
  return null;
}

export function AboutSection() {
  const { professional } = siteConfig;
  const resolvedPhotoSrc = resolvePortraitSrc(professional.photoPath);

  return (
    <section
      id="profissional"
      aria-labelledby="about-heading"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-12 h-80 w-80 rounded-full bg-gold-rose/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Tilt3DCard intensity={2.5}>
          <div className="smoked-glass-3d rounded-3xl p-6 sm:p-10 lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="min-w-0 lg:col-span-4">
                <ProfessionalPortrait
                  initialSrc={resolvedPhotoSrc}
                  name={professional.name}
                />
              </div>

              <div className="min-w-0 lg:col-span-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-rose">
                  Sobre o profissional
                </p>
                <h2
                  id="about-heading"
                  className="mt-2 font-serif text-3xl font-semibold leading-tight text-ivory sm:text-4xl"
                >
                  {professional.name}
                </h2>
                <p className="mt-1.5 text-base font-medium text-gold-champagne">
                  {professional.role}
                </p>

                <div className="mt-6 space-y-3.5">
                  {professional.bioParagraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-justified max-w-[66ch] text-base leading-relaxed text-platinum"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <h3 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-rose">
                    <Award className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Formação e qualificações</span>
                  </h3>
                  <ul className="mt-3.5 grid gap-3 sm:grid-cols-2">
                    {professional.credentialsList.map((credential, idx) => (
                      <li
                        key={idx}
                        className="rounded-xl border border-white/10 bg-obsidian/60 px-4 py-3 text-sm text-ivory/85"
                      >
                        {credential}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Tilt3DCard>
      </div>
    </section>
  );
}
