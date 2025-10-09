// file: src/app/(site)/cluster/components/HouseCardList.tsx
"use client";
import HouseCard from "@/components/site-wide/HouseCard";

export default function HouseCardList() {
  const houses = [
    {
      image: { src: "/images/homes/k1.jpg", alt: "Front elevation" },
      address: "123 Magnolia Ln, Groton, NY 13073",
      price: 334995,
      beds: 3,
      baths: 2,
      cars: 2,
      sqft: 1452,
      href: "/homes/clyde-ii",
      badge: "New",
    },
    // more…
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {houses.map((h, i) => (
        <HouseCard key={i} {...h} />
      ))}
    </div>
  );
}
