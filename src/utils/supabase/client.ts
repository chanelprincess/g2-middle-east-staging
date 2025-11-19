import { createBrowserClient } from '@supabase/ssr';

/**
 * Supabase Browser Client
 * Used for client-side operations (login, signup, etc.)
 */
export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // During build time, return a dummy client that will be replaced at runtime
  if (!supabaseUrl || !supabaseAnonKey) {
    if (typeof window === 'undefined') {
      // Server-side during build - return dummy values
      return createBrowserClient(
        'https://placeholder.supabase.co',
        'placeholder-anon-key'
      );
    }
    // Client-side - this is a real error
    throw new Error('Missing Supabase environment variables');
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
