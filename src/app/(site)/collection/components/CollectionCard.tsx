"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export type CollectionCardProps = {
  id?: string;
  image: { src: string; alt?: string };
  // Changed: 'sold' boolean removed, 'status' added
  status: "forSale" | "sold" | "rented" | "underConstruction" | string;
  address: string;
  // Added: 'location' for City, State, Zip
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

function formatMoney(v: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(v);
}

// Helper to get Label and Color based on status
function getStatusConfig(status: string) {
  switch (status) {
    case "sold":
      return {
        label: "SOLD",
        color: "bg-red-600/90 text-white shadow-sm shadow-red-400/30",
      };
    case "rented":
      return {
        label: "CURRENTLY RENTED",
        color: "bg-blue-600/90 text-white shadow-sm shadow-blue-400/30",
      };
    case "underConstruction":
      return {
        label: "UNDER CONSTRUCTION",
        color: "bg-orange-500/90 text-white shadow-sm shadow-orange-400/30",
      };
    case "available":
    default:
      return {
        label: "FOR SALE",
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

  const { label: statusLabel, color: statusColor } = getStatusConfig(status);

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
              Price
            </span>
            <div className="text-lg font-semibold text-white">
              {formatMoney(price)}
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Rent
            </span>
            <div className="text-lg font-semibold text-emerald-400">
              {formatMoney(rent)}
            </div>
          </div>
          {renewalDate && (
            <div>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                Renewal Date
              </span>
              <div className="text-sm font-medium text-white/90">
                {renewalDate}
              </div>
            </div>
          )}
          {typeof cap === "number" && (
            <div>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                CAP
              </span>
              <div className="text-sm font-semibold text-amber-400">
                {cap.toFixed(2)}%
              </div>
            </div>
          )}
        </div>

        {/* Toggle (ONLY this turns accent on hover) */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-FL transition-colors py-2 border-t border-border/40"
        >
          <span>Characteristics</span>
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
                  <span className="text-muted-foreground">Bedrooms:</span>{" "}
                  <span className="font-semibold">{bedrooms}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Bathrooms:</span>{" "}
                  <span className="font-semibold">{bathrooms}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-white/90">
                <Metric label="A/C Area" value={sqft.ac} />
                <Metric label="Garage" value={sqft.garage} />
                <Metric label="Lanai" value={sqft.lanai} />
                <Metric label="Entry" value={sqft.entry} />
                <Metric label="Total Area" value={sqft.total} />
                <Metric label="Lot" value={sqft.lot} />
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

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <span className="text-muted-foreground text-xs uppercase tracking-wide">
        {label}
      </span>
      <div className="font-semibold">{value.toLocaleString()} sq ft</div>
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
