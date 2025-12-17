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

// FIX: Always use "en-US" to enforce "$375,000" format
function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

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
        "bg-chrome text-chrome-foreground shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
        className ?? "",
      ].join(" ")}
    >
      {/* IMAGE */}
      <figure className="relative w-full aspect-[16/10] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt ?? address}
          className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-md ${statusColor}`}
        >
          {statusLabel}
        </div>
      </figure>

      {/* BODY */}
      <div className="p-5 sm:p-6">
        {/* HERO SECTION: ADDRESS vs CAP */}
        <div className="flex items-start justify-between mb-6">
          <div className="pr-4">
            <div className="text-xs font-medium text-white/50 mb-1 uppercase tracking-wide">
              {location}
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
              {address}
            </h3>
          </div>

          {typeof cap === "number" && (
            <div className="flex flex-col items-end shrink-0">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400/80 mb-1">
                {t.labels.cap}
              </span>
              <div className="relative px-3 py-1 -mr-2 rounded-lg bg-amber-400/10 border border-amber-400/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-amber-400 leading-none tabular-nums tracking-tight">
                  {cap.toFixed(2)}%
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM METRICS */}
        <div className="grid grid-cols-2 gap-4 py-4 border-t border-border/40">
          {/* Price */}
          <div>
            <span className="text-[10px] uppercase tracking-wide text-muted-foreground block mb-1">
              {t.labels.price}
            </span>
            <div className="text-lg font-bold text-white">
              {formatCurrency(price)}
            </div>
          </div>

          {/* Rent */}
          <div>
            <span className="text-[10px] uppercase tracking-wide text-muted-foreground block mb-1">
              {t.labels.rent}
            </span>
            <div className="text-lg font-bold text-emerald-400">
              {formatCurrency(rent)}
              {/* FIX: Dynamic suffix based on locale */}
              <span className="text-xs font-normal text-white/50">
                {locale === "es" ? " /mes" : " /mo"}
              </span>
            </div>
          </div>

          {/* Renewal Date */}
          {renewalDate && (
            <div className="col-span-2 mt-1 pt-3 border-t border-white/5 flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
                {t.labels.renewalDate}:
              </span>
              <div className="text-sm font-medium text-white/90">
                {renewalDate}
              </div>
            </div>
          )}
        </div>

        {/* Toggle */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="w-full mt-1 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors py-3"
        >
          <span>{t.toggle}</span>
          <ChevronIcon open={open} />
        </button>

        {/* Dropdown */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="overflow-hidden mt-2 rounded-xl bg-black/20 border border-white/5 p-4 text-sm">
                <div className="flex gap-6 mb-4 pb-4 border-b border-white/5 text-white/90">
                  <div>
                    <span className="text-muted-foreground text-xs uppercase mr-2">
                      {t.metrics.bedrooms}
                    </span>
                    <span className="font-bold text-lg">{bedrooms}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-xs uppercase mr-2">
                      {t.metrics.bathrooms}
                    </span>
                    <span className="font-bold text-lg">{bathrooms}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 text-white/90">
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
      <span className="text-muted-foreground text-[10px] uppercase tracking-wide block mb-0.5">
        {label}
      </span>
      <div className="font-semibold text-sm">
        {value.toLocaleString()}{" "}
        <span className="text-xs text-white/50">{unit}</span>
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
