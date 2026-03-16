"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const line1 = "We craft";
const line2 = "digital experiences";
const line3 = "that matter.";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-6 pt-24 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <motion.p
          className="font-mono text-sm text-slate-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Luxury Digital Agency
        </motion.p>
        <div className="mt-6 overflow-hidden">
          <motion.h1
            className="font-sans text-4xl font-semibold tracking-tight-custom text-white sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 80 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {line1}
            <br />
            <span className="text-white/90">{line2}</span>
            <br />
            {line3}
          </motion.h1>
        </div>
        <motion.p
          className="mx-auto mt-8 max-w-xl font-sans text-base text-slate-500 sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Strategy, design, and development for brands that refuse to blend in.
        </motion.p>
      </div>
    </section>
  );
}
