"use client";

type Props = {
  name: string;
  beds: number;
  baths: number;
  cars?: number;
  sqft: number;
  price: number;
  height?: number; // px (default 72)
  children?: React.ReactNode; // allows adding more info later
};

export default function BtrStickyHeader({
  name,
  beds,
  baths,
  cars = 0,
  sqft,
  price,
  height = 72,
  children,
}: Props) {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background"
      style={{ height }}
    >
      <div className="h-full w-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <h1 className="text-lg sm:text-xl font-semibold truncate">{name}</h1>
          <p className="text-sm text-muted-foreground">
            {beds} Beds • {baths} Baths
            {typeof cars === "number" && cars > 0 && ` • ${cars} Car`}
            {typeof sqft === "number" && ` • ${sqft.toLocaleString()} sq ft`}
          </p>

          {/* expandable area */}
          {children && <div className="mt-1 text-sm">{children}</div>}
        </div>

        <div className="text-right ml-4">
          <div className="text-base sm:text-lg font-semibold">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }).format(price)}
          </div>
        </div>
      </div>
    </header>
  );
}
