// File: src/app/florida/page.tsx
"use client";

import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";

import FloridaHero from "./components/FloridaHero";
import FloridaMapSection from "./components/FloridaMapSection";
import Description from "./components/Description";
import FloridaBrochure from "./components/FloridaBrochure";

import { useLocale } from "../../../i18n/locale-context";
import { tFlorida } from "./i18n";
import { FLORIDA_POINTS } from "./data/points";

export default function FloridaPage() {
  const { locale } = useLocale();
  const i = tFlorida(locale);
  const points = FLORIDA_POINTS;

  return (
    <div className="w-full bg-[--color-background] text-[--color-foreground]">
      <Header />

      <main className="w-full">
        <FloridaHero />
        <Description locale={locale} />

        <div className="w-full p-4 md:p-6 bg-accent">
          <h1 className="h2 mb-6">{i.heading}</h1>

          <FloridaMapSection
            locale={locale}
            points={points}
            center={[-81.5, 27.9]}
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
