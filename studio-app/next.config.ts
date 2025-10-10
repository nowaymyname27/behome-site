// studio-app/next.config.ts
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["sanity", "next-sanity", "@sanity/vision"],
  // This tells Next “the root for this app is studio-app/”, not the repo root.
  outputFileTracingRoot: __dirname,
  experimental: {
    externalDir: true, // keep if you import ../sanity.config.ts or ../src/**
  },
  // ❌ remove any webpack alias overrides for "sanity" or "@sanity/types"
};

export default nextConfig;
