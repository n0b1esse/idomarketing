"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent,
} from "react";

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
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const count = Array.isArray(children) ? children.length : 1;

  const scrollTo = useCallback(
    (i: number) => {
      const el = trackRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(count - 1, i));
      const child = el.children[clamped] as HTMLElement | undefined;
      if (child) {
        el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
      }
      setIndex(clamped);
    },
    [count],
  );

  useEffect(() => {
    if (!autoPlayMs || count < 2) return;
    const id = window.setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % count;
        const el = trackRef.current;
        const child = el?.children[next] as HTMLElement | undefined;
        if (el && child) el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
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
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        role="region"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onScroll={(e) => {
          const el = e.currentTarget;
          const children = Array.from(el.children) as HTMLElement[];
          let best = 0;
          let bestDist = Infinity;
          children.forEach((ch, i) => {
            const d = Math.abs(ch.offsetLeft - el.scrollLeft);
            if (d < bestDist) {
              bestDist = d;
              best = i;
            }
          });
          setIndex(best);
        }}
      >
        {children}
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
      className={`min-w-[min(100%,22rem)] shrink-0 snap-start md:min-w-[28rem] ${className}`}
      role="group"
      aria-roledescription="slide"
    >
      {children}
    </div>
  );
}
