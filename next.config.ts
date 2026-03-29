import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "1";
const isProd = process.env.NODE_ENV === "production";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "img-src 'self' data: blob: https://framerusercontent.com",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.googletagmanager.com https://stats.g.doubleclick.net",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), fullscreen=(self)",
  },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  ...(isProd
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        { key: "Content-Security-Policy", value: contentSecurityPolicy },
      ]
    : []),
];

const nextConfig: NextConfig = {
  ...(isPreview ? { output: "export" as const } : {}),
  reactStrictMode: true,
  poweredByHeader: false,
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
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  async headers() {
    // Next.js static export (used for preview/GitHub Pages) cannot enforce runtime headers.
    if (isPreview) return [];

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    if (isPreview) return [];

    return [
      // Redirect legacy non-ASCII slugs to ASCII-only URLs.
      {
        source: "/événementiel",
        destination: "/evenementiel",
        permanent: true,
      },
      {
        source: "/événementiel/",
        destination: "/evenementiel/",
        permanent: true,
      },
      {
        source: "/%C3%A9v%C3%A9nementiel",
        destination: "/evenementiel",
        permanent: true,
      },
      {
        source: "/%C3%A9v%C3%A9nementiel/",
        destination: "/evenementiel/",
        permanent: true,
      },

      {
        source: "/publicité-digitale/:path*",
        destination: "/publicite-digitale/:path*",
        permanent: true,
      },
      {
        source: "/publicit%C3%A9-digitale/:path*",
        destination: "/publicite-digitale/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
