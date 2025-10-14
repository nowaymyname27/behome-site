// file: src/app/(site)/(home)/components/HomeHero.tsx
"use client";

import Hero from "../../../../components/site-wide/Hero";
import HeroCard from "./HeroCard";
import { useLocale } from "../../../../i18n/locale-context";
import { tHome } from "../i18n";

export default function HomeHero() {
  const { locale } = useLocale();
  const i = tHome(locale).hero;

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
          aria-label={i.videoAria}
        />
        <Hero.Scrim />
      </Hero.Background>

      <Hero.Container>
        <Hero.Grid>
          {/* Copy */}
          <Hero.Copy>
            <h1 className="h1 text-white">{i.title}</h1>

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
