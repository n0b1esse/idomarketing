import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-lg font-semibold text-[var(--color-text)]">I DO MARKETING</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">
              Performance‑маркетинг и дизайн для брендов, которым нужен измеримый результат, а не отчёты
              «для галочки».
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-muted)] underline-offset-4 hover:text-[var(--color-primary)] hover:underline"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-[var(--color-text)]">
              Навигация
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-[var(--color-text)]">
              Контакты
            </p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-[var(--color-primary)]"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              {CONTACT.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-[var(--color-primary)]"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    {p}
                  </a>
                </li>
              ))}
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {CONTACT.address}
              </li>
            </ul>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-[var(--color-text)]">
              Связь в мессенджерах
            </p>
            <p className="mt-4 text-sm text-[var(--color-muted)]">
              Напишите в WhatsApp или Telegram — ответим в рабочее время и предложим слот для созвона.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--color-border)] pt-8 text-xs text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} I DO MARKETING. Все права защищены.</span>
          <span>Премиальный маркетинг с прозрачной аналитикой.</span>
        </div>
      </div>
    </footer>
  );
}
