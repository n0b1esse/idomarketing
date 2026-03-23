"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useCallback, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeIn, scaleIn } from "@/lib/motion";

export function Modal({
  open,
  onClose,
  title,
  children,
  wide,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  wide?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onKey]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title ?? "Диалог"}
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            aria-label="Закрыть"
            onClick={onClose}
            variants={reducedMotion ? {} : fadeIn}
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            exit={reducedMotion ? undefined : "hidden"}
          />
          <motion.div
            variants={reducedMotion ? {} : scaleIn}
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            exit={reducedMotion ? undefined : "hidden"}
            className={`relative z-[101] max-h-[90vh] w-full overflow-auto rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-4 shadow-2xl md:p-6 ${
              wide ? "max-w-4xl" : "max-w-lg"
            }`}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              {title ? (
                <h2 className="font-heading text-lg font-semibold text-[var(--color-text)]">{title}</h2>
              ) : (
                <span />
              )}
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-[var(--color-border)] p-2 text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
                aria-label="Закрыть окно"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export function ModalImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-[var(--color-border)] bg-black/40">
      <Image src={src} alt={alt} fill className="object-contain" sizes="(max-width: 768px) 100vw, 900px" />
    </div>
  );
}
