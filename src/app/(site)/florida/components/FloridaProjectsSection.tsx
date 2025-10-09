// src/components/florida/FloridaProjectsSection.tsx
"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import type { Config, Point } from "@/components/site-wide/SiteMap";
import MapCard from "@/components/site-wide/MapCard";

const SiteMap = dynamic(() => import("@/components/site-wide/SiteMap"), {
  ssr: false,
});

/** ------- 1) Project data (edit here, no props) ------- */
type ProjectType = "btr" | "sfh" | "cluster";

type Project = {
  id: string;
  name: string;
  type: ProjectType;
  coords: [number, number];
  href: string;
  blurb?: string;
};

const PROJECTS = [
  {
    id: "btr-01",
    name: "Bayfront BTR",
    type: "btr",
    coords: [-82.53, 27.31] as const,
    href: "/florida/projects/bayfront-btr",
    blurb: "Water-adjacent build-to-rent community.",
  },
  {
    id: "sfh-01",
    name: "Palmer Ranch SFH",
    type: "sfh",
    coords: [-82.46, 27.22] as const,
    href: "/florida/projects/palmer-ranch",
    blurb: "Single-family homes near schools and parks.",
  },
  {
    id: "cluster-01",
    name: "Siesta Cluster",
    type: "cluster",
    coords: [-82.56, 27.27] as const,
    href: "/florida/projects/siesta-cluster",
    blurb: "Compact lots, shared greens, low maintenance.",
  },
] satisfies Project[];

/** Map marker variant by type (ties into SiteMap’s marker variants) */
const TYPE_TO_VARIANT: Record<ProjectType, Point["variant"]> = {
  btr: "primary",
  sfh: "success",
  cluster: "info",
};

/** Labels & descriptions for the three selector cards */
const TYPE_META: Record<
  ProjectType,
  { label: string; blurb: string; cta: string }
> = {
  btr: {
    label: "Build-To-Rent",
    blurb: "Purpose-built rental communities designed for long-term value.",
    cta: "Explore BTR",
  },
  sfh: {
    label: "Single-Family Homes",
    blurb:
      "Traditional detached homes with flexible plans and durable finishes.",
    cta: "Explore SFH",
  },
  cluster: {
    label: "Clusters",
    blurb:
      "Smarter lots, shared greens, and lower maintenance for modern living.",
    cta: "Explore Clusters",
  },
};

/** ------- 2) Helpers ------- */
type ActiveType = "all" | ProjectType;

function filterProjects(type: ActiveType): Project[] {
  return type === "all" ? PROJECTS : PROJECTS.filter((p) => p.type === type);
}

function toPoints(rows: Project[]): Point[] {
  return rows.map((p) => ({
    id: p.id,
    name: p.name,
    coords: p.coords,
    variant: TYPE_TO_VARIANT[p.type],
    href: p.href,
    blurb: p.blurb,
  }));
}

function centroid(rows: Project[]): [number, number] {
  if (!rows.length) return [-82.4572, 27.3364];
  let sx = 0,
    sy = 0;
  for (const p of rows) {
    sx += p.coords[0];
    sy += p.coords[1];
  }
  return [sx / rows.length, sy / rows.length];
}

/** ------- 3) Composite section ------- */
export default function FloridaProjectsSection() {
  const [active, setActive] = useState<ActiveType>("all");

  const counts = useMemo(
    () => ({
      all: PROJECTS.length,
      btr: PROJECTS.filter((p) => p.type === "btr").length,
      sfh: PROJECTS.filter((p) => p.type === "sfh").length,
      cluster: PROJECTS.filter((p) => p.type === "cluster").length,
    }),
    []
  );

  const filtered = useMemo(() => filterProjects(active), [active]);
  const center = useMemo(() => centroid(filtered), [filtered]);

  const mapConfig: Config = {
    theme: "light",
    center,
    zoom: filtered.length > 1 ? 10 : 12,
    points: toPoints(filtered),
  };

  return (
    <section className="w-full pb-12 sm:pb-16 bg-accent">
      {/* Header in the same grid for perfect left alignment */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 lg:gap-6 w-full px-4">
        <header className="lg:col-span-2">
          <h2 className="h2">Florida Projects</h2>
          <p className="mt-2 muted">
            Explore our build-to-rent, single-family homes, and cluster
            communities across Florida.
          </p>
        </header>
      </div>

      {/* Content grid: map grows (1fr), cards fixed width on right */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 lg:gap-6 items-stretch w-full px-4">
        {/* Map column (left) */}
        <div className="order-2 lg:order-none h-full">
          <SiteMap config={mapConfig} />
        </div>

        {/* Cards column (right) — fixed width; slightly shorter-than-square cards */}
        <div className="order-1 lg:order-none h-full lg:w-[260px] xl:w-[280px] lg:sticky lg:top-24 self-start">
          {/* mobile “show all” */}
          <div className="lg:hidden mb-2 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setActive("all")}
              className={[
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition",
                active === "all"
                  ? "bg-accent text-accent-foreground border-transparent"
                  : "bg-background text-foreground border-border hover:bg-chrome/50",
              ].join(" ")}
              aria-pressed={active === "all"}
            >
              Show all
              <span className="ml-1 rounded-full bg-background/60 px-2 py-0.5 text-xs">
                {counts.all}
              </span>
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <TypeCard
              type="btr"
              active={active}
              setActive={setActive}
              count={counts.btr}
            />
            <TypeCard
              type="sfh"
              active={active}
              setActive={setActive}
              count={counts.sfh}
            />
            <TypeCard
              type="cluster"
              active={active}
              setActive={setActive}
              count={counts.cluster}
            />

            {/* desktop “show all” under the cards */}
            <div className="hidden lg:flex items-center justify-between mt-1">
              <button
                type="button"
                onClick={() => setActive("all")}
                className={[
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition",
                  active === "all"
                    ? "bg-accent text-accent-foreground border-transparent"
                    : "bg-background text-foreground border-border hover:bg-chrome/50",
                ].join(" ")}
                aria-pressed={active === "all"}
              >
                Show all
                <span className="ml-1 rounded-full bg-background/60 px-2 py-0.5 text-xs">
                  {counts.all}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** ------- 4) Subcomponent using MapCard ------- */
function TypeCard({
  type,
  active,
  setActive,
  count,
}: {
  type: ProjectType;
  active: ActiveType;
  setActive: (t: ActiveType) => void;
  count: number;
}) {
  const meta = TYPE_META[type];
  const selected = active === type;

  return (
    <MapCard
      // Make it a bit shorter than square to reduce overall section height
      className="group aspect-[5/4]"
      data-active={selected ? "true" : "false"}
    >
      <MapCard.Content>
        <MapCard.Header>
          <MapCard.Title>{meta.label}</MapCard.Title>
          <MapCard.Badge>{count}</MapCard.Badge>
        </MapCard.Header>

        <MapCard.Body>{meta.blurb}</MapCard.Body>

        <MapCard.Actions>
          <button
            type="button"
            onClick={() => setActive(type)}
            aria-pressed={selected}
            className={[
              "btn btn-sm",
              selected ? "btn-FL" : "btn-ghost border-border",
            ].join(" ")}
          >
            {meta.cta}
          </button>
          <a
            href={`/florida/${type}`}
            className="text-sm underline hover:no-underline"
          >
            Learn more
          </a>
        </MapCard.Actions>
      </MapCard.Content>
    </MapCard>
  );
}
