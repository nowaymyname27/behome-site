"use client";

import { motion } from "framer-motion";

import { useLocale } from "../../../../i18n/locale-context";
import { tAboutCompany } from "../i18n";

export default function AboutCompanyStory() {
  const { locale } = useLocale();
  const i = tAboutCompany(locale);

  return (
    <section className="w-full bg-background text-foreground border-b border-border">
      <div className="px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/55">
            {i.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif text-foreground">
            {i.heading}
          </h2>

          <div className="mt-8 space-y-5 text-base md:text-lg leading-relaxed text-foreground/85">
            {i.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mt-10 grid gap-3 rounded-2xl border border-border bg-accent/15 p-5 md:grid-cols-3"
          >
            {i.stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-xl border border-border/80 bg-background/85 p-4"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-foreground/55">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
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
