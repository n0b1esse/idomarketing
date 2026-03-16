import { WorkGrid } from "@/components/work/WorkGrid";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Кейсы | I DO MARKETING",
  description: "Подборка реализованных проектов и цифровых продуктов.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-sm text-[#f8f7fc]/60">Портфолио</p>
          <h1 className="mt-2 font-sans text-4xl font-semibold tracking-tight-custom text-[#f8f7fc] md:text-5xl">
            Кейсы
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-[#f8f7fc]/60">
            От бренд‑платформ до цифровых сервисов — проекты, которые приносят
            бизнес‑результат.
          </p>
        </ScrollReveal>
      </section>
      <WorkGrid />
    </main>
  );
}
