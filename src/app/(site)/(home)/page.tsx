// src/app/(site)/(home)/page.tsx
"use client";
import { useEffect, useState } from "react";

import Header from "../../../components/site-wide/Header";
import HomeHero from "./components/HomeHero";
import HomeHero2 from "./components/HomeHero2";
import Phrase from "./components/Phrase";
import HomeFeatureCards from "./components/HomeFeatureCards";
import HomeBrochure from "./components/HomeBrochure";
import HomeDisplay from "./components/HomeDisplay";
import Footer from "../../../components/site-wide/Footer";
import FloridaBrochure from "./components/FloridaBrochure";
import FloridaMapSection from "./components/FloridaMapSection";

import { useLocale } from "../../../i18n/locale-context";
import { tFlorida } from "./i18n";

import { sanityClient } from "../../../sanity/lib/client";
import { allMapPointsQuery } from "../../../sanity/lib/queries";
import type { Point } from "../../../components/site-wide/map/types";

// Type the Sanity mapPoint document
type MapPointDoc = {
  _id: string;
  title: string;
  address?: string;
  blurb?: string;
  href?: string;
  productType?: "single-family" | "btr" | "cluster";
  lng: number;
  lat: number;
};

export default function Page() {
  const { locale } = useLocale();
  const i = tFlorida(locale);

  const [points, setPoints] = useState<Point[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const data = await sanityClient.fetch<MapPointDoc[]>(allMapPointsQuery);

        // Map Sanity docs -> Point[]
        const mapped: Point[] = (data || []).map((d) => ({
          id: d._id,
          name: d.title,
          coords: [d.lng, d.lat], // [lng, lat]
          blurb: d.blurb,
          href: d.href,
          variant: "primary",
          // derive tags from productType so existing filter logic keeps working
          tags: d.productType ? [d.productType] : [],
        }));

        // console.log("🗺️ map points from Sanity:", data, "→ mapped:", mapped);

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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HomeHero />
        <Phrase />
        <HomeFeatureCards />
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
              center={[-82.5307, 27.3364]} // Sarasota
              zoom={11.5}
              className="w-full"
            />
          )}
        </div>

        <FloridaBrochure />
        <HomeDisplay />
        <HomeBrochure />
      </main>
      <Footer />
    </div>
  );
}
