// file: src/components/florida/FloridaHero.tsx
"use client";

import Hero from "../../../../components/site-wide/Hero";
import { useLocale } from "../../../../i18n/locale-context";
import { tFlorida } from "../i18n";

export default function FloridaHero() {
  const { locale } = useLocale();
  const i = tFlorida(locale);

  return (
    <Hero>
      {/* background (could be image/video later) */}
      <Hero.Background>
        <img
          src="/images/florida/sarasota-hero.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <Hero.Scrim className="bg-black/50" />
      </Hero.Background>

      <Hero.Container>
        <Hero.Grid>
          <Hero.Copy>
            <h1 className="h1">{i.hero.title}</h1>
            <p className="mt-4 text-lg text-white/90">{i.hero.subtitle}</p>

            <Hero.PromoMobile>
              <aside
                aria-label="Promotion"
                className="card bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 p-6 shadow-lg text-center text-foreground"
              >
                <h3 className="text-xl font-semibold">{i.hero.promoTitle}</h3>
                <p className="mt-2 muted">{i.hero.promoText}</p>
                <div className="mt-4 flex justify-center gap-3">
                  <a href="/florida/projects" className="btn btn-FL">
                    {i.hero.promoCta}
                  </a>
                </div>
              </aside>
            </Hero.PromoMobile>
          </Hero.Copy>

          <Hero.PromoDesktop>
            <aside
              aria-label="Promotion"
              className="card bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 p-6 shadow-lg text-center text-foreground"
            >
              <h3 className="text-xl font-semibold">{i.hero.promoTitle}</h3>
              <p className="mt-2 muted">{i.hero.promoText}</p>
              <div className="mt-4 flex justify-center gap-3">
                <a href="/florida/projects" className="btn btn-FL">
                  {i.hero.promoCta}
                </a>
              </div>
            </aside>
          </Hero.PromoDesktop>
        </Hero.Grid>
      </Hero.Container>
    </Hero>
  );
}
