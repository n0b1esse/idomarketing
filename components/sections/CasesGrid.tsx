"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import {
  CASE_FILTERS,
  type CaseFilter,
  PORTFOLIO_CASES,
  type PortfolioCase,
} from "@/lib/data/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { RevealSection } from "@/components/ui/RevealSection";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const INITIAL = 6;
const STEP = 3;

function filterCases(filter: CaseFilter, cases: PortfolioCase[]) {
  if (filter === "all") return cases;
  return cases.filter((c) => c.filters.includes(filter));
}

export function CasesGrid({ showFilters = true }: { showFilters?: boolean }) {
  const [filter, setFilter] = useState<CaseFilter>("all");
  const [visible, setVisible] = useState(INITIAL);
  const reducedMotion = useReducedMotion();

  const filtered = useMemo(() => filterCases(filter, PORTFOLIO_CASES), [filter]);
  const slice = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {showFilters && (
          <RevealSection>
            <div className="flex flex-wrap gap-2">
              {CASE_FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => {
                    setFilter(f.id);
                    setVisible(INITIAL);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    filter === f.id
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                      : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-text)]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </RevealSection>
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={reducedMotion ? {} : staggerContainer}
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            exit={reducedMotion ? undefined : "hidden"}
          >
            {slice.map((item) => (
              <motion.div key={item.id} variants={reducedMotion ? {} : fadeUp}>
                <Card className="overflow-hidden p-0">
                  <Link href={`/portfolio#${item.id}`} className="group block">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <motion.div variants={reducedMotion ? {} : scaleIn}>
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-xs font-medium text-[var(--color-accent)]">{item.client}</p>
                        <p className="text-xs text-[var(--color-muted)]">{item.service}</p>
                        <h3 className="font-heading mt-2 text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 font-heading text-2xl font-semibold text-[var(--color-primary)]">
                          {item.resultValue}
                        </p>
                        <p className="text-xs text-white/80">{item.resultLabel}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-[var(--color-border)] px-5 py-4">
                      <span className="text-sm text-[var(--color-muted)]">Кейс</span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)]">
                        Читать кейс
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <Button type="button" variant="secondary" onClick={() => setVisible((v) => v + STEP)}>
              Загрузить ещё
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export function CasesPreview() {
  const items = PORTFOLIO_CASES.slice(0, 3);
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-[var(--color-text)] md:text-4xl">Кейсы</h2>
              <p className="mt-3 max-w-xl text-[var(--color-muted)]">Реальные проекты с измеримым эффектом для бизнеса.</p>
            </div>
            <Button href="/portfolio" variant="ghost" className="gap-2 self-start md:self-auto">
              Смотреть все
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </RevealSection>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <RevealSection key={item.id}>
              <Card className="overflow-hidden p-0">
                <Link href={`/portfolio#${item.id}`} className="group block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-xs text-[var(--color-accent)]">{item.client}</p>
                      <h3 className="font-heading mt-1 text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 font-heading text-xl text-[var(--color-primary)]">{item.resultValue}</p>
                    </div>
                  </div>
                </Link>
              </Card>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
