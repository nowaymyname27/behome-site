"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { useLocale } from "../../../../i18n/locale-context";

const COPY = {
  en: {
    brand: "Sara Homes",
    intro: "Presenting",
    title: "The Verona Residence",
    price: "PRICED FROM $415.000",
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
    price: "DESDE $415.000",
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
    <motion.section
      initial={{ opacity: 0, y: 54 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.92, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.25 }}
      className="group w-full border-b border-black/10 bg-[#ececec] text-[#111111]"
    >
      <div className="grid grid-cols-1 xl:min-h-[96vh] xl:grid-cols-[31%_69%]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78, delay: 0.12, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col justify-between px-6 py-9 transition-transform duration-500 sm:px-10 sm:py-11 lg:px-12 lg:py-14 xl:py-24"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.52, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-[1.1rem] leading-none tracking-tight italic font-serif text-black/85 sm:text-[1.3rem] lg:text-[1.45rem]">
              {copy.brand}
            </p>

            <h2 className="mt-6 max-w-lg text-[2.1rem] leading-[1.02] text-black sm:mt-8 sm:text-[2.8rem] lg:text-[3.3rem] xl:mt-14 xl:text-[4rem] 2xl:text-[4.8rem]">
              <span className="block font-serif">{copy.intro}</span>
              <span className="mt-2 block font-serif italic">{copy.title}</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.28, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-6 font-serif text-[1.25rem] leading-none text-black/90 sm:text-[1.5rem] lg:text-[1.9rem] xl:mt-0 xl:text-[2rem]"
          >
            {copy.price}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, x: -14, scale: 1.05 }}
          whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{ duration: 0.88, delay: 0.16, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.25 }}
          className="relative min-h-[15rem] sm:min-h-[20rem] lg:min-h-[28rem] xl:min-h-full"
        >
          <div className="relative min-h-[15rem] overflow-hidden sm:min-h-[20rem] lg:min-h-[28rem] xl:min-h-full">
            <Image
              src="/verona_sala.png"
              alt="Verona residence interior"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.012] xl:object-center"
              sizes="(min-width: 1280px) 69vw, 100vw"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-[#1e1c21] px-5 py-6 text-white sm:px-8 sm:py-7 lg:px-12 xl:absolute xl:inset-x-0 xl:bottom-0 xl:py-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
              {copy.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.46, delay: 0.4 + index * 0.12, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.35 }}
                  className="transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <p className="font-serif text-[1.75rem] leading-none tracking-[-0.01em] text-white sm:text-[2.15rem] lg:text-[2.85rem] xl:text-[3.2rem]">
                    {stat.value}
                    <span className="ml-2 text-[1rem] align-baseline sm:text-[1.2rem] lg:text-[1.7rem] xl:text-[2rem]">
                      {stat.label}
                    </span>
                  </p>
                  <p className="mt-2 max-w-[18rem] text-[0.92rem] font-semibold leading-[1.3] text-white/95 sm:mt-3 sm:text-[0.98rem] lg:text-[1.05rem]">
                    {stat.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
