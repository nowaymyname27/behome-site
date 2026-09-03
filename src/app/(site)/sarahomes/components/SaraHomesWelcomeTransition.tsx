"use client";

import { motion } from "framer-motion";

import { useLocale } from "../../../../i18n/locale-context";

export default function SaraHomesWelcomeTransition() {
  const { locale } = useLocale();

  const heading =
    locale === "es"
      ? "Bienvenido a las Residencias SaraHomes"
      : "Welcome to SaraHomes Residences";

  const quote =
    locale === "es"
      ? "Un hermoso hogar en este entorno costero ofrece la base para un estilo de vida definido por la paz, el equilibrio y la comodidad diaria, mientras crea el ambiente ideal para el crecimiento personal, el desarrollo familiar y el bienestar a largo plazo."
      : "A beautiful home in this coastal setting offers the foundation for a lifestyle defined by peace, balance, and everyday comfort while creating the right environment for personal growth, family development, and long-term well-being.";

  return (
    <section className="w-full bg-background px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-24">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.55 }}
        transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-5xl font-serif text-4xl leading-[1.05] tracking-tight text-chrome sm:text-5xl lg:text-6xl"
      >
        {heading}
      </motion.h2>

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "6rem", opacity: 1 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.72, delay: 0.18, ease: "easeOut" }}
        className="mx-auto mt-7 h-[3px] rounded-full bg-FL/75"
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-10 max-w-4xl text-balance font-serif text-xl leading-[1.55] text-chrome/85 sm:text-2xl sm:leading-[1.5]"
      >
        <p>{quote}</p>
      </motion.div>
    </section>
  );
}
