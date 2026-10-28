import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Netlify's Next.js adapter routes next/image through the Netlify Image
    // CDN, which needs the image resolver enabled on the site. Serving the
    // already-optimised local assets directly removes that dependency and the
    // 404s that show up when it is missing.
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
