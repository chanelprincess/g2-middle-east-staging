import type { Metadata } from 'next';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';

export const metadata: Metadata = {
  title: 'Strategic Briefings',
  description:
    'Strategic insights on government relations, cultural intelligence, digital sovereignty, and regulatory frameworks across the Middle East.',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Post {
  id: number;
  slug: string;
  title: string;
  summary: string;
  featured_image_url: string | null;
  published_at: string;
  view_count: number;
}

async function getPosts(): Promise<Post[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('posts')
      .select('id, slug, title, summary, featured_image_url, published_at, view_count')
      .eq('is_published', true)
      .not('published_at', 'is', null)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error in getPosts:', error);
    return [];
  }
}

export default async function BriefingPage() {
  const posts = await getPosts();
  return (
    <main className="min-h-screen bg-g2-darker">
      {/* Header */}
      <div className="border-b border-white/10 bg-g2-dark">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-g2-gold mb-4">
            Strategic Briefings
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Strategic insights on government relations, cultural intelligence, digital
            sovereignty, and regulatory frameworks across the Middle East.
          </p>
        </div>
      </div>

      {/* Briefings Grid */}
      <div className="container mx-auto px-6 py-16">
        {posts.length === 0 ? (
          <div className="max-w-5xl mx-auto text-center py-16">
            <div className="inline-block p-6 bg-g2-dark rounded-full mb-6">
              <svg className="w-16 h-16 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              No Briefings Available
            </h2>
            <p className="text-gray-400">
              Intelligence briefings are currently being prepared. Check back soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 max-w-5xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/briefing/${post.slug}`}
                className="block bg-g2-dark border border-white/10 hover:border-g2-gold/30 rounded-2xl p-8 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-g2-gold group-hover:text-g2-gold-light mb-2 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {new Date(post.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{post.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block text-g2-gold group-hover:text-g2-gold-light transition-colors">
                    Read Briefing →
                  </span>
                  {post.view_count > 0 && (
                    <span className="text-xs text-gray-500">
                      {post.view_count} views
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* API Access Note */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-g2-dark border border-g2-gold/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-g2-gold mb-4">
              🤖 AI Agent Access
            </h3>
            <p className="text-gray-300 mb-4">
              These briefings are also available via our Intelligence API for AI agents
              and LLM integrations.
            </p>
            <code className="block bg-g2-darker px-4 py-3 rounded-lg text-sm text-g2-gold">
              GET /api/briefings?topic=digital+sovereignty
            </code>
            <p className="text-sm text-gray-500 mt-4">
              See{' '}
              <a
                href="/ai-plugin.json"
                className="text-g2-gold hover:underline"
                target="_blank"
              >
                ai-plugin.json
              </a>{' '}
              for integration details.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
