// File: src/app/(site)/florida/i18n/index.ts
import type { Locale } from "@/i18n/locale-context";

import { dict as description } from "./description";
import { dict as hero } from "./hero";
import { dict as projectMap } from "./project-map";
import { dict as project } from "./project";
import { dict as brochure } from "./brochure";
import { slides as brochureSlides } from "./brochure-slides";

export type FloridaI18n = {
  description: typeof description.en;
  hero: typeof hero.en;
  projectMap: typeof projectMap.en;
  project: typeof project.en;
  brochure: typeof brochure.en;
  brochureSlides: typeof brochureSlides.en;
};

export const tFlorida = (l: Locale): FloridaI18n => ({
  description: description[l],
  hero: hero[l],
  projectMap: projectMap[l],
  project: project[l],
  brochure: brochure[l],
  brochureSlides: brochureSlides[l],
});
