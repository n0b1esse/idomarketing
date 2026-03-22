import { ContactForm } from "@/components/forms/ContactForm";
import { RevealSection } from "@/components/ui/RevealSection";

export function CTABlock({
  eyebrow,
  title,
  subtitle,
  formVariant = "short",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  formVariant?: "short" | "full";
}) {
  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr,min(480px,100%)] lg:items-start">
          <RevealSection>
            {eyebrow && (
              <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-accent)]">{eyebrow}</p>
            )}
            <h2 className="font-heading mt-2 text-3xl font-semibold text-[var(--color-text)] md:text-4xl">{title}</h2>
            {subtitle && <p className="mt-4 text-[var(--color-muted)]">{subtitle}</p>}
            <p className="mt-6 text-sm text-[var(--color-muted)]">
              Нажимая «Отправить», вы соглашаетесь на обработку данных для обратной связи.
            </p>
          </RevealSection>
          <RevealSection>
            <ContactForm variant={formVariant} />
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
