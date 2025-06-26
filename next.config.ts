import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath   : "/loser4dim.github.io",
  assetPrefix: "/loser4dim.github.io"
};

export default nextConfig;