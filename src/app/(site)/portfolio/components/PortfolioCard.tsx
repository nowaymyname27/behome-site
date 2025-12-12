"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type PortfolioCardProps = {
  type: string;
  finish: string;
  needed: number;
  rent: number;
  cap: number;
  units: number;
  image: {
    src: string;
    alt: string;
  };
};

function formatMoney(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatPercent(n: number) {
  return `${n.toFixed(1)}%`;
}

export default function PortfolioCard(props: PortfolioCardProps) {
  const { type, finish, needed, rent, cap, units, image } = props;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="overflow-hidden rounded-2xl bg-slate-900 shadow-xl" // Dark background for the whole card
    >
      {/* Image Header */}
      <div className="relative aspect-video w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

        {/* Top Badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-md bg-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-900 shadow-sm">
            {finish}
          </span>
        </div>

        {/* Bottom Title */}
        <div className="absolute bottom-4 left-6 right-6">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {type} Model
          </h3>
          <p className="text-sm font-medium text-slate-300">
            {units} {units === 1 ? "Unit Configuration" : "Units Configuration"}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="p-6 bg-slate-900">
        <div className="grid grid-cols-3 gap-4">
          <div>
            {/* Lighter label color for dark background */}
            <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
              Capital
            </div>
            <div className="mt-1 text-lg font-bold text-white">
              {formatMoney(needed)}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
              Rent / Mo
            </div>
            <div className="mt-1 text-lg font-bold text-white">
              {formatMoney(rent)}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
              Cap Rate
            </div>
            <div className="mt-1 text-lg font-bold text-white">
              {formatPercent(cap)}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
