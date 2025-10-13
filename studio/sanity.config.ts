// /studio/sanity.config.ts
import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import schemaTypes from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Studio",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  plugins: [visionTool()],
  schema: {
    types: schemaTypes, // <- pass the array
  },
});
