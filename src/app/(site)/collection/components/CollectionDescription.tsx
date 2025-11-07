"use client";

import { motion } from "framer-motion";
import { useLocale } from "../../../../i18n/locale-context";
import { tCollectionDescription } from "../i18n";

export default function CollectionDescription() {
  const { locale } = useLocale();
  const i = tCollectionDescription(locale);

  return (
    <section className="w-full bg-chrome text-chrome-foreground py-24 px-6 sm:px-12 lg:px-24">
      <div className="w-full text-center space-y-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-semibold tracking-tight"
        >
          <span className="text-FL">360</span> {i.title.replace("360 ", "")}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-chrome-foreground/80"
        >
          {i.subtitle}
        </motion.p>

        {/* Description Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-10 text-2xl sm:text-3xl font-semibold text-FL"
        >
          {i.heading}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg leading-relaxed text-chrome-foreground/80"
        >
          {i.description}
        </motion.p>
      </div>
    </section>
  );
}
