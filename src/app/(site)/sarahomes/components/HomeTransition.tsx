"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { useLocale } from "../../../../i18n/locale-context";
import { tHomeTransition } from "../i18n/home-transition";

export default function HomeTransition() {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.5,
    margin: "0px 0px -100px 0px",
  });
  const t = tHomeTransition(locale);

  return (
    <motion.section
      ref={sectionRef}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion || isInView ? "visible" : "hidden"}
      className="flex min-h-[200px] items-center justify-center bg-background px-6 py-10 text-center text-chrome sm:min-h-[240px] sm:py-12"
    >
      <div className="w-full">
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs font-medium uppercase tracking-[0.24em] text-chrome/65 sm:text-sm"
        >
          {t.label}
        </motion.p>
        <div className="mt-3 overflow-hidden pb-2">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 56 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion || !isInView ? 0 : 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="font-serif text-4xl leading-tight text-balance sm:text-5xl"
          >
            {t.heading}
          </motion.h2>
        </div>
        <motion.div
          aria-hidden="true"
          variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            delay: reduceMotion || !isInView ? 0 : 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mx-auto mt-4 h-0.5 w-[120px] origin-center bg-FL"
        />
      </div>
    </motion.section>
  );
}
