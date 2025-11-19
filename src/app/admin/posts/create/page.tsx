'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { uploadPublicAsset, validateFileSize } from '@/utils/storage';

export const dynamic = 'force-dynamic';

export default function CreatePostPage() {
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [featuredImageUrl, setFeaturedImageUrl] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [uploading, setUploading] = useState(false);
  
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();
  const supabase = createClient();

  // Auto-generate slug from title
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    
    // Auto-generate slug if it hasn't been manually edited
    if (!slug || slug === generateSlug(title)) {
      setSlug(generateSlug(newTitle));
    }
  };

  const handleImageSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate
    if (!validateFileSize(file, 5)) {
      alert('Image must be less than 5MB');
      return;
    }
    if (!file.type.startsWith('image/')) {
      alert('File must be an image');
      return;
    }

    setFeaturedImage(file);
    
    // Upload immediately
    setUploading(true);
    try {
      const result = await uploadPublicAsset(file, 'blog');
      if (!result.success) {
        throw new Error(result.error);
      }
      setFeaturedImageUrl(result.url!);
    } catch (err) {
      alert('Failed to upload image: ' + (err instanceof Error ? err.message : 'Unknown error'));
      setFeaturedImage(null);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      // Validate required fields
      if (!slug || !title || !summary || !content) {
        throw new Error('Please fill in all required fields');
      }

      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      // Create post in database
      const { error: insertError } = await supabase
        .from('posts')
        .insert({
          slug,
          title,
          summary,
          content,
          featured_image_url: featuredImageUrl || null,
          author_id: user.id,
          is_published: isPublished,
          published_at: isPublished ? new Date().toISOString() : null
        });

      if (insertError) {
        if (insertError.code === '23505') {
          throw new Error('A post with this slug already exists');
        }
        throw insertError;
      }

      // Success - redirect to admin dashboard
      router.push('/admin?tab=posts');
      router.refresh();
    } catch (err) {
      console.error('Error creating post:', err);
      setError(err instanceof Error ? err.message : 'Failed to create post');
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-g2-darker">
      {/* Header */}
      <header className="bg-g2-dark border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-g2-gold">
                Create New Blog Post
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                Write a new intelligence briefing
              </p>
            </div>
            <Link
              href="/admin"
              className="px-4 py-2 text-sm border border-white/10 rounded-lg text-gray-300 hover:bg-white/5 transition-colors"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {error && (
            <div className="mb-6 bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title & Slug */}
            <div className="bg-g2-dark border border-white/10 rounded-xl p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Post Title <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  required
                  placeholder="e.g., Digital Sovereignty in the GCC"
                  className="w-full px-4 py-3 bg-g2-darker border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-g2-gold transition-colors text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  URL Slug <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  required
                  placeholder="digital-sovereignty-gcc"
                  className="w-full px-4 py-3 bg-g2-darker border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-g2-gold transition-colors font-mono text-sm"
                />
                <p className="mt-2 text-xs text-gray-500">
                  URL: /briefing/{slug || 'your-slug-here'}
                </p>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-g2-dark border border-white/10 rounded-xl p-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Summary <span className="text-red-400">*</span>
              </label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                required
                rows={3}
                placeholder="Brief summary shown in blog listing (2-3 sentences)"
                maxLength={200}
                className="w-full px-4 py-3 bg-g2-darker border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-g2-gold transition-colors resize-none"
              />
              <p className="mt-2 text-xs text-gray-500">
                {summary.length}/200 characters
              </p>
            </div>

            {/* Content (Markdown) */}
            <div className="bg-g2-dark border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-300">
                  Content <span className="text-red-400">*</span>
                </label>
                <span className="text-xs text-gray-500">Markdown supported</span>
              </div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={20}
                placeholder="# Your Heading&#10;&#10;Write your content here. **Markdown** is supported!&#10;&#10;## Subheading&#10;&#10;- Bullet points&#10;- Are supported&#10;&#10;1. As are&#10;2. Numbered lists"
                className="w-full px-4 py-3 bg-g2-darker border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-g2-gold transition-colors resize-none font-mono text-sm"
              />
              <div className="mt-3 p-3 bg-g2-darker/50 rounded-lg border border-white/5">
                <p className="text-xs text-gray-500 mb-2">
                  <strong className="text-gray-400">Markdown Quick Reference:</strong>
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li><code className="text-g2-gold"># Heading 1</code></li>
                  <li><code className="text-g2-gold">## Heading 2</code></li>
                  <li><code className="text-g2-gold">**bold**</code> or <code className="text-g2-gold">*italic*</code></li>
                  <li><code className="text-g2-gold">- Bullet point</code></li>
                  <li><code className="text-g2-gold">1. Numbered list</code></li>
                  <li><code className="text-g2-gold">[Link text](https://url.com)</code></li>
                </ul>
              </div>
            </div>

            {/* Featured Image */}
            <div className="bg-g2-dark border border-white/10 rounded-xl p-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Featured Image (Optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                disabled={uploading}
                className="w-full px-4 py-3 bg-g2-darker border border-white/10 rounded-lg text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-g2-gold file:text-g2-darker file:font-medium hover:file:bg-g2-gold-light transition-colors disabled:opacity-50"
              />
              
              {uploading && (
                <div className="mt-3 flex items-center gap-2 text-gray-400">
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-g2-gold"></div>
                  <span className="text-sm">Uploading...</span>
                </div>
              )}

              {featuredImageUrl && (
                <div className="mt-4">
                  <img
                    src={featuredImageUrl}
                    alt="Featured"
                    className="w-full h-48 object-cover rounded-lg border border-white/10"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setFeaturedImage(null);
                      setFeaturedImageUrl('');
                    }}
                    className="mt-2 text-sm text-red-400 hover:text-red-300"
                  >
                    Remove Image
                  </button>
                </div>
              )}
              
              <p className="mt-2 text-xs text-gray-500">
                Recommended: 1200x630px • Max size: 5MB • Formats: JPG, PNG, WebP
              </p>
            </div>

            {/* Publishing Options */}
            <div className="bg-g2-dark border border-white/10 rounded-xl p-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isPublished}
                  onChange={(e) => setIsPublished(e.target.checked)}
                  className="w-5 h-5 bg-g2-darker border-2 border-white/10 rounded checked:bg-g2-gold checked:border-g2-gold focus:outline-none focus:ring-2 focus:ring-g2-gold/50 transition-colors"
                />
                <div>
                  <span className="text-sm font-medium text-white">
                    Publish Immediately
                  </span>
                  <p className="text-xs text-gray-500 mt-1">
                    {isPublished 
                      ? 'Post will be visible to the public immediately'
                      : 'Save as draft (not visible to public)'}
                  </p>
                </div>
              </label>
            </div>

            {/* Submit Buttons */}
            <div className="flex items-center justify-end gap-4">
              <Link
                href="/admin"
                className="px-6 py-3 border border-white/10 rounded-lg text-gray-300 hover:bg-white/5 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={submitting || !slug || !title || !summary || !content}
                className="px-6 py-3 bg-g2-gold text-g2-darker font-semibold rounded-lg hover:bg-g2-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting 
                  ? 'Creating...' 
                  : isPublished 
                  ? 'Publish Post' 
                  : 'Save Draft'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
