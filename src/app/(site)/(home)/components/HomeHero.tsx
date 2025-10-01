// file: src/app/(site)/(home)/components/HomeHero.tsx
"use client";

import Hero from "@/components/site-wide/Hero";
import HeroCard from "@/components/site-wide/HeroCard";

export default function HomeHero() {
  return (
    <Hero>
      <Hero.Background>
        {/* Background video */}
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Hero.Scrim />
      </Hero.Background>

      <Hero.Container>
        <Hero.Grid>
          {/* Copy */}
          <Hero.Copy>
            <h1 className="h1 text-white">Find your next home</h1>

            {/* Mobile card goes right below text */}
            <Hero.PromoMobile>
              <div className="mt-6">
                <HeroCard />
              </div>
            </Hero.PromoMobile>
          </Hero.Copy>

          {/* Desktop card stays in the right column */}
          <Hero.PromoDesktop>
            <HeroCard />
          </Hero.PromoDesktop>
        </Hero.Grid>
      </Hero.Container>
    </Hero>
  );
}
