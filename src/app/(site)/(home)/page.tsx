// src/app/(site)/(home)/page.tsx
"use client";

import Header from "@/components/site-wide/Header";
import Hero from "@/app/(site)/(home)/components/Hero";
import Phrase from "@/app/(site)/(home)/components/Phrase";
import dynamic from "next/dynamic";
import MapProductsGrid from "./components/MapProduct/MapProductsGrid";
import HomeMap from "./components/MapProduct/HomeMap";
import HomeProductCard from "./components/MapProduct/HomeProductCard";
import Philosophy from "@/app/(site)/(home)/components/Philosophy";
import Footer from "@/components/site-wide/Footer";

const gridHeight = 860;

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Phrase />
        <MapProductsGrid
          heading="Location & Projects"
          height={gridHeight}
          left={<HomeMap height={gridHeight} />}
          rightTop={<HomeProductCard productId="fl-btr" theme="FL" />}
          rightBottom={<HomeProductCard productId="fl-sfh" theme="FL" />}
        />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}
