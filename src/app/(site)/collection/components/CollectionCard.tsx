"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "../../../../i18n/locale-context";
import { tCollectionCard } from "../i18n";

export type CollectionCardProps = {
  id?: string;
  image: { src: string; alt?: string };
  status: "forSale" | "sold" | "rented" | "underConstruction" | string;
  address: string;
  location: string;
  price: number;
  rent: number;
  renewalDate?: string;
  cap?: number;
  bedrooms: number;
  bathrooms: number;
  sqft: {
    ac: number;
    garage: number;
    lanai: number;
    entry: number;
    total: number;
    lot: number;
  };
  className?: string;
};

// Inline helper for formatting currency
function formatCurrency(amount: number, locale: string) {
  return new Intl.NumberFormat(locale === "es" ? "es-ES" : "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

// Helper to get Label and Color based on status (now using translations)
function getStatusConfig(
  status: string,
  t: ReturnType<typeof tCollectionCard>
) {
  switch (status) {
    case "sold":
      return {
        label: t.status.sold,
        color: "bg-red-600/90 text-white shadow-sm shadow-red-400/30",
      };
    case "rented":
      return {
        label: t.status.rented,
        color: "bg-blue-600/90 text-white shadow-sm shadow-blue-400/30",
      };
    case "underConstruction":
      return {
        label: t.status.underConstruction,
        color: "bg-orange-500/90 text-white shadow-sm shadow-orange-400/30",
      };
    case "available":
    default:
      return {
        label: t.status.forSale,
        color: "bg-emerald-500/90 text-white shadow-sm shadow-emerald-400/30",
      };
  }
}

export default function CollectionCard({
  id,
  image,
  status = "available",
  address,
  location,
  price,
  rent,
  renewalDate,
  cap,
  bedrooms,
  bathrooms,
  sqft,
  className,
}: CollectionCardProps) {
  const [open, setOpen] = React.useState(false);
  const { locale } = useLocale();
  const t = tCollectionCard(locale);

  const { label: statusLabel, color: statusColor } = getStatusConfig(status, t);

  return (
    <article
      id={id}
      className={[
        "group relative overflow-hidden rounded-2xl border border-border/50",
        "bg-chrome text-chrome-foreground shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        className ?? "",
      ].join(" ")}
    >
      {/* IMAGE */}
      <figure className="relative w-full aspect-video overflow-hidden">
        <img
          src={image.src}
          alt={image.alt ?? address}
          className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${statusColor}`}
        >
          {statusLabel}
        </div>
      </figure>

      {/* BODY */}
      <div className="p-6">
        {/* Address & Location */}
        <div className="mb-5">
          <h3 className="text-lg font-semibold tracking-tight leading-snug text-white">
            {address}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">{location}</p>
        </div>

        {/* Price / Rent / CAP */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm mb-5">
          <div>
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              {t.labels.price}
            </span>
            <div className="text-lg font-semibold text-white">
              {formatCurrency(price, locale)}
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              {t.labels.rent}
            </span>
            <div className="text-lg font-semibold text-emerald-400">
              {formatCurrency(rent, locale)}
            </div>
          </div>
          {renewalDate && (
            <div>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                {t.labels.renewalDate}
              </span>
              <div className="text-sm font-medium text-white/90">
                {renewalDate}
              </div>
            </div>
          )}
          {typeof cap === "number" && (
            <div>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                {t.labels.cap}
              </span>
              <div className="text-sm font-semibold text-amber-400">
                {cap.toFixed(2)}%
              </div>
            </div>
          )}
        </div>

        {/* Toggle */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-FL transition-colors py-2 border-t border-border/40"
        >
          <span>{t.toggle}</span>
          <ChevronIcon open={open} />
        </button>

        {/* Dropdown */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden mt-4 rounded-xl bg-chrome/60 backdrop-blur-md border border-border/30 shadow-inner shadow-black/20 p-4 text-sm"
            >
              <div className="flex gap-6 mb-3 text-white/90">
                <div>
                  <span className="text-muted-foreground">
                    {t.metrics.bedrooms}:
                  </span>{" "}
                  <span className="font-semibold">{bedrooms}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">
                    {t.metrics.bathrooms}:
                  </span>{" "}
                  <span className="font-semibold">{bathrooms}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-white/90">
                <Metric
                  label={t.metrics.ac}
                  value={sqft.ac}
                  unit={t.metrics.unit}
                />
                <Metric
                  label={t.metrics.garage}
                  value={sqft.garage}
                  unit={t.metrics.unit}
                />
                <Metric
                  label={t.metrics.lanai}
                  value={sqft.lanai}
                  unit={t.metrics.unit}
                />
                <Metric
                  label={t.metrics.entry}
                  value={sqft.entry}
                  unit={t.metrics.unit}
                />
                <Metric
                  label={t.metrics.total}
                  value={sqft.total}
                  unit={t.metrics.unit}
                />
                <Metric
                  label={t.metrics.lot}
                  value={sqft.lot}
                  unit={t.metrics.unit}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}

/* ------------------ */
/* HELPER COMPONENTS  */
/* ------------------ */

function Metric({
  label,
  value,
  unit,
}: {
  label: string;
  value: number;
  unit: string;
}) {
  return (
    <div>
      <span className="text-muted-foreground text-xs uppercase tracking-wide">
        {label}
      </span>
      <div className="font-semibold">
        {value.toLocaleString()} {unit}
      </div>
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25 }}
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </motion.svg>
  );
}
