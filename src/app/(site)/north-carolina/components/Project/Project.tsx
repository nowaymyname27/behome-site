// File: src/components/north-carolina/Project/ProductCard.tsx
"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/locale-context";
import { tNorthCarolina } from "@/app/(site)/north-carolina/i18n";

export default function ProductCard() {
  const { locale } = useLocale();
  const i = tNorthCarolina(locale).project;

  // Tune these as needed
  const MIN_BODY_PX = 180; // reserves space for title + description + CTA
  const MIN_IMAGE_PX = 260; // ensures image never gets too small

  return (
    <article className="h-full w-full rounded-xl border border-border bg-white overflow-hidden shadow-sm flex flex-col">
      {/* Image: dominant, fills remaining space but never steals from body min height */}
      <div
        className="w-full bg-surface flex items-center justify-center"
        style={{
          // Guarantees the image is the largest part
          flexGrow: 1,
          // Prevents it from collapsing too much
          minHeight: MIN_IMAGE_PX,
          // Keeps enough space for the body so the CTA never disappears
          maxHeight: `calc(100% - ${MIN_BODY_PX}px)`,
        }}
      >
        {i.card.image ? (
          <img
            src={i.card.image}
            alt={i.project.name}
            loading="lazy"
            decoding="async"
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-foreground/50">
            {i.project.name}
          </div>
        )}
      </div>

      {/* Body: compact, pinned to bottom, with a guaranteed minimum height */}
      <div
        className="flex-none flex flex-col p-4"
        style={{ minHeight: MIN_BODY_PX }}
      >
        <h3 className="text-lg font-semibold">{i.project.name}</h3>
        <p className="mt-2 text-sm text-foreground/70">{i.card.description}</p>

        <div className="mt-auto pt-4">
          <Link
            href={i.card.href}
            aria-label={i.card.aria.openDetails}
            className="inline-flex w-full items-center justify-center rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
          >
            {i.card.cta}
          </Link>
        </div>
      </div>
    </article>
  );
}
