"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight text-[var(--color-text)]"
        >
          I DO MARKETING
        </Link>
        <nav className="hidden items-center gap-6 md:gap-8 md:flex" aria-label="Основное меню">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="/contacts" variant="primary" className="!px-4 !py-2 text-sm">
            Получить консультацию
          </Button>
        </div>
        <button
          type="button"
          className="rounded-lg border border-[var(--color-border)] p-2 text-[var(--color-text)] md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Открыть меню"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm md:hidden"
          role="presentation"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`fixed inset-y-0 right-0 z-[70] w-[min(100%,20rem)] transform border-l border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-border)] p-4">
          <span className="font-heading font-semibold">Меню</span>
          <button
            type="button"
            className="rounded-lg border border-[var(--color-border)] p-2"
            onClick={() => setOpen(false)}
            aria-label="Закрыть меню"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-4" aria-label="Мобильное меню">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-3 text-base font-medium ${
                pathname === link.href
                  ? "bg-[var(--color-accent-muted)] text-[var(--color-accent)]"
                  : "text-[var(--color-text)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contacts" variant="primary" className="mt-4 w-full justify-center">
            Получить консультацию
          </Button>
        </nav>
      </div>
    </header>
  );
}
