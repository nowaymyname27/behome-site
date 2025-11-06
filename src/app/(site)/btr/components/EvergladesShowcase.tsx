// file: src/app/(site)/btr/components/EvergladesShowcase.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "../../../../i18n/locale-context";
import { tEvergladesShowcase } from "../i18n";

export default function EvergladesShowcase() {
  const [expanded, setExpanded] = useState(false);
  const { locale } = useLocale();
  const i = tEvergladesShowcase(locale);

  return (
    <section className="relative w-full bg-accent text-accent-foreground py-24 md:py-32">
      {/* Grid switches at lg breakpoint instead of md */}
      <div className="grid lg:grid-cols-[1.65fr_1fr] gap-16 lg:gap-20 px-6 md:px-12 lg:px-24 items-start w-full">
        {/* --- Left Column --- */}
        <div>
          <h2 className="h1 text-chrome">{i.title}</h2>
          <p className="text-2xl text-FL font-semibold mt-2">{i.subtitle}</p>
          <p className="mt-6 text-lg leading-relaxed">{i.description}</p>

          {/* Expand/Collapse */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-chrome/20 text-chrome
                       hover:bg-chrome/10 hover:border-chrome/40 hover:text-FL transition-all duration-300"
          >
            {expanded ? i.toggleHide : i.toggleShow}
          </button>

          {/* Features */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-10 flex flex-wrap gap-3">
                  {i.features.map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.02 }}
                      className="px-4 py-2 rounded-full bg-white/40 border border-chrome/10 text-sm text-chrome
                                 hover:border-FL/50 hover:bg-FL/20 transition-all duration-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- Right Column: Stats (Chrome Theme) --- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-chrome text-chrome-foreground border border-white/10 rounded-3xl shadow-xl 
                     p-10 md:p-12 max-w-lg mx-auto lg:max-w-none lg:mx-0
                     hover:border-FL/30 hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-FL mb-6">
            {i.statsTitle}
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {i.stats.map((s, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-2xl p-4 text-center
                           hover:border-FL/40 hover:bg-white/15 transition-all duration-300"
              >
                <p className="text-xl font-semibold text-FL">{s.value}</p>
                <p className="text-sm text-white/70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
