// file: src/app/(site)/(home)/components/OldHomeBTRExplained.tsx
"use client";

import { motion } from "framer-motion";
import { useLocale } from "../../../../i18n/locale-context";
import { tOldHomeBTRExplained } from "../i18n";

type OldHomeBTRExplainedProps = {
  variant?: "dark" | "light";
};

export default function OldHomeBTRExplained({
  variant = "dark",
}: OldHomeBTRExplainedProps) {
  const { locale } = useLocale();
  const i = tOldHomeBTRExplained(locale);
  const { title, description, quote, stats } = i;
  const isLight = variant === "light";

  return (
    <section
      className={`relative w-full py-24 md:py-32 overflow-hidden ${
        isLight ? "bg-background text-foreground" : "bg-chrome text-chrome-foreground"
      }`}
    >
      {/* Full-bleed band that covers the RIGHT HALF of the section */}
      {!isLight && (
        <div className="pointer-events-none absolute inset-y-0 right-0 left-1/2 bg-[#2b3a46] md:block hidden" />
      )}

      {/* Content above the band */}
      <div className="relative z-10 px-6 lg:px-24 grid md:grid-cols-2 gap-16 items-center">
        {/* --- Left Column --- */}
        <div className="space-y-6 animate-fadeInUp">
          <h2 className={`h1 font-serif lg:text-md ${isLight ? "text-foreground" : "text-white"}`}>
            {title}
          </h2>
          <p className={`text-lg leading-relaxed ${isLight ? "text-foreground/80" : "text-white/90"}`}>
            {description}
          </p>
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
              className={`group relative z-10 p-6 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] ${
                isLight
                  ? "bg-white border border-border hover:border-FL/50 hover:shadow-lg"
                  : "bg-white/[0.08] backdrop-blur-md border border-white/20 hover:bg-white/[0.15] hover:border-FL/60 hover:shadow-lg"
              }`}
            >
              <p
                className={`text-3xl font-bold transition-colors duration-300 group-hover:text-FL ${
                  isLight ? "text-FL" : "text-accent"
                }`}
              >
                {item.value}
              </p>
              <p className={`font-medium mt-2 ${isLight ? "text-foreground" : "text-white"}`}>
                {item.label}
              </p>
              <p className={`text-sm ${isLight ? "text-foreground/65" : "text-white/70"}`}>
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
