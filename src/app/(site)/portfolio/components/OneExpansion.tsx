"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLocale } from "../../../../i18n/locale-context";
import { tOneExpansion } from "../i18n"; // We will create this next

export default function OneExpansion() {
  const { locale } = useLocale();
  const t = tOneExpansion(locale);

  return (
    <section className="w-full bg-chrome text-chrome-foreground py-24 px-6 sm:px-12 lg:px-24">
      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-base sm:text-lg leading-relaxed text-chrome-foreground/90 mb-16 max-w-5xl mx-auto"
      >
        {t.description}
      </motion.p>

      {/* Points grid */}
      <div className="grid gap-10 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {t.points.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{
              y: -4,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="flex flex-col gap-3 bg-white text-foreground border border-border rounded-2xl p-8 shadow-sm transition-all duration-300 ease-out hover:shadow-[0_0_20px_rgba(240,166,101,0.35)] hover:border-FL/50"
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-FL" />
              <h3 className="text-lg font-semibold">{p.title}</h3>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {p.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
