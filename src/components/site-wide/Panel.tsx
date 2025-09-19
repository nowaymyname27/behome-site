// File: /components/site-wide/Panel.tsx
"use client";

type Props = {
  src: string;
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
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
