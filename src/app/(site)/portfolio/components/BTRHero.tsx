// File: src/app/(site)/(invest)/components/InvestmentHero.tsx
"use client";

import Hero from "../../../../components/site-wide/Hero";
import InvestmentCard from "./BTRInvestmentCard";
import { useLocale } from "../../../../i18n/locale-context";
import { tInvestmentHero } from "../i18n";

export default function InvestmentHero() {
  const { locale } = useLocale();
  const i = tInvestmentHero(locale);

  return (
    <Hero>
      <Hero.Background>
        <video
          src="/videos/cluster-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Hero.Scrim className="bg-black/50" />
      </Hero.Background>

      <Hero.Container>
        <Hero.Grid>
          <Hero.Copy>
            <h1 className="h1 text-white">{i.title}</h1>
            <p className="mt-4 text-lg text-white/90">{i.subtitle}</p>

            <Hero.PromoMobile>
              <div className="mt-6">
                <InvestmentCard />
              </div>
            </Hero.PromoMobile>
          </Hero.Copy>

          <Hero.PromoDesktop>
            <InvestmentCard />
          </Hero.PromoDesktop>
        </Hero.Grid>
      </Hero.Container>
    </Hero>
  );
}
