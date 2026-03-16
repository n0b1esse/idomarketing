"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const caseStudies = [
  {
    id: "brand-x",
    title: "Brand X",
    category: "Brand Identity & Web",
    year: "2024",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    aspect: "tall" as const,
  },
  {
    id: "luxury-resort",
    title: "Luxury Resort",
    category: "Digital Experience",
    year: "2024",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    aspect: "wide" as const,
  },
  {
    id: "fintech-app",
    title: "Fintech App",
    category: "Product Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    aspect: "square" as const,
  },
  {
    id: "fashion-house",
    title: "Fashion House",
    category: "E‑commerce & CMS",
    year: "2023",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    aspect: "tall" as const,
  },
  {
    id: "automotive",
    title: "Automotive Group",
    category: "Platform & Strategy",
    year: "2023",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    aspect: "wide" as const,
  },
  {
    id: "health-tech",
    title: "Health Tech",
    category: "Product & Design",
    year: "2022",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    aspect: "square" as const,
  },
];

const aspectClasses = {
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  square: "",
};

export function WorkGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[repeat(4,minmax(200px,auto))] md:auto-rows-[240px]">
        {caseStudies.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 0.08}>
            <Link
              href={`#${item.id}`}
              className={`group relative block overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl transition-colors hover:border-white/20 ${aspectClasses[item.aspect]}`}
              data-cursor-hover
            >
              <div className="relative h-full min-h-[280px] w-full md:min-h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="font-mono text-xs text-slate-400">{item.category}</p>
                  <h2 className="mt-1 font-sans text-2xl font-semibold tracking-tight-custom text-white">
                    {item.title}
                  </h2>
                  <p className="mt-1 font-mono text-xs text-slate-500">{item.year}</p>
                  <span className="mt-4 inline-flex w-fit rounded-full border border-white/10 p-2 transition-colors group-hover:border-white/20">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
