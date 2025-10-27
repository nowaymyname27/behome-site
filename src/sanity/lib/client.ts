// file: src/sanity/lib/client.ts
import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId, token, useCdn } from "../env";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token, // omit/leave undefined if you don’t use preview
  perspective: "published",
});
