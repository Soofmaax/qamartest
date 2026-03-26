import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "1";

const nextConfig: NextConfig = {
  ...(isPreview ? { output: "export" as const } : {}),
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: isPreview,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
};

export default nextConfig;
