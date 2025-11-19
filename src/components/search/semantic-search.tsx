'use client';

/**
 * G2 Middle East Platform: Semantic Search Component
 * 
 * Purpose: Polished UI for natural language search
 * 
 * Features:
 *   - Elegant search bar with placeholder text
 *   - Loading states with animations
 *   - Results displayed as "Insight Cards"
 *   - Error handling with user-friendly messages
 *   - Responsive design
 *   - Accessibility-first implementation
 * 
 * Usage:
 *   import SemanticSearch from '@/components/search/semantic-search';
 *   <SemanticSearch />
 */

import { useState } from 'react';

// ========================================
// TYPES
// ========================================
interface SearchResult {
  id: number;
  content: string;
  similarity: number;
  metadata: {
    url: string;
    title: string;
    date?: string;
    chunkIndex?: number;
    totalChunks?: number;
  };
}

interface SearchResponse {
  success: boolean;
  query: string;
  results: SearchResult[];
  processingTimeMs?: number;
  error?: string;
}

// ========================================
// COMPONENT
// ========================================
export default function SemanticSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // ========================================
  // SEARCH HANDLER
  // ========================================
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) {
      return;
    }

    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setResults([]);

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query.trim() }),
      });

      const data: SearchResponse = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Search failed');
      }

      setResults(data.results);
    } catch {
      setError('Failed to perform search. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // ========================================
  // RENDER
  // ========================================
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about our strategic positions, market insights, regional analysis..."
            className="w-full px-6 py-4 text-lg bg-g2-darker border-2 border-g2-gold/30 rounded-lg 
                     text-white placeholder-gray-500 focus:outline-none focus:border-g2-gold 
                     transition-colors duration-200"
            disabled={isLoading}
            aria-label="Semantic search query"
          />
          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-g2-gold 
                     text-g2-darker font-semibold rounded-md hover:bg-g2-gold-light 
                     transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Submit search"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Searching...</span>
              </span>
            ) : (
              'Search'
            )}
          </button>
        </div>
      </form>

      {/* Loading State */}
      {isLoading && (
        <div className="text-center py-12" role="status" aria-live="polite">
          <div className="inline-block animate-pulse text-g2-gold text-lg">
            Analyzing query with semantic intelligence...
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div
          className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 mb-8"
          role="alert"
          aria-live="assertive"
        >
          <div className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-red-400 font-semibold mb-1">Search Error</h3>
              <p className="text-red-300">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {!isLoading && hasSearched && results.length > 0 && (
        <div className="space-y-6" role="region" aria-label="Search results">
          <h2 className="text-2xl font-bold text-g2-gold mb-4">
            Relevant Insights ({results.length})
          </h2>
          {results.map((result) => (
            <article
              key={result.id}
              className="bg-g2-darker border border-g2-gold/20 rounded-lg p-6 hover:border-g2-gold/40 
                       transition-colors duration-200"
            >
              {/* Metadata Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-g2-gold mb-1">
                    {result.metadata.title}
                  </h3>
                  {result.metadata.date && (
                    <time
                      className="text-sm text-gray-400"
                      dateTime={result.metadata.date}
                    >
                      {new Date(result.metadata.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="px-3 py-1 bg-g2-gold/10 text-g2-gold text-sm font-medium rounded-full"
                    title={`Similarity score: ${(result.similarity * 100).toFixed(0)}%`}
                  >
                    {(result.similarity * 100).toFixed(0)}% match
                  </span>
                </div>
              </div>

              {/* Content Preview */}
              <p className="text-gray-300 leading-relaxed mb-4">
                {result.content.length > 400
                  ? `${result.content.substring(0, 400)}...`
                  : result.content}
              </p>

              {/* Read More Link */}
              <a
                href={result.metadata.url}
                className="inline-flex items-center gap-2 text-g2-gold hover:text-g2-gold-light 
                         font-medium transition-colors duration-200"
                aria-label={`Read full article: ${result.metadata.title}`}
              >
                <span>Read Full Analysis</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      )}

      {/* No Results State */}
      {!isLoading && hasSearched && results.length === 0 && !error && (
        <div
          className="text-center py-12"
          role="status"
          aria-live="polite"
        >
          <svg
            className="w-16 h-16 text-gray-600 mx-auto mb-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-400 mb-2">
            No insights found
          </h3>
          <p className="text-gray-500">
            Try rephrasing your query or exploring different topics.
          </p>
        </div>
      )}

      {/* Initial State (Before First Search) */}
      {!hasSearched && (
        <div className="text-center py-12 space-y-4">
          <div className="text-6xl mb-4" role="img" aria-label="Search icon">
            🔍
          </div>
          <h3 className="text-2xl font-semibold text-g2-gold mb-2">
            Semantic Intelligence Search
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ask questions in natural language. Our AI-powered search understands concepts,
            not just keywords. Try queries like:
          </p>
          <ul className="text-gray-500 space-y-2 max-w-2xl mx-auto text-left">
            <li className="flex items-start gap-2">
              <span className="text-g2-gold mt-1">•</span>
              <span>&ldquo;What are G2&rsquo;s positions on digital sovereignty?&rdquo;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-g2-gold mt-1">•</span>
              <span>&ldquo;How should companies approach market entry in Saudi Arabia?&rdquo;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-g2-gold mt-1">•</span>
              <span>&ldquo;What opportunities exist in UAE fintech ecosystem?&rdquo;</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
