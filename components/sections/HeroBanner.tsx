import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HERO_STATS } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RevealSection } from "@/components/ui/RevealSection";

export function HeroBanner() {
  return (
    <section className="relative min-h-[min(100svh,56rem)] overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(249,115,22,0.18),transparent_55%),radial-gradient(ellipse_80%_50%_at_100%_50%,rgba(34,211,238,0.08),transparent_50%),linear-gradient(180deg,#0d0d0d_0%,#0a0a0a_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-4 pb-20 pt-12 text-center sm:px-6 lg:px-8 lg:pt-16">
        <RevealSection className="w-full">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Маркетинг, который продаёт
          </p>
          <h1 className="font-heading mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl lg:text-7xl">
            Запускаем спрос.
            <br />
            <span className="text-[var(--color-muted)]">Масштабируем результат.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            Performance‑кампании, SEO и контент с единой аналитикой. Показываем цифры, а не «охваты ради охватов».
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contacts" variant="primary" className="min-w-[200px] justify-center px-8 py-3 text-base">
              Оставить заявку
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button href="/portfolio" variant="secondary" className="min-w-[200px] justify-center px-8 py-3 text-base">
              Смотреть кейсы
            </Button>
          </div>
          <div className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-6 border-t border-[var(--color-border)] pt-10 sm:grid-cols-3">
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl font-semibold text-[var(--color-text)] md:text-4xl">
                  {typeof s.value === "number" && s.value % 1 !== 0 ? (
                    <AnimatedCounter value={s.value} suffix={s.suffix} decimals={1} />
                  ) : (
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  )}
                </p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{s.label}</p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
