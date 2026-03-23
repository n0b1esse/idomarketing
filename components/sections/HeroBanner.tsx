"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HERO_STATS } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { fadeIn, fadeUp, staggerContainer } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroBanner() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[min(100svh,56rem)] overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(77,111,208,0.2),transparent_55%),radial-gradient(ellipse_80%_50%_at_100%_50%,rgba(55,20,146,0.14),transparent_50%),linear-gradient(180deg,#1d1b28_0%,#181622_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-4 pb-20 pt-12 text-center sm:px-6 lg:px-8 lg:pt-16">
        <motion.div
          className="w-full max-w-4xl"
          variants={reducedMotion ? {} : staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.div
            variants={reducedMotion ? {} : fadeIn}
            className="mx-auto max-w-2xl text-sm font-medium uppercase tracking-[0.16em] text-[var(--color-primary)]"
          >
            Маркетинг, который продаёт
          </motion.div>
          <motion.h1
            variants={reducedMotion ? {} : fadeUp}
            transition={reducedMotion ? undefined : { delay: 0, duration: 0.8 }}
            className="font-heading mx-auto mt-5 max-w-[min(100%,40rem)] text-balance text-4xl font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--color-text)] sm:text-5xl sm:leading-[1.1] md:mt-6 md:text-6xl md:leading-[1.08] lg:text-7xl lg:leading-[1.06]"
          >
            <span className="block">Запускаем спрос.</span>
            <span className="mt-2 block text-[var(--color-muted)] sm:mt-3">Масштабируем результат.</span>
          </motion.h1>
          <motion.p
            variants={reducedMotion ? {} : fadeUp}
            transition={reducedMotion ? undefined : { delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-muted)] md:mt-7 md:text-lg md:leading-relaxed"
          >
            Performance‑кампании, SEO и контент с единой аналитикой. Показываем цифры, а не «охваты ради охватов».
          </motion.p>
          <motion.div
            variants={reducedMotion ? {} : fadeUp}
            transition={reducedMotion ? undefined : { delay: 0.3 }}
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mt-11 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <motion.div>
              <Button href="/contacts" variant="primary" className="min-w-[200px] justify-center px-8 py-3 text-base">
                Оставить заявку
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div>
              <Button href="/portfolio" variant="secondary" className="min-w-[200px] justify-center px-8 py-3 text-base">
                Смотреть кейсы
              </Button>
            </motion.div>
          </motion.div>
          <AnimateIn variant="fadeIn" delay={0.5} className="mx-auto mt-14 w-full max-w-3xl">
            <div className="grid grid-cols-1 gap-8 border-t border-[var(--color-border)] pt-10 sm:grid-cols-3 sm:gap-6">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-heading text-3xl font-semibold tabular-nums text-[var(--color-text)] md:text-4xl">
                    {typeof s.value === "number" && s.value % 1 !== 0 ? (
                      <AnimatedCounter value={s.value} suffix={s.suffix} decimals={1} duration={1600} />
                    ) : (
                      <AnimatedCounter value={s.value} suffix={s.suffix} duration={1600} />
                    )}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </motion.div>
      </div>
    </section>
  );
}
