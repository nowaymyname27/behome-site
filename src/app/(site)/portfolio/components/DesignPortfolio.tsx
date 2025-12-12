"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";

const OPTIONS = [1, 2, 4, 8] as const;

// Data derived from your spreadsheet
const PORTFOLIO_DATA = {
  1: {
    needed: 125000,
    annualRent: 31200,
    cap: 6.5,
  },
  2: {
    needed: 250000,
    annualRent: 62400,
    cap: 6.57,
  },
  4: {
    needed: 500000,
    annualRent: 124800,
    cap: 6.61,
  },
  8: {
    needed: 1000000,
    annualRent: 249600,
    cap: 6.65,
  },
};

const MODEL_INFO = {
  type: "Everglades", // Matches your image name
  finish: "Flagship Model",
  image: {
    src: "/SF1.jpg",
    alt: "Everglade model home exterior",
  },
};

export default function DesignPortfolio() {
  const [units, setUnits] = useState<(typeof OPTIONS)[number]>(1);

  const cardProps = useMemo(() => {
    const data = PORTFOLIO_DATA[units];

    return {
      type: MODEL_INFO.type,
      finish: MODEL_INFO.finish,
      image: MODEL_INFO.image,
      units,
      // Map spreadsheet values to props
      needed: data.needed,
      // Card displays Monthly Rent, so we divide Annual / 12
      rent: data.annualRent / 12,
      cap: data.cap,
    };
  }, [units]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full bg-background text-accent-foreground py-16"
    >
      <div className="w-full px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* LEFT SIDE (Controls) */}
          <div className="lg:col-span-5 xl:col-span-4 pt-2">
            <h2 className="text-3xl font-semibold tracking-tight">
              Design Your Portfolio
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              Select how many units you want to model. Returns are based on
              projected performance for the SF1 model.
            </p>

            <div className="mt-8">
              <div className="text-xs uppercase tracking-wide text-foreground/50 mb-3">
                Select Units
              </div>

              {/* Button Group */}
              <div className="inline-flex rounded-full border border-foreground/10 bg-white/40 p-1.5">
                {OPTIONS.map((n) => {
                  const active = n === units;
                  const label = n === 1 ? "1 unit" : `${n} units`;

                  return (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setUnits(n)}
                      className={[
                        "relative h-10 px-4 rounded-full text-sm font-semibold",
                        "transition-colors select-none z-0",
                        active
                          ? "text-white"
                          : "text-foreground/60 hover:text-foreground",
                      ].join(" ")}
                    >
                      {active ? (
                        <motion.span
                          layoutId="units-pill"
                          className="absolute inset-0 rounded-full bg-slate-900 shadow-sm -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      ) : null}

                      <span className="relative whitespace-nowrap">
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 text-sm text-foreground/70 flex items-center gap-2">
                <span className="font-semibold text-foreground">
                  {MODEL_INFO.type}
                </span>
                <span className="h-1 w-1 rounded-full bg-foreground/30" />
                <span>{MODEL_INFO.finish}</span>
              </div>
            </div>

            <div className="mt-8 border-t border-border/50 pt-6 space-y-3 text-sm text-foreground/60">
              <p>
                Calculations are estimates based on current market rates. Cap
                rates reflect improved efficiency at scale.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE (Card) */}
          <div className="lg:col-span-7 xl:col-span-8 flex lg:justify-start xl:justify-center">
            <motion.div
              key={units}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-2xl"
            >
              <PortfolioCard {...cardProps} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
