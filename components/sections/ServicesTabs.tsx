"use client";

import { useState } from "react";
import { SERVICES, SERVICE_TABS, type ServiceCategory } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { RevealSection } from "@/components/ui/RevealSection";

export function ServicesTabs() {
  const [tab, setTab] = useState<ServiceCategory>("ads");
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
                    ? "bg-[var(--color-primary)] text-[#0a0a0a]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </RevealSection>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {list.map((s) => (
            <RevealSection key={s.id}>
              <Card>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-accent)]">
                  <s.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-heading mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{s.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--color-text)]">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-[var(--color-primary)]" aria-hidden>
                        ✓
                      </span>
                      {b}
                    </li>
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
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
