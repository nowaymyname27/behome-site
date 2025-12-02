// File: src/app/(site)/(home)/components/HomeFeatureCards.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "../../../../i18n/locale-context";
import { tHomeFeatureCards, getHomeFeatureCards } from "../i18n";

export default function HomeFeatureCards() {
  const { locale } = useLocale();
  const i = tHomeFeatureCards(locale);
  const FEATURES = getHomeFeatureCards(locale);

  if (!FEATURES.length) return null;

  return (
    <section className="section-pad bg-accent">
      {/* Header */}
      {i.showHeader && (i.title || i.blurb) && (
        <header className="mx-auto max-w-3xl text-center text-accent-foreground mb-14">
          {i.title && <h2 className="h2">{i.title}</h2>}
          {i.blurb && <p className="mt-3 text-lg opacity-80">{i.blurb}</p>}
        </header>
      )}

      {/* Cards */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.id}
              className="rounded-2xl border border-border/50 bg-white/95 backdrop-blur-sm overflow-hidden
                         shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                         flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full bg-gray-50/50">
                <Image
                  src={f.imageSrc}
                  alt={f.imageAlt}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  // Changed object-cover to object-contain so the full image shows
                  // Added p-4 to prevent it from touching the edges
                  className="object-contain p-4"
                />
              </div>

              {/* Text */}
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {f.heading}
                  </h3>
                  <div className="h-[2px] w-12 bg-accent mt-2 mb-4" />
                  <p className="text-base text-foreground/90 leading-relaxed">
                    {f.description}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href={f.href}
                    className="btn btn-FL w-full sm:w-auto text-sm md:text-base px-6 py-2.5"
                    aria-label={`Learn More: ${f.heading}`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
