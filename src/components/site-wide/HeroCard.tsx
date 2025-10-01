// file: src/components/site-wide/HeroCard.tsx
"use client";

export default function HeroCard() {
  return (
    <aside
      aria-label="Promotion"
      className="card bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 p-6 shadow-lg text-center text-foreground"
    >
      <h3 className="text-xl font-semibold">
        Thoughtfully designed homes across Florida
      </h3>

      <div className="mt-4 flex justify-center gap-3">
        <a href="/florida" className="btn btn-FL">
          Explore Florida
        </a>
        <a href="/partners" className="btn btn-NC">
          Partner With Us
        </a>
      </div>
    </aside>
  );
}
