import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { RevealSection } from "@/components/ui/RevealSection";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
}) {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]/40 pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <nav aria-label="Хлебные крошки" className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted)]">
            {breadcrumbs.map((b, i) => (
              <span key={`${b.label}-${i}`} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="h-4 w-4 opacity-50" aria-hidden />}
                {b.href ? (
                  <Link href={b.href} className="hover:text-[var(--color-primary)]">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-[var(--color-text)]">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
          {eyebrow && (
            <p className="mt-6 text-sm font-medium uppercase tracking-wider text-[var(--color-accent)]">{eyebrow}</p>
          )}
          <h1 className="font-heading mt-2 text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">{subtitle}</p>
        </RevealSection>
      </div>
    </section>
  );
}
