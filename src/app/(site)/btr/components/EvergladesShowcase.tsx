// file: src/app/(site)/btr/components/EvergladesShowcase.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "../../../../i18n/locale-context";
import { tEvergladesShowcase } from "../i18n";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function EvergladesShowcase() {
  const [expanded, setExpanded] = useState(false);
  const { locale } = useLocale();
  const i = tEvergladesShowcase(locale);

  return (
    <section className="relative w-full bg-accent text-accent-foreground py-24 md:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-white/40 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2 mix-blend-overlay" />

      <div className="relative z-10 px-6 md:px-12 lg:px-24 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start w-full">
        {/* --- LEFT COLUMN --- */}
        {/* Added 'lg:pt-28' to push this down so the Title aligns with the Top of the Cards */}
        <div className="lg:col-span-5 lg:pt-28">
          <h2 className="h1 font-serif text-chrome">{i.title}</h2>
          <p className="text-xl text-chrome/70 font-medium mt-3 border-l-4 border-FL pl-4">
            {i.subtitle}
          </p>
          <p className="mt-8 text-lg leading-relaxed text-chrome/80">
            {i.description}
          </p>

          <button
            onClick={() => setExpanded((v) => !v)}
            className="group mt-8 inline-flex items-center gap-2 text-xs font-bold text-chrome uppercase tracking-widest
                       hover:text-FL transition-colors duration-300"
          >
            <span>{expanded ? i.toggleHide : i.toggleShow}</span>
            <span
              className={`block h-1.5 w-1.5 border-r-2 border-b-2 border-current transition-transform duration-300 ${expanded ? "-rotate-135 translate-y-0.5" : "rotate-45 -translate-y-0.5"}`}
            />
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-6 pt-6 border-t border-chrome/10 flex flex-wrap gap-2">
                  {i.features.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-lg bg-white border border-chrome/5 text-xs font-medium text-chrome/70 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-7 w-full"
        >
          {/* Header */}
          <div className="mb-8 border-b border-chrome/10 pb-4">
            <h3 className="text-xl font-semibold text-chrome">
              {i.statsTitle}
            </h3>
            <p className="text-sm text-chrome/60">Live Projections</p>
          </div>

          {/* Grid of Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {i.stats.map((s, index) => {
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="
                    group relative overflow-hidden
                    rounded-2xl border border-white/10
                    bg-chrome text-white shadow-md
                    p-6
                    transition-all duration-300 ease-out
                    hover:bg-white hover:text-chrome hover:border-chrome/10 hover:shadow-xl
                  "
                >
                  <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                    {/* Label */}
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-wider text-white/60 group-hover:text-chrome/50 transition-colors">
                        {s.label}
                      </p>
                      {/* Decorative dot */}
                      <div className="h-1.5 w-1.5 rounded-full bg-FL/0 group-hover:bg-FL transition-colors" />
                    </div>

                    {/* Value */}
                    <p className="text-3xl font-bold tracking-tight text-white group-hover:text-chrome transition-colors">
                      {s.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
