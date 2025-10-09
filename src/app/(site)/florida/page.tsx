// File: /app/florida/page.tsx
"use client";

import Header from "@/components/site-wide/Header";
import Footer from "@/components/site-wide/Footer";
import FloridaHero from "./components/FloridaHero";
import FloridaMapSection from "./components/FloridaMapSection";
import Description from "@/app/(site)/florida/components/Description";
import FloridaBrochure from "./components/FloridaBrochure";
import { useLocale } from "@/i18n/locale-context";
import type { Point } from "@/components/site-wide/map/types";

const FLORIDA_POINTS: Point[] = [
  {
    id: "miami-001",
    name: "Sunset Ridge 12A",
    coords: [-80.1937, 25.7617],
    tags: ["single-family"], // ← ties into the card filters
    variant: "primary", // initial color (overridden when filtered)
    blurb: "3bd/2ba • Miami",
    href: "/listings/miami-001",
  },
  {
    id: "tampa-btr-003",
    name: "Harbor View BTR",
    coords: [-82.4572, 27.9506],
    tags: ["btr"],
    variant: "primary",
    blurb: "Build-to-Rent • Tampa",
    href: "/listings/tampa-btr-003",
  },
  {
    id: "orlando-cluster-02",
    name: "Lake Nona Cluster",
    coords: [-81.3792, 28.5383],
    tags: ["cluster"],
    variant: "primary",
    blurb: "5-home cluster • Orlando",
    href: "/listings/orlando-cluster-02",
  },
  // …more points
];

export default function NorthCarolinaPage() {
  const { locale } = useLocale();

  // Shared height so map and card match
  const sectionHeight = 680;

  return (
    <div className="w-full bg-[--color-background] text-[--color-foreground]">
      <Header />
      <main className="w-full">
        <FloridaHero />
        <Description locale={locale} />
        <div className="w-full p-4 md:p-6 bg-accent">
          <h1 className="h2 mb-6">Florida Portfolio</h1>

          <FloridaMapSection
            points={FLORIDA_POINTS}
            center={[-81.5, 27.9]} // central-ish Florida
            zoom={6.5}
            className="w-full"
          />
        </div>
        <FloridaBrochure />
      </main>
      <Footer />
    </div>
  );
}
