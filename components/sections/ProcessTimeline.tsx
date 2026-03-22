import { PROCESS_STEPS } from "@/lib/data/site";
import { RevealSection } from "@/components/ui/RevealSection";

export function ProcessTimeline() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <h2 className="font-heading text-3xl font-semibold text-[var(--color-text)] md:text-4xl">Как мы работаем</h2>
          <p className="mt-3 max-w-2xl text-[var(--color-muted)]">Прозрачный процесс без сюрпризов по срокам и бюджету.</p>
        </RevealSection>
        <div className="mt-12 lg:hidden">
          <ol className="space-y-8 border-l border-[var(--color-border)] pl-6">
            {PROCESS_STEPS.map((step, i) => (
              <RevealSection key={step.title}>
                <li className="relative">
                  <span className="absolute -left-[1.6rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-bold text-[#0a0a0a]">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-[var(--color-text)]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{step.text}</p>
                </li>
              </RevealSection>
            ))}
          </ol>
        </div>
        <div className="mt-12 hidden lg:grid lg:grid-cols-4 lg:gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <RevealSection key={step.title}>
              <div className="relative rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 pt-10">
                <span className="absolute left-6 top-0 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-[#0a0a0a]">
                  {i + 1}
                </span>
                <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{step.text}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
