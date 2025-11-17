"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OPTIONS = [1, 2, 4, 8];
const CARD_COUNT = 3;

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

  const computeCardData = (i: number) => {
    return {
      label: `Card ${i + 1}`,
      homes: selected,
    };
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full bg-surface text-foreground py-12"
    >
      <div className="w-full px-6 mb-10">
        <h2 className="text-2xl font-semibold tracking-tight mb-3">
          Design Your Portfolio
        </h2>

        <p className="text-sm text-foreground/70 mb-6">
          Select how many units you want to model. The investment cards below
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
                    ? "text-accent-foreground shadow-md bg-gradient-to-r from-accent/90 to-accent border-accent"
                    : "bg-chrome text-chrome-foreground border-border hover:bg-chrome/80 hover:shadow-sm",
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

      <div className="w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: CARD_COUNT }).map((_, i) => {
          const cardProps = computeCardData(i);

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-chrome p-6 text-chrome-foreground shadow-sm"
            >
              <div className="text-lg font-semibold mb-2">
                {cardProps.label}
              </div>
              <div className="text-sm">Selected homes: {cardProps.homes}</div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
