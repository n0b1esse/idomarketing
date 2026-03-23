"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeIn, fadeLeft, fadeRight, fadeUp, scaleIn } from "@/lib/motion";

type VariantKey = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleIn";

const variantMap: Record<VariantKey, Variants> = {
  fadeUp,
  fadeIn,
  fadeLeft,
  fadeRight,
  scaleIn,
};

export function AnimateIn({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  variant?: VariantKey;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}) {
  const reducedMotion = useReducedMotion();
  const selected = variantMap[variant];

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once, amount }}
      variants={selected}
      transition={
        reducedMotion
          ? { duration: 0 }
          : {
              delay,
              ...(duration ? { duration } : {}),
            }
      }
    >
      {children}
    </motion.div>
  );
}
