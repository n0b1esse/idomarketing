"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/work", label: "Кейсы" },
  { href: "/services", label: "Услуги" },
  { href: "/contact", label: "Контакты" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="font-sans text-lg font-medium tracking-tight-custom text-white"
          data-cursor-hover
        >
          I DO MARKETING
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-sm transition-colors hover:text-white ${
                pathname === link.href ? "text-white" : "text-slate-500"
              }`}
              data-cursor-hover
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="md:hidden rounded border border-white/10 p-2 text-white"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          data-cursor-hover
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center gap-8 pt-24"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-mono text-xl ${pathname === link.href ? "text-white" : "text-slate-500"}`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
