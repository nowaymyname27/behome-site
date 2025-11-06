"use client";

import { motion } from "framer-motion";
import { useLocale } from "../../../../i18n/locale-context";
import { tOtherStyles } from "../i18n";

export default function OtherStylesComparison() {
  const { locale } = useLocale();
  const i = tOtherStyles(locale);

  return (
    <section className="relative w-full bg-chrome text-chrome-foreground py-24 md:py-32">
      {/* --- Title --- */}
      <div className="text-center mb-16 px-6">
        <h2 className="h1 text-white">{i.title}</h2>
        <p className="mt-3 text-lg text-white/80">{i.subtitle}</p>
      </div>

      {/* --- Comparison Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12 lg:px-24">
        {i.models.map((model, idx) => (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`rounded-2xl border shadow-sm p-8 flex flex-col
              transition-all duration-300 hover:-translate-y-1 hover:shadow-md
              ${
                model.highlight
                  ? "bg-white/10 border-FL/60"
                  : "bg-white/[0.06] border-white/10"
              }`}
          >
            <header className="mb-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-FL">{model.name}</h3>
                <span className="text-sm text-white/70">{model.alt}</span>
              </div>
              <p className="text-white/90 font-medium mt-1">{model.tagline}</p>
              {model.highlight && (
                <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold bg-FL text-FL-foreground rounded-full">
                  Flagship Model
                </span>
              )}
            </header>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/80 flex-1">
              {model.features.map((feature, featureIdx) => (
                <li
                  key={featureIdx}
                  className="border-t border-white/10 pt-2 first:border-none first:pt-0"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
