"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data/site";
import { RevealSection } from "@/components/ui/RevealSection";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeRight, scaleIn, staggerContainerSlow } from "@/lib/motion";

export function ProcessTimeline() {
  const reducedMotion = useReducedMotion();
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <h2 className="font-heading text-3xl font-semibold text-[var(--color-text)] md:text-4xl">Как мы работаем</h2>
          <p className="mt-3 max-w-2xl text-[var(--color-muted)]">Прозрачный процесс без сюрпризов по срокам и бюджету.</p>
        </RevealSection>
        <div className="mt-12 lg:hidden">
          <motion.ol
            className="space-y-8 border-l border-[var(--color-border)] pl-6"
            variants={reducedMotion ? {} : staggerContainerSlow}
            initial={reducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {PROCESS_STEPS.map((step, i) => (
              <RevealSection key={step.title}>
                <motion.li className="relative" variants={reducedMotion ? {} : fadeRight}>
                  <motion.span
                    variants={reducedMotion ? {} : scaleIn}
                    className="absolute -left-[1.6rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-bold text-[var(--color-on-primary)]"
                  >
                    {i + 1}
                  </motion.span>
                  <h3 className="font-heading text-lg font-semibold text-[var(--color-text)]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{step.text}</p>
                </motion.li>
              </RevealSection>
            ))}
          </motion.ol>
        </div>
        <motion.div
          className="mt-12 hidden lg:grid lg:grid-cols-4 lg:gap-6"
          variants={reducedMotion ? {} : staggerContainerSlow}
          initial={reducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {PROCESS_STEPS.map((step, i) => (
            <RevealSection key={step.title}>
              <motion.div variants={reducedMotion ? {} : fadeRight} className="relative rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 pt-10">
                <motion.span
                  variants={reducedMotion ? {} : scaleIn}
                  className="absolute left-6 top-0 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-[var(--color-on-primary)]"
                >
                  {i + 1}
                </motion.span>
                <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{step.text}</p>
              </motion.div>
            </RevealSection>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
