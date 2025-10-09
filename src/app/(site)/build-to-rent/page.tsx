"use client";

import Header from "@/components/site-wide/Header";
import Footer from "@/components/site-wide/Footer";
import InvestmentHero from "./components/SingleFamilyHero";
import HouseCard from "@/components/site-wide/HouseCard";
import MapWithCards from "./components/MapWithCards";

import SF1 from "./images/SF1.jpg";
import SF2 from "./images/SF2.jpg";
import SF3 from "./images/SF3.jpg";

export default function SingleFamilyPage() {
  const houses = [
    {
      image: { src: SF1.src, alt: "Exterior of The Oakridge" },
      address: "The Oakridge – 220 Lakeview Dr.",
      price: 459995,
      beds: 4,
      baths: 3,
      cars: 2,
      sqft: 2050,
      href: "/build-to-rent/oakridge",
      badge: "Move-in Ready",
    },
    {
      image: { src: SF2.src, alt: "Exterior of The Willow" },
      address: "The Willow – 315 Meadow Ln.",
      price: 499995,
      beds: 5,
      baths: 3,
      cars: 2,
      sqft: 2250,
      href: "/homes/willow",
    },
    {
      image: { src: SF3.src, alt: "Exterior of The Cypress" },
      address: "The Cypress – 412 Evergreen Ct.",
      price: 534995,
      beds: 5,
      baths: 4,
      cars: 3,
      sqft: 2475,
      href: "/homes/cypress",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <InvestmentHero />

        <section className="w-full px-6 sm:px-12 lg:px-20 py-10">
          <h1 className="h2 mb-6">Single-Family Homes</h1>

          {/* 4 across on desktop */}
          <div className="grid gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {houses.map((house, i) => (
              <HouseCard key={i} {...house} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
