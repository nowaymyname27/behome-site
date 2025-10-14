// src/app/(site)/florida/components/FloridaMapSection.tsx
"use client";

import * as React from "react";
import SiteMap from "../../../../components/site-wide/SiteMap";
import type {
  Point,
  Config,
  ThemeKey,
  Variant,
} from "../../../../components/site-wide/map/types";
import { MARKER_VARIANTS } from "../../../../components/site-wide/map/markerButton";
import type { MarkerMode } from "../../../../components/site-wide/map/useMarkersController";
import MapCard from "./MapCard";

type ProductId = "single-family" | "btr" | "cluster";

const PRODUCTS: Array<{
  id: ProductId;
  title: string;
  description: string;
  href: string;
  variant: Variant;
  tagKey: string;
}> = [
  {
    id: "btr",
    title: "Build-to-Rent",
    description:
      "We build homes specifically for investors to rent—optimized for durability, yield, and low vacancy.",
    href: "/products/build-to-rent",
    variant: "info",
    tagKey: "btr",
  },
  {
    id: "single-family",
    title: "Single-Family Homes",
    description:
      "Own your home outright. Classic single-family residences in great neighborhoods.",
    href: "/products/single-family",
    variant: "danger",
    tagKey: "single-family",
  },
  {
    id: "cluster",
    title: "Clusters",
    description:
      "A set of single-family homes delivered together—operate as a micro-portfolio.",
    href: "/products/clusters",
    variant: "warning",
    tagKey: "cluster",
  },
];

export default function FloridaMapSection({
  points,
  center,
  zoom = 6.5,
  theme = "light",
  className = "",
}: {
  points: Point[];
  center: [number, number];
  zoom?: number;
  theme?: ThemeKey;
  className?: string;
}) {
  const [active, setActive] = React.useState<Set<ProductId>>(new Set());

  const toggle = (id: ProductId, next: boolean) => {
    setActive((prev) => {
      const s = new Set(prev);
      next ? s.add(id) : s.delete(id);
      return s;
    });
  };

  const config: Config = React.useMemo(
    () => ({ theme, center, zoom, points }),
    [theme, center, zoom, points]
  );

  const mode: MarkerMode<Point> | undefined = React.useMemo(() => {
    if (active.size === 0) return undefined;

    const byId = new Map(PRODUCTS.map((p) => [p.id, p]));
    const activeTagKeys = new Set(
      Array.from(active).map((id) => byId.get(id)!.tagKey)
    );

    return {
      filter: (p) => !!p.tags?.some((t) => activeTagKeys.has(t)),
      variantFor: (p) => {
        if (!p.tags) return undefined;
        for (const prod of PRODUCTS) {
          if (active.has(prod.id) && p.tags.includes(prod.tagKey)) {
            return prod.variant;
          }
        }
        return undefined;
      },
    };
  }, [active]);

  return (
    <section className={["w-full", className].join(" ")}>
      {/* xl: map + side rail; <xl: stacked. */}
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_auto] gap-4 md:gap-6 items-stretch">
        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-border bg-background shadow">
          <SiteMap
            config={config}
            mode={mode}
            clickToUse
            // Give mobile a tall, resilient height; md keeps the previous fixed value; xl fills its column
            className="h-[80vh] min-h-[420px] md:h-[680px] xl:h-full"
          />
        </div>

        {/* Cards: mobile = horizontal scroll row; md = centered row with wrap; xl = vertical rail */}
        <div className="justify-self-stretch xl:justify-self-end w-full xl:w-[280px]">
          <div className="h-full flex flex-col">
            <div
              className={[
                // Layout modes by breakpoint
                "flex",
                // base/mobile: horizontal scroll row
                "flex-row flex-nowrap overflow-x-auto overflow-y-visible",
                // enable snap on mobile, disable at md+
                "snap-x snap-mandatory md:snap-none",
                // md+: regular flow, show rows centered
                "md:flex-row md:flex-wrap md:overflow-visible md:justify-center",
                // xl: back to vertical rail
                "xl:flex-col xl:flex-nowrap xl:justify-start",
                // spacing
                "gap-4 md:gap-5 xl:gap-6",
                "py-2 md:py-3",
              ].join(" ")}
            >
              {PRODUCTS.map((p) => (
                <div
                  key={p.id}
                  className={[
                    // Bigger cards on mobile; keep square shape
                    "aspect-square flex-none",
                    "w-[280px] sm:w-[300px] md:w-[240px] xl:w-full",
                    // Snap for nicer mobile scroll
                    "snap-center md:snap-none",
                  ].join(" ")}
                >
                  <MapCard
                    id={p.id}
                    title={p.title}
                    description={p.description}
                    href={p.href}
                    active={active.has(p.id)}
                    onToggle={(id, next) => toggle(id as ProductId, next)}
                    swatchClass={MARKER_VARIANTS[p.variant]}
                    className="h-full flex flex-col"
                  />
                </div>
              ))}
            </div>

            {active.size > 0 && (
              <button
                type="button"
                onClick={() => setActive(new Set())}
                className="mt-3 md:mt-4 text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
