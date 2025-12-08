"use client";

import { motion } from "framer-motion";
import { useLocale } from "../../../../i18n/locale-context";
import { tHomePhrase } from "../i18n";

export default function Phrase() {
  const { locale } = useLocale();
  const i = tHomePhrase(locale);

  return (
    <section className="relative w-full bg-background text-center py-16 md:py-20 overflow-hidden">
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full px-6 lg:px-24 cursor-default select-none"
      >
        <p
          className="font-semibold text-chrome leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl
                     transition-all duration-500 hover:text-FL
                     drop-shadow-md hover:drop-shadow-xl relative inline-block w-full"
        >
          <span className="text-FL text-4xl md:text-5xl align-top">❝</span>{" "}
          {i.text}{" "}
          <span className="text-FL text-4xl md:text-5xl align-top">❞</span>
          {/* Subtle shimmer overlay */}
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                       opacity-0 hover:opacity-100 blur-sm transition-opacity duration-700"
          />
        </p>
      </motion.blockquote>
    </section>
  );
}
