"use client";

import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";
import OldHomeBTRExplained from "./components/OldHomeBTRExplained";
import OldHomeFloridaBrochure from "./components/OldHomeFloridaBrochure";
import OldHomeBrochure from "./components/OldHomeBrochure";
import OldHomeDisplay from "./components/OldHomeDisplay";
import OldHomeFeatureCards from "./components/OldHomeFeatureCards";
import OldHomeHero from "./components/OldHomeHero";
import OldHomePhrase from "./components/OldHomePhrase";

export default function OldHomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <OldHomeHero />
        <OldHomeBTRExplained />
        <OldHomePhrase />
        <OldHomeFeatureCards />
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

        <OldHomeFloridaBrochure />
        <OldHomeDisplay />
        <OldHomeBrochure />
      </main>
      <Footer />
    </div>
  );
}
