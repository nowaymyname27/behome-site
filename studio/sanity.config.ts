import { defineConfig } from "sanity";
// import {structureTool} from "sanity/structure"
import { visionTool } from "@sanity/vision";
import { schema } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Studio",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  plugins: [
    // structureTool({ structure: undefined }), // TEMP: comment out/remove
    visionTool(),
  ],
  schema,
});
