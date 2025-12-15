"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "../../../../i18n/locale-context";
import { tHeroCard } from "../i18n";

export type HeroCardProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
};

export default function HeroCard({
  title,
  subtitle,
  buttonText,
  className = "",
}: HeroCardProps) {
  const { locale } = useLocale();
  const t = tHeroCard(locale);
  const reduceMotion = useReducedMotion();

  const displayTitle = title || t.title;
  const displaySubtitle = subtitle || t.subtitle;
  const displayButton = buttonText || t.buttonText;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={reduceMotion ? false : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              backgroundColor: "rgba(255,255,255,0.22)",
              backdropFilter: "blur(14px)",
            }
      }
      className={[
        "relative w-full max-w-md",
        "rounded-xl bg-white/15 border border-white/20",
        "backdrop-blur-[6px] transition-all duration-300",
        "hover:border-white/30 hover:shadow-xl",
        "p-5 sm:p-8 text-center",
        className,
      ].join(" ")}
    >
      <h2 className="mb-3 text-base font-semibold text-white sm:text-lg">
        {displayTitle}
      </h2>

      <p className="mb-6 text-sm leading-relaxed text-white/85">
        {displaySubtitle}
      </p>

      <Link href="/btr" className="block">
        <motion.button
          whileHover={reduceMotion ? undefined : { scale: 1.03 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          className={[
            "w-full sm:w-auto",
            "min-h-11",
            "px-6 py-3 rounded-full text-sm font-semibold",
            "text-white border border-white/30",
            "backdrop-blur-md transition-all duration-300",
            "hover:shadow-lg hover:-translate-y-0.5",
          ].join(" ")}
          style={{ backgroundColor: "var(--color-FL)" }}
        >
          {displayButton}
        </motion.button>
      </Link>
    </motion.div>
  );
}
