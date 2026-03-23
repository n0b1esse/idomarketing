"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<{ destroy: () => void } | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        autoRaf: true,
      });
    };
    initLenis();
    return () => {
      lenisRef.current?.destroy();
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
