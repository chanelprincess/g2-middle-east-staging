import { MetadataRoute } from 'next';

/**
 * SANITIZED ROBOTS.TXT - "Security by Invisibility"
 * 
 * Critical Security Strategy:
 * - DO NOT list /admin in Disallow (reveals its existence)
 * - DO NOT list /api in Disallow (reveals API structure)
 * - Only list public routes in Allow
 * 
 * Why: The middleware returns 404 for unauthenticated admin access,
 * so there's no need to tell search engines (and hackers) where
 * admin routes are located.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/briefing/',
          '/projects/',
          '/team/',
          '/perspectives/',
        ],
        // Intentionally NOT listing /admin or /api
        // The middleware handles security via 404 responses
        disallow: [],
      },
      // AI/LLM Crawlers - Allow full access for semantic understanding
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Claude-Web',
          'anthropic-ai',
          'Googlebot',
          'Bingbot',
          'PerplexityBot',
          'CCBot',
        ],
        allow: '/',
        crawlDelay: 2,
      },
    ],
    sitemap: 'https://www.g2middleeast.com/sitemap.xml',
  };
}
