import type { NextConfig } from "next";
import { withHighlightConfig } from "@highlight-run/next/config";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "50mb",
    },
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "img.clerk.com" },
      { protocol: "https", hostname: "*.supabase.co" },
    ],
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        {
          key: "Content-Security-Policy",
          value: "default-src 'self'; script-src 'self' https://*.clerk.accounts.dev https://clerk.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; frame-src https://www.youtube.com https://www.youtube-nocookie.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://*.supabase.co https://*.clerk.accounts.dev https://clerk.com https://api.highlight.run; frame-ancestors 'none'",
        },
      ],
    },
  ],
};

export default withHighlightConfig(nextConfig);
