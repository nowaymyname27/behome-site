// file: src/components/site-wide/HouseCard.tsx
"use client";

import * as React from "react";

export type HouseCardProps = {
  id?: string;
  image: { src: string; alt?: string };
  address: string; // heading
  price: number; // starting price
  beds: number;
  baths: number;
  cars?: number;
  sqft?: number;
  href: string; // details link
  className?: string;
  badge?: string; // optional small tag (e.g., "New", "Move-in ready")
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
  beds,
  baths,
  cars,
  sqft,
  href,
  className,
  badge,
}: HouseCardProps) {
  return (
    <article
      id={id}
      className={[
        "group rounded-2xl border border-border bg-card text-card-foreground overflow-hidden",
        "shadow-sm hover:shadow-md transition-shadow",
        className ?? "",
      ].join(" ")}
    >
      {/* Square media */}
      <figure className="relative w-full aspect-square bg-surface/40">
        <img
          src={image.src}
          alt={image.alt ?? address}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {badge && (
          <div className="absolute left-3 top-3 rounded-full bg-accent/90 text-accent-foreground text-xs px-2 py-1">
            {badge}
          </div>
        )}
      </figure>

      {/* Body */}
      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-semibold leading-tight line-clamp-2">
          {address}
        </h3>

        <div className="mt-1.5 text-xs text-foreground/70">Starting price</div>
        <div className="text-lg font-semibold">{formatMoney(price)}</div>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-foreground/80">
          <span>{beds} Beds</span>
          <span>{baths} Baths</span>
          {typeof cars === "number" && <span>{cars} Cars</span>}
          {typeof sqft === "number" && (
            <span>{sqft.toLocaleString()} Sq ft</span>
          )}
        </div>

        <a
          href={href}
          className="btn btn-primary w-full mt-4"
          aria-label={`See details for ${address}`}
        >
          See Details
        </a>
      </div>
    </article>
  );
}
