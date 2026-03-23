import { STATS_MAIN } from "@/lib/data/site";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RevealSection } from "@/components/ui/RevealSection";

export function StatsBlock() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS_MAIN.map((s) => (
              <div
                key={s.label}
                className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center shadow-[var(--shadow-card)]"
              >
                <p className="font-heading text-4xl font-semibold text-[var(--color-primary)] md:text-5xl">
                  {s.value % 1 !== 0 ? (
                    <AnimatedCounter value={s.value} suffix={s.suffix} decimals={1} duration={1700} />
                  ) : (
                    <AnimatedCounter value={s.value} suffix={s.suffix} duration={1700} />
                  )}
                </p>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{s.label}</p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
