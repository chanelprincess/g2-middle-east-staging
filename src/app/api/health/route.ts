/**
 * Health Check API
 * Tests environment variable availability
 */

import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const health = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: {
      NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      SUPABASE_SERVICE_ROLE_KEY: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      OPENAI_API_KEY: !!process.env.OPENAI_API_KEY,
      NEXT_PUBLIC_SITE_URL: !!process.env.NEXT_PUBLIC_SITE_URL,
    },
    missing: [] as string[],
  };

  // Check which env vars are missing
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) health.missing.push('NEXT_PUBLIC_SUPABASE_URL');
  if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) health.missing.push('NEXT_PUBLIC_SUPABASE_ANON_KEY');
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) health.missing.push('SUPABASE_SERVICE_ROLE_KEY');
  if (!process.env.OPENAI_API_KEY) health.missing.push('OPENAI_API_KEY');
  if (!process.env.NEXT_PUBLIC_SITE_URL) health.missing.push('NEXT_PUBLIC_SITE_URL');

  if (health.missing.length > 0) {
    health.status = 'error';
  }

  return NextResponse.json(health, {
    status: health.missing.length > 0 ? 500 : 200,
    headers: {
      'Cache-Control': 'no-store, must-revalidate',
    },
  });
}
