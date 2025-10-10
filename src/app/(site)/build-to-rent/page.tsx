// app/(site)/build-to-rent/page.tsx
"use client";

import { useEffect, useState } from "react";
import Header from "@/components/site-wide/Header";
import Footer from "@/components/site-wide/Footer";
import InvestmentHero from "./components/SingleFamilyHero";
import HouseCard, { HouseCardProps } from "@/components/site-wide/HouseCard";
import { client } from "@/sanity/lib/client";
import { housesByTypeQuery } from "@/sanity/lib/queries";

export default function BuildToRentPage() {
  const [houses, setHouses] = useState<HouseCardProps[]>([]);

  useEffect(() => {
    client.fetch(housesByTypeQuery, { type: "btr" }).then((data) => {
      const mapped = data.map((h: any) => ({
        image: h.image,
        address: h.address,
        price: h.price,
        beds: h.beds,
        baths: h.baths,
        cars: h.cars,
        sqft: h.sqft,
        href: `/build-to-rent/${h.slug}`,
        badge: h.badgeKey ? h.badgeKey.replace("_", " ") : undefined,
      }));
      setHouses(mapped);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <InvestmentHero />

        <section className="w-full px-6 sm:px-12 lg:px-20 py-10">
          <h1 className="h2 mb-6">Build-to-Rent Homes</h1>

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
