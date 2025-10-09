// src/components/HomeFeatureCards.tsx
import Image from "next/image";
import Link from "next/link";

import slide1 from "@/app/(site)/(home)/images/philosophy/slide-1.jpg";
/** ===== Edit your content here (no props) ===== */
const SHOW_HEADER = true;
const SECTION_TITLE = "Built for How You Live";
const SECTION_BLURB =
  "From flexible floor plans to energy-smart features, explore what makes our homes stand out.";

const FEATURES = [
  {
    id: "fl-plans",
    imageSrc: slide1,
    imageAlt: "Open concept kitchen and living room with large windows",
    heading: "Flexible Floor Plans",
    description:
      "Choose layouts that fit your lifestyle—add a study, expand the kitchen, or create a guest suite.",
    ctaLabel: "Explore plans",
    href: "/floor-plans",
  },
  {
    id: "nc-communities",
    imageSrc: "/images/home/community.jpg",
    imageAlt: "Tree-lined street with family-friendly sidewalks",
    heading: "Thoughtful Communities",
    description:
      "Walkable streets, nearby parks, and quick access to what matters—designed with daily life in mind.",
    ctaLabel: "See locations",
    href: "/communities",
  },
  {
    id: "features",
    imageSrc: "/images/home/features.jpg",
    imageAlt: "Bright bedroom with natural light and soft finishes",
    heading: "Comfort, Inside & Out",
    description:
      "Light-filled rooms, durable finishes, and energy-smart options that feel good now and later.",
    ctaLabel: "View features",
    href: "/features",
  },
] as const;
/** ============================================= */

export default function HomeFeatureCards() {
  if (!FEATURES.length) return null;

  return (
    <section className="section-pad bg-accent">
      {SHOW_HEADER && (SECTION_TITLE || SECTION_BLURB) ? (
        <header className="mx-auto max-w-2xl text-center text-accent-foreground mb-10 sm:mb-12">
          {SECTION_TITLE ? <h2 className="h2">{SECTION_TITLE}</h2> : null}
          {SECTION_BLURB ? <p className="mt-3 muted">{SECTION_BLURB}</p> : null}
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
