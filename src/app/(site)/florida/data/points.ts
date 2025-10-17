// File: src/app/florida/data/points.ts
import type { Point } from "../../../../components/site-wide/map/types";

export const FLORIDA_POINTS: Point[] = [
  {
    id: "sarasota-sf-001",
    name: "123 Bayfront Dr, Sarasota, FL", // address shows in popup title
    coords: [-82.539, 27.331], // near downtown Sarasota
    tags: ["single-family"],
    variant: "primary",
    blurb: "Bayfront Estates • 3bd/2ba • Downtown Sarasota",
    href: "/listings/sarasota-sf-001",
  },
  {
    id: "sarasota-btr-002",
    name: "205 Beach Rd, Siesta Key, FL",
    coords: [-82.5485, 27.2665], // near Siesta Key
    tags: ["btr"],
    variant: "primary",
    blurb: "Siesta Key BTR • Build-to-Rent • Beachside Living",
    href: "/listings/sarasota-btr-002",
  },
  {
    id: "sarasota-cluster-003",
    name: "4800 Lakewood Ranch Blvd, Sarasota, FL",
    coords: [-82.52852697173405, 27.254932055477546], // east Sarasota / Lakewood Ranch area
    tags: ["cluster"],
    variant: "primary",
    blurb: "Lakewood Cluster Homes • 5-home community • Lakewood Ranch",
    href: "/listings/sarasota-cluster-003",
  },
  {
    id: "sarasota-sf-004",
    name: "2200 Palmer Ranch Pkwy, Sarasota, FL",
    coords: [-82.4712, 27.2309], // south Sarasota / Palmer Ranch
    tags: ["single-family"],
    variant: "primary",
    blurb: "Palmer Ranch Villas • 4bd/3ba • Family Living",
    href: "/listings/sarasota-sf-004",
  },
  {
    id: "sarasota-btr-005",
    name: "301 Gulf Gate Dr, Sarasota, FL",
    coords: [-82.512, 27.2525], // Gulf Gate area
    tags: ["btr"],
    variant: "primary",
    blurb: "Gulf Gate Residences • Build-to-Rent • Modern Comfort",
    href: "/listings/sarasota-btr-005",
  },
];
