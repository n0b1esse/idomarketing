"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { LenisProvider } from "./LenisProvider";
import { CustomCursor } from "./CustomCursor";
import { Header } from "./Header";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <LenisProvider>
      <CustomCursor />
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </LenisProvider>
  );
}
