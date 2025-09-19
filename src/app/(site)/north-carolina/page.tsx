// File: /app/north-carolina/page.tsx
"use client";

import Header from "@/components/site-wide/Header";
import Footer from "@/components/site-wide/Footer";
import Hero from "@/app/(site)/north-carolina/components/Hero";
import Description from "@/app/(site)/north-carolina/components/Description";
import ProjectGrid from "@/app/(site)/north-carolina/components/Project/ProjectGrid";
import ProjectMap from "@/app/(site)/north-carolina/components/Project/ProjectMap";
import ProductCard from "@/app/(site)/north-carolina/components/Project/Project";
import Brochure from "@/app/(site)/north-carolina/components/Brochure";
import { useLocale } from "@/i18n/locale-context";

export default function NorthCarolinaPage() {
  const { locale } = useLocale();

  // Shared height so map and card match
  const sectionHeight = 680;

  return (
    <div className="w-full bg-[--color-background] text-[--color-foreground]">
      <Header />
      <main className="w-full">
        <Hero locale={locale} />
        <Description locale={locale} />

        <ProjectGrid
          height={sectionHeight}
          left={
            // ProjectMap now defaults to the Kallamdale coords & marker via i18n
            <ProjectMap height={sectionHeight} zoom={12} />
          }
          right={
            <div className="h-full w-full">
              {/* ProductCard is singular and fully i18n-driven */}
              <ProductCard />
            </div>
          }
        />

        <Brochure />
      </main>
      <Footer />
    </div>
  );
}
