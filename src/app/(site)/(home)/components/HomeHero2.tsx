// File: src/app/(site)/(home)/components/HomeHero.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "../../../../components/site-wide/Hero";

export default function HomeHero() {
  const videos = [
    "/videos/home_hero_alt/beach_alt.mp4",
    "/videos/home_hero_alt/child_alt.mp4",
    "/videos/home_hero_alt/coffee_alt.mp4",
    "/videos/home_hero_alt/dancing_alt.mp4",
    "/videos/home_hero_alt/dinner_alt.mp4",
    "/videos/home_hero_alt/family_alt.mp4",
    "/videos/home_hero_alt/golf_alt.mp4",
    "/videos/home_hero_alt/home_alt.mp4",
    "/videos/home_hero_alt/meal_alt.mp4",
    "/videos/home_hero_alt/meal_alt_2.mp4",
    "/videos/home_hero_alt/mother_alt.mp4",
    "/videos/home_hero_alt/mother_alt_2.mp4",
    "/videos/home_hero_alt/ocean_alt.mp4",
    "/videos/home_hero_alt/ocean_alt_2.mp4",
    "/videos/home_hero_alt/ocean_alt_3.mp4",
    "/videos/home_hero_alt/ocean_alt_4.mp4",
  ];

  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [activeBuffer, setActiveBuffer] = useState(0);
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

  const fadeDuration = 1000; // ms

  const playNext = () => {
    const nextIndex = (current + 1) % videos.length;
    const nextBuffer = 1 - activeBuffer;
    const currentVideo = videoRefs[activeBuffer].current;
    const nextVideo = videoRefs[nextBuffer].current;
    if (!currentVideo || !nextVideo) return;

    nextVideo.src = videos[nextIndex];
    nextVideo.load();
    nextVideo.play().catch(() => {});
    setIsFading(true);

    setTimeout(() => {
      setCurrent(nextIndex);
      setActiveBuffer(nextBuffer);
      setIsFading(false);
    }, fadeDuration);
  };

  useEffect(() => {
    const video = videoRefs[activeBuffer].current;
    if (!video) return;
    const handleEnded = () => playNext();
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [activeBuffer, current]);

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
    </Hero>
  );
}
