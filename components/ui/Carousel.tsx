"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent,
} from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Carousel({
  children,
  className = "",
  autoPlayMs = 0,
  ariaLabel = "Карусель",
}: {
  children: ReactNode;
  className?: string;
  autoPlayMs?: number;
  ariaLabel?: string;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reducedMotion = useReducedMotion();
  const slides = Array.isArray(children) ? children : [children];
  const count = slides.length;

  const scrollTo = useCallback(
    (i: number) => {
      const clamped = Math.max(0, Math.min(count - 1, i));
      setDirection(clamped > index ? 1 : -1);
      setIndex(clamped);
    },
    [count, index],
  );

  useEffect(() => {
    if (!autoPlayMs || count < 2) return;
    const id = window.setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % count;
        setDirection(1);
        return next;
      });
    }, autoPlayMs);
    return () => window.clearInterval(id);
  }, [autoPlayMs, count]);

  const startX = useRef(0);

  const onTouchStart = (e: TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: TouchEvent) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) scrollTo(index + 1);
    else scrollTo(index - 1);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className="relative overflow-hidden pb-2"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        role="region"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: direction > 0 ? 28 : -28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: direction > 0 ? -28 : 28 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {slides[index]}
          </motion.div>
        </AnimatePresence>
      </div>
      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Назад"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/90 p-2 text-[var(--color-text)] shadow-lg backdrop-blur hover:border-[var(--color-primary)] disabled:opacity-30"
            onClick={() => scrollTo(index - 1)}
            disabled={index <= 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Вперёд"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/90 p-2 text-[var(--color-text)] shadow-lg backdrop-blur hover:border-[var(--color-primary)] disabled:opacity-30"
            onClick={() => scrollTo(index + 1)}
            disabled={index >= count - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="mt-3 flex justify-center gap-1.5">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Слайд ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-[var(--color-primary)]" : "bg-[var(--color-border-strong)]"
                }`}
                onClick={() => scrollTo(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function CarouselSlide({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full ${className}`}
      role="group"
      aria-roledescription="slide"
    >
      {children}
    </div>
  );
}
