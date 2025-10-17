// file: src/app/(site)/florida/components/FloridaMapSection.tsx
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

// i18n
import type { Locale } from "../../../../i18n/locale-context";
import { tFlorida } from "../i18n";

type ProductId = "single-family" | "btr" | "cluster";

const PRODUCTS_META: Array<{
  id: ProductId;
  href: string;
  variant: Variant;
  tagKey: string;
}> = [
  {
    id: "btr",
    href: "/products/build-to-rent",
    variant: "info",
    tagKey: "btr",
  },
  {
    id: "single-family",
    href: "/products/single-family",
    variant: "danger",
    tagKey: "single-family",
  },
  {
    id: "cluster",
    href: "/products/clusters",
    variant: "warning",
    tagKey: "cluster",
  },
];

export default function FloridaMapSection({
  locale,
  points,
  center,
  zoom = 6.5,
  theme = "light",
  className = "",
}: {
  locale: Locale;
  points: Point[];
  center: [number, number];
  zoom?: number;
  theme?: ThemeKey;
  className?: string;
}) {
  const i = tFlorida(locale).map;

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

    const byId = new Map(PRODUCTS_META.map((p) => [p.id, p]));
    const activeTagKeys = new Set(
      Array.from(active).map((id) => byId.get(id)!.tagKey)
    );

    return {
      filter: (p) => !!p.tags?.some((t) => activeTagKeys.has(t)),
      variantFor: (p) => {
        if (!p.tags) return undefined;
        for (const prod of PRODUCTS_META) {
          if (active.has(prod.id) && p.tags.includes(prod.tagKey)) {
            return prod.variant;
          }
        }
        return undefined;
      },
    };
  }, [active]);

  const PRODUCTS = React.useMemo(
    () =>
      PRODUCTS_META.map((meta) => {
        const copy = i.products[meta.id];
        return { ...meta, title: copy.title, description: copy.description };
      }),
    [i.products]
  );

  return (
    <section className={["w-full", className].join(" ")}>
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_auto] gap-4 md:gap-6 items-stretch">
        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-border bg-background shadow">
          <SiteMap
            config={config}
            mode={mode}
            clickToUse
            className="h-[70vh] min-h-[420px] md:h-[680px] xl:h-full"
          />
        </div>

        {/* Cards */}
        <div className="justify-self-stretch xl:justify-self-end w-full xl:w-[280px]">
          <div className="h-full flex flex-col">
            <div
              className={[
                "flex",
                "flex-row flex-nowrap overflow-x-auto overflow-y-visible",
                "snap-x snap-mandatory md:snap-none",
                "md:flex-row md:flex-wrap md:overflow-visible md:justify-center",
                "xl:flex-col xl:flex-nowrap xl:justify-start",
                "gap-4 md:gap-5 xl:gap-6",
                "py-2 md:py-3",
              ].join(" ")}
            >
              {PRODUCTS.map((p) => (
                <div
                  key={p.id}
                  className={[
                    "aspect-square flex-none",
                    "w-[280px] sm:w-[300px] md:w-[240px] xl:w-full",
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
                    locale={locale}
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
                {i.clearFilters}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
