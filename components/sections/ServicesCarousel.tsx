import { SERVICES } from "@/lib/data/site";
import { Card } from "@/components/ui/Card";
import { Carousel, CarouselSlide } from "@/components/ui/Carousel";
import { RevealSection } from "@/components/ui/RevealSection";

export function ServicesCarousel({
  title = "Эти результаты стали возможны благодаря",
  autoPlayMs = 5000,
}: {
  title?: string;
  autoPlayMs?: number;
}) {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]/30 py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <h2 className="font-heading max-w-3xl text-3xl font-semibold text-[var(--color-text)] md:text-4xl">{title}</h2>
        </RevealSection>
        <div className="mt-10">
          <Carousel autoPlayMs={autoPlayMs} ariaLabel="Карусель услуг">
            {SERVICES.map((s) => (
              <CarouselSlide key={s.id}>
                <Card className="h-full">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-accent)]">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-heading mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{s.description}</p>
                </Card>
              </CarouselSlide>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
