"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
  amount?: number;
}

const directionOffset = {
  up: { y: 48, x: 0 },
  down: { y: -48, x: 0 },
  left: { x: 48, y: 0 },
  right: { x: -48, y: 0 },
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  amount = 0.2,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });
  const { x, y } = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x, y }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
