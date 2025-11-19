-- ================================================
-- G2 Middle East - Phase 6: Unified CMS
-- Dual-Storage Architecture + Public/Private Content
-- ================================================

-- ================================================
-- SECTION 1: USER PROFILES
-- ================================================

-- Create profiles table linked to auth.users
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  company_name text,
  role text not null default 'client' check (role in ('client', 'admin')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create index on email for faster lookups
create index if not exists profiles_email_idx on public.profiles(email);

-- Enable Row Level Security
alter table public.profiles enable row level security;

-- RLS Policy: Users can read their own profile
create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

-- RLS Policy: Admins can read all profiles
create policy "Admins can read all profiles"
  on public.profiles for select
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- RLS Policy: Users can update their own profile
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Function: Auto-create profile on user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, role)
  values (
    new.id,
    new.email,
    'client' -- Default role is client
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger: Execute on auth.users insert
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ================================================
-- SECTION 2: PRIVATE PROJECTS (Client Portal)
-- ================================================

-- Create projects table for secure client content
create table if not exists public.projects (
  id bigserial primary key,
  client_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  description text,
  status text not null default 'Active' check (status in ('Active', 'Pending', 'Completed')),
  cover_image_path text, -- Path in secure-assets bucket
  secure_files jsonb default '[]'::jsonb, -- Array of {name, path, size, type}
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  last_updated timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create indexes
create index if not exists projects_client_id_idx on public.projects(client_id);
create index if not exists projects_status_idx on public.projects(status);

-- Enable Row Level Security
alter table public.projects enable row level security;

-- RLS Policy: Clients can read their own projects
create policy "Clients can read own projects"
  on public.projects for select
  using (auth.uid() = client_id);

-- RLS Policy: Admins can read all projects
create policy "Admins can read all projects"
  on public.projects for select
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- RLS Policy: Admins can insert projects
create policy "Admins can insert projects"
  on public.projects for insert
  with check (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- RLS Policy: Admins can update projects
create policy "Admins can update projects"
  on public.projects for update
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- RLS Policy: Admins can delete projects
create policy "Admins can delete projects"
  on public.projects for delete
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- ================================================
-- SECTION 3: PUBLIC BLOG POSTS
-- ================================================

-- Create posts table for public blog content
create table if not exists public.posts (
  id bigserial primary key,
  slug text not null unique,
  title text not null,
  summary text not null,
  content text not null, -- Full article content (Markdown or HTML)
  author_name text default 'G2 Middle East Advisory',
  featured_image_url text, -- Public URL from public-assets bucket
  published_at timestamp with time zone default timezone('utc'::text, now()) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create indexes
create index if not exists posts_slug_idx on public.posts(slug);
create index if not exists posts_published_at_idx on public.posts(published_at desc);

-- Enable Row Level Security
alter table public.posts enable row level security;

-- RLS Policy: Public read access (no authentication required)
create policy "Public posts are viewable by everyone"
  on public.posts for select
  using (true); -- Anyone can read

-- RLS Policy: Admins can insert posts
create policy "Admins can insert posts"
  on public.posts for insert
  with check (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- RLS Policy: Admins can update posts
create policy "Admins can update posts"
  on public.posts for update
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- RLS Policy: Admins can delete posts
create policy "Admins can delete posts"
  on public.posts for delete
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- ================================================
-- SECTION 4: STORAGE BUCKETS SETUP
-- ================================================

-- Note: Storage buckets must be created via Supabase Dashboard or API
-- This is documentation for manual setup in Supabase Storage UI:

-- BUCKET: public-assets
-- Purpose: Blog images, team photos, social cards
-- Settings:
--   - Public: YES
--   - File Size Limit: 10 MB
--   - Allowed MIME types: image/*, video/*

-- BUCKET: secure-assets
-- Purpose: Confidential project files, PDFs, secure images
-- Settings:
--   - Public: NO
--   - File Size Limit: 50 MB
--   - Allowed MIME types: */* (all types)

-- ================================================
-- SECTION 5: STORAGE POLICIES (RLS for Files)
-- ================================================

-- Note: These policies are applied in Supabase Dashboard under Storage > Policies

-- PUBLIC-ASSETS BUCKET POLICIES:
-- Policy 1: Anyone can read public assets
-- Policy 2: Admins can upload public assets
-- Policy 3: Admins can delete public assets

-- SECURE-ASSETS BUCKET POLICIES:
-- Policy 1: Authenticated users can read their own client's files (via project client_id)
-- Policy 2: Admins can read all secure assets
-- Policy 3: Admins can upload secure assets
-- Policy 4: Admins can delete secure assets

-- ================================================
-- SECTION 6: HELPER FUNCTIONS
-- ================================================

-- Function: Check if user is admin
create or replace function public.is_admin()
returns boolean as $$
begin
  return exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
end;
$$ language plpgsql security definer;

-- Function: Get user's role
create or replace function public.get_user_role()
returns text as $$
begin
  return (
    select role from public.profiles
    where id = auth.uid()
  );
end;
$$ language plpgsql security definer;

-- ================================================
-- SECTION 7: SEED DATA (Initial Blog Posts)
-- ================================================

-- Insert existing briefings as blog posts
insert into public.posts (slug, title, summary, content, published_at)
values
  (
    'digital-sovereignty-gcc',
    'Digital Sovereignty in the GCC',
    'Exploring data localization policies and their impact on international business operations in Gulf nations.',
    E'# Digital Sovereignty in the GCC\n\nDigital sovereignty has emerged as a critical priority for Gulf Cooperation Council (GCC) nations as they seek to balance technological advancement with national security imperatives.\n\n## Data Localization Mandates\n\nSeveral GCC countries have implemented or are considering data localization requirements that mandate certain categories of data to be stored within national borders. Saudi Arabia''s Personal Data Protection Law (PDPL) and the UAE''s data protection regulations represent significant shifts in regional data governance.\n\n## Impact on Business Operations\n\nFor international firms operating in the region, these requirements create new compliance obligations:\n\n- Infrastructure investments in local data centers\n- Revised data transfer protocols\n- Enhanced security certifications\n- Local partnerships for data hosting\n\n## Strategic Considerations\n\nOrganizations must adopt a proactive approach to digital sovereignty:\n\n1. **Regulatory Mapping**: Understanding jurisdiction-specific requirements\n2. **Technical Architecture**: Building compliant infrastructure\n3. **Government Relations**: Engaging with regulators early\n4. **Risk Assessment**: Evaluating cross-border data flow implications\n\n## G2 Advisory Approach\n\nOur firm specializes in navigating these complex regulatory environments, providing:\n\n- Regulatory intelligence and early warning systems\n- Stakeholder engagement with government entities\n- Compliance framework development\n- Strategic positioning for evolving requirements\n\nThe digital sovereignty landscape in the GCC continues to evolve. Organizations that anticipate these changes and build adaptive compliance frameworks will maintain competitive advantage in the region.',
    '2024-01-15 10:00:00+00'
  ),
  (
    'cultural-intelligence-market-entry',
    'Cultural Intelligence in Market Entry',
    'Understanding relationship-based business practices and the critical role of cultural intelligence in Middle East market success.',
    E'# Cultural Intelligence in Middle East Market Entry\n\nSuccessful market entry in the Middle East requires more than capital and technology—it demands deep cultural intelligence and relationship-building capabilities.\n\n## The Relationship Economy\n\nMiddle Eastern business culture operates fundamentally differently from Western transactional models:\n\n- **Trust Precedes Business**: Relationships are established before commercial discussions\n- **Long-Term Orientation**: Quick wins are viewed with skepticism\n- **Network Access**: Success depends on who you know, not just what you offer\n- **Personal Relationships**: Business is conducted person-to-person, not company-to-company\n\n## Cultural Competency Requirements\n\nOrganizations entering the region must develop specific capabilities:\n\n### 1. Stakeholder Mapping\n- Identifying key decision-makers and influencers\n- Understanding family business structures\n- Recognizing informal power networks\n\n### 2. Communication Protocols\n- Indirect communication styles\n- Importance of face-to-face meetings\n- Role of hospitality in relationship building\n\n### 3. Negotiation Dynamics\n- Patience in deal-making processes\n- Flexibility in commercial terms\n- Understanding of honor and reputation\n\n## Common Entry Mistakes\n\nWe observe recurring failures among organizations lacking cultural intelligence:\n\n1. **Rushing the Process**: Expecting Western-style timelines\n2. **Over-Reliance on Digital**: Underestimating face-to-face interaction\n3. **Ignoring Local Partners**: Attempting direct market entry without local champions\n4. **Cultural Insensitivity**: Missing nuances in business etiquette\n\n## G2 Advisory Value Proposition\n\nOur firm bridges the cultural gap through:\n\n- **Network Access**: Decades of relationship capital in the region\n- **Cultural Training**: Preparing teams for Middle Eastern business environments\n- **Stakeholder Engagement**: Managing government and private sector relationships\n- **Risk Mitigation**: Avoiding cultural missteps that damage reputation\n\nMarket entry success in the Middle East is ultimately about cultural fluency. Organizations that invest in understanding and respecting local business culture achieve sustainable competitive advantage.',
    '2024-02-20 10:00:00+00'
  )
on conflict (slug) do nothing;

-- ================================================
-- COMPLETION MESSAGE
-- ================================================

-- Display success message
do $$
begin
  raise notice '✅ Phase 6 Migration Complete: Unified CMS with Dual Storage';
  raise notice '📊 Tables Created: profiles, projects, posts';
  raise notice '🔒 RLS Policies Applied: Role-based access control';
  raise notice '📝 Seed Data: 2 blog posts inserted';
  raise notice '';
  raise notice '⚠️  MANUAL STEPS REQUIRED:';
  raise notice '1. Create storage buckets in Supabase Dashboard:';
  raise notice '   - public-assets (Public: ON)';
  raise notice '   - secure-assets (Public: OFF)';
  raise notice '2. Apply storage policies (see SECTION 5 comments above)';
  raise notice '3. Create your first admin user via Supabase Auth';
  raise notice '';
end $$;
