"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cardHover } from "@/lib/motion";

export function Card({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)] transition-transform duration-300 ${
        hover ? "hover:-translate-y-1 hover:border-[var(--color-primary)]/35 hover:shadow-[0_24px_60px_-24px_rgba(77,111,208,0.22)]" : ""
      } ${className}`}
      variants={hover && !reducedMotion ? cardHover : undefined}
      initial={hover && !reducedMotion ? "rest" : undefined}
      whileHover={hover && !reducedMotion ? "hover" : undefined}
    >
      {children}
    </motion.div>
  );
}
