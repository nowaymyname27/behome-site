// app/studio/[[...tool]]/page.tsx
import { notFound } from "next/navigation";
import type { ComponentType } from "react";

const ENABLE_STUDIO =
  process.env.NODE_ENV !== "production" ||
  process.env.NEXT_PUBLIC_ENABLE_STUDIO === "1";

// ⚠️ Do NOT statically import StudioLoader.
// Only require it when enabled so Turbopack doesn't include Studio in prod.
let StudioLoader: ComponentType | null = null;
if (ENABLE_STUDIO) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  StudioLoader = require("./StudioLoader").default;
}

export default function StudioPage() {
  if (!ENABLE_STUDIO || !StudioLoader) return notFound();
  return <StudioLoader />;
}
