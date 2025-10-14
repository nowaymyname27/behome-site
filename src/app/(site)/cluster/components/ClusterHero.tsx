// file: src/app/(site)/(invest)/components/InvestmentHero.tsx
"use client";

import Hero from "../../../../components/site-wide/Hero";
import InvestmentCard from "../../../../components/site-wide/InvestmentCard";

export default function InvestmentHero() {
  return (
    <Hero>
      {/* background (could be image/video later) */}
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
            <h1 className="h1 text-white">Invest in Our Cluster Homes</h1>
            <p className="mt-4 text-lg text-white/90">
              Diversified exposure to new-build homes with professional
              operations and steady income targets.
            </p>

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
