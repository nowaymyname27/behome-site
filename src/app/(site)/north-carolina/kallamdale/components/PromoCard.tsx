"use client";

export default function PromoCard() {
  return (
    <aside
      aria-label="Promotion"
      className="card bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 p-6 shadow-lg"
    >
      <span className="inline-flex items-center rounded-lg bg-accent text-accent-foreground px-2 py-1 text-xs font-medium">
        Limited Time
      </span>

      <h3 className="mt-3 text-xl font-semibold">Fall Savings Event</h3>

      <p className="mt-2 muted">
        Lock in special pricing on select models through October 31.
      </p>

      <div className="mt-4">
        <a href="/offers" className="btn btn-primary w-full sm:w-auto">
          See offers
        </a>
      </div>
    </aside>
  );
}
