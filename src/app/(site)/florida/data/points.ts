// File: src/app/florida/data/points.ts
import type { Point } from "../../../../components/site-wide/map/types";

export const FLORIDA_POINTS: Point[] = [
  {
    id: "miami-001",
    name: "Sunset Ridge 12A",
    coords: [-80.1937, 25.7617],
    tags: ["single-family"],
    variant: "primary",
    blurb: "3bd/2ba • Miami",
    href: "/listings/miami-001",
  },
  {
    id: "tampa-btr-003",
    name: "Harbor View BTR",
    coords: [-82.4572, 27.9506],
    tags: ["btr"],
    variant: "primary",
    blurb: "Build-to-Rent • Tampa",
    href: "/listings/tampa-btr-003",
  },
  {
    id: "orlando-cluster-02",
    name: "Lake Nona Cluster",
    coords: [-81.3792, 28.5383],
    tags: ["cluster"],
    variant: "primary",
    blurb: "5-home cluster • Orlando",
    href: "/listings/orlando-cluster-02",
  },
  // …more points as needed
];
