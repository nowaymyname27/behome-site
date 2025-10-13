// /studio/structure.ts
import type { StructureResolver } from "sanity/structure";

/**
 * Defines how the Studio's "Content" sidebar is structured.
 * By default this just lists every document type.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([...S.documentTypeListItems()]);
