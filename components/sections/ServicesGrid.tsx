"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { RevealSection } from "@/components/ui/RevealSection";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function ServicesPreview() {
  const items = SERVICES.slice(0, 4);
  const reducedMotion = useReducedMotion();
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-[var(--color-text)] md:text-4xl">Услуги</h2>
              <p className="mt-3 max-w-xl text-[var(--color-muted)]">
                От стратегии до креативов — единая команда и сквозная отчётность.
              </p>
            </div>
            <Button href="/services" variant="ghost" className="shrink-0 gap-2 self-start md:self-auto">
              Все услуги
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </RevealSection>
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={reducedMotion ? {} : staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((s) => (
            <motion.div key={s.id} variants={reducedMotion ? {} : fadeUp}>
              <RevealSection>
                <Card>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-accent)]">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-heading mt-4 text-lg font-semibold text-[var(--color-text)]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{s.description}</p>
                </Card>
              </RevealSection>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
