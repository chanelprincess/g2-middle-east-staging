import { type NextRequest, NextResponse } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';
import { createClient } from '@/utils/supabase/server';

/**
 * UNIFIED AUTHENTICATION MIDDLEWARE
 * 
 * Phase 6: Enhanced Security Strategy
 * 
 * Protected Routes:
 * - /admin/* - Admin only (role-based access)
 * - /api/admin/* - Admin API routes
 * - /dashboard - Authenticated users (clients + admins)
 * - /login - Public (but redirects if already authenticated)
 * 
 * Security Features:
 * - Stealth mode for admin routes (404 instead of 403/redirect)
 * - Role-based access control via Supabase profiles
 * - Session validation and refresh
 */
export async function middleware(request: NextRequest) {
  // Get user session from Supabase
  const { supabaseResponse, user } = await updateSession(request);

  const path = request.nextUrl.pathname;

  // Route classification
  const isAdminRoute = path.startsWith('/admin');
  const isAdminApiRoute = path.startsWith('/api/admin');
  const isClientDashboard = path.startsWith('/dashboard');
  const isLoginPage = path === '/login';

  // ========================================
  // PUBLIC ROUTES (Allow everyone)
  // ========================================
  const publicRoutes = ['/', '/search', '/briefing', '/api/search', '/api/briefings', '/api/health'];
  const isPublicRoute = publicRoutes.some(route => path.startsWith(route)) || path === '/';

  if (isPublicRoute && !isAdminRoute && !isClientDashboard) {
    return supabaseResponse;
  }

  // ========================================
  // LOGIN PAGE (Redirect if already authenticated)
  // ========================================
  if (isLoginPage) {
    if (user) {
      // User is already logged in - redirect based on role
      try {
        const supabase = createClient();
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();

        if (profile?.role === 'admin') {
          return NextResponse.redirect(new URL('/admin', request.url));
        } else {
          return NextResponse.redirect(new URL('/dashboard', request.url));
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    }
    return supabaseResponse;
  }

  // ========================================
  // ADMIN ROUTES (Require admin role)
  // ========================================
  if (isAdminRoute || isAdminApiRoute) {
    if (!user) {
      // STEALTH: Return 404 to hide admin routes from unauthorized users
      return NextResponse.rewrite(new URL('/404', request.url), {
        status: 404,
      });
    }

    try {
      // Check if user is admin
      const supabase = createClient();
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (error || profile?.role !== 'admin') {
        // STEALTH: Non-admin users see 404 (not 403)
        return NextResponse.rewrite(new URL('/404', request.url), {
          status: 404,
        });
      }

      // Admin verified - allow access
      return supabaseResponse;
    } catch (error) {
      console.error('Admin verification error:', error);
      return NextResponse.rewrite(new URL('/404', request.url), {
        status: 404,
      });
    }
  }

  // ========================================
  // CLIENT DASHBOARD (Require authentication)
  // ========================================
  if (isClientDashboard) {
    if (!user) {
      // Redirect unauthenticated users to login
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', path);
      return NextResponse.redirect(loginUrl);
    }

    // Authenticated - allow access
    return supabaseResponse;
  }

  // ========================================
  // DEFAULT (Allow with session update)
  // ========================================
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
