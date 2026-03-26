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
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              {i.heading}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
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
            className="grid gap-4"
          >
            {i.pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-border bg-accent/20 p-5"
              >
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-foreground/75">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                  {pillar.description}
                </p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
