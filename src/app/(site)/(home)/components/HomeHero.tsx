"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

  const fadeDuration = prefersReducedMotion ? 0 : 500;

  const shuffle = (arr: string[]) => {
    const result = [...arr];
    for (let k = result.length - 1; k > 0; k--) {
      const j = Math.floor(Math.random() * (k + 1));
      [result[k], result[j]] = [result[j], result[k]];
    }
    return result;
  };

  useEffect(() => {
    setVideos(shuffle(homeHeroVideos));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mq = window.matchMedia("(max-width: 767px)");

    const sync = () => {
      setPrefersReducedMotion(rm.matches);
      setIsMobile(mq.matches);
    };

    sync();

    rm.addEventListener("change", sync);
    mq.addEventListener("change", sync);

    return () => {
      rm.removeEventListener("change", sync);
      mq.removeEventListener("change", sync);
    };
  }, []);

  const preload = (index: number, buffer: number) => {
    const video = videoRefs[buffer].current;
    const src = videos[index];
    if (!video || !src) return;

    if (video.src === src) return;

    video.src = src;
    video.load();
  };

  const playNext = () => {
    if (!videos.length) return;

    const nextIndex = (current + 1) % videos.length;
    const nextBuffer = 1 - activeBuffer;

    const currentVid = videoRefs[activeBuffer].current;
    const nextVid = videoRefs[nextBuffer].current;
    if (!currentVid || !nextVid) return;

    preload(nextIndex, nextBuffer);
    nextVid.currentTime = 0;

    if (fadeDuration === 0) {
      setCurrent(nextIndex);
      setActiveBuffer(nextBuffer);
      setIsFading(false);

      if (!isMobile) {
        const afterNext = (nextIndex + 1) % videos.length;
        preload(afterNext, activeBuffer);
      }

      nextVid.play().catch(() => {});
      return;
    }

    setIsFading(true);
    nextVid.play().catch(() => {});

    window.setTimeout(() => {
      setCurrent(nextIndex);
      setActiveBuffer(nextBuffer);
      setIsFading(false);

      if (!isMobile) {
        const afterNext = (nextIndex + 1) % videos.length;
        preload(afterNext, activeBuffer);
      }
    }, fadeDuration);
  };

  useEffect(() => {
    const vid = videoRefs[activeBuffer].current;
    if (!vid) return;

    const onEnd = () => playNext();
    vid.addEventListener("ended", onEnd);
    return () => vid.removeEventListener("ended", onEnd);
  }, [activeBuffer, current, videos, fadeDuration, isMobile]);

  useEffect(() => {
    if (videos.length > 0) {
      videoRefs[0].current?.play().catch(() => {});
      if (videos.length > 1 && !isMobile) preload(1, 1);
    }
  }, [videos, isMobile]);

  const copy = useMemo(() => {
    return copies[current % copies.length];
  }, [copies, current]);

  const videoBaseClass =
    "absolute inset-0 h-full w-full object-cover transition-opacity motion-reduce:transition-none";

  return (
    <Hero
      title={copy.title}
      subtitle={copy.subtitle}
      scrim="bg-black/20"
      backgroundNode={
        <div className="h-full w-full overflow-hidden bg-black">
          <video
            ref={videoRefs[0]}
            src={videos[0] ?? ""}
            muted
            playsInline
            autoPlay
            preload={isMobile ? "metadata" : "auto"}
            aria-label={i.videoAria}
            disablePictureInPicture
            className={`${videoBaseClass} duration-500 ${
              activeBuffer === 0
                ? isFading
                  ? "opacity-0"
                  : "opacity-100"
                : "opacity-0"
            }`}
          />

          <video
            ref={videoRefs[1]}
            muted
            playsInline
            preload={isMobile ? "metadata" : "auto"}
            aria-hidden="true"
            disablePictureInPicture
            className={`${videoBaseClass} duration-500 ${
              activeBuffer === 1
                ? isFading
                  ? "opacity-0"
                  : "opacity-100"
                : "opacity-0"
            }`}
          />
        </div>
      }
    >
      <HeroCard />
    </Hero>
  );
}
