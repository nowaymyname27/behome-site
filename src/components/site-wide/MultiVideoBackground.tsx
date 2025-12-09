// file: src/components/site-wide/MultiVideoBackground.tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface MultiVideoBackgroundProps {
  videos: string[];
  ariaLabel?: string;
  shouldShuffle?: boolean;
}

export default function MultiVideoBackground({
  videos: initialVideos,
  ariaLabel = "Background video",
  shouldShuffle = true,
}: MultiVideoBackgroundProps) {
  const [videos, setVideos] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [activeBuffer, setActiveBuffer] = useState(0);
  
  // Create refs for the two video elements
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

  const fadeDuration = 500;

  const shuffle = (arr: string[]) => {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  // Initialize videos on mount
  useEffect(() => {
    if (shouldShuffle) {
      setVideos(shuffle(initialVideos));
    } else {
      setVideos(initialVideos);
    }
  }, [initialVideos, shouldShuffle]);

  const preload = (index: number, buffer: number) => {
    const video = videoRefs[buffer].current;
    if (!video || !videos[index]) return;
    video.src = videos[index];
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

    setIsFading(true);
    nextVid.play().catch(() => {});

    setTimeout(() => {
      setCurrent(nextIndex);
      setActiveBuffer(nextBuffer);
      setIsFading(false);

      const afterNext = (nextIndex + 1) % videos.length;
      preload(afterNext, activeBuffer);
    }, fadeDuration);
  };

  // Listen for the "ended" event
  useEffect(() => {
    const vid = videoRefs[activeBuffer].current;
    if (!vid) return;

    const onEnd = () => playNext();
    vid.addEventListener("ended", onEnd);
    return () => vid.removeEventListener("ended", onEnd);
  }, [activeBuffer, current, videos]);

  // Start playing when videos are loaded
  useEffect(() => {
    if (videos.length > 0) {
      videoRefs[0].current?.play().catch(() => {});
      if (videos.length > 1) preload(1, 1);
    }
  }, [videos]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRefs[0]}
        src={videos[0]}
        muted
        playsInline
        autoPlay
        preload="auto"
        aria-label={ariaLabel}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
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
  );
}