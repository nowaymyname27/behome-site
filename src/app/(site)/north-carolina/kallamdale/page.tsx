// src/app/(site)/north-carolina/kallamdale/page.tsx
"use client";

import Header from "@/components/site-wide/Header";
import Hero from "@/app/(site)/north-carolina/kallamdale/components/Hero";
import SitePlanSection from "./components/site-plan/SitePlanSection";
import LocationMap from "./components/LocationMap";
import WhyUs from "./components/WhyUs";
import Footer from "@/components/site-wide/Footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SitePlanSection />
        <LocationMap />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}
