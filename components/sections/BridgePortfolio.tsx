import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealSection } from "@/components/ui/RevealSection";

export function BridgePortfolio() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[linear-gradient(90deg,rgba(77,111,208,0.1),rgba(55,20,146,0.08))] py-14 md:py-20">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <RevealSection>
          <h2 className="font-heading text-2xl font-semibold text-[var(--color-text)] md:text-3xl">
            Смотрите результаты на практике
          </h2>
          <p className="mt-2 max-w-xl text-[var(--color-muted)]">
            Портфолио с цифрами, задачами и тем, что сделали для роста.
          </p>
        </RevealSection>
        <RevealSection>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-on-primary)] transition hover:bg-[var(--color-primary-hover)]"
          >
            Перейти в портфолио
            <ArrowRight className="h-4 w-4" />
          </Link>
        </RevealSection>
      </div>
    </section>
  );
}
