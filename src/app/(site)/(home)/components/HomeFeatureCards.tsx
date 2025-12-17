// File: src/app/(site)/(home)/components/HomeFeatureCards.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "../../../../i18n/locale-context";
import { tHomeFeatureCards, getHomeFeatureCards } from "../i18n";
import { motion, Variants } from "framer-motion";

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

export default function HomeFeatureCards() {
  const { locale } = useLocale();
  const i = tHomeFeatureCards(locale);
  const FEATURES = getHomeFeatureCards(locale);

  if (!FEATURES.length) return null;

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
                    Learn More
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
