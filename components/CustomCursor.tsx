"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const raf = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target?.closest?.("a, button, [data-cursor-hover]")) setIsHovering(true);
    };
    const handleOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement;
      if (!related?.closest?.("a, button, [data-cursor-hover]")) setIsHovering(false);
    };

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      style={{ willChange: "transform" }}
    >
      <motion.div
        className="flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
        animate={{
          scale: isHovering ? 2 : 1,
          borderColor: isHovering ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {isHovering && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="h-1.5 w-1.5 rounded-full bg-white"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
