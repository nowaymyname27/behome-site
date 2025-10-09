// src/app/(site)/(home)/page.tsx
"use client";

import Header from "@/components/site-wide/Header";
import HomeHero from "./components/HomeHero";
import Phrase from "@/app/(site)/(home)/components/Phrase";
import HomeFeatureCards from "./components/HomeFeatureCards";
import HomeBrochure from "./components/HomeBrochure";
import HomeDisplay from "./components/HomeDisplay";
import Footer from "@/components/site-wide/Footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HomeHero />
        <Phrase />
        <HomeFeatureCards />
        <HomeDisplay />
        <HomeBrochure />
      </main>
      <Footer />
    </div>
  );
}
