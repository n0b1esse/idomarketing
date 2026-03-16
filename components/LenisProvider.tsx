"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
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
  }, []);

  return <>{children}</>;
}
