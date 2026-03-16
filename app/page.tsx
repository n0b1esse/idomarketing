import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { MagneticButton } from "@/components/MagneticButton";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedWork />
      <ScrollReveal className="border-t border-white/10">
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="font-mono text-sm text-slate-500">Let&apos;s build something exceptional</p>
              <h2 className="mt-2 font-sans text-2xl font-medium tracking-tight-custom text-white md:text-3xl">
                Ready to start your project?
              </h2>
            </div>
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-mono text-sm text-white backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/10"
                data-cursor-hover
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
