// src/app/(site)/(home)/page.tsx
"use client";

import Header from "@/components/site-wide/Header";
import Hero from "@/app/(site)/(home)/components/Hero";
import Phrase from "@/app/(site)/(home)/components/Phrase";
import dynamic from "next/dynamic";
import ProductSection from "@/app/(site)/(home)/components/ProductSection";
import Philosophy from "@/app/(site)/(home)/components/Philosophy";
import Footer from "@/components/site-wide/Footer";

const MapSection = dynamic(
  () => import("@/app/(site)/(home)/components/MapSection"),
  {
    ssr: false,
  }
);

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Phrase />
        <MapSection />
        <ProductSection />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}
