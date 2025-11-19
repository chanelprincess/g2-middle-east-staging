'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface Project {
  id: number;
  title: string;
  description: string | null;
  status: 'Active' | 'Pending' | 'Completed';
  cover_image_path: string | null;
  secure_files: Array<{
    name: string;
    path: string;
    size?: number;
    uploaded_at?: string;
  }>;
  last_updated: string;
}

interface Profile {
  company_name: string | null;
  email: string;
}

export default function ClientDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      // Check if user is authenticated
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push('/login');
        return;
      }

      // Fetch user profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('company_name, email')
        .eq('id', session.user.id)
        .single();

      if (profileError) throw profileError;
      setProfile(profileData);

      // Fetch projects (RLS will automatically filter for this user)
      const { data: projectsData, error: projectsError } = await supabase
        .from('projects')
        .select('*')
        .order('last_updated', { ascending: false });

      if (projectsError) throw projectsError;
      setProjects(projectsData || []);
    } catch (err) {
      console.error('Error loading dashboard:', err);
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  const getSignedUrl = async (filePath: string): Promise<string> => {
    try {
      const { data, error } = await supabase.storage
        .from('secure-assets')
        .createSignedUrl(filePath, 3600); // 1 hour expiry

      if (error) throw error;
      return data.signedUrl;
    } catch (err) {
      console.error('Error creating signed URL:', err);
      return '#';
    }
  };

  const downloadFile = async (filePath: string, fileName: string) => {
    try {
      const signedUrl = await getSignedUrl(filePath);
      window.open(signedUrl, '_blank');
    } catch (err) {
      console.error('Error downloading file:', err);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Pending':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'Completed':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-g2-darker flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-g2-gold"></div>
          <p className="mt-4 text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-g2-darker flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400">{error}</p>
          <button
            onClick={() => router.push('/login')}
            className="mt-4 px-6 py-2 bg-g2-gold text-g2-darker rounded-lg hover:bg-g2-gold-light transition-colors"
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-g2-darker">
      {/* Header */}
      <header className="bg-g2-dark border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-g2-gold">
                Confidential Dashboard
              </h1>
              {profile?.company_name && (
                <p className="text-gray-400 text-sm mt-1">
                  {profile.company_name}
                </p>
              )}
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-400 hover:text-g2-gold transition-colors text-sm"
              >
                Homepage
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm border border-white/10 rounded-lg text-gray-300 hover:bg-white/5 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {projects.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-g2-dark rounded-full mb-6">
              <svg className="w-16 h-16 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              No Active Projects
            </h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              You currently have no projects assigned to your account. Please contact G2 Middle East Advisory for assistance.
            </p>
            <a
              href="mailto:advisory@g2middleeast.com"
              className="inline-block px-6 py-3 bg-g2-gold text-g2-darker font-semibold rounded-lg hover:bg-g2-gold-light transition-colors"
            >
              Contact Advisory Team
            </a>
          </div>
        ) : (
          /* Projects Grid */
          <>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-2">
                Your Projects
              </h2>
              <p className="text-gray-400 text-sm">
                {projects.length} {projects.length === 1 ? 'project' : 'projects'} • Confidential access only
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-g2-dark border border-white/10 rounded-xl p-6 hover:border-g2-gold/30 transition-all"
                >
                  {/* Project Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white flex-1">
                        {project.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    {project.description && (
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    )}
                  </div>

                  {/* Secure Files */}
                  {project.secure_files && project.secure_files.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                        Secure Files
                      </p>
                      <div className="space-y-2">
                        {project.secure_files.map((file, idx) => (
                          <button
                            key={idx}
                            onClick={() => downloadFile(file.path, file.name)}
                            className="w-full flex items-center justify-between px-3 py-2 bg-g2-darker rounded-lg hover:bg-g2-darker/80 transition-colors group"
                          >
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                              <svg className="w-4 h-4 text-g2-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm text-gray-300 truncate">
                                {file.name}
                              </span>
                            </div>
                            <svg className="w-4 h-4 text-gray-500 group-hover:text-g2-gold transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Footer */}
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs text-gray-500">
                      Last updated: {new Date(project.last_updated).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
