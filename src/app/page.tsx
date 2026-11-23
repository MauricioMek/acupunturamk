import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { ServiceSection } from "@/components/ServiceSection";
import { AboutSection } from "@/components/AboutSection";
import { IndicationsSection } from "@/components/IndicationsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { NeighborhoodsSection } from "@/components/NeighborhoodsSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";
import { GalleryMarqueeSection } from "@/components/GalleryMarqueeSection";
import { TestimonialsMarqueeSection } from "@/components/TestimonialsMarqueeSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="conteudo-principal">
        <HeroSection />
        <TreatmentsSection />
        <GalleryMarqueeSection />
        <ServiceSection />
        <AboutSection />
        <IndicationsSection />
        <ProcessSection />
        <TestimonialsMarqueeSection />
        <NeighborhoodsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
