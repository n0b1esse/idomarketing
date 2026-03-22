import { BridgePortfolio } from "@/components/sections/BridgePortfolio";
import { CasesPreview } from "@/components/sections/CasesGrid";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { CTABlock } from "@/components/sections/CTABlock";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ServicesPreview } from "@/components/sections/ServicesGrid";
import { StatsBlock } from "@/components/sections/StatsBlock";
import { TestimonialFeatured } from "@/components/sections/TestimonialsCarousel";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <ClientLogos />
      <StatsBlock />
      <ServicesPreview />
      <CasesPreview />
      <TestimonialFeatured />
      <BridgePortfolio />
      <CTABlock
        eyebrow="Заявка"
        title="Обсудим ваш проект на созвоне"
        subtitle="Оставьте контакты — вернёмся с вопросами и предложением по следующему шагу."
        formVariant="short"
      />
    </main>
  );
}
