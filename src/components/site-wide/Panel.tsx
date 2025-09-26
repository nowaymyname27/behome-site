// File: /components/site-wide/Panel.tsx
"use client";

import Image, { StaticImageData } from "next/image";

type Props = {
  src: string | StaticImageData;
  title: string;
  caption: string;
  className?: string; // width/height utilities
  onOpen: () => void;
};

export default function Panel({
  src,
  title,
  caption,
  className = "",
  onOpen,
}: Props) {
  return (
    <button
      onClick={onOpen}
      className={`
        group/panel relative snap-start shrink-0 overflow-hidden
        bg-background/10 text-left focus:outline-none
        focus-visible:ring-2 focus-visible:ring-background/60
        ${className}
      `}
      aria-haspopup="dialog"
      aria-label={title}
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
    </button>
  );
}
