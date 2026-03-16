import { ServicesSection } from "@/components/services/ServicesSection";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Services | idomarketing",
  description: "Strategy, Design, and Development for luxury brands.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-sm text-slate-500">What we do</p>
          <h1 className="mt-2 font-sans text-4xl font-semibold tracking-tight-custom text-white md:text-5xl">
            Services
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-slate-500">
            End-to-end capabilities to take your brand from strategy to launch.
          </p>
        </ScrollReveal>
      </section>
      <ServicesSection />
    </main>
  );
}
