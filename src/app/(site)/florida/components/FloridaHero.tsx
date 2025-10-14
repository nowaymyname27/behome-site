// file: src/components/florida/FloridaHero.tsx
import Hero from "../../../../components/site-wide/Hero";

export default function FloridaHero() {
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
            <h1 className="h1">Welcome to Sarasota</h1>
            <p className="mt-4 text-lg text-white/90">
              Discover the beauty of Florida living with our thoughtfully
              designed communities and homes.
            </p>

            <Hero.PromoMobile>
              <aside
                aria-label="Promotion"
                className="card bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 p-6 shadow-lg text-center text-foreground"
              >
                <h3 className="text-xl font-semibold">Explore Our Projects</h3>
                <p className="mt-2 muted">
                  From single-family homes to cluster communities, see what
                  we’re building in Sarasota.
                </p>
                <div className="mt-4 flex justify-center gap-3">
                  <a href="/florida/projects" className="btn btn-FL">
                    View Projects
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
              <h3 className="text-xl font-semibold">Explore Our Projects</h3>
              <p className="mt-2 muted">
                From single-family homes to cluster communities, see what we’re
                building in Sarasota.
              </p>
              <div className="mt-4 flex justify-center gap-3">
                <a href="/florida/projects" className="btn btn-FL">
                  View Projects
                </a>
              </div>
            </aside>
          </Hero.PromoDesktop>
        </Hero.Grid>
      </Hero.Container>
    </Hero>
  );
}
