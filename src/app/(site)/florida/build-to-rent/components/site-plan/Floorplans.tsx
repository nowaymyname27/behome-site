// File: src/app/(site)/florida/build-to-rent/components/site-plan/Floorplans.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { floorplans } from "@/app/(site)/florida/build-to-rent/data/floorplans";

export default function Floorplans() {
  return (
    <div className="flex flex-col gap-6">
      {floorplans.map((fp) => (
        <div key={fp.slug} className="card-surface p-6 flex flex-col">
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
            <Link
              href={`/north-carolina/kallamdale/${fp.slug}`}
              className="btn btn-primary flex-1 sm:flex-none justify-center"
            >
              See details
            </Link>
            <Link
              href={`/north-carolina/kallamdale/${fp.slug}#floorplan`}
              className="btn btn-secondary flex-1 sm:flex-none justify-center"
            >
              Floorplan
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
