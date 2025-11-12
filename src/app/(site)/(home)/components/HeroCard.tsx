// File: src/app/(site)/(home)/components/HeroCard.tsx
"use client";

import { motion } from "framer-motion";

export type HeroCardProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onClick?: () => void;
  className?: string;
};

export default function HeroCard({
  title = "Ready to invest in BTR properties?",
  subtitle = "Choose the path that fits your goals:",
  buttonText = "Learn More",
  onClick,
  className = "",
}: HeroCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={[
        "relative z-10 w-full max-w-sm",
        "rounded-2xl bg-background/95 text-foreground border border-border/60",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "pt-9 pb-8 px-8 text-center backdrop-blur-sm",
        className,
      ].join(" ")}
    >
      {/* Title */}
      <motion.h2
        className="text-xl font-semibold mb-3 leading-snug"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-sm text-foreground/80 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {subtitle}
      </motion.p>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
        className={[
          "px-6 py-3 rounded-full font-semibold text-sm",
          "bg-FL text-FL-foreground shadow-md",
          "hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300",
        ].join(" ")}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
}
