// studio-app/app/[[...tool]]/StudioLoader.tsx
"use client";
import dynamic from "next/dynamic";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((m) => m.NextStudio),
  { ssr: false }
);

import config from "../../sanity.config"; // <-- now the local one inside studio-app

export default function StudioLoader() {
  return <NextStudio config={config} />;
}
