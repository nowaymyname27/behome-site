"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLocale } from "../../../../i18n/locale-context";
import { tDesignPortfolio } from "../i18n";

const OPTIONS = [1, 2, 4, 8] as const;

// Always uses en-US to ensure $125,000 format in both languages
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
  image: "/everglades.jpg",
};

export default function DesignPortfolio() {
  const { locale } = useLocale();
  const t = tDesignPortfolio(locale);
  const [units, setUnits] = useState<(typeof OPTIONS)[number]>(1);

  const data = useMemo(() => PORTFOLIO_DATA[units], [units]);
  const monthlyRent = data.annualRent / 12;

  return (
    <section className="w-full bg-background text-accent-foreground py-16 sm:py-24 px-6 lg:px-24">
      <div className="w-full bg-chrome text-chrome-foreground rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* --- LEFT COLUMN: Controls --- */}
          <div className="lg:col-span-5 p-8 sm:p-12 xl:p-14 flex flex-col justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl xl:text-4xl font-bold text-white mb-6 tracking-tight">
                {t.title}
              </h2>
              <p className="text-base text-white/70 leading-relaxed mb-10">
                {t.description}
              </p>

              <div className="flex w-full max-w-sm sm:max-w-md p-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                {OPTIONS.map((n) => {
                  const active = n === units;
                  const label =
                    n === 1
                      ? t.unitSingular
                      : t.unitPlural.replace("{{n}}", n.toString());

                  return (
                    <button
                      key={n}
                      onClick={() => setUnits(n)}
                      className={`
                        relative flex-1 px-2 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-xs md:text-sm font-bold tracking-wide transition-colors
                        ${active ? "text-chrome" : "text-white/60 hover:text-white"}
                      `}
                    >
                      {active && (
                        <motion.div
                          layoutId="active-pill"
                          className="absolute inset-0 bg-white rounded-full shadow-lg"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10 block truncate">
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-12">
              <div className="flex items-center gap-3 text-sm font-medium text-white/90 mb-2">
                <span className="uppercase tracking-widest text-amber-400">
                  {MODEL_INFO.type}
                </span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span className="text-white/60">{t.modelFinish}</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-white/30">
                {t.estimatedRates}
              </p>
            </div>
          </div>

          {/* --- MIDDLE COLUMN: Stats --- */}
          <div
            className="lg:col-span-3 bg-white/[0.03] border-y lg:border-y-0 lg:border-l lg:border-r border-white/10 
            p-8 sm:p-12 lg:px-6 xl:px-14 lg:py-14 
            flex flex-col gap-10 md:gap-12"
          >
            <StatBlock
              label={t.labels.capital}
              value={formatCurrency(data.needed)}
            />
            <StatBlock
              label={t.labels.rent}
              value={formatCurrency(monthlyRent)}
            />
            <StatBlock
              label={t.labels.cap}
              value={formatPercent(data.cap)}
              isHighlight
            />
          </div>

          {/* --- RIGHT COLUMN: Image --- */}
          <div className="lg:col-span-4 relative min-h-[350px] lg:min-h-full">
            <Image
              src={MODEL_INFO.image}
              alt={MODEL_INFO.type}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chrome/60 to-transparent lg:hidden" />
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
    <div className="flex flex-col">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
        {label}
      </p>
      <div className="flex">
        <AnimatePresence mode="popLayout">
          <motion.p
            key={value}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
            className={`text-2xl sm:text-3xl xl:text-4xl font-bold tracking-tight tabular-nums whitespace-nowrap ${
              isHighlight ? "text-amber-400" : "text-white"
            }`}
          >
            {value}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
