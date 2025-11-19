'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';

// Force dynamic rendering - don't prerender at build time
export const dynamic = 'force-dynamic';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
        setLoading(false);
        return;
      }

      if (data.session) {
        // Successful login - redirect to admin dashboard
        router.push('/admin/dashboard');
        router.refresh();
      }
    } catch {
      setError('An unexpected error occurred');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-g2-darker">
      <div className="w-full max-w-md px-6">
        <div className="bg-g2-dark border border-white/10 rounded-2xl p-8">
          {/* Deliberately vague title - no "Admin" or "G2" branding */}
          <h1 className="text-2xl font-bold text-g2-gold mb-6 text-center">
            Portal Access
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 bg-g2-darker border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                placeholder="user@example.com"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 bg-g2-darker border border-white/10 rounded-lg text-white focus:outline-none focus:border-g2-gold transition-colors"
                placeholder="••••••••"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-g2-gold hover:bg-g2-gold-light text-g2-darker font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Authenticating...' : 'Access Portal'}
            </button>
          </form>

          {/* No "Forgot Password" or other hints about what this is */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Authorized access only
          </p>
        </div>
      </div>
    </div>
  );
}
