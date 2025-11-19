import { notFound } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface Post {
  id: number;
  slug: string;
  title: string;
  summary: string;
  content: string;
  featured_image_url: string | null;
  published_at: string;
  view_count: number;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (error || !data) {
      return null;
    }

    // Increment view count
    await supabase
      .from('posts')
      .update({ view_count: data.view_count + 1 })
      .eq('id', data.id);

    return data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.featured_image_url ? [post.featured_image_url] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  // Simple markdown to HTML converter (basic implementation)
  const formatContent = (markdown: string) => {
    return markdown
      .split('\n')
      .map(line => {
        // Headers
        if (line.startsWith('### ')) {
          return `<h3 class="text-xl font-bold text-g2-gold mt-8 mb-4">${line.slice(4)}</h3>`;
        }
        if (line.startsWith('## ')) {
          return `<h2 class="text-2xl font-bold text-g2-gold mt-10 mb-4">${line.slice(3)}</h2>`;
        }
        if (line.startsWith('# ')) {
          return `<h1 class="text-3xl font-bold text-g2-gold mt-12 mb-6">${line.slice(2)}</h1>`;
        }
        
        // Bold and italic
        let formatted = line
          .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
          .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>');
        
        // Lists
        if (line.startsWith('- ')) {
          return `<li class="ml-6 mb-2 list-disc">${formatted.slice(2)}</li>`;
        }
        if (/^\d+\. /.test(line)) {
          return `<li class="ml-6 mb-2 list-decimal">${formatted.replace(/^\d+\. /, '')}</li>`;
        }
        
        // Links
        formatted = formatted.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-g2-gold hover:text-g2-gold-light underline">$1</a>');
        
        // Empty lines
        if (line.trim() === '') {
          return '<br />';
        }
        
        // Regular paragraphs
        return `<p class="mb-4 leading-relaxed">${formatted}</p>`;
      })
      .join('\n');
  };

  return (
    <main className="min-h-screen bg-g2-darker">
      {/* Header */}
      <div className="border-b border-white/10 bg-g2-dark">
        <div className="container mx-auto px-6 py-8">
          <Link
            href="/briefing"
            className="inline-flex items-center text-gray-400 hover:text-g2-gold transition-colors mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Briefings
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-g2-gold mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <time dateTime={post.published_at}>
              {new Date(post.published_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {post.view_count > 0 && (
              <>
                <span>•</span>
                <span>{post.view_count} views</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.featured_image_url && (
        <div className="w-full h-96 relative border-b border-white/10">
          <img
            src={post.featured_image_url}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <article className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Summary */}
          <div className="text-xl text-gray-300 mb-12 pb-8 border-b border-white/10 italic">
            {post.summary}
          </div>

          {/* Main Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none text-gray-300"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="bg-g2-dark border border-g2-gold/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-g2-gold mb-4">
                About G2 Middle East
              </h3>
              <p className="text-gray-300 mb-6">
                G2 Middle East provides strategic advisory services focused on government relations, 
                cultural intelligence, and high-stakes stakeholder engagement across the Middle East region.
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-g2-gold text-g2-darker font-semibold rounded-lg hover:bg-g2-gold-light transition-colors"
              >
                Learn More About Our Services
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
