"use client";

import dynamic from "next/dynamic";

// ✅ Use NextStudio from 'next-sanity/studio'
const NextStudio = dynamic(
  () => import("next-sanity/studio").then((m) => m.NextStudio),
  { ssr: false }
);

import config from "../../sanity.config";

export default function StudioLoader() {
  return <NextStudio config={config} />;
}
