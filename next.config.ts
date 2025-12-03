import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'base-sepolia.scalex.money',
      },
      {
        protocol: 'https',
        hostname: 'mantle-sepolia.scalex.money',
      },
      {
        protocol: 'https',
        hostname: 'landing.scalex.money',
      },
    ],
  },
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Rewrites for API routes
  async rewrites() {
    return [
      {
        source: '/api/health',
        destination: '/api/health',
      },
    ];
  },
};

export default nextConfig;
