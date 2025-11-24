// src/components/site-wide/Hero.tsx
"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type HeroProps = {
  title: string;
  subtitle?: string;
  background?: string;
  backgroundNode?: ReactNode;
  children?: ReactNode;
  scrim?: string;
};

export default function Hero({
  title,
  subtitle,
  background,
  backgroundNode,
  children,
  scrim = "bg-black/40",
}: HeroProps) {
  return (
    <section className="relative w-full min-h-screen">
      {/* background override */}
      {backgroundNode ? (
        <div className="absolute inset-0">{backgroundNode}</div>
      ) : (
        background && (
          <div className="absolute inset-0">
            {background.endsWith(".mp4") ? (
              <video
                src={background}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={background}
                alt=""
                fill
                priority
                className="object-cover"
              />
            )}
          </div>
        )
      )}

      <div className={`absolute inset-0 ${scrim}`} />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full min-h-screen flex items-center px-6 md:px-10 py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full gap-8">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="text-white max-w-2xl"
          >
            <h1 className="h1 text-xl">{title}</h1>
            {subtitle && (
              <p className="mt-4 text-xl text-white/90">{subtitle}</p>
            )}
          </motion.div>

          {/* Right content aligned right */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="hidden lg:flex justify-end"
            >
              {children}
            </motion.div>
          )}
        </div>

        {/* Mobile version */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="lg:hidden mt-8"
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
