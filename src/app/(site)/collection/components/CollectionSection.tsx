"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
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

  const [columns, setColumns] = useState(1);
  const [visibleRows, setVisibleRows] = useState(3);

  useEffect(() => {
    const measureColumns = () => {
      if (window.matchMedia("(min-width: 1280px)").matches) {
        setColumns(4);
        return;
      }

      if (window.matchMedia("(min-width: 1024px)").matches) {
        setColumns(3);
        return;
      }

      if (window.matchMedia("(min-width: 640px)").matches) {
        setColumns(2);
        return;
      }

      setColumns(1);
    };

    measureColumns();
    window.addEventListener("resize", measureColumns);
    return () => window.removeEventListener("resize", measureColumns);
  }, []);

  const visibleCount = visibleRows * columns;
  const visibleCards = useMemo(
    () => cards.slice(0, visibleCount),
    [cards, visibleCount]
  );
  const hasMore = visibleCards.length < cards.length;

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {visibleCards.map((card, i) => (
            <motion.div
              key={card.id ?? i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <CollectionCard {...card} />
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleRows((rows) => rows + 3)}
              className="btn btn-primary"
            >
              {t.showMore}
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
}
