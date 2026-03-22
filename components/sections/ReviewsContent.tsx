"use client";

import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";
import { CERTIFICATES, TESTIMONIALS, THANK_YOU_LETTERS } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Modal, ModalImage } from "@/components/ui/Modal";
import { RevealSection } from "@/components/ui/RevealSection";

type Tab = "reviews" | "letters" | "certs";

export function ReviewsTabsShell({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">{children}</div>;
}

export function ReviewsTabControls({ tab, onTab }: { tab: Tab; onTab: (t: Tab) => void }) {
  const items: { id: Tab; label: string }[] = [
    { id: "reviews", label: "Отзывы" },
    { id: "letters", label: "Благодарственные письма" },
    { id: "certs", label: "Сертификаты" },
  ];
  return (
    <RevealSection>
      <div className="flex flex-wrap gap-2 border-b border-[var(--color-border)] pb-4">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onTab(item.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              tab === item.id
                ? "bg-[var(--color-primary)] text-[#0a0a0a]"
                : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </RevealSection>
  );
}

export function ReviewsGrid() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {TESTIMONIALS.map((t) => (
        <RevealSection key={t.id}>
          <Card>
            <div className="flex items-start gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[var(--color-border)]">
                <Image src={t.photo} alt="" fill className="object-cover" sizes="56px" />
              </div>
              <div>
                <p className="font-heading font-semibold">{t.name}</p>
                <p className="text-sm text-[var(--color-muted)]">
                  {t.role}, {t.company}
                </p>
                <div className="mt-2 flex gap-0.5" aria-hidden>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--color-primary)] text-[var(--color-primary)]" />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">{t.text}</p>
            <p className="mt-3 text-xs text-[var(--color-muted)]">Источник: {t.source}</p>
          </Card>
        </RevealSection>
      ))}
    </div>
  );
}

export function LettersGallery() {
  const [open, setOpen] = useState<string | null>(null);
  const active = THANK_YOU_LETTERS.find((l) => l.id === open);
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {THANK_YOU_LETTERS.map((l) => (
        <RevealSection key={l.id}>
          <Card className="overflow-hidden p-0">
            <div className="relative aspect-[3/4] w-full">
              <Image src={l.preview} alt="" fill className="object-cover" sizes="400px" />
            </div>
            <div className="flex items-center justify-between gap-4 p-4">
              <p className="text-sm font-medium text-[var(--color-text)]">{l.title}</p>
              <Button type="button" variant="secondary" className="shrink-0 text-xs" onClick={() => setOpen(l.id)}>
                Открыть
              </Button>
            </div>
          </Card>
        </RevealSection>
      ))}
      <Modal open={!!active} onClose={() => setOpen(null)} title={active?.title} wide>
        {active && <ModalImage src={active.fullImage} alt={active.title} />}
      </Modal>
    </div>
  );
}

export function CertificatesGallery() {
  const [open, setOpen] = useState<string | null>(null);
  const active = CERTIFICATES.find((c) => c.id === open);
  const byCat = CERTIFICATES.reduce<Record<string, typeof CERTIFICATES>>((acc, c) => {
    acc[c.category] = acc[c.category] ? [...acc[c.category], c] : [c];
    return acc;
  }, {});

  return (
    <div className="mt-10 space-y-12">
      {Object.entries(byCat).map(([category, items]) => (
        <div key={category}>
          <h3 className="font-heading text-lg font-semibold text-[var(--color-text)]">{category}</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((c) => (
              <RevealSection key={c.id}>
                <button
                  type="button"
                  onClick={() => setOpen(c.id)}
                  className="group w-full text-left"
                >
                  <Card className="overflow-hidden p-0 transition group-hover:border-[var(--color-primary)]/40">
                    <div className="relative aspect-[3/2] w-full">
                      <Image src={c.image} alt="" fill className="object-cover" sizes="480px" />
                    </div>
                    <p className="p-4 text-sm font-medium">{c.title}</p>
                  </Card>
                </button>
              </RevealSection>
            ))}
          </div>
        </div>
      ))}
      <Modal open={!!active} onClose={() => setOpen(null)} title={active?.title} wide>
        {active && <ModalImage src={active.image} alt={active.title} />}
      </Modal>
    </div>
  );
}

export function ReviewsTabPanels() {
  const [tab, setTab] = useState<Tab>("reviews");
  return (
    <section className="py-12 md:py-16">
      <ReviewsTabsShell>
        <ReviewsTabControls tab={tab} onTab={setTab} />
        {tab === "reviews" && <ReviewsGrid />}
        {tab === "letters" && <LettersGallery />}
        {tab === "certs" && <CertificatesGallery />}
      </ReviewsTabsShell>
    </section>
  );
}
