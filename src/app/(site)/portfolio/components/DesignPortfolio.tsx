// file: src/app/(site)/btr/components/DesignPortfolio.tsx
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const OPTIONS = [1, 2, 4, 8] as const;

// Helper to format currency nicely
const formatCurrency = (val: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(val);

const formatPercent = (val: number) => `${val}%`;

const PORTFOLIO_DATA = {
  1: { needed: 125000, annualRent: 31200, cap: 6.5 },
  2: { needed: 250000, annualRent: 62400, cap: 6.57 },
  4: { needed: 500000, annualRent: 124800, cap: 6.61 },
  8: { needed: 1000000, annualRent: 249600, cap: 6.65 },
};

const MODEL_INFO = {
  type: "Everglades",
  finish: "Flagship Model",
  image: "/everglades.jpg", // Ensure this exists in public folder
};

export default function DesignPortfolio() {
  const [units, setUnits] = useState<(typeof OPTIONS)[number]>(1);

  const data = useMemo(() => PORTFOLIO_DATA[units], [units]);
  const monthlyRent = data.annualRent / 12;

  return (
    // Applied your specific padding here
    <section className="w-full bg-background text-accent-foreground py-15 px-6 sm:px-12 lg:px-24">
      {/* 
        CARD CONTAINER:
        - Removed 'max-w-7xl mx-auto' so it fills the available space.
        - Kept 'w-full'.
      */}
      <div className="w-full bg-chrome text-chrome-foreground rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          {/* --- LEFT COLUMN: Controls --- */}
          <div className="lg:col-span-5 p-10 md:p-14 flex flex-col justify-between relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                Design Your Portfolio
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                Select how many units you want to model. Returns are based on
                projected performance for the SF1 model.
              </p>

              {/* Selector */}
              <div className="inline-flex p-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                {OPTIONS.map((n) => {
                  const active = n === units;
                  const label = n === 1 ? "1 unit" : `${n} units`;

                  return (
                    <button
                      key={n}
                      onClick={() => setUnits(n)}
                      className={`
                        relative px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-colors
                        ${active ? "text-chrome" : "text-white/60 hover:text-white"}
                      `}
                    >
                      {active && (
                        <motion.div
                          layoutId="active-pill"
                          className="absolute inset-0 bg-white rounded-full shadow-md"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 lg:mt-0">
              <div className="flex items-center gap-3 text-sm font-medium text-white/90 mb-3">
                <span className="uppercase tracking-widest text-accent">
                  {MODEL_INFO.type}
                </span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span className="text-white/60">{MODEL_INFO.finish}</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed max-w-xs">
                Calculations are estimates based on current market rates. Cap
                rates reflect improved efficiency at scale.
              </p>
            </div>
          </div>

          {/* --- MIDDLE COLUMN: Stats --- */}
          <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l lg:border-r border-white/10 bg-white/[0.02] p-6 md:p-4 flex flex-col justify-between">
            <StatBlock
              label="Capital Needed"
              value={formatCurrency(data.needed)}
            />
            <div className="my-8 lg:my-0">
              <StatBlock
                label="Rent (Monthly)"
                value={formatCurrency(monthlyRent)}
              />
            </div>
            <StatBlock
              label="Cap Rate"
              value={formatPercent(data.cap)}
              isHighlight
            />
          </div>

          {/* --- RIGHT COLUMN: Image --- */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <Image
              src={MODEL_INFO.image}
              alt={MODEL_INFO.type}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chrome/80 via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBlock({
  label,
  value,
  isHighlight = false,
}: {
  label: string;
  value: string;
  isHighlight?: boolean;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
        {label}
      </p>
      <AnimatePresence mode="popLayout">
        <motion.p
          key={value}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          transition={{ duration: 0.3 }}
          className={`text-3xl md:text-4xl font-bold tracking-tight ${isHighlight ? "text-accent" : "text-white"}`}
        >
          {value}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
