// studio-app/sanity.config.ts
import { defineConfig, type SchemaPluginOptions } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

// Reuse your schema from the repo root
import { schema as rootSchema } from "../src/sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET"
  );
}

// 👇 Cast away cross-package type mismatch (safe at runtime)
const schema: SchemaPluginOptions = {
  // @ts-expect-error – types come from a different @sanity/types copy
  types: rootSchema.types,
};

export default defineConfig({
  basePath: "/", // Studio at the deployment root
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), visionTool()],
});
