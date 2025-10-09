"use client";

import React, { useEffect, useRef, useState } from "react";

type InteractiveMode = "click" | "always" | "off";

type MatterportProps = {
  provider: "matterport";
  modelId: string;
  params?: Record<string, string | number | boolean>;
};

type PannellumProps = {
  provider: "pannellum";
  panoramaUrl: string;
  params?: Record<string, string | number | boolean>;
};

type CommonProps = {
  className?: string;
  title?: string;
  interactiveMode?: InteractiveMode;
  overlayText?: string;
  onInteractiveChange?: (active: boolean) => void;
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
    interactiveMode = "click",
    overlayText = "Click to explore in 3D",
    onInteractiveChange,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(interactiveMode === "always");

  useEffect(() => {
    onInteractiveChange?.(active);
  }, [active, onInteractiveChange]);

  useEffect(() => {
    if (!(interactiveMode === "click" && active)) return;
    const onDocPointerDown = (e: PointerEvent) => {
      const el = containerRef.current;
      if (el && !el.contains(e.target as Node)) setActive(false);
    };
    document.addEventListener("pointerdown", onDocPointerDown, true);
    return () =>
      document.removeEventListener("pointerdown", onDocPointerDown, true);
  }, [active, interactiveMode]);

  let src = "";
  let allow = "xr-spatial-tracking; vr; fullscreen; autoplay";

  if (props.provider === "matterport") {
    const base = `https://my.matterport.com/show/?m=${encodeURIComponent(
      props.modelId
    )}`;
    const defaults = { play: 1, brand: 0, mls: 1 };
    const srcParams = { ...defaults, ...(props.params ?? {}) };
    src = `${base}${toQuery(srcParams)}`;
  } else {
    const base = "https://cdn.pannellum.org/2.5/pannellum.htm";
    const hashParams = new URLSearchParams({
      panorama: props.panoramaUrl,
      ...Object.fromEntries(
        Object.entries(props.params ?? {}).map(([k, v]) => [k, String(v)])
      ),
    });
    src = `${base}#${hashParams.toString()}`;
    allow = "fullscreen";
  }

  const pointerEvents =
    interactiveMode === "off"
      ? "none"
      : interactiveMode === "always"
      ? "auto"
      : active
      ? "auto"
      : "none";

  return (
    <div ref={containerRef} className={`relative aspect-video ${className}`}>
      <iframe
        title={title ?? "Virtual tour"}
        src={src}
        allow={allow}
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 h-full w-full"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ pointerEvents }}
      />

      {interactiveMode === "click" && !active && (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="
            absolute inset-0 z-[5] flex items-center justify-center
            bg-black/10 hover:bg-black/20 transition
            text-sm font-medium text-white
          "
          aria-label={overlayText}
        >
          {overlayText}
        </button>
      )}
    </div>
  );
}
