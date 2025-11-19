-- =====================================================
-- Phase 6: Unified CMS System
-- Public Blog Posts + Private Client Projects
-- =====================================================

-- =====================================================
-- STEP 1: PROFILES TABLE (User Management)
-- =====================================================

-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  company_name TEXT,
  role TEXT NOT NULL DEFAULT 'client' CHECK (role IN ('client', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create function to auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role)
  VALUES (NEW.id, NEW.email, 'client');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger on auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Update timestamp function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at trigger to profiles
DROP TRIGGER IF EXISTS update_profiles_updated_at ON public.profiles;
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =====================================================
-- STEP 2: PROJECTS TABLE (Private Client Projects)
-- =====================================================

CREATE TABLE IF NOT EXISTS public.projects (
  id BIGSERIAL PRIMARY KEY,
  client_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'Active' CHECK (status IN ('Active', 'Pending', 'Completed')),
  cover_image_path TEXT, -- Path in secure-assets bucket
  secure_files JSONB DEFAULT '[]'::jsonb, -- Array of {name, path, size, uploaded_at}
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_updated TIMESTAMPTZ DEFAULT NOW()
);

-- Add index for client queries
CREATE INDEX IF NOT EXISTS idx_projects_client_id ON public.projects(client_id);
CREATE INDEX IF NOT EXISTS idx_projects_status ON public.projects(status);

-- Add updated_at trigger to projects
DROP TRIGGER IF EXISTS update_projects_updated_at ON public.projects;
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =====================================================
-- STEP 3: POSTS TABLE (Public Blog Posts)
-- =====================================================

CREATE TABLE IF NOT EXISTS public.posts (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  content TEXT NOT NULL, -- Markdown content
  featured_image_url TEXT, -- Public URL from public-assets bucket
  author_id UUID REFERENCES public.profiles(id),
  published_at TIMESTAMPTZ,
  is_published BOOLEAN DEFAULT false,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes for blog queries
CREATE INDEX IF NOT EXISTS idx_posts_slug ON public.posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_published ON public.posts(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_posts_author ON public.posts(author_id);

-- Add updated_at trigger to posts
DROP TRIGGER IF EXISTS update_posts_updated_at ON public.posts;
CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON public.posts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =====================================================
-- STEP 4: ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- PROFILES POLICIES
-- =====================================================

-- Users can read their own profile
CREATE POLICY "Users can read own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Admins can read all profiles
CREATE POLICY "Admins can read all profiles"
  ON public.profiles
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Users can update their own profile (except role)
CREATE POLICY "Users can update own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id 
    AND role = (SELECT role FROM public.profiles WHERE id = auth.uid())
  );

-- Admins can update any profile
CREATE POLICY "Admins can update any profile"
  ON public.profiles
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can insert profiles
CREATE POLICY "Admins can insert profiles"
  ON public.profiles
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- =====================================================
-- PROJECTS POLICIES (Private - Client Access Only)
-- =====================================================

-- Clients can read their own projects
CREATE POLICY "Clients can read own projects"
  ON public.projects
  FOR SELECT
  USING (
    auth.uid() = client_id
  );

-- Admins can read all projects
CREATE POLICY "Admins can read all projects"
  ON public.projects
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can insert projects
CREATE POLICY "Admins can insert projects"
  ON public.projects
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can update projects
CREATE POLICY "Admins can update projects"
  ON public.projects
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can delete projects
CREATE POLICY "Admins can delete projects"
  ON public.projects
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- =====================================================
-- POSTS POLICIES (Public - Blog Content)
-- =====================================================

-- Anyone can read published posts (including anonymous users)
CREATE POLICY "Anyone can read published posts"
  ON public.posts
  FOR SELECT
  USING (is_published = true AND published_at IS NOT NULL);

-- Admins can read all posts (including drafts)
CREATE POLICY "Admins can read all posts"
  ON public.posts
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can insert posts
CREATE POLICY "Admins can insert posts"
  ON public.posts
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can update posts
CREATE POLICY "Admins can update posts"
  ON public.posts
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can delete posts
CREATE POLICY "Admins can delete posts"
  ON public.posts
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- =====================================================
-- STEP 5: STORAGE BUCKETS SETUP
-- =====================================================

-- Create public-assets bucket (for blog images, social cards)
INSERT INTO storage.buckets (id, name, public)
VALUES ('public-assets', 'public-assets', true)
ON CONFLICT (id) DO NOTHING;

-- Create secure-assets bucket (for private client files)
INSERT INTO storage.buckets (id, name, public)
VALUES ('secure-assets', 'secure-assets', false)
ON CONFLICT (id) DO NOTHING;

-- =====================================================
-- STORAGE POLICIES: public-assets
-- =====================================================

-- Anyone can read from public-assets
CREATE POLICY "Public assets are publicly accessible"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'public-assets');

-- Only admins can upload to public-assets
CREATE POLICY "Admins can upload to public-assets"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'public-assets'
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can update public-assets
CREATE POLICY "Admins can update public-assets"
  ON storage.objects
  FOR UPDATE
  USING (
    bucket_id = 'public-assets'
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can delete from public-assets
CREATE POLICY "Admins can delete from public-assets"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'public-assets'
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- =====================================================
-- STORAGE POLICIES: secure-assets
-- =====================================================

-- Authenticated users can read their own project files
-- (We'll use signed URLs in the app for better control)
CREATE POLICY "Users can read secure assets for their projects"
  ON storage.objects
  FOR SELECT
  USING (
    bucket_id = 'secure-assets'
    AND (
      -- User is the project owner
      EXISTS (
        SELECT 1 FROM public.projects
        WHERE client_id = auth.uid()
        AND (
          cover_image_path = storage.objects.name
          OR secure_files::text LIKE '%' || storage.objects.name || '%'
        )
      )
      -- Or user is an admin
      OR EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin'
      )
    )
  );

-- Only admins can upload to secure-assets
CREATE POLICY "Admins can upload to secure-assets"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'secure-assets'
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can update secure-assets
CREATE POLICY "Admins can update secure-assets"
  ON storage.objects
  FOR UPDATE
  USING (
    bucket_id = 'secure-assets'
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can delete from secure-assets
CREATE POLICY "Admins can delete from secure-assets"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'secure-assets'
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- =====================================================
-- STEP 6: SEED DATA (Migrate Existing Blog Posts)
-- =====================================================

-- Insert existing blog posts from Phase 4
INSERT INTO public.posts (
  slug,
  title,
  summary,
  content,
  is_published,
  published_at
) VALUES
(
  'digital-sovereignty-gcc',
  'Digital Sovereignty in the GCC',
  'How Gulf nations are redefining data governance and technological independence in an interconnected world.',
  E'# Digital Sovereignty in the GCC\n\nDigital sovereignty has emerged as a defining principle for GCC nations navigating the complexities of the global digital economy. This intelligence brief examines how governments across the Gulf are establishing frameworks for data localization, cloud infrastructure, and technological autonomy.\n\n## Key Developments\n\n### Data Localization Requirements\nSaudi Arabia and the UAE have implemented comprehensive data residency requirements for critical sectors including finance, healthcare, and government services. These mandates require certain categories of data to be stored and processed within national borders.\n\n### National Cloud Strategies\nThe establishment of sovereign cloud infrastructure represents a significant investment in technological independence. G2 Middle East tracks major initiatives including:\n\n- Saudi Arabia''s NDMC (National Data Management Office)\n- UAE''s Government Cloud First Policy\n- Qatar''s National Cloud Computing Strategy\n\n### Implications for Market Entry\n\nForeign technology companies must navigate these evolving requirements while maintaining global service standards. Success requires:\n\n1. **Local infrastructure investment** - Establishing in-country data centers\n2. **Regulatory compliance frameworks** - Adapting to jurisdiction-specific requirements  \n3. **Strategic partnerships** - Engaging with local technology providers\n\n## Strategic Recommendations\n\nOrganizations entering GCC markets should conduct thorough assessments of data sovereignty requirements specific to their sector and operational model. G2 Middle East provides specialized guidance on navigating these complex regulatory environments.',
  true,
  NOW() - INTERVAL '30 days'
),
(
  'cultural-intelligence-market-entry',
  'Cultural Intelligence in Market Entry',
  'Why cultural fluency, not just language proficiency, determines success in Middle Eastern business relationships.',
  E'# Cultural Intelligence in Market Entry\n\nCultural intelligence represents the critical differentiator between market entry attempts that succeed and those that fail in the Middle East. This brief explores the nuanced relationship dynamics that govern business development across the region.\n\n## The Relationship-First Paradigm\n\n### Beyond Transactional Engagement\nMiddle Eastern business culture operates on fundamentally different premises than Western markets. Success requires understanding that:\n\n- **Trust precedes transactions** - Business relationships are built over extended periods\n- **Personal connections matter** - Individual relationships often supersede institutional ones  \n- **Patience is strategic** - Quick wins are rare; sustainable success takes time\n\n### Navigating Decision-Making Structures\n\nDecision-making in GCC organizations often involves:\n\n1. **Family business dynamics** - Understanding ownership and influence structures\n2. **Government relationships** - Recognizing the public-private sector interface\n3. **Regional networks** - Leveraging connections across Gulf markets\n\n## Common Pitfalls\n\nForeign firms frequently underestimate the importance of:\n\n- **Local representation** - Having credible, well-connected regional partners\n- **Long-term commitment signals** - Demonstrating sustained regional focus\n- **Cultural adaptation** - Adjusting business practices to local norms\n\n## G2 Middle East Approach\n\nOur methodology combines:\n\n- **Network activation** - Connecting clients with decision-makers\n- **Cultural translation** - Bridging communication styles and expectations\n- **Strategic patience** - Managing realistic timeline expectations\n\n## Case Study Insights\n\nSuccessful market entries in our portfolio share common characteristics:\n\n- Senior leadership engagement in relationship building\n- Multi-year commitment horizons\n- Investment in understanding local context\n- Flexibility in business model adaptation\n\n---\n\n*For confidential consultation on market entry strategy, contact G2 Middle East advisory.*',
  true,
  NOW() - INTERVAL '15 days'
);

-- =====================================================
-- STEP 7: HELPER FUNCTIONS
-- =====================================================

-- Function to get signed URL for secure asset (call from application)
CREATE OR REPLACE FUNCTION public.get_secure_asset_url(
  file_path TEXT,
  expires_in INTEGER DEFAULT 3600
)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  signed_url TEXT;
BEGIN
  -- Verify user has access to this file
  IF NOT EXISTS (
    SELECT 1 FROM public.projects
    WHERE client_id = auth.uid()
    AND (
      cover_image_path = file_path
      OR secure_files::text LIKE '%' || file_path || '%'
    )
  ) AND NOT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  ) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  -- This is a placeholder - actual signed URL generation happens in application code
  RETURN 'Use supabase.storage.from(''secure-assets'').createSignedUrl()';
END;
$$;

-- =====================================================
-- VERIFICATION QUERIES
-- =====================================================

-- Run these to verify setup:
-- SELECT * FROM public.profiles;
-- SELECT * FROM public.projects;
-- SELECT * FROM public.posts WHERE is_published = true;
-- SELECT * FROM storage.buckets;
