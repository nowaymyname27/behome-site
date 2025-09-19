// File: src/components/VirtualTour.tsx
"use client";

import React from "react";

type MatterportProps = {
  provider: "matterport";
  /** Matterport model ID (the bit after /space/ in demo links, or the ?m= value) */
  modelId: string;
  /** Optional: tweak query params, e.g. { brand: "0", play: "1" } */
  params?: Record<string, string | number | boolean>;
};

type PannellumProps = {
  provider: "pannellum";
  /** URL to an equirectangular 360 image (jpg/png) */
  panoramaUrl: string;
  /** Optional: pannellum URL params, e.g. { autoLoad: "true", autoRotate: "-2" } */
  params?: Record<string, string | number | boolean>;
};

type CommonProps = {
  className?: string;
  title?: string; // for accessibility
  /** Default 16:9 using Tailwind's aspect-video; override with your own wrapper if you prefer */
};

type VirtualTourProps = (MatterportProps | PannellumProps) & CommonProps;

function toQuery(params?: Record<string, string | number | boolean>) {
  if (!params) return "";
  const q = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) q.set(k, String(v));
  const s = q.toString();
  return s ? `&${s}` : "";
}

export default function VirtualTour(props: VirtualTourProps) {
  const {
    className = "rounded-xl overflow-hidden border border-border",
    title,
  } = props;

  let src = "";
  let allow = "xr-spatial-tracking; vr; fullscreen; autoplay";

  if (props.provider === "matterport") {
    // Docs suggest using my.matterport.com/show/?m=<MODEL_ID>&<params>
    const base = `https://my.matterport.com/show/?m=${encodeURIComponent(
      props.modelId
    )}`;
    // sensible defaults for real estate embeds
    const defaults = { play: 1, brand: 0, mls: 1 };
    const srcParams = { ...defaults, ...(props.params ?? {}) };
    src = `${base}${toQuery(srcParams)}`;
  } else {
    // Use pannellum's hosted viewer with hash config: pannellum.htm#panorama=<URL>&<params>
    const base = "https://cdn.pannellum.org/2.5/pannellum.htm";
    const hashParams = new URLSearchParams({
      panorama: props.panoramaUrl,
      ...Object.fromEntries(
        Object.entries(props.params ?? {}).map(([k, v]) => [k, String(v)])
      ),
    });
    src = `${base}#${hashParams.toString()}`;
    // Pannellum is just an iframe; normal fullscreen permission is enough
    allow = "fullscreen";
  }

  return (
    <div className={`relative aspect-video ${className}`}>
      <iframe
        title={title ?? "Virtual tour"}
        src={src}
        allow={allow}
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 h-full w-full"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
