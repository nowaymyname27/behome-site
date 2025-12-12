"use client";

import { motion } from "framer-motion";
import CollectionCard, { CollectionCardProps } from "./CollectionCard";
import { useLocale } from "../../../../i18n/locale-context";
import { tCollectionSection } from "../i18n"; // We will create this next

type CollectionSectionProps = {
  // Optional overrides
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

  // Use prop if provided, otherwise fallback to translation
  const displayTitle = title || t.title;
  const displaySubtitle = subtitle || t.subtitle;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={[
        "relative w-full overflow-hidden py-24 px-6 sm:px-12 lg:px-24",
        "bg-accent text-accent-foreground border-y border-border",
        className ?? "",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-accent/20 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight drop-shadow-sm text-black"
          >
            {displayTitle}
          </motion.h2>

          {displaySubtitle && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base text-black/70 mt-3 max-w-2xl mx-auto"
            >
              {displaySubtitle}
            </motion.p>
          )}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.id ?? i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="transition-transform duration-300"
            >
              <CollectionCard {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
