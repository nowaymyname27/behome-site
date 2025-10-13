/// <reference types="vite/client" />
import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import schemaTypes from "./schemaTypes";
import { structure } from "./structure";

const projectId =
  import.meta.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID;
const dataset =
  import.meta.env.SANITY_STUDIO_DATASET || process.env.SANITY_STUDIO_DATASET;

if (!projectId || !dataset) {
  throw new Error("Missing SANITY_STUDIO_PROJECT_ID or SANITY_STUDIO_DATASET");
}

export default defineConfig({
  name: "default",
  title: "BeHome Studio",
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }), // ✅ adds sidebar organization
    visionTool(), // still keep Vision
  ],
  schema: { types: schemaTypes },
});
