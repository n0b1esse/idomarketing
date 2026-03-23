"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SERVICES, SERVICE_TABS, type ServiceCategory } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { RevealSection } from "@/components/ui/RevealSection";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeIn, fadeRight, scaleIn, staggerContainerSlow } from "@/lib/motion";

export function ServicesTabs() {
  const [tab, setTab] = useState<ServiceCategory>("ads");
  const reducedMotion = useReducedMotion();
  const list = SERVICES.filter((s) => s.category === tab);

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="flex flex-wrap gap-2 border-b border-[var(--color-border)] pb-4">
            {SERVICE_TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  tab === t.id
                    ? "bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </RevealSection>
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className="mt-10 grid gap-6 md:grid-cols-2"
            variants={reducedMotion ? {} : staggerContainerSlow}
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            exit={reducedMotion ? undefined : "hidden"}
          >
            {list.map((s) => (
              <motion.div key={s.id} variants={reducedMotion ? {} : fadeRight}>
                <Card>
                  <motion.span
                    variants={reducedMotion ? {} : scaleIn}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-accent)]"
                  >
                    <s.icon className="h-5 w-5" aria-hidden />
                  </motion.span>
                  <h3 className="font-heading mt-4 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{s.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--color-text)]">
                    {s.bullets.map((b) => (
                      <motion.li key={b} className="flex gap-2" variants={reducedMotion ? {} : fadeIn}>
                        <span className="text-[var(--color-primary)]" aria-hidden>
                          ✓
                        </span>
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button href="/contacts" variant="secondary">
                      Подробнее
                    </Button>
                    <Button href="/contacts" variant="primary">
                      Заказать
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
