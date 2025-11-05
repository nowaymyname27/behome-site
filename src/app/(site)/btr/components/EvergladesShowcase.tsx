// file: src/app/(site)/btr/components/EvergladesShowcase.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EvergladesShowcase() {
  const [expanded, setExpanded] = useState(false);

  const features = [
    "Versatile layout — accommodates families or shared living.",
    "No HOA fees — built on independent single-family lots.",
    "Prime location — close to schools and employment centers.",
    "Mid-income appeal — broad tenant demand and stability.",
    "Flexible den/office — easily converts into an extra bedroom.",
    "Energy-efficient design — lowers utility costs and increases comfort.",
    "Impact-resistant windows — built for safety and storm protection.",
    "Open-concept living area — ideal for entertaining and family life.",
    "Spacious lanai and backyard — private outdoor space tenants love.",
    "Two-car garage — convenience and added storage.",
    "Dedicated laundry room — practical and well-designed layout.",
    "Mud room for kids — function meets everyday family living.",
    "Large master suite — walk-in closet and double vanities.",
    "Modern kitchen — stainless steel appliances and a large island.",
    "Covered front porch — elegant entrance with curb appeal.",
  ];

  const stats = [
    { label: "Minimum Investment", value: "$125,000" },
    { label: "IRR Projection", value: "16% annual" },
    { label: "Equity Multiple", value: "1.5x" },
    { label: "Term", value: "3+ years" },
    { label: "Yield", value: "6%" },
    { label: "Cashout", value: "≈30% with ReFi" },
    { label: "Distribution", value: "Monthly" },
  ];

  return (
    <section className="relative w-full bg-accent text-accent-foreground py-24 md:py-32">
      <div className="grid md:grid-cols-[1.65fr_1fr] gap-16 px-6 md:px-12 lg:px-24 items-start w-full">
        {/* --- Left Column --- */}
        <div>
          <h2 className="h1 text-chrome">The Everglades</h2>
          <p className="text-2xl text-FL font-semibold mt-2">
            Designed for Living, Built for Returns
          </p>
          <p className="mt-6 text-lg leading-relaxed">
            Our flagship Build-to-Rent home, the Everglades, is thoughtfully
            engineered to maximize rental performance and long-term value. Its
            flexible design, durable construction, and modern features make it
            ideal for today’s families and investors alike.
          </p>

          {/* Expand/Collapse */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-chrome/20 text-chrome
                       hover:bg-chrome/10 hover:border-chrome/40 hover:text-FL transition-all duration-300"
          >
            {expanded ? "Hide Features ▲" : "View Key Features ▼"}
          </button>

          {/* Features */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-10 flex flex-wrap gap-3">
                  {features.map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.02 }}
                      className="px-4 py-2 rounded-full bg-white/40 border border-chrome/10 text-sm text-chrome
                                 hover:border-FL/50 hover:bg-FL/20 transition-all duration-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- Right Column: Stats (Chrome Theme) --- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-chrome text-chrome-foreground border border-white/10 rounded-3xl shadow-xl p-10 md:p-12
                     hover:border-FL/30 hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-FL mb-6">
            Investment Overview
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/10 rounded-2xl p-4 text-center
                           hover:border-FL/40 hover:bg-white/15 transition-all duration-300"
              >
                <p className="text-xl font-semibold text-FL">{s.value}</p>
                <p className="text-sm text-white/70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
