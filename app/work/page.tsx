import { WorkGrid } from "@/components/work/WorkGrid";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Work | idomarketing",
  description: "Case studies and selected projects.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-sm text-slate-500">Portfolio</p>
          <h1 className="mt-2 font-sans text-4xl font-semibold tracking-tight-custom text-white md:text-5xl">
            Case Studies
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-slate-500">
            A selection of our most impactful work across brand, digital products, and experiences.
          </p>
        </ScrollReveal>
      </section>
      <WorkGrid />
    </main>
  );
}
