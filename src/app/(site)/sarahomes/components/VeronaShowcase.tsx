"use client";

import Image from "next/image";

import { useLocale } from "../../../../i18n/locale-context";

const COPY = {
  en: {
    brand: "Sara Homes",
    intro: "Presenting",
    title: "The Verona Residence",
    price: "PRICED FROM $380.000",
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
  },
  es: {
    brand: "Sara Homes",
    intro: "Presentando",
    title: "La Residencia Verona",
    price: "DESDE $380.000",
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
  },
} as const;

export default function VeronaShowcase() {
  const { locale } = useLocale();
  const copy = locale === "es" ? COPY.es : COPY.en;

  return (
    <section className="w-full border-b border-black/10 bg-[#ececec] text-[#111111]">
      <div className="grid grid-cols-1 xl:min-h-[88vh] xl:grid-cols-[31%_69%]">
        <div className="flex flex-col justify-between px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 xl:py-20">
          <div>
            <p className="text-[1.1rem] leading-none tracking-tight italic font-serif text-black/85 sm:text-[1.3rem] lg:text-[1.45rem]">
              {copy.brand}
            </p>

            <h2 className="mt-8 max-w-md text-[2.5rem] leading-[0.98] text-black sm:mt-10 sm:text-[3.35rem] lg:text-[4.2rem] xl:mt-14 xl:text-[5rem]">
              <span className="block font-serif">{copy.intro}</span>
              <span className="mt-2 block font-serif italic">{copy.title}</span>
            </h2>
          </div>

          <p className="mt-8 font-serif text-[1.55rem] leading-none text-black/90 sm:text-[1.8rem] lg:text-[2rem] xl:mt-0 xl:text-[2.35rem]">
            {copy.price}
          </p>
        </div>

        <div className="relative min-h-[18rem] sm:min-h-[24rem] lg:min-h-[30rem] xl:min-h-full">
          <Image
            src="/verona_sala.png"
            alt="Verona residence interior"
            fill
            className="object-cover object-center xl:object-center"
            sizes="(min-width: 1280px) 69vw, 100vw"
          />

          <div className="bg-[#1e1c21] px-6 py-7 text-white sm:px-10 sm:py-8 lg:px-12 xl:absolute xl:inset-x-0 xl:bottom-0 xl:py-8">
            <div className="grid gap-7 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
              {copy.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-[2.25rem] leading-none tracking-[-0.01em] text-white sm:text-[2.65rem] lg:text-[3rem] xl:text-[3.4rem]">
                    {stat.value}
                    <span className="ml-2 text-[1.35rem] align-baseline sm:text-[1.5rem] lg:text-[1.8rem] xl:text-[2.2rem]">
                      {stat.label}
                    </span>
                  </p>
                  <p className="mt-3 max-w-[18rem] text-[0.98rem] font-semibold leading-[1.25] text-white/95 sm:mt-4 sm:text-[1.02rem] lg:text-[1.08rem]">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
