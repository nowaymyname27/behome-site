// File: src/app/(site)/north-carolina/kallamdale/components/site-plan/Floorplans.tsx
"use client";

import Image from "next/image";

type Floorplan = {
  name: string;
  image: string;
  sqFt: number;
  beds: number;
  baths: number;
  price: string;
};

const floorplans: Floorplan[] = [
  {
    name: "Quarter Unit",
    image: "/north-carolina/kallamdale/corner-unit/k6.png",
    sqFt: 1850,
    beds: 3,
    baths: 2.5,
    price: "$325,000",
  },
  {
    name: "Center Unit",
    image: "/north-carolina/kallamdale/middle-unit/k5.png",
    sqFt: 1720,
    beds: 3,
    baths: 2.5,
    price: "$299,000",
  },
];

export default function Floorplans() {
  return (
    <div className="flex flex-col gap-6">
      {floorplans.map((fp) => (
        <div key={fp.name} className="card-surface p-6 flex flex-col">
          {/* Image */}
          <div className="relative h-44 w-full rounded-lg overflow-hidden border border-border">
            <Image
              src={fp.image}
              alt={`${fp.name} blueprint`}
              fill
              className="object-contain bg-surface"
            />
          </div>

          {/* Info */}
          <h3 className="mt-4 text-lg font-semibold">{fp.name}</h3>
          <ul className="mt-2 text-sm space-y-1">
            <li>
              <span className="font-medium">{fp.sqFt.toLocaleString()}</span> sq
              ft
            </li>
            <li>
              {fp.beds} Beds • {fp.baths} Baths
            </li>
            <li className="font-semibold">{fp.price}</li>
          </ul>

          {/* Actions */}
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="#"
              className="btn btn-primary flex-1 sm:flex-none justify-center"
            >
              See details
            </a>
            <a
              href="#"
              className="btn btn-secondary flex-1 sm:flex-none justify-center"
            >
              Floorplan
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
