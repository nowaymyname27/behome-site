// file: src/components/site-wide/HomeShowcase.tsx
"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ZoomIn,
  BedDouble,
  Bath,
  CarFront,
  Scaling,
  Box,
  Download,
} from "lucide-react";
import { useLocale } from "../../i18n/locale-context";
import { tSite } from "../../i18n/site-wide";

export type HomeSpec = {
  id: string;
  name: string;
  sqft: number;
  beds: number;
  baths: number;
  cars: number;
  floorplanSrc?: string;
  matterportHref?: string;
  cta?: { href: string };
};

export type HomeShowcaseProps = {
  home: HomeSpec;
  children?: React.ReactNode;
  className?: string;
  stickyHeader?: boolean;
  stickyTop?: number;
};

function formatNumber(v: number, locale: "en" | "es" = "en") {
  return new Intl.NumberFormat(locale === "es" ? "es-US" : "en-US").format(v);
}

const StatItem = ({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string | number;
  label: string;
}) => (
  <div className="flex items-center gap-1.5 text-sm sm:text-[15px]">
    <Icon className="w-4 h-4 text-muted-foreground/70" />
    <span className="font-semibold text-foreground">{value}</span>
    <span className="text-muted-foreground hidden sm:inline-block">
      {label}
    </span>
  </div>
);

export default function HomeShowcase({
  home,
  children,
  className,
  stickyHeader = true,
  stickyTop = 128,
}: HomeShowcaseProps) {
  const { locale } = useLocale();
  const i18n = tSite(locale).homeShowcase;

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <section
        id={home.id}
        style={{ scrollMarginTop: stickyHeader ? stickyTop : undefined }}
        className={`w-full bg-background text-foreground ${className ?? ""}`}
      >
        <div
          className={[
            "w-full px-6 lg:px-24 transition-all duration-200 border-b",
            stickyHeader
              ? "sticky z-20 border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
              : "border-transparent bg-transparent",
          ].join(" ")}
          style={stickyHeader ? { top: stickyTop } : undefined}
        >
          <header className="py-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold tracking-tight leading-none text-foreground">
                {home.name}
              </h2>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <StatItem
                  icon={Scaling}
                  value={formatNumber(home.sqft, locale)}
                  label={i18n.sqftUnit}
                />
                <StatItem
                  icon={BedDouble}
                  value={home.beds}
                  label={i18n.bedsLabel}
                />
                <StatItem
                  icon={Bath}
                  value={home.baths}
                  label={i18n.bathsLabel}
                />
                <StatItem
                  icon={CarFront}
                  value={home.cars}
                  label={i18n.carsLabel}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {home.matterportHref && (
                <a
                  href={home.matterportHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                >
                  <Box className="w-4 h-4" />
                  {i18n.matterportLabel || "3D Tour"}
                </a>
              )}

              {home.floorplanSrc && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium hover:bg-foreground/90 transition-colors shadow-sm"
                >
                  <ZoomIn className="w-4 h-4" />
                  {i18n.floorplanLabel || "Floorplan"}
                </button>
              )}
            </div>
          </header>
        </div>

        <div className="w-full">{children}</div>
      </section>

      {/* ✅ IMPROVED LIGHTBOX MODAL */}
      {isModalOpen && home.floorplanSrc && (
        <div
          // Z-9999 ensures this sits on top of any sticky headers
          className="fixed inset-0 z-[9999] flex flex-col bg-black/95 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Header Toolbar */}
          <div className="flex-none flex items-center justify-between px-6 py-4 bg-black/40 border-b border-white/10 z-[10000]">
            <h3 className="text-white/90 text-lg font-medium flex items-center gap-2">
              <Scaling className="w-5 h-5 text-white/70" />
              {home.name}
            </h3>

            <div className="flex items-center gap-3">
              <a
                href={home.floorplanSrc}
                download={`${home.name.replace(/\s+/g, "-").toLowerCase()}-floorplan`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                title="Download Floorplan"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span>
              </a>

              <div className="w-px h-6 bg-white/10" />

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-white/70 hover:text-white hover:bg-red-500/20 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Image Container - Added padding (p-4 md:p-8) so image is not edge-to-edge */}
          <div
            className="flex-1 relative w-full h-full p-4 md:p-8 overflow-hidden"
            onClick={() => setIsModalOpen(false)}
          >
            <Image
              src={home.floorplanSrc}
              alt={`${home.name} floorplan`}
              fill
              className="object-contain"
              sizes="100vw"
              quality={95}
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
