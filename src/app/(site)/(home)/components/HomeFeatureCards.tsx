// File: src/components/HomeFeatureCards.tsx
import Image from "next/image";
import Link from "next/link";

import { useLocale } from "../../../../i18n/locale-context";
import { tHome } from "../i18n";
import { getHomeFeatureCards } from "../i18n/feature-cards";

export default function HomeFeatureCards() {
  const { locale } = useLocale();
  const i = tHome(locale).featureCards;
  const FEATURES = getHomeFeatureCards(locale);

  if (!FEATURES.length) return null;

  return (
    <section className="section-pad bg-accent">
      {i.showHeader && (i.title || i.blurb) ? (
        <header className="mx-auto max-w-2xl text-center text-accent-foreground mb-10 sm:mb-12">
          {i.title ? <h2 className="h2">{i.title}</h2> : null}
          {i.blurb ? <p className="mt-3 muted">{i.blurb}</p> : null}
        </header>
      ) : null}

      {/* grid uses full width with padding, no max-w */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.slice(0, 3).map((f) => (
            <article
              key={f.id}
              className="
                rounded-2xl border border-border bg-white overflow-hidden
                shadow-md transition
                hover:-translate-y-1 hover:shadow-xl focus-within:shadow-xl
                hover:ring-1 hover:ring-accent/20
              "
            >
              {/* Image */}
              <div className="relative aspect-[16/9]">
                <Image
                  src={f.imageSrc}
                  alt={f.imageAlt}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight line-clamp-2">
                  {f.heading}
                </h3>
                <p className="mt-2 muted line-clamp-3">{f.description}</p>

                <div className="mt-5">
                  <Link
                    href={f.href}
                    className="btn btn-FL w-full sm:w-auto"
                    aria-label={`${f.ctaLabel}: ${f.heading}`}
                  >
                    {f.ctaLabel}
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
