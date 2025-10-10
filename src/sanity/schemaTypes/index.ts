import { type SchemaTypeDefinition } from "sanity";
import house from "./house";
import { localeString, localeText } from "./_locale";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localeString,
    localeText,

    // documents:
    house,
  ],
};
