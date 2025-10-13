function required(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing ${name} in /studio/.env.local`);
  return v;
}
export const projectId = required("NEXT_PUBLIC_SANITY_PROJECT_ID");
export const dataset = required("NEXT_PUBLIC_SANITY_DATASET");
