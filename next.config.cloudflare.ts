import type { NextConfig } from 'next';

/**
 * Cloudflare Pages Configuration
 * 
 * This configuration is optimized for Cloudflare Pages deployment.
 * 
 * Limitations on Cloudflare Pages:
 * - Middleware with cookies may have compatibility issues
 * - Some API routes require Node.js runtime (OpenAI, Supabase service key)
 * - Dynamic OG image generation may need adaptation
 * 
 * For full feature compatibility, consider Vercel deployment.
 * This config provides a static-optimized build for Cloudflare preview.
 */

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    // Cloudflare Pages doesn't support Next.js Image Optimization API
    // Use unoptimized images for Cloudflare
    unoptimized: true,
  },
  
  // Experimental features
  experimental: {
    optimizePackageImports: ['@supabase/supabase-js'],
  },
  
  // Output configuration for Cloudflare Pages
  // Use standalone for edge compatibility
  output: 'standalone',
};

export default nextConfig;
