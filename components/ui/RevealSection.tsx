"use client";

import type { ReactNode } from "react";
import { AnimateIn } from "@/components/ui/AnimateIn";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
}

export function RevealSection({ children, className = "" }: RevealSectionProps) {
  return (
    <AnimateIn variant="fadeUp" className={className}>
      {children}
    </AnimateIn>
  );
}
