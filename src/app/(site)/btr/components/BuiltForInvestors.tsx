// file: src/app/(site)/btr/components/BuiltForInvestors.tsx
"use client";

import { motion } from "framer-motion";
import { useLocale } from "../../../../i18n/locale-context";
import { tBtrBuiltForInvestors } from "../i18n";

const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-accent"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3.5 h-3.5 text-emerald-400"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function BuiltForInvestors() {
  const { locale } = useLocale();
  const i = tBtrBuiltForInvestors(locale);
  const { title, paragraphs, highlight } = i;

  const [leadText, ...bodyTexts] = paragraphs;

  return (
    <section className="relative w-full bg-chrome text-chrome-foreground py-24 md:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4" />

      {/* 
        GRID UPDATE: 
        1. Changed to 'grid-cols-12' for finer control.
        2. Reduced gap to 'gap-12' to bring columns closer.
      */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 grid lg:grid-cols-12 gap-12 items-center">
        {/* --- LEFT COLUMN --- 
            Now takes up 7/12 columns (approx 60%), making it wider and pushing right.
        */}
        <div className="lg:col-span-7 space-y-10 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            {title}
          </h2>

          <div className="space-y-8">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white">
              {leadText}
            </p>

            <div className="border-l-2 border-white/10 pl-6 space-y-6">
              {bodyTexts.map((p, idx) => (
                <div key={idx} className="relative">
                  <p className="text-lg leading-relaxed text-white/70">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN --- 
            Now takes up 5/12 columns (approx 40%).
        */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent blur-3xl scale-90" />

          <div
            className="
              relative z-10 w-full max-w-lg
              rounded-3xl border border-white/10
              bg-[#152028]/80 backdrop-blur-xl shadow-2xl
              p-8 md:p-10
              transition-transform hover:scale-[1.01] duration-500
            "
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  Featured Market
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  {highlight.title}
                </h3>
              </div>
              <div className="p-3 rounded-full bg-white/5 border border-white/5 text-white/50">
                <MapPinIcon />
              </div>
            </div>

            <p className="text-base text-white/80 leading-relaxed mb-8">
              {highlight.description}
            </p>

            <div className="space-y-3">
              {highlight.tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="
                    group flex items-center gap-4 p-4 rounded-xl
                    bg-white/[0.03] border border-white/5
                    transition-all hover:bg-white/[0.07] hover:border-white/10 hover:translate-x-1
                  "
                >
                  <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <CheckIcon />
                  </div>
                  <span className="text-sm md:text-base font-medium text-white/90">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
