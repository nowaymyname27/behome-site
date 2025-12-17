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
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
              backgroundColor: "rgba(255,255,255,0.25)",
              backdropFilter: "blur(20px)",
            }
      }
      className={[
        "relative flex flex-col justify-between", // Stacks content vertically
        "w-full max-w-[350px]", // Narrow width
        "min-h-[460px]", // Tall height
        "rounded-2xl bg-white/15 border border-white/20",
        "backdrop-blur-xl shadow-2xl",
        "p-8 md:p-10 text-center",
        "transition-all duration-300",
        className,
      ].join(" ")}
    >
      {/* Content Wrapper */}
      <div className="mt-4 flex flex-col items-center gap-6">
        {/* Main Title */}
        <h2 className="text-4xl font-bold text-white leading-tight drop-shadow-sm">
          {displayTitle}
        </h2>

        {/* Decorative Divider */}
        <div className="w-12 h-1 bg-FL rounded-full opacity-80" />

        {/* Subtitle */}
        <p className="text-lg leading-relaxed text-white/90 font-medium">
          {displaySubtitle}
        </p>
      </div>

      {/* Button Section - Anchored at bottom */}
      <div className="mt-8 w-full">
        <Link href="/btr" className="block w-full">
          <motion.button
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className={[
              "w-full",
              "py-4 rounded-full text-base font-bold",
              "text-white shadow-lg",
              "transition-all duration-300",
              "hover:shadow-xl hover:brightness-110",
            ].join(" ")}
            style={{ backgroundColor: "var(--color-FL)" }}
          >
            {displayButton}
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
