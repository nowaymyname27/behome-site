// File: src/app/(site)/(home)/components/HomeHero.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "../../../../components/site-wide/Hero";
import HeroCard from "./HeroCard";
import { useLocale } from "../../../../i18n/locale-context";
import { tHomeHero } from "../i18n";

export default function HomeHero() {
  const { locale } = useLocale();
  const i = tHomeHero(locale);

  const videos = [
    "/videos/home_hero/Beyond_ocean_header.mp4",
    "/videos/home_hero/Couple_dog_home.mp4",
    "/videos/home_hero/Family_1.mp4",
    "/videos/home_hero/Family_Golf.mp4",
    "/videos/home_hero/Friend_meal_1.mp4",
    "/videos/home_hero/Friend_meal_2.mp4",
    "/videos/home_hero/Girl_1.mp4",
    "/videos/home_hero/Girl_2.mp4",
    "/videos/home_hero/Girl_3.mp4",
    "/videos/home_hero/Girl_4.mp4",
    "/videos/home_hero/Kitchen_1.mp4",
    "/videos/home_hero/Kitchen_2.mp4",
    "/videos/home_hero/Mother_1.mp4",
    "/videos/home_hero/Ocean_1.mp4",
    "/videos/home_hero/Ocean_2.mp4",
    "/videos/home_hero/Ocean_3.mp4",
    "/videos/home_hero/Picnic.mp4",
    "/videos/home_hero/Pool_1.mp4",
    "/videos/home_hero/Pool_2.mp4",
    "/videos/home_hero/Retirees_1.mp4",
  ];

  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [activeBuffer, setActiveBuffer] = useState(0); // 0 or 1
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

  const fadeDuration = 1000; // ms

  const playNext = () => {
    const nextIndex = (current + 1) % videos.length;
    const nextBuffer = 1 - activeBuffer; // swap which <video> is active

    const currentVideo = videoRefs[activeBuffer].current;
    const nextVideo = videoRefs[nextBuffer].current;

    if (!currentVideo || !nextVideo) return;

    // Load and play next video in hidden buffer
    nextVideo.src = videos[nextIndex];
    nextVideo.load();
    nextVideo.play().catch(() => {});

    // Start fade
    setIsFading(true);

    // After fade, swap roles
    setTimeout(() => {
      setCurrent(nextIndex);
      setActiveBuffer(nextBuffer);
      setIsFading(false);
    }, fadeDuration);
  };

  // When the active video ends, trigger transition
  useEffect(() => {
    const video = videoRefs[activeBuffer].current;
    if (!video) return;

    const handleEnded = () => playNext();
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [activeBuffer, current]);

  // Start first video on mount
  useEffect(() => {
    videoRefs[0].current?.play().catch(() => {});
  }, []);

  return (
    <Hero>
      <Hero.Background>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Video buffer 1 */}
          <video
            ref={videoRefs[0]}
            src={videos[0]}
            muted
            playsInline
            autoPlay
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              activeBuffer === 0
                ? isFading
                  ? "opacity-0"
                  : "opacity-100"
                : isFading
                  ? "opacity-100"
                  : "opacity-0"
            }`}
            aria-label={i.videoAria}
          />

          {/* Video buffer 2 */}
          <video
            ref={videoRefs[1]}
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              activeBuffer === 1
                ? isFading
                  ? "opacity-0"
                  : "opacity-100"
                : isFading
                  ? "opacity-100"
                  : "opacity-0"
            }`}
          />
        </div>

        <Hero.Scrim />
      </Hero.Background>

      <Hero.Container>
        <Hero.Grid>
          <Hero.Copy>
            <h1 className="h1 text-white">{i.title}</h1>
            <p className="mt-4 text-lg text-white/90">{i.subtitle}</p>

            <Hero.PromoMobile>
              <div className="mt-6">
                <HeroCard />
              </div>
            </Hero.PromoMobile>
          </Hero.Copy>

          <Hero.PromoDesktop>
            <HeroCard />
          </Hero.PromoDesktop>
        </Hero.Grid>
      </Hero.Container>
    </Hero>
  );
}
