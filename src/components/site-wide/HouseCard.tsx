// File: src/components/site-wide/HouseCard.tsx
"use client";

import * as React from "react";

export type HouseCardProps = {
  id?: string;
  image: { src: string; alt?: string };
  address: string;
  price: number; // asking or sold price
  sold?: boolean; // true = sold, false = available
  styleBadge?: string; // e.g. "Modern", "Colonial"
  returnRate?: number; // % return from renting
  href: string; // details link
  className?: string;
};

function formatMoney(v: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(v);
}

export default function HouseCard({
  id,
  image,
  address,
  price,
  sold = false,
  styleBadge,
  returnRate,
  href,
  className,
}: HouseCardProps) {
  const statusLabel = sold ? "Sold" : "Available";
  const statusColor = sold
    ? "bg-red-600/90 text-white shadow-sm shadow-red-400/40"
    : "bg-emerald-500/90 text-white shadow-sm shadow-emerald-400/40";

  return (
    <article
      id={id}
      className={[
        "group relative overflow-hidden rounded-2xl border border-border/50",
        "bg-background text-foreground shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-border",
        className ?? "",
      ].join(" ")}
    >
      {/* Image */}
      <figure className="relative w-full aspect-square overflow-hidden">
        <img
          src={image.src}
          alt={image.alt ?? address}
          className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* gradient overlay for subtle fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Style badge (top-left) */}
        {styleBadge && (
          <div className="absolute left-3 top-3 rounded-full bg-accent/90 text-accent-foreground text-xs px-2 py-1 backdrop-blur-sm">
            {styleBadge}
          </div>
        )}

        {/* Status badge (top-right) */}
        <div
          className={`absolute right-3 top-3 rounded-full text-xs px-2 py-1 font-semibold ${statusColor}`}
        >
          {statusLabel}
        </div>
      </figure>

      {/* Body */}
      <div className="p-5 flex flex-col">
        <h3 className="text-lg font-semibold leading-tight tracking-tight line-clamp-2 mb-2">
          {address}
        </h3>

        <div className="text-sm text-muted-foreground">
          {sold ? "Sold price" : "Asking price"}
        </div>
        <div className="text-xl font-semibold mb-3">{formatMoney(price)}</div>

        {typeof returnRate === "number" && (
          <div className="text-sm text-muted-foreground mb-4">
            Est. Return:{" "}
            <span className="font-semibold text-foreground">
              {returnRate.toFixed(1)}%
            </span>
          </div>
        )}

        <a
          href={href}
          className="mt-auto btn btn-primary w-full group-hover:shadow-md transition-all duration-300"
          aria-label={`See details for ${address}`}
        >
          See Details
        </a>
      </div>
    </article>
  );
}
