/**
 * G2 Middle East Platform: Semantic Search API
 * 
 * Purpose: Vector similarity search using Supabase pgvector
 * 
 * Endpoint: POST /api/search
 * Body: { "query": "What are G2's positions on digital sovereignty?" }
 * 
 * Features:
 *   - Natural language query processing
 *   - OpenAI embedding generation
 *   - Cosine similarity search via Supabase
 *   - Top 3 most relevant document chunks
 *   - Metadata-rich responses
 * 
 * Example Response:
 * {
 *   "success": true,
 *   "query": "digital sovereignty",
 *   "results": [
 *     {
 *       "id": 42,
 *       "content": "Digital sovereignty has emerged...",
 *       "similarity": 0.87,
 *       "metadata": {
 *         "url": "https://www.g2middleeast.com/briefing/...",
 *         "title": "Digital Sovereignty in the GCC",
 *         "date": "2024-01-15"
 *       }
 *     }
 *   ]
 * }
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';

// ========================================
// CONFIGURATION
// ========================================
const EMBEDDING_MODEL = 'text-embedding-3-small';
const MATCH_THRESHOLD = 0.78; // Minimum similarity score (0-1)
const MATCH_COUNT = 3; // Return top 3 results

// ========================================
// ENVIRONMENT VALIDATION
// ========================================
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// ========================================
// TYPES
// ========================================
interface SearchRequest {
  query: string;
}

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
// CORS CONFIGURATION
// ========================================
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// ========================================
// OPTIONS HANDLER (CORS Preflight)
// ========================================
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// ========================================
// POST HANDLER (Semantic Search)
// ========================================
export async function POST(request: NextRequest): Promise<NextResponse<SearchResponse>> {
  const startTime = Date.now();

  try {
    // Validate environment variables
    if (!OPENAI_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          query: '',
          results: [],
          error: 'OpenAI API key not configured',
        },
        { status: 500, headers: corsHeaders }
      );
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
      return NextResponse.json(
        {
          success: false,
          query: '',
          results: [],
          error: 'Supabase credentials not configured',
        },
        { status: 500, headers: corsHeaders }
      );
    }

    // Parse request body
    let body: SearchRequest;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          query: '',
          results: [],
          error: 'Invalid JSON body',
        },
        { status: 400, headers: corsHeaders }
      );
    }

    const { query } = body;

    // Validate query
    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          query: query || '',
          results: [],
          error: 'Query parameter is required and must be a non-empty string',
        },
        { status: 400, headers: corsHeaders }
      );
    }

    const sanitizedQuery = query.trim();

    // Initialize clients
    const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

    // Step 1: Generate embedding for user query
    let queryEmbedding: number[];
    try {
      const embeddingResponse = await openai.embeddings.create({
        model: EMBEDDING_MODEL,
        input: sanitizedQuery,
      });
      const embedding = embeddingResponse.data[0]?.embedding;
      if (!embedding) {
        throw new Error('No embedding returned from OpenAI');
      }
      queryEmbedding = embedding;
    } catch {
      return NextResponse.json(
        {
          success: false,
          query: sanitizedQuery,
          results: [],
          error: 'Failed to generate query embedding',
        },
        { status: 500, headers: corsHeaders }
      );
    }

    // Step 2: Perform vector similarity search
    const { data, error } = await supabase.rpc('match_documents', {
      query_embedding: queryEmbedding,
      match_threshold: MATCH_THRESHOLD,
      match_count: MATCH_COUNT,
    });

    if (error) {
      console.error('Supabase RPC error:', error);
      return NextResponse.json(
        {
          success: false,
          query: sanitizedQuery,
          results: [],
          error: 'Vector search failed',
        },
        { status: 500, headers: corsHeaders }
      );
    }

    // Step 3: Format results
    const results: SearchResult[] = (data || []).map((doc: {
      id: number;
      content: string;
      similarity: number;
      metadata: SearchResult['metadata'];
    }) => ({
      id: doc.id,
      content: doc.content,
      similarity: Math.round(doc.similarity * 100) / 100, // Round to 2 decimals
      metadata: doc.metadata,
    }));

    const processingTimeMs = Date.now() - startTime;

    // Step 4: Return successful response
    return NextResponse.json(
      {
        success: true,
        query: sanitizedQuery,
        results,
        processingTimeMs,
      },
      { status: 200, headers: corsHeaders }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        query: '',
        results: [],
        error: 'Internal server error',
      },
      { status: 500, headers: corsHeaders }
    );
  }
}

// ========================================
// RUNTIME CONFIGURATION
// ========================================
// Use Edge Runtime for ultra-fast responses (optional)
// Uncomment the following line to enable Edge runtime:
// export const runtime = 'edge';
