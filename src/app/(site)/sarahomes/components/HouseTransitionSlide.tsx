"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { useLocale } from "../../../../i18n/locale-context";

type HouseTransitionSlideProps = {
  imageSrc: string;
  imageAlt: string;
  titleEn: string;
  titleEs: string;
};

export default function HouseTransitionSlide({
  imageSrc,
  imageAlt,
  titleEn,
  titleEs,
}: HouseTransitionSlideProps) {
  const { locale } = useLocale();
  const title = locale === "es" ? titleEs : titleEn;

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.78, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="relative isolate w-full min-h-[55vh] overflow-hidden sm:min-h-[65vh] lg:min-h-[72vh] xl:min-h-[85vh]"
    >
      <motion.div
        initial={{ scale: 1.03 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.35 }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

      <div className="relative flex min-h-[55vh] items-end px-6 pb-10 sm:min-h-[65vh] sm:px-10 sm:pb-14 lg:min-h-[72vh] lg:px-16 lg:pb-16 xl:min-h-[85vh] xl:px-24 xl:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.66, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-white/75 sm:text-sm">
            SaraHomes
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h2>
        </motion.div>
      </div>
    </motion.section>
  );
}
