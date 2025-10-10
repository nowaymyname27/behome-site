// studio-app/app/[[...tool]]/page.tsx
import StudioLoader from "./StudioLoader";

// Optional gate (leave Studio always-on by default)
const ENABLE_STUDIO =
  process.env.NODE_ENV !== "production" ||
  process.env.NEXT_PUBLIC_ENABLE_STUDIO === "1";

export default function StudioPage() {
  if (!ENABLE_STUDIO) return null;
  return <StudioLoader />;
}
