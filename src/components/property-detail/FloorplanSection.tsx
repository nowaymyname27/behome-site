"use client";

import Image, { StaticImageData } from "next/image";

type Plan = { src: StaticImageData | string; alt?: string };

function srcToUrl(src?: StaticImageData | string): string | undefined {
  if (!src) return undefined;
  return typeof src === "string" ? src : src.src;
}

export default function FloorplanSection({
  plan,
  name,
  sqft,
  beds,
  baths,
  cars,
  downloadHref,
  downloadLabel = "Download floorplan",
  notes,
}: {
  plan?: Plan | null;
  name: string;
  sqft: number;
  beds: number;
  baths: number;
  cars?: number;
  downloadHref?: string;
  downloadLabel?: string;
  notes?: string | React.ReactNode;
}) {
  const planUrl = srcToUrl(plan?.src);
  const href = downloadHref ?? planUrl;

  return (
    <section
      id="floorplan"
      className="w-full bg-background"
      aria-labelledby="floorplan-heading"
    >
      <div className="w-full grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
        {/* Left: larger floorplan image */}
        <div className="relative w-full border-t border-b border-border bg-muted">
          <div className="relative w-full" style={{ aspectRatio: "5 / 3" }}>
            {planUrl ? (
              <Image
                src={plan!.src}
                alt={plan?.alt ?? `${name} floorplan`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center text-sm text-muted-foreground">
                Floorplan coming soon
              </div>
            )}
          </div>
        </div>

        {/* Right: info panel */}
        <div className="px-6 sm:px-8 lg:px-12 py-10 space-y-4">
          <h2 id="floorplan-heading" className="text-2xl font-semibold">
            Floorplan — {name}
          </h2>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <div>
              <dt className="text-muted-foreground">Square Footage</dt>
              <dd className="font-medium">{sqft.toLocaleString()} sq ft</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Bedrooms</dt>
              <dd className="font-medium">{beds}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Bathrooms</dt>
              <dd className="font-medium">{baths}</dd>
            </div>
            {typeof cars === "number" && (
              <div>
                <dt className="text-muted-foreground">Garage</dt>
                <dd className="font-medium">{cars}-car</dd>
              </div>
            )}
          </dl>

          {notes && (
            <div className="text-sm text-foreground/80 leading-relaxed">
              {notes}
            </div>
          )}

          <div className="pt-2">
            <a
              href={href}
              {...(href ? { download: true } : {})}
              className={[
                "inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium",
                href
                  ? "bg-background hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent"
                  : "bg-muted text-muted-foreground cursor-not-allowed",
              ].join(" ")}
              aria-label={downloadLabel}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M12 3v10m0 0l-4-4m4 4l4-4M5 21h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {downloadLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
