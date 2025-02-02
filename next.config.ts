import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/nexem',
    images: {
        unoptimized: true,
    },
    // This is important for GitHub Pages
    assetPrefix: '/nexem/',
    // Disable server-side features
    trailingSlash: true,
    // Compiler options
    compiler: {
        // Remove console.logs in production
        removeConsole: process.env.NODE_ENV === "production",
    }
};

export default nextConfig;