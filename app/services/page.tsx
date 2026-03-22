import { BridgePortfolio } from "@/components/sections/BridgePortfolio";
import { CTABlock } from "@/components/sections/CTABlock";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ServicesTabs } from "@/components/sections/ServicesTabs";

export const metadata = {
  title: "Услуги",
  description: "Реклама, SEO, SMM и дизайн — полный цикл с прозрачной аналитикой.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Услуги"
        title="Рост за счёт системы, а не случайных тестов"
        subtitle="Выберите направление — покажем состав работ, сроки и ожидаемый эффект."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Услуги" },
        ]}
      />
      <ServicesTabs />
      <ProcessTimeline />
      <CTABlock
        eyebrow="Бесплатный аудит"
        title="Получите разбор воронки и медиамикса"
        subtitle="Короткий созвон и чек-лист точек роста — без обязательств."
        formVariant="short"
      />
      <BridgePortfolio />
    </main>
  );
}
