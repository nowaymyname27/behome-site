// file: src/app/(site)/(home)/components/BTRExplained.tsx
"use client";

import { motion } from "framer-motion";
import { useLocale } from "../../../../i18n/locale-context";
import { tHomeBTRExplained } from "../i18n";

export default function BTRExplained() {
  const { locale } = useLocale();
  const i = tHomeBTRExplained(locale);
  const { title, description, quote, stats } = i;

  return (
    <section className="relative w-full bg-chrome text-chrome-foreground py-24 md:py-32 overflow-hidden">
      {/* Full-bleed band that covers the RIGHT HALF of the section */}
      <div className="pointer-events-none absolute inset-y-0 right-0 left-1/2 bg-[#2b3a46] md:block hidden" />

      {/* Content above the band */}
      <div className="relative z-10 px-6 lg:px-24 grid md:grid-cols-2 gap-16 items-center">
        {/* --- Left Column --- */}
        <div className="space-y-6 animate-fadeInUp">
          <h2 className="h1 text-white">{title}</h2>
          <p className="text-lg leading-relaxed text-white/90">{description}</p>
          <p className="uppercase tracking-wide font-semibold text-FL mt-8">
            {quote}
          </p>
        </div>

        {/* --- Right Column: Stats Grid --- */}
        <div className="relative py-12 px-8 sm:px-12 grid sm:grid-cols-2 gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative z-10 bg-white/[0.08] backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-sm
                         transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]
                         hover:bg-white/[0.15] hover:border-FL/60 hover:shadow-lg"
            >
              <p className="text-3xl font-bold text-accent transition-colors duration-300 group-hover:text-FL">
                {item.value}
              </p>
              <p className="font-medium mt-2">{item.label}</p>
              <p className="text-sm text-white/70">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
