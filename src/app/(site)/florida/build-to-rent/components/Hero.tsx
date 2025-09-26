// file: src/app/(site)/florida/build-to-rent/components/Hero.tsx
"use client";

import Image from "next/image";
import PromoCard from "./PromoCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/north-carolina/kallamdale/hero/townhomes.jpg"
          alt="Sunlit living room with large windows"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Scrim */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative section h-full">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8">
          {/* Copy */}
          <div className="max-w-2xl text-white mr-auto text-left">
            <h1 className="h1 text-white">
              Light-first homes in North Carolina & Florida
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Thoughtful layouts, durable materials, and spaces that feel good
              to live in.
            </p>
          </div>

          {/* Promo (desktop) */}
          <div className="hidden lg:block">
            <PromoCard />
          </div>
        </div>

        {/* Promo (mobile/tablet) */}
        <div className="lg:hidden pb-8">
          <PromoCard />
        </div>
      </div>
    </section>
  );
}
