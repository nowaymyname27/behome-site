"use client";

import * as React from "react";

export type HouseCardProps = {
  id?: string;
  image: { src: string; alt?: string };
  address: string;
  price: number;
  sold?: boolean;
  styleBadge?: string;
  returnRate?: number;
  beds?: number;
  baths?: number;
  cars?: number;
  sqft?: number;
  href: string;
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
  beds,
  baths,
  cars,
  sqft,
  href,
  className,
}: HouseCardProps) {
  const statusLabel = sold ? "Sold" : "Available";
  const statusColor = sold
    ? "bg-red-500/90 text-white shadow-sm shadow-red-400/40"
    : "bg-emerald-500/90 text-white shadow-sm shadow-emerald-400/40";

  return (
    <article
      id={id}
      className={[
        "group relative overflow-hidden rounded-3xl border border-border/50",
        "bg-chrome text-chrome-foreground shadow-md transition-all duration-500",
        "hover:-translate-y-1 hover:border-FL hover:shadow-[0_0_30px_rgba(240,166,101,0.45)]",
        className ?? "",
      ].join(" ")}
    >
      {/* Image */}
      <figure className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt ?? address}
          className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Style badge */}
        {styleBadge && (
          <div className="absolute left-3 top-3 rounded-full bg-FL text-FL-foreground text-xs px-3 py-1 font-medium shadow-sm">
            {styleBadge}
          </div>
        )}

        {/* Status badge */}
        <div
          className={`absolute right-3 top-3 rounded-full text-xs px-3 py-1 font-semibold ${statusColor}`}
        >
          {statusLabel}
        </div>
      </figure>

      {/* Body */}
      <div className="p-5 flex flex-col">
        {/* Address */}
        <h3 className="text-xl font-semibold leading-snug mb-3 text-white">
          {address}
        </h3>

        {/* Price + Return row */}
        <div className="flex items-end justify-between mb-5">
          <div>
            <p className="text-xs text-white/70 mb-0.5">
              {sold ? "Sold price" : "Asking price"}
            </p>
            <p className="text-2xl font-semibold text-white">
              {formatMoney(price)}
            </p>
          </div>
          {typeof returnRate === "number" && (
            <div className="text-right leading-tight">
              <p className="text-xs text-white/70 mb-0.5">Est. Return</p>
              <p className="text-sm font-semibold text-FL">
                {returnRate.toFixed(1)}%
              </p>
            </div>
          )}
        </div>

        {/* Specs row */}
        <div className="border-t border-white/10 pt-3 mb-6 flex justify-between text-sm text-white/85 tracking-tight">
          {[
            beds !== undefined ? `${beds} Beds` : null,
            baths !== undefined ? `${baths} Baths` : null,
            cars !== undefined ? `${cars} Cars` : null,
            sqft !== undefined ? `${sqft.toLocaleString()} Sq Ft` : null,
          ]
            .filter(Boolean)
            .map((item, i, arr) => (
              <React.Fragment key={i}>
                <span>{item}</span>
                {i < arr.length - 1 && (
                  <span className="h-3 w-px bg-white/20 mx-2" />
                )}
              </React.Fragment>
            ))}
        </div>

        {/* CTA */}
        <a
          href={href}
          className="mt-auto inline-flex justify-center items-center rounded-full bg-FL text-FL-foreground font-semibold text-sm py-2.5 transition-all duration-300 hover:bg-FL/90 hover:shadow-[0_0_8px_rgba(240,166,101,0.5)]"
          aria-label={`See details for ${address}`}
        >
          See Details
        </a>
      </div>
    </article>
  );
}
