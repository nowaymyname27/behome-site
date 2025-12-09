// file: src/app/(site)/(invest)/components/BtrHero.tsx
"use client";

import Hero from "../../../../components/site-wide/Hero";
import MultiVideoBackground from "../../../../components/site-wide/MultiVideoBackground";

// Define your videos here.
// Note: I included your original video. You can add more to the list.
const btrVideos = [
  "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313517/iliwmjowfritogglhwqe.mp4",
  "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313522/bdoxf0zz72qrvmqjciuv.mp4",
  "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313572/dtovclgj5ekyhzymoxmj.mp4",
  "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313575/jchrmhq4qkmkyx5pdyfp.mp4",
  "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313575/yj7ask9ce3bbynwjd39k.mp4",
  "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313631/hguwgpkv4vablxkxrkpj.mp4"
];

export default function BtrHero() {
  return (
    <Hero
      title="Follow The Smart Money"
      subtitle="Build. Rent. Earn."
      scrim="bg-black/50"
      // Instead of 'background', we use 'backgroundNode'
      backgroundNode={
        <MultiVideoBackground 
          videos={btrVideos} 
          ariaLabel="Build to rent background videos"
        />
      }
    />
  );
}