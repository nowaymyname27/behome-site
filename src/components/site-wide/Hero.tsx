"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type HeroProps = {
  title: string;
  eyebrow?: string;
  supportingText?: string;
  subtitle?: string;
  background?: string;
  backgroundNode?: ReactNode;
  children?: ReactNode;
  scrim?: string;
};

export default function Hero({
  title,
  eyebrow,
  supportingText,
  subtitle,
  background,
  backgroundNode,
  children,
  scrim = "bg-black/40",
}: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate w-full min-h-screen supports-[height:100svh]:min-h-[100svh]">
      {/* Background layer */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        {backgroundNode ? (
          backgroundNode
        ) : background ? (
          background.endsWith(".mp4") ? (
            <video
              src={background}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <Image
              src={background}
              alt=""
              fill
              priority
              className="object-cover"
            />
          )
        ) : null}
      </div>

      {/* Scrim */}
      <div className={`absolute inset-0 -z-10 pointer-events-none ${scrim}`} />

      {/* Content */}
      <motion.div
        initial={false}
        animate={reduceMotion ? false : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={[
          "relative z-10",
          "mx-auto w-full",
          "min-h-screen supports-[height:100svh]:min-h-[100svh]",
          "flex items-center",
          "px-4 sm:px-6 lg:px-24",
          "py-16 sm:py-24",
        ].join(" ")}
      >
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Copy */}
          <motion.div
            animate={reduceMotion ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="mx-auto max-w-2xl text-center text-white lg:mx-0 lg:text-left"
          >
            {eyebrow && (
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-white/85 sm:mb-6 sm:text-sm">
                {eyebrow}
              </p>
            )}
            <h1 className={eyebrow
              ? "text-6xl font-serif leading-[1.05] tracking-tight text-balance sm:text-7xl xl:text-8xl"
              : "text-4xl font-serif tracking-tight sm:text-5xl lg:text-7xl"}>
              {title}
            </h1>

            {subtitle && (
              <p className={supportingText
                ? "mt-6 text-xl font-medium leading-snug text-balance text-white sm:mt-8 sm:text-2xl"
                : "mt-4 text-base text-white/90 sm:text-lg"}>
                {subtitle}
              </p>
            )}
            {supportingText && (
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-pretty text-white/85 sm:text-lg lg:mx-0">
                {supportingText}
              </p>
            )}
          </motion.div>

          {/* Card / children */}
          {children && (
            <motion.div
              // FIX: Explicitly set initial={false} here too for safety
              initial={false}
              animate={reduceMotion ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="flex w-full justify-center lg:justify-end"
            >
              {children}
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
