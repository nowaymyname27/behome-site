"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type PortfolioCardProps = {
  type: string;
  finish: string;
  needed: number;
  rent: number;
  cap: number;
  className?: string;
};

function formatMoney(v: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(v);
}

export default function PortfolioCard({
  type,
  finish,
  needed,
  rent,
  cap,
  className,
}: PortfolioCardProps) {
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      // Clicking anywhere on the card closes the popup
      onClick={() => setOpen(false)}
      className={[
        "rounded-2xl border border-border bg-chrome text-chrome-foreground",
        "p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        "max-w-xs w-full mx-auto relative",
        className ?? "",
      ].join(" ")}
    >
      {/* HEADER */}
      <div className="mb-6">
        <h3 className="text-3xl font-bold tracking-tight mb-1 text-white">
          {type}
        </h3>
        <p className="text-md font-medium text-accent">{finish}</p>
      </div>

      {/* METRICS GRID */}
      <div className="grid grid-cols-2 gap-4">
        <Metric label="Investment Needed" value={formatMoney(needed)} />
        <Metric
          label="Estimated Rent"
          value={formatMoney(rent)}
          highlight="text-emerald-300"
        />
      </div>

      {/* CAP + INFO BUTTON */}
      <div className="mt-6 pt-4 border-t border-white/10 relative flex items-start justify-between">
        <Metric
          label="Target CAP"
          value={`${cap.toFixed(2)}%`}
          highlight="text-amber-300"
        />

        {/* Info Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent card's click handler
            setOpen((p) => !p); // toggle open/close
          }}
          className="ml-3 mt-1 h-6 w-6 rounded-full flex items-center justify-center 
                     bg-white/10 text-white/80 text-xs font-bold 
                     hover:bg-white/20 transition-colors z-30 relative"
        >
          i
        </button>

        {/* Popup */}
        <AnimatePresence>
          {open && (
            <motion.div
              ref={popupRef}
              onClick={(e) => e.stopPropagation()} // clicking inside should NOT close it
              initial={{ opacity: 0, scale: 0.95, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="
                absolute right-0 bottom-10 z-20
                w-64 rounded-xl border border-border 
                bg-chrome/95 backdrop-blur-md shadow-lg p-4
              "
            >
              <div className="text-sm font-semibold mb-1 text-white">
                What is CAP?
              </div>
              <p className="text-xs leading-relaxed text-white/80">
                CAP tells you how much money a property makes each year compared
                to what it costs.
                <br />
                <br />
                A higher CAP = a better return.
                <br />
                <br />
                Quick formula: CAP = yearly profit / price
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* Metric Component */
function Metric({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="text-xs uppercase tracking-wide text-white/40 mb-1">
        {label}
      </div>
      <div
        className={`text-lg font-semibold leading-tight ${
          highlight ?? "text-white"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
