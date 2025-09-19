// File: /components/site-wide/PanelOverlay.tsx
"use client";

type SlideLike = { src: string; title: string; body?: string };

export default function PanelOverlay({
  slide,
  onClose,
  closeLabel = "Close",
}: {
  slide: SlideLike;
  onClose: () => void;
  closeLabel?: string;
}) {
  return (
    <div
      className="fixed inset-0 z-[1200] flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-label={slide.title}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="relative max-w-3xl w-full bg-background text-foreground shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-[2/1] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.src}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold">{slide.title}</h3>
          {slide.body && <p className="mt-3 muted">{slide.body}</p>}
          <div className="mt-6 flex justify-end">
            <button
              className="btn bg-surface text-foreground hover:opacity-90"
              onClick={onClose}
            >
              {closeLabel}
            </button>
          </div>
        </div>
        <button
          className="absolute top-3 right-3 btn bg-surface text-foreground hover:opacity-90"
          onClick={onClose}
          aria-label={closeLabel}
          title={closeLabel}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
