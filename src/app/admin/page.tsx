'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

type Tab = 'projects' | 'posts';

interface Project {
  id: number;
  title: string;
  status: string;
  client_id: string;
  last_updated: string;
  profiles?: {
    email: string;
    company_name: string | null;
  };
}

interface Post {
  id: number;
  slug: string;
  title: string;
  is_published: boolean;
  published_at: string | null;
  view_count: number;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('projects');
  const [projects, setProjects] = useState<Project[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (!loading) {
      if (activeTab === 'projects') {
        fetchProjects();
      } else {
        fetchPosts();
      }
    }
  }, [activeTab, loading]);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push('/login');
        return;
      }

      // Check if user is admin
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();

      if (profileError || profile?.role !== 'admin') {
        router.push('/dashboard');
        return;
      }

      setLoading(false);
    } catch (err) {
      console.error('Auth check error:', err);
      router.push('/login');
    }
  };

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          profiles:client_id (
            email,
            company_name
          )
        `)
        .order('last_updated', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Failed to load projects');
    }
  };

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('id, slug, title, is_published, published_at, view_count')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to load posts');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-g2-darker flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-g2-gold"></div>
          <p className="mt-4 text-gray-400">Loading admin dashboard...</p>
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
                Admin Dashboard
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Content Management System
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="text-gray-400 hover:text-g2-gold transition-colors text-sm"
              >
                Client View
              </Link>
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

      {/* Tab Navigation */}
      <div className="bg-g2-dark border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('projects')}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === 'projects'
                  ? 'border-g2-gold text-g2-gold'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-medium">Projects</span>
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-white/10">
                  {projects.length}
                </span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('posts')}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === 'posts'
                  ? 'border-g2-gold text-g2-gold'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <span className="font-medium">Blog Posts</span>
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-white/10">
                  {posts.length}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {error && (
          <div className="mb-6 bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400">
            {error}
          </div>
        )}

        {activeTab === 'projects' ? (
          /* Projects Tab */
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Client Projects
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Manage secure client project files and information
                </p>
              </div>
              <button
                onClick={() => router.push('/admin/projects/create')}
                className="px-4 py-2 bg-g2-gold text-g2-darker font-medium rounded-lg hover:bg-g2-gold-light transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create Project
              </button>
            </div>

            {projects.length === 0 ? (
              <div className="text-center py-16 bg-g2-dark rounded-xl border border-white/10">
                <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-400">No projects created yet</p>
              </div>
            ) : (
              <div className="bg-g2-dark rounded-xl border border-white/10 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Client
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Project Title
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Last Updated
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {projects.map((project) => (
                      <tr key={project.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-white">
                              {project.profiles?.company_name || 'Unknown'}
                            </div>
                            <div className="text-xs text-gray-500">
                              {project.profiles?.email}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-white">
                          {project.title}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            project.status === 'Active'
                              ? 'bg-green-500/10 text-green-400'
                              : project.status === 'Pending'
                              ? 'bg-yellow-500/10 text-yellow-400'
                              : 'bg-blue-500/10 text-blue-400'
                          }`}>
                            {project.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">
                          {new Date(project.last_updated).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => router.push(`/admin/projects/${project.id}`)}
                            className="text-g2-gold hover:text-g2-gold-light text-sm font-medium"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : (
          /* Posts Tab */
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Blog Posts
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Manage public intelligence briefings and articles
                </p>
              </div>
              <button
                onClick={() => router.push('/admin/posts/create')}
                className="px-4 py-2 bg-g2-gold text-g2-darker font-medium rounded-lg hover:bg-g2-gold-light transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create Post
              </button>
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-16 bg-g2-dark rounded-xl border border-white/10">
                <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <p className="text-gray-400">No blog posts created yet</p>
              </div>
            ) : (
              <div className="bg-g2-dark rounded-xl border border-white/10 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Slug
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Views
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {posts.map((post) => (
                      <tr key={post.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-white">
                          {post.title}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400 font-mono">
                          {post.slug}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            post.is_published
                              ? 'bg-green-500/10 text-green-400'
                              : 'bg-gray-500/10 text-gray-400'
                          }`}>
                            {post.is_published ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">
                          {post.view_count.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-right space-x-3">
                          <Link
                            href={`/briefing/${post.slug}`}
                            className="text-gray-400 hover:text-g2-gold text-sm"
                            target="_blank"
                          >
                            View
                          </Link>
                          <button
                            onClick={() => router.push(`/admin/posts/${post.id}`)}
                            className="text-g2-gold hover:text-g2-gold-light text-sm font-medium"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
