// /studio/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import house from "./house";
import mapPoint from "./mapPoint";
import { localeString, localeText } from "./_locale";

const schemaTypes: SchemaTypeDefinition[] = [
  localeString,
  localeText,
  house,
  mapPoint,
];

export default schemaTypes;
