"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useLocale } from "../../../../i18n/locale-context";
import { tAboutOwners } from "../i18n";

export default function AboutOwnersShowcase() {
  const { locale } = useLocale();
  const i = tAboutOwners(locale);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-background text-foreground border-b border-border">
      <div className="px-6 sm:px-12 lg:px-24 py-16 md:py-20">
        <div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/55">
              RentPortfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              {i.heading}
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-foreground/80">
              {i.subheading}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {i.owners.map((owner, index) => (
              <motion.article
                key={`${owner.name}-${index}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="overflow-hidden rounded-2xl border border-border bg-accent/12"
              >
                <div className="relative aspect-[4/3] w-full border-b border-border bg-chrome/10">
                  <Image
                    src={owner.imageSrc}
                    alt={owner.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-top"
                  />
                </div>

                <div className="p-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-foreground/50">
                      {i.profileLabel}
                    </p>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {owner.name}
                    </h3>
                    <p className="mt-1 text-xs text-foreground/65 uppercase tracking-[0.12em]">
                      {owner.role}
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-foreground/85">
                    {owner.bio.split("\n\n")[0]}
                  </p>

                  <AnimatePresence initial={false}>
                    {expandedIndex === index && (
                      <motion.div
                        id={`owner-profile-${index}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="mt-5 overflow-hidden"
                      >
                        <div className="space-y-3 text-sm leading-7 text-foreground/85">
                          {owner.bio
                            .split("\n\n")
                            .slice(1)
                            .map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-6 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedIndex((current) =>
                          current === index ? null : index
                        )
                      }
                      aria-expanded={expandedIndex === index}
                      aria-controls={`owner-profile-${index}`}
                      className="inline-flex items-center rounded-full border border-border/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:border-border hover:text-foreground"
                    >
                      {expandedIndex === index
                        ? i.showLessLabel
                        : i.readMoreLabel}
                    </button>

                    <Link
                      href={owner.linkedinUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center rounded-full border border-chrome/40 bg-chrome px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-chrome/90"
                    >
                      {i.linkedinLabel}
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
