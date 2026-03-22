import { CTABlock } from "@/components/sections/CTABlock";
import { PageHero } from "@/components/sections/PageHero";
import { ReviewsTabPanels } from "@/components/sections/ReviewsContent";

export const metadata = {
  title: "Отзывы и сертификаты",
  description: "Отзывы клиентов, благодарственные письма и сертификаты партнёров.",
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Репутация"
        title="Отзывы, письма и сертификаты"
        subtitle="Проверяемые источники и документы — не только слова на сайте."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Отзывы" },
        ]}
      />
      <ReviewsTabPanels />
      <CTABlock
        eyebrow="Следующий шаг"
        title="Хотите такой же результат?"
        subtitle="Расскажите о продукте и целях — предложим план на 30/60/90 дней."
        formVariant="full"
      />
    </main>
  );
}
