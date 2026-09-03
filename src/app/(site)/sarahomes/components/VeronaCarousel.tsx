"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { useLocale } from "../../../../i18n/locale-context";

const AUTO_ADVANCE_MS = 7000;
const SLIDE_FRAME_CLASS =
  "min-h-[40rem] sm:min-h-[46rem] lg:min-h-[52rem] xl:h-[96vh] xl:min-h-[52rem]";

const COPY = {
  en: {
    brand: "SaraHomes",
    intro: "Presenting",
    title: "Verona Residences",
    floorPlans: "Floor Plans",
    price: "PRICED FROM $415.000",
    imageAlt: {
      exterior: "Verona residence exterior",
      interior: "Verona residence interior",
      floorPlan: "Verona floor plan layout",
    },
    aria: {
      carousel: "Verona residence carousel",
      previous: "Previous slide",
      next: "Next slide",
      goToSlide: (n: number) => `Go to slide ${n}`,
    },
    stats: [
      {
        value: "1,768",
        label: "Living Area",
        detail: "three-bedroom residences with flexroom.",
      },
      {
        value: "2,484",
        label: "Under Roof",
        detail: "open floorplan for active lifestyle and entertaining",
      },
      {
        value: "10,000",
        label: "Private lots",
        detail: "driveway, front yard and expansive back patio",
      },
    ],
    specs: [
      "3 bedrooms + Flex room / 2 bathrooms",
      "1,768 ft^2 (164 m^2) - Interior Area",
      "96 ft^2 (9 m^2) - Entrance",
      "388 ft^2 (36 m^2) - Garage (2 vehicles)",
      "261 ft^2 (24.2 m^2) - Lanai",
      "2,484 ft^2 (230.7 m^2) - Total Area",
      "10,000 ft^2 (929 m^2) - Lot size (approx.)",
    ],
  },
  es: {
    brand: "SaraHomes",
    intro: "Presentando",
    title: "Residencias Verona",
    floorPlans: "Planos de Planta",
    price: "DESDE $415.000",
    imageAlt: {
      exterior: "Exterior de la residencia Verona",
      interior: "Interior de la residencia Verona",
      floorPlan: "Distribucion de plano Verona",
    },
    aria: {
      carousel: "Carrusel de la residencia Verona",
      previous: "Diapositiva anterior",
      next: "Siguiente diapositiva",
      goToSlide: (n: number) => `Ir a la diapositiva ${n}`,
    },
    stats: [
      {
        value: "1,768",
        label: "Area habitable",
        detail: "residencias de tres habitaciones con cuarto flexible.",
      },
      {
        value: "2,484",
        label: "Bajo techo",
        detail: "planta abierta para un estilo de vida activo y social",
      },
      {
        value: "10,000",
        label: "Lotes privados",
        detail: "entrada, patio frontal y amplio patio trasero",
      },
    ],
    specs: [
      "3 habitaciones + cuarto flexible / 2 banos",
      "1,768 ft^2 (164 m^2) - Area interior",
      "96 ft^2 (9 m^2) - Entrada",
      "388 ft^2 (36 m^2) - Garaje (2 vehiculos)",
      "261 ft^2 (24.2 m^2) - Lanai",
      "2,484 ft^2 (230.7 m^2) - Area total",
      "10,000 ft^2 (929 m^2) - Tamano de lote (aprox.)",
    ],
  },
} as const;

function renderSpecWithExponents(line: string) {
  const parts = line.split(/(ft\^2|m\^2)/g);

  return parts.map((part, index) => {
    if (part === "ft^2") {
      return (
        <span key={`ft-${index}`}>
          ft<sup>2</sup>
        </span>
      );
    }

    if (part === "m^2") {
      return (
        <span key={`m-${index}`}>
          m<sup>2</sup>
        </span>
      );
    }

    return <span key={`t-${index}`}>{part}</span>;
  });
}

export default function VeronaCarousel() {
  const { locale } = useLocale();
  const copy = locale === "es" ? COPY.es : COPY.en;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const totalSlides = 3;

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSlides);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, totalSlides]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + totalSlides) % totalSlides);
    setIsPaused(true);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % totalSlides);
    setIsPaused(true);
  };

  const handleBlurCapture = (event: React.FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget;

    if (!containerRef.current?.contains(nextTarget as Node | null)) {
      setIsPaused(false);
    }
  };

  return (
    <section className="w-full border-b border-black/10 bg-[#ececec] text-[#111111]">
      <div
        ref={containerRef}
        className="relative"
        role="region"
        aria-roledescription="carousel"
        aria-label={copy.aria.carousel}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={handleBlurCapture}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={SLIDE_FRAME_CLASS}
          >
            {activeIndex === 0 && (
              <section
                className={`relative isolate w-full overflow-hidden ${SLIDE_FRAME_CLASS}`}
              >
                <div className="absolute inset-0 -z-20">
                  <Image
                    src="/verona_exterior.png"
                    alt={copy.imageAlt.exterior}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority
                  />
                </div>

                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

                <div
                  className={`relative flex items-end px-6 pb-10 sm:px-10 sm:pb-14 lg:px-16 lg:pb-16 xl:px-24 xl:pb-20 ${SLIDE_FRAME_CLASS}`}
                >
                  <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/75 sm:text-sm">
                      {copy.brand}
                    </p>
                    <h2 className="mt-3 font-serif text-4xl leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                      {copy.title}
                    </h2>
                  </div>
                </div>
              </section>
            )}

            {activeIndex === 1 && (
              <section className={`w-full ${SLIDE_FRAME_CLASS}`}>
                <div
                  className={`grid grid-cols-1 xl:grid-cols-[31%_69%] ${SLIDE_FRAME_CLASS}`}
                >
                  <div className="flex flex-col justify-between px-6 py-9 sm:px-10 sm:py-11 lg:px-12 lg:py-14 xl:py-24">
                    <div>
                      <p className="text-[1.1rem] leading-none tracking-tight italic font-serif text-black/85 sm:text-[1.3rem] lg:text-[1.45rem]">
                        {copy.brand}
                      </p>

                      <h2 className="mt-6 max-w-lg text-[2.1rem] leading-[1.02] text-black sm:mt-8 sm:text-[2.8rem] lg:text-[3.3rem] xl:mt-14 xl:text-[4rem] 2xl:text-[4.8rem]">
                        <span className="block font-serif">{copy.intro}</span>
                        <span className="mt-2 block font-serif italic">{copy.title}</span>
                      </h2>
                    </div>

                    <p className="mt-6 font-serif text-[1.25rem] leading-none text-black/90 sm:text-[1.5rem] lg:text-[1.9rem] xl:mt-0 xl:text-[2rem]">
                      {copy.price}
                    </p>
                  </div>

                  <div className="relative min-h-[18rem] xl:min-h-full">
                    <div className="relative h-full min-h-[18rem] overflow-hidden xl:min-h-full">
                      <Image
                        src="/verona_sala.png"
                        alt={copy.imageAlt.interior}
                        fill
                        className="object-cover object-center"
                        sizes="(min-width: 1280px) 69vw, 100vw"
                      />
                    </div>

                    <div className="bg-[#1e1c21] px-5 py-6 text-white sm:px-8 sm:py-7 lg:px-12 xl:absolute xl:inset-x-0 xl:bottom-0 xl:py-8">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
                        {copy.stats.map((stat) => (
                          <div key={stat.label}>
                            <p className="font-serif text-[1.75rem] leading-none tracking-[-0.01em] text-white sm:text-[2.15rem] lg:text-[2.85rem] xl:text-[3.2rem]">
                              {stat.value}
                              <span className="ml-2 text-[1rem] align-baseline sm:text-[1.2rem] lg:text-[1.7rem] xl:text-[2rem]">
                                {stat.label}
                              </span>
                            </p>
                            <p className="mt-2 max-w-[18rem] text-[0.92rem] font-semibold leading-[1.3] text-white/95 sm:mt-3 sm:text-[0.98rem] lg:text-[1.05rem]">
                              {stat.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeIndex === 2 && (
              <section className={`w-full ${SLIDE_FRAME_CLASS}`}>
                <div
                  className={`grid grid-cols-1 xl:grid-cols-[57%_43%] ${SLIDE_FRAME_CLASS}`}
                >
                  <div className="relative order-2 min-h-[20rem] overflow-hidden bg-white sm:min-h-[24rem] xl:order-1 xl:min-h-full">
                    <Image
                      src="/verona_fp.jpg"
                      alt={copy.imageAlt.floorPlan}
                      fill
                      className="object-contain object-center p-6 sm:p-8 xl:p-12"
                      sizes="(min-width: 1280px) 57vw, 100vw"
                    />
                  </div>

                  <div className="order-1 flex flex-col justify-between px-6 py-9 sm:px-10 sm:py-11 lg:px-12 lg:py-12 xl:order-2 xl:py-16">
                    <div>
                      <p className="text-[1.1rem] leading-none tracking-tight italic font-serif text-black/85 sm:text-[1.3rem] lg:text-[1.45rem]">
                        {copy.brand}
                      </p>

                      <h2 className="mt-6 max-w-xl text-[2.1rem] leading-[0.98] text-black sm:mt-8 sm:text-[2.8rem] lg:text-[4rem] xl:mt-14 xl:text-[4.8rem]">
                        <span className="block font-serif italic">{copy.title}</span>
                        <span className="mt-1.5 block font-serif">{copy.floorPlans}</span>
                      </h2>
                    </div>

                    <div className="mt-6 max-w-xl border-y border-black/20 xl:mt-0">
                      {copy.specs.map((line, index) => (
                        <p
                          key={line}
                          className={[
                            "py-1.5 text-[1.12rem] leading-[1.28] text-black/95 sm:text-[1.35rem] lg:text-[1.65rem] xl:text-[1.82rem]",
                            index === 0 ? "font-semibold" : "font-normal",
                            index < copy.specs.length - 1 ? "border-b border-black/20" : "",
                          ].join(" ")}
                        >
                          {renderSpecWithExponents(line)}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          aria-label={copy.aria.previous}
          onClick={showPrevious}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/85 p-2 text-[#111111] shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#111111]/30"
        >
          <ChevronLeft />
        </button>

        <button
          type="button"
          aria-label={copy.aria.next}
          onClick={showNext}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/85 p-2 text-[#111111] shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#111111]/30"
        >
          <ChevronRight />
        </button>

        <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={copy.aria.goToSlide(index + 1)}
              onClick={() => goTo(index)}
              className={[
                "h-2 rounded-full transition-all shadow-sm",
                index === activeIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
