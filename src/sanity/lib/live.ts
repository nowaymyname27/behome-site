// sanity/lib/live.ts
import "server-only";
import { defineLive } from "next-sanity/live";
import { client } from "./client.server";

// Only expose the server-side fetch helper.
// Do NOT export SanityLive here to avoid dragging Studio into client bundles.
export const { sanityFetch } = defineLive({ client });

// If some file still imports SanityLive, it'll error — that's good;
// it tells us exactly where to remove that client import.
