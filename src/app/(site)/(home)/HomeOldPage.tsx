"use client";

import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";
import BTRExplained from "./components/BTRExplained";
import FloridaBrochure from "./components/FloridaBrochure";
import HomeBrochure from "./components/HomeBrochure";
import HomeDisplay from "./components/HomeDisplay";
import HomeFeatureCards from "./components/HomeFeatureCards";
import HomeHero from "./components/HomeHero";
import Phrase from "./components/Phrase";

export default function HomeOldPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HomeHero />
        <BTRExplained />
        <Phrase />
        <HomeFeatureCards />
        {/*
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
        </div> */}

        <FloridaBrochure />
        <HomeDisplay />
        <HomeBrochure />
      </main>
      <Footer />
    </div>
  );
}
