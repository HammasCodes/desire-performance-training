import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silences monorepo lockfile warnings under Turbopack in a shared workspace.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
