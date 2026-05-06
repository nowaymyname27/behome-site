"use client";

import { motion } from "framer-motion";

import { useLocale } from "../../../../i18n/locale-context";

type FloorplanQuoteTransitionProps = {
  quoteEn: string;
  quoteEs: string;
};

export default function FloorplanQuoteTransition({
  quoteEn,
  quoteEs,
}: FloorplanQuoteTransitionProps) {
  const { locale } = useLocale();
  const quote = locale === "es" ? quoteEs : quoteEn;

  return (
    <section className="w-full bg-background px-6 py-20 text-center sm:px-10 sm:py-24 lg:px-24 lg:py-28">
      <motion.blockquote
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.55 }}
        transition={{ duration: 1.02, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl font-serif text-3xl leading-[1.3] tracking-tight text-chrome sm:text-4xl sm:leading-[1.26] lg:text-5xl lg:leading-[1.22]"
      >
        {quote}
      </motion.blockquote>

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "8rem", opacity: 1 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.82, delay: 0.35, ease: "easeOut" }}
        className="mx-auto mt-10 h-[4px] rounded-full bg-FL/75"
      />
    </section>
  );
}
