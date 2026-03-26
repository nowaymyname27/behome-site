"use client";

import { motion } from "framer-motion";

import { useLocale } from "../../../../i18n/locale-context";
import { tAboutCompany } from "../i18n";

export default function AboutCompanyStory() {
  const { locale } = useLocale();
  const i = tAboutCompany(locale);

  return (
    <section className="w-full bg-background text-foreground border-b border-border">
      <div className="px-6 sm:px-12 lg:px-24 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr] lg:items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/55">
              {i.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif text-foreground">
              {i.heading}
            </h2>

            <div className="mt-8 max-w-4xl space-y-5 text-base md:text-lg leading-relaxed text-foreground/85">
              {i.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="grid w-full gap-5 lg:max-w-sm lg:self-center lg:mx-auto"
          >
            {i.stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-xl border border-white/15 bg-chrome p-5 text-chrome-foreground text-center"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/70">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  {stat.value}
                </p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
