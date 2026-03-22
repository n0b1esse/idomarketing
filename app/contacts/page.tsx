import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, MESSENGER_LINKS } from "@/lib/data/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { RevealSection } from "@/components/ui/RevealSection";

export const metadata = {
  title: "Контакты",
  description: "Свяжитесь с I DO MARKETING — email, телефон, мессенджеры и адрес.",
};

export default function ContactsPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="Контакты"
        title="Свяжитесь с нами"
        subtitle="Заполните форму или напишите напрямую — ответим в рабочее время."
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Контакты" },
        ]}
      />
      <section className="pb-16 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-4 sm:px-6 lg:grid-cols-[1fr,min(480px,100%)] lg:px-8">
          <RevealSection>
            <div className="space-y-6 text-[var(--color-muted)]">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-[var(--color-primary)]"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {CONTACT.email}
              </a>
              {CONTACT.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm transition-colors hover:text-[var(--color-primary)]"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {p}
                </a>
              ))}
              <p className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {CONTACT.address}
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={MESSENGER_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm hover:border-[var(--color-primary)]"
                >
                  WhatsApp
                </a>
                <a
                  href={MESSENGER_LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm hover:border-[var(--color-primary)]"
                >
                  Telegram
                </a>
              </div>
            </div>
          </RevealSection>
          <RevealSection>
            <ContactForm variant="full" />
          </RevealSection>
        </div>
      </section>
    </main>
  );
}
