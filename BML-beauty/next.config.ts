import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This project is its own Vercel deployment; pin the Turbopack root
  // to this directory so it doesn't auto-detect the shared monorepo root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
