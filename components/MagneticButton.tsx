"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  [key: string]: unknown;
}

export function MagneticButton({
  children,
  className = "",
  as: Component = "button",
  href,
  ...props
}: MagneticButtonProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isWrapOnly = Component === "button" && href === undefined;

  return (
    <motion.div
      ref={wrapperRef}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {isWrapOnly ? (
        children
      ) : (
        <Component
          href={href}
          className={className}
          data-cursor-hover
          {...props}
        >
          {children}
        </Component>
      )}
    </motion.div>
  );
}
