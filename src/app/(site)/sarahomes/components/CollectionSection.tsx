"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import CollectionCard, { CollectionCardProps } from "./CollectionCard";
import { tCollectionCard } from "../i18n";
import { useLocale } from "../../../../i18n/locale-context";
import { tCollectionSection } from "../i18n";

import { MAP_THEMES } from "../../../../components/site-wide/map/types";

import type { Config, Point } from "../../../../components/site-wide/map/types";

const LazySiteMap = dynamic(
  () => import("../../../../components/site-wide/SiteMap"),
  {
    ssr: false,
    loading: () => <div className="h-full w-full bg-background/60" />,
  }
);

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
  const cardText = tCollectionCard(locale);

  const displayTitle = title || t.title;
  const displaySubtitle = subtitle || t.subtitle;

  const [columns, setColumns] = useState(1);
  const [visibleRows, setVisibleRows] = useState(3);
  const [mapPrimed, setMapPrimed] = useState(false);
  const [selectedMapCard, setSelectedMapCard] = useState<{
    id?: string;
    address: string;
    location: string;
    coordinates: { lat: number; lng: number };
  } | null>(null);

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

  const primeMap = useCallback(() => {
    if (mapPrimed) return;

    setMapPrimed(true);

    import("../../../../components/site-wide/SiteMap");
    fetch(MAP_THEMES.light.style).catch(() => {});
  }, [mapPrimed]);

  const handleViewMap = useCallback(
    (card: {
      id?: string;
      address: string;
      location: string;
      coordinates: { lat: number; lng: number };
    }) => {
      primeMap();
      setSelectedMapCard(card);
    },
    [primeMap]
  );

  const mapConfig = useMemo<Config | null>(() => {
    if (!selectedMapCard) return null;

    const point: Point = {
      id: selectedMapCard.id ?? `${selectedMapCard.address}-${selectedMapCard.location}`,
      name: selectedMapCard.address,
      blurb: selectedMapCard.location,
      coords: [
        selectedMapCard.coordinates.lng,
        selectedMapCard.coordinates.lat,
      ],
    };

    return {
      theme: "light",
      center: point.coords,
      zoom: 14,
      points: [point],
    };
  }, [selectedMapCard]);

  useEffect(() => {
    if (!selectedMapCard) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMapCard(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedMapCard]);

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
              <CollectionCard
                {...card}
                onMapIntent={primeMap}
                onViewMap={handleViewMap}
              />
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

      {selectedMapCard && mapConfig && (
        <div
          className="fixed inset-0 z-[3000] bg-black/75 backdrop-blur-sm p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={cardText.actions.viewOnMap}
          onClick={() => setSelectedMapCard(null)}
        >
          <div
            className="mx-auto h-full w-full max-w-7xl rounded-2xl border border-white/15 bg-chrome text-chrome-foreground overflow-hidden shadow-2xl flex flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/15">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white">
                  {selectedMapCard.address}
                </h4>
                <p className="text-xs sm:text-sm text-white/65">
                  {selectedMapCard.location}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedMapCard(null)}
                className="inline-flex items-center rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/85 hover:text-white hover:border-white/35 transition-colors"
              >
                {cardText.actions.closeMap}
              </button>
            </div>

            <div className="flex-1 min-h-[380px]">
              <LazySiteMap config={mapConfig} clickToUse={false} />
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
}
