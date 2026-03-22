"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NAV_LINKS } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const mobileMenu =
    mounted &&
    open &&
    typeof document !== "undefined" &&
    createPortal(
      <>
        <div
          className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm md:hidden"
          role="presentation"
          aria-hidden
          onClick={() => setOpen(false)}
        />
        <div
          className="fixed top-0 right-0 z-[210] flex h-[100dvh] max-h-[100dvh] w-[min(100%,20rem)] flex-col border-l border-white/10 bg-[rgba(13,13,13,0.88)] shadow-2xl backdrop-blur-xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Мобильное меню"
        >
          <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-4">
            <span className="font-heading font-semibold text-[var(--color-text)]">Меню</span>
            <button
              type="button"
              className="rounded-lg border border-[var(--color-border)] p-2 text-[var(--color-text)]"
              onClick={() => setOpen(false)}
              aria-label="Закрыть меню"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 overflow-y-auto overscroll-contain p-4 pb-8" aria-label="Мобильное меню">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[rgba(77,111,208,0.16)] text-[var(--color-primary)]"
                    : "text-[var(--color-text)] active:bg-white/10"
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
      </>,
      document.body,
    );

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
      {mobileMenu}
    </header>
  );
}
