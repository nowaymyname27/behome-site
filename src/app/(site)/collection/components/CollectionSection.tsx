"use client";

import { motion } from "framer-motion";
import CollectionCard, { CollectionCardProps } from "./CollectionCard";
import { useLocale } from "../../../../i18n/locale-context";
import { tCollectionSection } from "../i18n";

type CollectionSectionProps = {
  title?: string;
  subtitle?: string;
  cards: CollectionCardProps[];
  className?: string;
};

export default function CollectionSection({
  title,
  subtitle,
  cards,
  className,
}: CollectionSectionProps) {
  const { locale } = useLocale();
  const t = tCollectionSection(locale);

  const displayTitle = title || t.title;
  const displaySubtitle = subtitle || t.subtitle;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={[
        "relative w-full overflow-hidden py-24",
        "px-6 lg:px-24", // Following your pattern
        "bg-accent text-accent-foreground border-y border-border",
        className ?? "",
      ].join(" ")}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-accent/20 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight text-black"
          >
            {displayTitle}
          </motion.h2>

          {displaySubtitle && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base lg:text-lg text-black/70 mt-4 max-w-2xl mx-auto"
            >
              {displaySubtitle}
            </motion.p>
          )}
        </div>

        {/* 
            Grid Logic:
            - 1 col on mobile
            - 2 cols on medium tablets
            - 3 cols on large laptops/desktops
            - 4 cols on extra large screens 
        */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.id ?? i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <CollectionCard {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
