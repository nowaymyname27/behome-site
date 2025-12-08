"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioCard from "./PortfolioCard";

const OPTIONS = [1, 2, 4, 8];
const CARD_COUNT = 3;

const MODELS = [
  {
    type: "Everglades",
    finish: "Flagship Model",
    baseNeeded: 45000,
    baseRent: 2200,
    cap: 5.8,
  },
  {
    type: "Sabal",
    finish: "Premium Model",
    baseNeeded: 40000,
    baseRent: 2050,
    cap: 5.5,
  },
  {
    type: "Cypress",
    finish: "Core Model",
    baseNeeded: 36000,
    baseRent: 1900,
    cap: 5.2,
  },
];

export default function DesignPortfolio() {
  const [selected, setSelected] = useState<number>(1);
  const [displayActiveLabel, setDisplayActiveLabel] = useState<number | null>(
    1
  );

  const handleSelect = (n: number) => {
    setDisplayActiveLabel(null);
    setSelected(n);
    setTimeout(() => setDisplayActiveLabel(n), 280);
  };

  const computeCardData = (index: number) => {
    const model = MODELS[index % MODELS.length];
    const units = selected;

    return {
      type: model.type,
      finish: model.finish,
      needed: model.baseNeeded * units,
      rent: model.baseRent * units,
      cap: model.cap,
    };
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full bg-accent text-accent-foreground py-12"
    >
      <div className="w-full px-6 lg:px-24 flex flex-col md:flex-row gap-10">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">
            Design Your Portfolio
          </h2>

          <p className="text-sm text-foreground/70 mb-6">
            Select how many units you want to model. The portfolio cards below
            will adjust automatically.
          </p>

          <div className="text-xs uppercase tracking-wide text-foreground/50 mb-2">
            Units
          </div>

          <div className="flex items-center gap-4">
            {OPTIONS.map((n) => {
              const active = n === selected;
              const showActiveLabel = displayActiveLabel === n;
              const label = n === 1 ? "1 unit" : `${n} units`;

              return (
                <motion.button
                  key={n}
                  onClick={() => handleSelect(n)}
                  className={[
                    "h-12 rounded-full flex items-center justify-center border overflow-hidden transition-all select-none",
                    active
                      ? "text-chrome-foreground shadow-md bg-NC border-NC"
                      : "bg-chrome text-chrome-foreground border-border hover:bg-NC/80 hover:shadow-sm",
                  ].join(" ")}
                  whileTap={{ scale: 0.92 }}
                  initial={false}
                  animate={{
                    width: active ? 130 : 48,
                    scale: active ? 1.03 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 24,
                  }}
                >
                  <AnimatePresence mode="wait">
                    {active && showActiveLabel ? (
                      <motion.span
                        key="active"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="font-bold text-base whitespace-nowrap"
                      >
                        {label}
                      </motion.span>
                    ) : (
                      <motion.span
                        key="inactive"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="font-bold text-base"
                      >
                        {n}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-2/3 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            {Array.from({ length: CARD_COUNT }).map((_, i) => {
              const cardProps = computeCardData(i);

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <PortfolioCard {...cardProps} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
