import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function AdminDashboard() {
  const supabase = await createClient();
  
  // Get authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // This should never happen due to middleware, but double-check
  if (!user) {
    redirect('/portal-entry/login');
  }

  const handleSignOut = async () => {
    'use server';
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect('/');
  };

  return (
    <div className="min-h-screen bg-g2-darker">
      {/* Header */}
      <header className="bg-g2-dark border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-g2-gold">
              G2 Admin Portal
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                {user.email}
              </span>
              <form action={handleSignOut}>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/50 rounded-lg transition-colors"
                >
                  Sign Out
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl">
          {/* Welcome Card */}
          <div className="bg-g2-dark border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-g2-gold mb-4">
              Secure Admin Area
            </h2>
            <p className="text-gray-300 mb-2">
              Authenticated as: <span className="text-g2-gold font-semibold">{user.email}</span>
            </p>
            <p className="text-sm text-gray-500">
              User ID: {user.id}
            </p>
          </div>

          {/* Admin Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <AdminCard
              title="Content Management"
              description="Manage articles, perspectives, and blog posts"
              href="/admin/content"
              status="Coming Soon"
            />
            <AdminCard
              title="User Management"
              description="Manage admin users and permissions"
              href="/admin/users"
              status="Coming Soon"
            />
            <AdminCard
              title="Projects & Whitepapers"
              description="Manage protected content and downloads"
              href="/admin/projects"
              status="Coming Soon"
            />
            <AdminCard
              title="Analytics"
              description="View site traffic and engagement metrics"
              href="/admin/analytics"
              status="Coming Soon"
            />
          </div>

          {/* Security Info */}
          <div className="mt-8 p-6 bg-green-500/10 border border-green-500/50 rounded-xl">
            <h3 className="text-lg font-semibold text-green-400 mb-2">
              🔐 Security Status: Active
            </h3>
            <ul className="text-sm text-green-300 space-y-1">
              <li>✅ Stealth middleware enabled (404 on unauthorized access)</li>
              <li>✅ Non-standard login path (/portal-entry/login)</li>
              <li>✅ Supabase authentication active</li>
              <li>✅ Robots.txt sanitized (no /admin disclosure)</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

interface AdminCardProps {
  title: string;
  description: string;
  href: string;
  status?: string;
}

function AdminCard({ title, description, href, status }: AdminCardProps) {
  const isComingSoon = status === 'Coming Soon';
  
  if (isComingSoon) {
    return (
      <div className="bg-g2-dark border border-white/10 rounded-xl p-6 opacity-50">
        <h3 className="text-xl font-bold text-gray-400 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <span className="inline-block px-3 py-1 bg-gray-700 text-gray-400 text-xs rounded-full">
          Coming Soon
        </span>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="block bg-g2-dark border border-white/10 hover:border-g2-gold/30 rounded-xl p-6 transition-colors group"
    >
      <h3 className="text-xl font-bold text-g2-gold group-hover:text-g2-gold-light mb-2 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-400">{description}</p>
    </Link>
  );
}
