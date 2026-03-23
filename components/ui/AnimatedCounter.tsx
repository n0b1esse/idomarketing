"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 820,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    if (reducedMotion) {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    const from = 0;
    const to = value;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = easeOutCubic(t);
      setDisplay(from + (to - from) * eased);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [duration, inView, reducedMotion, value]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toString();

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
