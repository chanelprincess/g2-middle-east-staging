-- ========================================
-- G2 Middle East Platform: Vector Search Setup
-- ========================================
-- Purpose: Enable semantic search using pgvector and OpenAI embeddings
-- Embedding Model: text-embedding-3-small (1536 dimensions)
-- Similarity Metric: Cosine similarity (<=>)

-- ========================================
-- STEP 1: Enable pgvector Extension
-- ========================================
create extension if not exists vector;

-- ========================================
-- STEP 2: Create Documents Table
-- ========================================
-- This table stores text chunks with their vector embeddings
-- Metadata stores structured information (URL, title, date, etc.)

create table if not exists public.documents (
  id bigserial primary key,
  content text not null,
  metadata jsonb,
  embedding vector(1536),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create indexes for performance
create index if not exists documents_embedding_idx on public.documents 
  using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);

create index if not exists documents_metadata_idx on public.documents 
  using gin (metadata);

-- ========================================
-- STEP 3: Create Match Function
-- ========================================
-- This function performs cosine similarity search
-- Returns top N most similar documents to query embedding
-- Lower distance = higher similarity (cosine distance)

create or replace function match_documents (
  query_embedding vector(1536),
  match_threshold float default 0.78,
  match_count int default 10
)
returns table (
  id bigint,
  content text,
  metadata jsonb,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    documents.id,
    documents.content,
    documents.metadata,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where 1 - (documents.embedding <=> query_embedding) > match_threshold
  order by documents.embedding <=> query_embedding
  limit match_count;
end;
$$;

-- ========================================
-- STEP 4: Row Level Security (RLS)
-- ========================================
-- Enable RLS for security
alter table public.documents enable row level security;

-- Allow public read access (for semantic search)
create policy "Documents are publicly readable"
  on public.documents for select
  to public
  using (true);

-- Only authenticated users can insert/update/delete
create policy "Authenticated users can insert documents"
  on public.documents for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update documents"
  on public.documents for update
  to authenticated
  using (true);

create policy "Authenticated users can delete documents"
  on public.documents for delete
  to authenticated
  using (true);

-- ========================================
-- STEP 5: Helper Views (Optional)
-- ========================================
-- View to check embedding statistics
create or replace view documents_stats as
select
  count(*) as total_documents,
  count(embedding) as documents_with_embeddings,
  count(*) - count(embedding) as documents_without_embeddings,
  pg_size_pretty(pg_total_relation_size('documents')) as table_size
from documents;

-- Grant access to view
grant select on documents_stats to public;

-- ========================================
-- USAGE INSTRUCTIONS
-- ========================================
-- 1. Run this SQL in Supabase SQL Editor
-- 2. Use scripts/generate-embeddings.ts to populate embeddings
-- 3. Query via /api/search endpoint with natural language
-- 4. Example: "What are G2's strategic positions on digital sovereignty?"
