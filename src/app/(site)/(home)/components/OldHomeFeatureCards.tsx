// File: src/app/(site)/(home)/components/OldHomeFeatureCards.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "../../../../i18n/locale-context";
import { tOldHomeFeatureCards, getOldHomeFeatureCards } from "../i18n";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      duration: 0.5,
    },
  },
};

type OldHomeFeatureCardsProps = {
  variant?: "legacy" | "modern";
};

export default function OldHomeFeatureCards({
  variant = "legacy",
}: OldHomeFeatureCardsProps) {
  const { locale } = useLocale();
  const i = tOldHomeFeatureCards(locale);
  const FEATURES = getOldHomeFeatureCards(locale);
  const reduceMotion = useReducedMotion();

  if (!FEATURES.length) return null;

  if (variant === "modern") {
    return (
      <section
        id="btr-investment-paths"
        aria-labelledby="btr-investment-paths-heading"
        className="bg-accent px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16 xl:px-16"
      >
        <div className="mx-auto max-w-screen-2xl">
          <motion.header
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-col gap-4 sm:mb-9 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-NC">
                {i.eyebrow}
              </p>
              <h2
                id="btr-investment-paths-heading"
                className="font-serif text-3xl font-semibold tracking-tight text-chrome sm:text-4xl"
              >
                {i.title}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-accent-foreground/75 sm:text-base md:pb-1">
              {i.blurb}
            </p>
          </motion.header>

          <motion.div
            variants={containerVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {FEATURES.map((feature, index) => (
              <motion.article
                key={feature.id}
                variants={cardVariants}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-chrome p-2.5 text-white shadow-md transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-[16/8] overflow-hidden rounded-[1.35rem] bg-[#fffaf0]">
                  <span className="absolute left-4 top-4 z-10 rounded-full border border-chrome/10 bg-white/85 px-3 py-1 text-xs font-semibold tabular-nums text-chrome backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    fill
                    sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col px-3 pb-3 pt-4 sm:px-4 sm:pb-4">
                  <h3 className="font-serif text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {feature.heading}
                  </h3>
                  <div className="mt-2 h-1 w-10 rounded-full bg-FL transition-all duration-300 group-hover:w-14" />
                  <p className="mt-3 flex-1 text-sm leading-6 text-white/75">
                    {feature.description}
                  </p>
                  <Link
                    href={feature.href}
                    aria-label={`${feature.ctaLabel}: ${feature.heading}`}
                    className="mt-5 inline-flex min-h-10 items-center justify-between gap-3 rounded-xl bg-FL px-4 py-2.5 text-sm font-semibold text-FL-foreground transition-colors hover:bg-white hover:text-chrome focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-FL"
                  >
                    <span>{feature.ctaLabel}</span>
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-pad bg-accent">
      {/* Header */}
      {i.showHeader && (i.title || i.blurb) && (
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-serif text-accent-foreground mb-10"
        >
          {i.title && <h2 className="h2">{i.title}</h2>}
          {i.blurb && <p className="mt-3 text-lg opacity-80">{i.blurb}</p>}
        </motion.header>
      )}

      {/* Cards Container */}
      <div className="px-4 sm:px-6 lg:px-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((f) => (
            <motion.article
              key={f.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-border/50 bg-white/95 backdrop-blur-sm overflow-hidden
                         shadow-md flex flex-col h-full"
            >
              {/* Image Container with bg-chrome */}
              <div className="relative aspect-[18/10] w-full bg-chrome">
                <Image
                  src={f.imageSrc}
                  alt={f.imageAlt}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-contain p-4"
                />
              </div>

              {/* Text */}
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {f.heading}
                  </h3>
                  <div className="h-[2px] w-12 bg-NC mt-2 mb-4" />
                  <p className="text-base text-foreground/90 leading-relaxed">
                    {f.description}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href={f.href}
                    className="btn btn-NC w-full sm:w-auto text-sm md:text-base px-6 py-2.5"
                    aria-label={`Learn More: ${f.heading}`}
                  >
                    {f.ctaLabel}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
