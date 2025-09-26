// File: src/app/(site)/florida/build-to-rent/components/site-plan/SitePlanMap.tsx
"use client";

import Image from "next/image";

export default function SitePlanMap() {
  return (
    <div className="card overflow-hidden relative min-h-[420px] lg:min-h-[520px] flex items-center justify-center bg-surface">
      <Image
        src="/north-carolina/kallamdale/site-map/sitemap.jpg"
        alt="Overhead site plan of the Kallamdale community"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
