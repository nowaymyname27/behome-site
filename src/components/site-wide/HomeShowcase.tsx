"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { useLocale } from "../../i18n/locale-context";
import { tSite } from "../../i18n/site-wide";

export type HomeSpec = {
  id: string;
  name: string;
  sqft: number;
  beds: number;
  baths: number;
  cars: number;
  floorplanSrc?: string; // ✅ New field
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

export default function HomeShowcase({
  home,
  children,
  className,
  stickyHeader = true,
  stickyTop = 128,
}: HomeShowcaseProps) {
  const { locale } = useLocale();
  const i18n = tSite(locale).homeShowcase;

  // ✅ Modal State
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

  return (
    <>
      <section
        id={home.id}
        style={{ scrollMarginTop: stickyHeader ? stickyTop : undefined }}
        className={`w-full bg-background text-foreground ${className ?? ""}`}
      >
        <div
          className={[
            "w-full px-6 lg:px-24",
            stickyHeader
              ? "sticky z-20 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85"
              : "",
          ].join(" ")}
          style={stickyHeader ? { top: stickyTop } : undefined}
        >
          <header className="py-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            {/* LEFT SIDE: Title & Specs */}
            <div>
              <h2 className="h2 leading-tight">{home.name}</h2>
              <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1.5 text-sm sm:text-[15px] text-foreground/80">
                <span className="font-medium text-foreground">
                  {formatNumber(home.sqft, locale)} {i18n.sqftUnit}
                </span>
                <span className="w-px h-4 bg-border self-center hidden sm:block" />
                <span>
                  {home.beds} {i18n.bedsLabel}
                </span>
                <span className="w-px h-4 bg-border self-center hidden sm:block" />
                <span>
                  {home.baths} {i18n.bathsLabel}
                </span>
                <span className="w-px h-4 bg-border self-center hidden sm:block" />
                <span>
                  {home.cars} {i18n.carsLabel}
                </span>
              </div>
            </div>

            {/* RIGHT SIDE: Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-1 md:mt-0">
              {/* Optional Matterport Button */}
              {home.matterportHref && (
                <a
                  href={home.matterportHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline-offset-4 hover:underline focus:underline outline-none transition-colors"
                  style={{ color: "var(--color-NC)" }}
                >
                  {i18n.matterportLabel || "View 3D Tour"}
                </a>
              )}

              {/* Floorplan Button - Opens Modal */}
              {home.floorplanSrc && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn-primary text-sm px-5 py-2 flex items-center gap-2"
                >
                  <ZoomIn className="w-4 h-4" />
                  {i18n.floorplanLabel || "View Floorplan"}
                </button>
              )}
            </div>
          </header>
        </div>

        <div className="w-full">{children}</div>
      </section>

      {/* ✅ FLOORPLAN MODAL OVERLAY */}
      {isModalOpen && home.floorplanSrc && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)} // Close on background click
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-foreground">
                {home.name} — {i18n.floorplanLabel}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Container */}
            <div className="relative w-full h-full flex-1 min-h-[50vh] bg-gray-50 p-4">
              <Image
                src={home.floorplanSrc}
                alt={`${home.name} floorplan`}
                fill
                className="object-contain" // Ensures image is never cropped
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
