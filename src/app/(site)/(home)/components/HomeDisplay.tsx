// File: src/app/(site)/(home)/components/HomeDisplay.tsx
"use client";

import { useEffect, useState } from "react";
import { useLocale } from "../../../../i18n/locale-context";
import { tHomeDisplay } from "../i18n";
import { CheckCircle2 } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { homeDisplayVideos } from "../data/homeDisplayVideos";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.8 },
  },
};

export default function HomeDisplay() {
  const { locale } = useLocale();
  const i = tHomeDisplay(locale);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [playlist, setPlaylist] = useState<string[]>([]);

  useEffect(() => {
    setPlaylist([...homeDisplayVideos].sort(() => 0.5 - Math.random()));
  }, []);

  const handleVideoEnded = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  return (
    <section className="relative w-full bg-accent overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* ===== LEFT COLUMN ===== */}
        <div className="flex flex-col justify-center px-6 py-20 lg:pl-16 lg:pr-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
                {i.heading}
              </h2>
              <div className="space-y-5 text-lg text-foreground/80 leading-relaxed">
                {i.description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {i.points.map((p, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl p-5 shadow-sm 
                             hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-1.5 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    </div>
                    <h3 className="font-bold text-foreground text-[1.05rem] group-hover:text-fl transition-colors duration-300">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-[15px] text-foreground/70 leading-relaxed">
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ===== RIGHT COLUMN: Video Player ===== */}
        <div className="relative hidden lg:flex flex-col justify-center sticky top-0 h-screen pr-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
            whileHover={{
              y: -4,
              boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)",
            }}
            // Added: border-4 border-white/50 (white frame with 50% opacity)
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black cursor-pointer group border-4 border-black"
          >
            <AnimatePresence mode="popLayout">
              {playlist.length > 0 && (
                <motion.video
                  key={playlist[currentIndex]}
                  src={playlist[currentIndex]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  autoPlay
                  muted
                  playsInline
                  onEnded={handleVideoEnded}
                  className="absolute inset-0 w-full h-full object-contain"
                  aria-label={i.media.videoAria}
                />
              )}
            </AnimatePresence>

            {playlist.length > 0 && (
              <link
                rel="preload"
                as="video"
                href={playlist[(currentIndex + 1) % playlist.length]}
              />
            )}
          </motion.div>
        </div>

        {/* ===== MOBILE VIDEO FALLBACK ===== */}
        <div className="lg:hidden relative w-full mt-8 aspect-video bg-black border-y-4 border-white/20">
          {playlist.length > 0 && (
            <video
              src={playlist[currentIndex]}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
              className="w-full h-full object-contain"
              aria-label={i.media.videoAria}
            />
          )}
        </div>
      </div>
    </section>
  );
}
