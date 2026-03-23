"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import HomeShowcase from "../../../../components/site-wide/HomeShowcase";
import MediaCarousel from "../../../../components/site-wide/MediaCarousel";
import { useLocale } from "../../../../i18n/locale-context";
import { tEvergladesShowcase } from "../i18n";
import EvergladesKeyFeatures from "./EvergladesKeyFeatures";

import type { MappedHomeSpec } from "../../../../lib/types/styles";

type EvergladesShowcaseProps = {
  home: MappedHomeSpec | null;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function EvergladesShowcase({ home }: EvergladesShowcaseProps) {
  const [stickyTop, setStickyTop] = useState(80);
  const { locale } = useLocale();
  const i = tEvergladesShowcase(locale);

  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;

    const measure = () => {
      setStickyTop(Math.round(header.getBoundingClientRect().height));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(header);

    return () => ro.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-accent text-accent-foreground pt-16 md:pt-24 pb-0 border-y border-border">
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-white/40 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2 mix-blend-overlay" />

      <div className="relative z-10 px-6 md:px-12 lg:px-24 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start w-full">
        <div className="lg:col-span-5 lg:pt-28">
          <h2 className="h1 font-serif text-chrome">{i.title}</h2>
          <p className="text-xl text-chrome/70 font-medium mt-3 border-l-4 border-FL pl-4">
            {i.subtitle}
          </p>
          <p className="mt-8 text-lg leading-relaxed text-chrome/80">
            {i.description}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-7 w-full"
        >
          <div className="mb-8 border-b border-chrome/10 pb-4">
            <h3 className="text-xl font-semibold text-chrome">{i.statsTitle}</h3>
            <p className="text-sm text-chrome/60">Live Projections</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {i.stats.map((s) => (
              <motion.div
                key={s.label}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-chrome text-white shadow-md p-6 transition-all duration-300 ease-out hover:bg-white hover:text-chrome hover:border-chrome/10 hover:shadow-xl"
              >
                <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-wider text-white/60 group-hover:text-chrome/50 transition-colors">
                      {s.label}
                    </p>
                    <div className="h-1.5 w-1.5 rounded-full bg-FL/0 group-hover:bg-FL transition-colors" />
                  </div>

                  <p className="text-3xl font-bold tracking-tight text-white group-hover:text-chrome transition-colors">
                    {s.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-12 md:mt-14">
        <EvergladesKeyFeatures />
      </div>

      {home && (
        <div className="relative z-10">
          <HomeShowcase
            home={home}
            stickyHeader
            stickyTop={stickyTop}
            className="bg-background"
          >
            <MediaCarousel media={home.media} viewportOffset={stickyTop + 64} />
          </HomeShowcase>
        </div>
      )}
    </section>
  );
}
