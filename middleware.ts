import { type NextRequest, NextResponse } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';

/**
 * STEALTH MIDDLEWARE - "Security by Invisibility"
 * 
 * Critical Security Strategy:
 * - NEVER redirect to login (reveals admin routes exist)
 * - NEVER return 403 Forbidden (confirms route exists but unauthorized)
 * - ALWAYS return 404 Not Found (route appears non-existent to scanners)
 * 
 * This prevents:
 * - Brute force attacks on known admin routes
 * - Route enumeration by bots
 * - Information disclosure about application structure
 */
export async function middleware(request: NextRequest) {
  // Get user session from Supabase
  const { supabaseResponse, user } = await updateSession(request);

  const path = request.nextUrl.pathname;

  // Protected routes: /admin/* and /api/admin/*
  const isAdminRoute = path.startsWith('/admin');
  const isAdminApiRoute = path.startsWith('/api/admin');
  const isProtectedRoute = isAdminRoute || isAdminApiRoute;

  if (isProtectedRoute) {
    if (!user) {
      // CRITICAL: Return 404 instead of redirecting
      // This makes the route appear non-existent to unauthorized users
      return NextResponse.rewrite(new URL('/404', request.url), {
        status: 404,
      });
    }

    // User is authenticated - allow access
    return supabaseResponse;
  }

  // For all other routes, just update the session
  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
