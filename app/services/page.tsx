import { ServicesSection } from "@/components/services/ServicesSection";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Услуги | I DO MARKETING",
  description: "Стратегия, дизайн и разработка цифровых продуктов для брендов.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-sm text-slate-500">Что мы делаем</p>
          <h1 className="mt-2 font-sans text-4xl font-semibold tracking-tight-custom text-white md:text-5xl">
            Услуги
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-slate-500">
            Полный цикл — от стратегии и концепции до запуска и поддержки
            цифрового продукта.
          </p>
        </ScrollReveal>
      </section>
      <ServicesSection />
    </main>
  );
}
