"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "../../../../i18n/locale-context";
import { tOneDescription } from "../i18n";

export default function OneDescription() {
  const { locale } = useLocale();
  const i = tOneDescription(locale);

  const isSpanish = locale === "es";

  return (
    <section className="w-full bg-chrome text-chrome-foreground pt-15 pb-0 px-6 sm:px-12 lg:px-24 overflow-hidden">
      <div className="w-full text-center space-y-6">
        {/* Title */}
        <div className="relative inline-block">
          <AnimatePresence mode="wait">
            {isSpanish ? (
              <motion.h2
                key="es"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl font-serif font-semibold tracking-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
              >
                {i.title.replace("Uno", "")}
                <span className="inline-block font-bold text-[2.9rem] sm:text-[3.3rem] leading-tight bg-gradient-to-r from-FL to-amber-300 text-transparent bg-clip-text">
                  Una
                </span>
              </motion.h2>
            ) : (
              <motion.h2
                key="en"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl font-serif font-semibold tracking-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
              >
                {i.title.replace("One", "")}
                <span className="inline-block font-bold text-[2.9rem] sm:text-[3.3rem] leading-tight bg-gradient-to-r from-FL to-amber-300 text-transparent bg-clip-text">
                  One
                </span>
              </motion.h2>
            )}
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl font-medium text-FL/90 tracking-wide"
        >
          {i.subtitle}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="w-16 h-[2px] bg-FL/60 mx-auto my-4 rounded-full"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-base sm:text-lg leading-relaxed text-chrome-foreground/95 tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
        >
          {i.description}
        </motion.p>
      </div>
    </section>
  );
}
