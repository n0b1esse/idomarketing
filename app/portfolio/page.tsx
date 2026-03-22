import { CasesGrid } from "@/components/sections/CasesGrid";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";

export const metadata = {
  title: "Портфолио",
  description: "Кейсы по таргету, SEO, SMM, контенту и дизайну с измеримыми результатами.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Портфолио"
        title="Кейсы и результаты"
        subtitle="Фильтруйте по направлению и смотрите, как задачи превращались в метрики."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Портфолио" },
        ]}
      />
      <CasesGrid showFilters />
      <ServicesCarousel />
      <TestimonialsCarousel title="Клиенты о совместной работе" />
    </main>
  );
}
