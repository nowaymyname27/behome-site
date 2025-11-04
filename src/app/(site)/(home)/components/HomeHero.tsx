// file: src/app/(site)/(home)/components/HomeHero.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "../../../../components/site-wide/Hero";
import HeroCard from "./HeroCard";
import { useLocale } from "../../../../i18n/locale-context";
import { tHomeHero } from "../i18n";
import { homeHeroVideos } from "../data/homeHeroVideos";

export default function HomeHero() {
  const { locale } = useLocale();
  const i = tHomeHero(locale);
  const copies = i.copies;

  const [videos, setVideos] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [activeBuffer, setActiveBuffer] = useState(0);
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

  const fadeDuration = 500;

  // shuffle videos once per load
  const shuffleArray = (arr: string[]) => {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  useEffect(() => {
    setVideos(shuffleArray(homeHeroVideos));
  }, []);

  const preloadNextVideo = (index: number, bufferIndex: number) => {
    const nextVideo = videoRefs[bufferIndex].current;
    if (!nextVideo || !videos[index]) return;
    nextVideo.src = videos[index];
    nextVideo.load();
  };

  const playNext = () => {
    if (videos.length === 0) return;
    const nextIndex = (current + 1) % videos.length;
    const nextBuffer = 1 - activeBuffer;

    const currentVideo = videoRefs[activeBuffer].current;
    const nextVideo = videoRefs[nextBuffer].current;
    if (!currentVideo || !nextVideo) return;

    preloadNextVideo(nextIndex, nextBuffer);
    nextVideo.currentTime = 0;
    setIsFading(true);
    nextVideo.play().catch(() => {});

    setTimeout(() => {
      setCurrent(nextIndex);
      setActiveBuffer(nextBuffer);
      setIsFading(false);
      const afterNext = (nextIndex + 1) % videos.length;
      preloadNextVideo(afterNext, activeBuffer);
    }, fadeDuration);
  };

  useEffect(() => {
    const video = videoRefs[activeBuffer].current;
    if (!video) return;
    const handleEnded = () => playNext();
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [activeBuffer, current, videos]);

  useEffect(() => {
    if (videos.length > 0) {
      videoRefs[0].current?.play().catch(() => {});
      if (videos.length > 1) preloadNextVideo(1, 1);
    }
  }, [videos]);

  const copy = copies[current % copies.length];

  return (
    <Hero>
      {/* --- Background videos --- */}
      <Hero.Background>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRefs[0]}
            src={videos[0]}
            muted
            playsInline
            autoPlay
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              activeBuffer === 0
                ? isFading
                  ? "opacity-0"
                  : "opacity-100"
                : "opacity-0"
            }`}
            aria-label={i.videoAria}
          />
          <video
            ref={videoRefs[1]}
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              activeBuffer === 1
                ? isFading
                  ? "opacity-0"
                  : "opacity-100"
                : "opacity-0"
            }`}
          />
        </div>
        <Hero.Scrim />
      </Hero.Background>

      {/* --- Full-width overlay content --- */}
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24">
          {/* Copy block (left-aligned) */}
          <div
            key={current}
            className={`transition-opacity duration-500 ${
              isFading ? "opacity-0" : "opacity-100"
            } max-w-3xl text-center md:text-left`}
          >
            <h1 className="h1 text-white">{copy.title}</h1>
            <p className="mt-4 text-lg text-white/90">{copy.subtitle}</p>
          </div>

          {/* HeroCard vertically centered on the right */}
          <div className="mt-10 md:mt-0 md:ml-12 flex justify-center md:justify-end">
            <HeroCard />
          </div>
        </div>
      </div>
    </Hero>
  );
}
