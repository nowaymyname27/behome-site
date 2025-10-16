// File: src/app/(site)/(home)/components/HomeHero.tsx
"use client";

import Hero from "../../../../components/site-wide/Hero";
import HeroCard from "./HeroCard";
import { useLocale } from "../../../../i18n/locale-context";
import { tHomeHero } from "../i18n"; // ✅ modular helper

export default function HomeHero() {
  const { locale } = useLocale();
  const i = tHomeHero(locale); // ✅ directly localized hero copy

  return (
    <Hero>
      <Hero.Background>
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-label={i.videoAria}
        />
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
