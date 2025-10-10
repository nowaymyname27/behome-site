import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["sanity", "next-sanity", "@sanity/vision"],
  experimental: {
    externalDir: true, // <-- lets this app import ../sanity.config.ts and ../src/**
  },
};

export default nextConfig;
