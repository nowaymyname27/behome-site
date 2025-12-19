"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLocale } from "../../../../i18n/locale-context";
import { tCollectionHighlights } from "../i18n";

export default function CollectionHighlights() {
  const { locale } = useLocale();
  const i = tCollectionHighlights(locale);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-surface text-foreground py-24 px-6 sm:px-12 lg:px-24"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-3xl sm:text-4xl font-serif font-semibold tracking-tight mb-16"
      >
        {i.title}
      </motion.h2>

      {/* Points grid */}
      <div className="w-full grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {i.points.map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex items-start gap-3 group"
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="mt-1"
            >
              <CheckCircle className="w-6 h-6 text-FL transition-transform duration-300 group-hover:drop-shadow-[0_0_6px_rgba(240,166,101,0.6)]" />
            </motion.div>
            <p className="text-base leading-relaxed text-foreground/90">
              {text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
