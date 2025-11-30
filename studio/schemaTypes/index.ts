// /studio/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import mapPoint from "./mapPoint";
import style from "./style";
import { localeString, localeText } from "./_locale";
import collectionCard from "./collectionCard";

const schemaTypes: SchemaTypeDefinition[] = [
  localeString,
  localeText,
  mapPoint,
  style,
  collectionCard,
];

export default schemaTypes;
