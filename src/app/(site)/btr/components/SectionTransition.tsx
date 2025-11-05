// file: src/app/(site)/btr/components/SectionTransition.tsx
"use client";

import { motion } from "framer-motion";
import { useLocale } from "../../../../i18n/locale-context";

export default function SectionTransition() {
  const { locale } = useLocale();

  const text =
    locale === "es"
      ? "Descubre nuestros diferentes estilos de vivienda"
      : "Check out our different house styles";

  return (
    <section className="w-full bg-chrome text-white pt-28 md:pt-10 pb-10 text-center m-0 relative">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="text-3xl md:text-4xl font-semibold tracking-tight"
      >
        {text}
      </motion.h2>

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "5rem", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-auto mt-6 mb-0 h-[3px] rounded-full bg-FL/70"
      />
    </section>
  );
}
