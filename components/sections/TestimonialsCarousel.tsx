import Image from "next/image";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Carousel, CarouselSlide } from "@/components/ui/Carousel";
import { RevealSection } from "@/components/ui/RevealSection";

export function TestimonialsCarousel({
  title = "Отзывы клиентов",
  showAllLink = true,
  autoPlayMs = 6000,
}: {
  title?: string;
  showAllLink?: boolean;
  autoPlayMs?: number;
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-heading text-3xl font-semibold text-[var(--color-text)] md:text-4xl">{title}</h2>
            {showAllLink && (
              <Button href="/reviews" variant="ghost" className="self-start md:self-auto">
                Все отзывы →
              </Button>
            )}
          </div>
        </RevealSection>
        <div className="mt-10">
          <Carousel autoPlayMs={autoPlayMs}>
            {TESTIMONIALS.map((t) => (
              <CarouselSlide key={t.id}>
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[var(--color-border)]">
                      <Image src={t.photo} alt="" fill className="object-cover" sizes="56px" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-[var(--color-text)]">{t.name}</p>
                      <p className="text-sm text-[var(--color-muted)]">
                        {t.role}, {t.company}
                      </p>
                      <div className="mt-2 flex gap-0.5" aria-label={`Рейтинг ${t.rating} из 5`}>
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[var(--color-primary)] text-[var(--color-primary)]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">&ldquo;{t.text}&rdquo;</p>
                  <p className="mt-4 text-xs text-[var(--color-muted)]">Источник: {t.source}</p>
                </Card>
              </CarouselSlide>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export function TestimonialFeatured() {
  const t = TESTIMONIALS[0];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <h2 className="font-heading text-3xl font-semibold text-[var(--color-text)] md:text-4xl">Что говорят клиенты</h2>
        </RevealSection>
        <RevealSection>
          <Card className="mt-10 max-w-3xl">
            <div className="flex items-start gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[var(--color-border)]">
                <Image src={t.photo} alt="" fill className="object-cover" sizes="64px" />
              </div>
              <div>
                <p className="font-heading text-lg font-semibold">{t.name}</p>
                <p className="text-sm text-[var(--color-muted)]">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text)]">&ldquo;{t.text}&rdquo;</p>
            <div className="mt-8">
              <Button href="/reviews" variant="secondary">
                Все отзывы →
              </Button>
            </div>
          </Card>
        </RevealSection>
      </div>
    </section>
  );
}
