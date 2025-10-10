import type { ComponentType } from "react";

const ENABLE_STUDIO =
  process.env.NODE_ENV !== "production" ||
  process.env.NEXT_PUBLIC_ENABLE_STUDIO === "1";

let StudioLoader: ComponentType | null = null;
if (ENABLE_STUDIO) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  StudioLoader = require("./StudioLoader").default;
}

export default function StudioPage() {
  if (!ENABLE_STUDIO || !StudioLoader) return null;
  return <StudioLoader />;
}
