// /studio/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import house from "./house";
import mapPoint from "./mapPoint";
import style from "./style";
import singleFamilyHouse from "./singleFamilyHouse";
import { localeString, localeText } from "./_locale";
import house_card from "./house_card";
import collectionCard from "./collectionCard";

const schemaTypes: SchemaTypeDefinition[] = [
  localeString,
  localeText,
  house,
  mapPoint,
  style,
  singleFamilyHouse,
  house_card,
  collectionCard,
];

export default schemaTypes;
