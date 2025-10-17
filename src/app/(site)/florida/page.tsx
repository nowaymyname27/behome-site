// File: src/app/florida/page.tsx
"use client";

import { useEffect, useState } from "react";

import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";

import FloridaHero from "./components/FloridaHero";
import FloridaMapSection from "./components/FloridaMapSection";
import Description from "./components/Description";
import FloridaBrochure from "./components/FloridaBrochure";

import { useLocale } from "../../../i18n/locale-context";
import { tFlorida } from "./i18n";

import { sanityClient } from "../../../sanity/lib/client";
import { mapPointsByRegionQuery } from "../../../sanity/lib/queries";
import type { Point } from "../../../components/site-wide/map/types";

export default function FloridaPage() {
  const { locale } = useLocale();
  const i = tFlorida(locale);

  const [points, setPoints] = useState<Point[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const data = await sanityClient.fetch(mapPointsByRegionQuery, {
          region: "florida",
        });

        // Map Sanity docs -> Point[]
        const mapped: Point[] = (data || []).map((d: any) => ({
          id: d._id,
          name: d.title,
          coords: [d.lng, d.lat], // ensure [lng, lat]
          blurb: d.blurb ?? undefined,
          href: d.href ?? undefined,
          variant: "primary",
          tags: d.productType ? [d.productType] : [],
        }));

        console.log("🗺️ map points from Sanity:", data, "→ mapped:", mapped);

        if (mounted) setPoints(mapped);
      } catch (err) {
        console.error("Failed to load map points:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="w-full bg-[--color-background] text-[--color-foreground]">
      <Header />

      <main className="w-full">
        <FloridaHero />
        <Description locale={locale} />

        <div className="w-full p-4 md:p-6 bg-accent">
          <h1 className="h2 mb-6">{i.heading}</h1>

          {loading && (
            <div className="h-[70vh] min-h-[420px] md:h-[680px] xl:h-full rounded-2xl border border-border bg-background shadow flex items-center justify-center text-sm text-muted-foreground">
              Loading map…
            </div>
          )}

          {!loading && (
            <FloridaMapSection
              locale={locale}
              points={points}
              center={[-82.5307, 27.3364]}
              zoom={11.5}
              className="w-full"
            />
          )}
        </div>

        <FloridaBrochure />
      </main>

      <Footer />
    </div>
  );
}
