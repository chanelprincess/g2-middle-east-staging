import type { Metadata } from 'next';
import SemanticSearch from '@/components/search/semantic-search';

export const metadata: Metadata = {
  title: 'Semantic Search | G2 Middle East',
  description: 'Search our strategic insights using natural language AI-powered semantic search.',
};

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-g2-dark">
      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-g2-gold mb-4">
            Intelligence Search
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Search our strategic briefings and market intelligence using natural language.
            Our AI-powered semantic search understands concepts, not just keywords.
          </p>
        </header>

        {/* Search Component */}
        <SemanticSearch />

        {/* Information Section */}
        <section className="mt-16 pt-16 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4" role="img" aria-label="Brain icon">
                🧠
              </div>
              <h3 className="text-xl font-semibold text-g2-gold mb-2">
                Concept Understanding
              </h3>
              <p className="text-gray-400">
                Our search understands meaning, not just exact word matches
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4" role="img" aria-label="Lightning icon">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-g2-gold mb-2">
                Instant Results
              </h3>
              <p className="text-gray-400">
                Vector-powered search delivers relevant insights in milliseconds
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4" role="img" aria-label="Target icon">
                🎯
              </div>
              <h3 className="text-xl font-semibold text-g2-gold mb-2">
                Precision Matching
              </h3>
              <p className="text-gray-400">
                Similarity scores ensure you get the most relevant content
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
