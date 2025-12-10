"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export type HeroCardProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
};

export default function HeroCard({
  title = "Ready to invest in BTR properties?",
  subtitle = "Choose the path that fits your goals:",
  buttonText = "Learn More",
  className = "",
}: HeroCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        backgroundColor: "rgba(255,255,255,0.22)",
        backdropFilter: "blur(14px)",
      }}
      className={[
        "relative w-full max-w-sm rounded-xl",
        "bg-white/15 border border-white/20",
        "backdrop-blur-[6px] transition-all duration-300",
        "hover:border-white/30 hover:shadow-xl",
        "p-8 text-center",
        className,
      ].join(" ")}
    >
      <h2 className="text-white text-lg font-semibold mb-3">{title}</h2>

      <p className="text-white/85 text-sm mb-6">{subtitle}</p>

      <Link href="/btr">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="
            px-6 py-3 rounded-full text-sm font-semibold
            text-white
            border border-white/30
            backdrop-blur-md
            transition-all duration-300
            hover:shadow-lg hover:-translate-y-0.5
          "
          style={{ backgroundColor: "var(--color-FL)" }}
        >
          {buttonText}
        </motion.button>
      </Link>
    </motion.div>
  );
}
