"use client";
import dynamic from "next/dynamic";

// Load Studio only on the client
const NextStudio = dynamic(
  () => import("next-sanity/studio").then((m) => m.NextStudio),
  { ssr: false }
);

// Your existing config at repo root
import config from "../../sanity.config";

export default function StudioLoader() {
  return <NextStudio config={config} />;
}
