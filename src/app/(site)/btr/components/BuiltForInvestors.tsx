// file: src/app/(site)/btr/components/BuiltForInvestors.tsx
"use client";

import { motion } from "framer-motion";
import { useLocale } from "../../../../i18n/locale-context";
import { tBtrBuiltForInvestors } from "../i18n";

export default function BuiltForInvestors() {
  const { locale } = useLocale();
  const i = tBtrBuiltForInvestors(locale);
  const { title, paragraphs, highlight } = i;

  return (
    <section className="relative w-full bg-chrome text-chrome-foreground py-24 md:py-32 overflow-hidden">
      {/* Slightly lighter right-half band */}
      <div className="pointer-events-none absolute inset-y-0 right-0 left-1/2 bg-[#364854] md:block hidden" />

      <div className="relative z-10 px-6 md:px-12 lg:px-24 grid md:grid-cols-2 gap-16 items-stretch">
        {/* --- Left Column --- */}
        <div className="space-y-6 self-center animate-fadeInUp">
          <h2 className="h1 text-white">{title}</h2>

          <div className="space-y-5 text-lg leading-relaxed text-white/90">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* --- Right Column (dominant info panel) --- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center"
        >
          <div
            className="relative w-full h-full bg-white/[0.08] backdrop-blur-md border border-white/15 
                       rounded-3xl shadow-md p-10 md:p-14 flex flex-col justify-center
                       hover:bg-white/[0.12] hover:border-FL/40 transition-all duration-300"
          >
            <h3 className="text-3xl font-semibold text-accent mb-6">
              {highlight.title}
            </h3>
            <p className="text-lg leading-relaxed text-white/90">
              {highlight.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlight.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-FL/20 text-FL text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
