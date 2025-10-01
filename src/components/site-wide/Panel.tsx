// file: src/components/site-wide/Panel.tsx
"use client";

import Image, { StaticImageData } from "next/image";

type Props = {
  src: string | StaticImageData;
  title: string;
  caption: string; // shown on the front
  body?: string; // shown on the back
  isFlipped?: boolean; // controls rotation
  className?: string; // width/height utilities
  onOpen: () => void; // we'll treat this as "toggle flip"
};

export default function Panel({
  src,
  title,
  caption,
  body,
  isFlipped = false,
  className = "",
  onOpen,
}: Props) {
  return (
    <button
      onClick={onOpen}
      className={[
        "group/panel relative snap-start shrink-0 overflow-hidden",
        "bg-background/10 text-left focus:outline-none",
        "focus-visible:ring-2 focus-visible:ring-background/60",
        // flip container
        "perspective-[1200px]",
        className,
      ].join(" ")}
      aria-pressed={isFlipped}
      aria-label={title}
    >
      {/* 3D inner */}
      <div
        className={[
          "relative h-full w-full transition-transform duration-500",
          "[transform-style:preserve-3d]",
          isFlipped ? "[transform:rotateY(180deg)]" : "",
        ].join(" ")}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 [backface-visibility:hidden]"
          aria-hidden={isFlipped}
        >
          <Image
            src={src}
            alt={title}
            fill
            className="absolute inset-0 h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
            priority={false}
          />

          <div className="absolute inset-x-0 bottom-0">
            <div className="h-20 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="px-4 py-3 bg-surface text-foreground">
              <div className="font-semibold">{caption}</div>
            </div>
          </div>

          <div className="absolute inset-0 ring-0 group-hover/panel:ring-2 ring-background/60 transition" />
        </div>
        {/* BACK */}
        <div
          className="absolute inset-0 rotate-y-180 [backface-visibility:hidden]"
          aria-hidden={!isFlipped}
        >
          {/* Background image */}
          <Image
            src={src}
            alt="" // decorative on back
            fill
            className="absolute inset-0 h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
            priority={false}
          />

          {/* Accent wash */}
          <div className="absolute inset-0 bg-accent/90" />

          {/* Text content directly on accent wash */}
          <div className="relative z-10 flex h-full w-full items-center justify-center p-6">
            <div className="text-accent-foreground max-w-sm">
              <h3 className="text-lg font-semibold">{title}</h3>
              {body ? (
                <p className="mt-3 text-sm leading-relaxed">{body}</p>
              ) : (
                <p className="mt-3 text-sm leading-relaxed">{caption}</p>
              )}
              <p className="mt-4 text-xs opacity-80">Tap to flip back</p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
