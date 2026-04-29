"use client";

import Image from "next/image";

import { useLocale } from "../../../../i18n/locale-context";

const COPY = {
  en: {
    eyebrow: "Our",
    title: "Everglades Residences",
    description:
      "Combining refined finishes, optimal layouts, and bright, open spaces to create a fresh and functional living environment.",
  },
  es: {
    eyebrow: "Nuestro",
    title: "Residencias Everglades",
    description:
      "Combinando acabados refinados, distribuciones óptimas y espacios abiertos y luminosos para crear un ambiente de vida fresco y funcional.",
  },
} as const;

export default function FloorPlanShowcase() {
  const { locale } = useLocale();
  const copy = locale === "es" ? COPY.es : COPY.en;

  return (
    <section className="w-full border-b border-black/10 bg-[#ececec] text-[#111111]">
      <div className="grid min-h-[42rem] grid-cols-1 md:min-h-[46rem] xl:min-h-[88vh] xl:grid-cols-[43%_57%]">
        <div className="flex flex-col justify-start gap-8 px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16 xl:gap-10 xl:py-20">
          <div>
            <p className="text-[1.55rem] leading-none tracking-tight italic font-serif text-black/85">
              {copy.eyebrow}
            </p>

            <h2 className="mt-7 max-w-xl text-5xl leading-[0.97] text-black sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              <span className="block font-serif italic">{copy.title}</span>
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="font-serif text-[1.75rem] leading-[1.28] tracking-[-0.01em] text-black/90 sm:text-[2.1rem]">
              {copy.description}
            </p>
          </div>
        </div>

        <div className="relative min-h-[26rem] xl:min-h-full">
          <Image
            src="/SaraHome_Interior.png"
            alt="Everglades residences floor plan"
            fill
            priority
            className="object-cover object-center"
            sizes="(min-width: 1280px) 57vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
