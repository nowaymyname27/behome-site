// /studio/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import house from "./house";
import { localeString, localeText } from "./_locale";

const schemaTypes: SchemaTypeDefinition[] = [localeString, localeText, house];

export default schemaTypes;
