# G2 Middle East - Next.js 14+ Platform

## 🎯 Project Overview

**Agentic Platform** - Built for AI optimization, semantic web compliance, and vector search capabilities.

### Migration Strategy
- **Platform**: Next.js 14+ (App Router) + Vercel Edge Functions
- **Database**: Supabase PostgreSQL with pgvector
- **Authentication**: Supabase Auth (Row Level Security)
- **Storage**: Supabase Storage
- **Styling**: Tailwind CSS (PostCSS build-time generation)

### Reference Implementation
- **Location**: `/home/user/webapp` (Hono/Cloudflare)
- **Status**: Live production site (kept for content migration reference)
- **Strategy**: Parallel development, zero-downtime migration

---

## 📋 Phase 1 Completion Status ✅

### ✅ Infrastructure & Core Web Vitals

1. **Next.js 14+ App Router** - Initialized with latest version
2. **TypeScript Strict Mode** - No `any` types allowed
3. **Tailwind CSS (PostCSS)** - Build-time generation (0ms blocking)
4. **Proper Route Structure** - All routes return correct HTTP status codes
5. **Supabase Integration** - Client configured for future auth/database
6. **Image Assets** - All WebP files copied (5.3MB total)
7. **Vercel Configuration** - Deployment ready with security headers

### 🎯 Routes Implemented

| Route | Status | HTTP Code | Description |
|-------|--------|-----------|-------------|
| `/` | ✅ Live | 200 | Homepage with semantic H1 |
| `/briefing` | 🚧 Under Construction | 503 | Coming Soon page |
| `/projects` | 🚧 Under Construction | 503 | Coming Soon page |
| `/team` | 🚧 Under Construction | 503 | Coming Soon page |
| `/team/tim-jacobs` | 🚧 Under Construction | 503 | Coming Soon page |

**Key Fix**: Under construction pages now return **503 Service Unavailable** instead of 200 OK (prevents "Soft 404s").

### 🚀 Core Web Vitals Target

- **FCP (First Contentful Paint)**: Target < 1.8s
- **LCP (Largest Contentful Paint)**: Target < 2.5s
- **CLS (Cumulative Layout Shift)**: Target < 0.1
- **TBT (Total Blocking Time)**: **0ms** (no CDN Tailwind script)

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.5.6** (App Router)
- **React 19.0.0**
- **TypeScript 5.7.2** (Strict mode)
- **Tailwind CSS 3.4.17** (PostCSS)

### Backend & Services
- **Supabase** (PostgreSQL + pgvector)
  - Authentication (Row Level Security)
  - Database (with vector search capability)
  - Storage (file uploads)

### Deployment
- **Vercel Edge Functions**
- **Region**: US East (iad1)

---

## 📁 Project Structure

```
g2-next-platform/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Homepage (semantic H1)
│   │   ├── globals.css         # Tailwind directives + sr-only
│   │   ├── briefing/page.tsx   # 503 Under construction
│   │   ├── projects/page.tsx   # 503 Under construction
│   │   └── team/
│   │       ├── page.tsx        # 503 Under construction
│   │       └── tim-jacobs/page.tsx  # 503 Under construction
│   ├── components/
│   │   └── UnderConstruction.tsx    # Reusable 503 component
│   └── lib/
│       └── supabase.ts         # Supabase client config
├── public/
│   └── assets/
│       └── images/             # 6 WebP files (5.3MB)
├── package.json
├── tsconfig.json               # Strict TypeScript config
├── tailwind.config.ts          # Custom G2 colors
├── postcss.config.mjs          # PostCSS with Tailwind
├── next.config.ts              # Next.js configuration
├── vercel.json                 # Deployment config
└── .env.local.example          # Environment variables template
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd /home/user/g2-next-platform
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=https://www.g2middleeast.com
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
```

### 5. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 🎨 Design System

### Colors (Tailwind Config)

```typescript
'g2-darker': '#0A0A0A',    // Background
'g2-dark': '#111111',      // Cards
'g2-gold': '#D4AF37',      // Primary accent
'g2-gold-light': '#E5C158' // Hover state
```

### Typography
- **Primary Font**: Inter (sans-serif)
- **Secondary Font**: Georgia (serif)

---

## 📊 SEO & Semantic Web

### Implemented Features

1. **Semantic H1** - Hidden but crawlable (`sr-only` class)
2. **Metadata API** - Next.js App Router metadata
3. **Open Graph** - Social media cards configured
4. **Twitter Cards** - Twitter-specific metadata
5. **Robots.txt** - AI crawler friendly (to be created)
6. **Structured Data** - JSON-LD schemas (Phase 3)

### Example: Homepage Metadata

```typescript
export const metadata: Metadata = {
  title: 'G2 Middle East | Strategic Advisory & Government Relations',
  description: 'Elite strategic advisory firm...',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.g2middleeast.com',
    siteName: 'G2 Middle East',
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

---

## 🔐 Authentication (Phase 2 - Planned)

### Migration from Custom JWT → Supabase Auth

**Current (Hono)**: Custom JWT + Bcrypt hashing  
**Target (Next.js)**: Supabase Auth with Row Level Security

### Supabase Auth Features
- Email/Password authentication
- Magic link authentication
- OAuth providers (Google, GitHub, etc.)
- Row Level Security (RLS) policies
- Automatic session management
- JWT token handling

### Implementation Plan
1. Create Supabase Auth policies
2. Migrate user data from D1 to Supabase
3. Implement protected routes with middleware
4. Add login/signup pages
5. Test authentication flows

---

## 📦 Database Migration (Phase 2 - Planned)

### From Cloudflare D1 → Supabase PostgreSQL

**Why**: pgvector support for semantic search (Phase 5)

### Migration Steps
1. Export D1 database schema
2. Convert SQLite → PostgreSQL syntax
3. Create Supabase tables
4. Migrate data with transformation scripts
5. Implement Row Level Security policies
6. Test all queries

---

## 🖼️ Image Assets

### Copied from Hono Project

All apex-quality WebP images (5.3MB total):

1. `g2-perilous-path-brand-destruction-10-percent.webp` (952KB)
2. `g2-brand-vulnerability-risk-card.webp` (727KB)
3. `g2-strategic-risk-management-card.webp` (553KB)
4. `g2-cultural-intelligence-global-business-strategy.webp` (1.17MB)
5. `g2-cross-cultural-collaboration-card.webp` (795KB)
6. `g2-global-business-connection-card.webp` (1.08MB)

### Next.js Image Optimization

Use `next/image` component for automatic optimization:

```tsx
import Image from 'next/image';

<Image
  src="/assets/images/g2-perilous-path-brand-destruction-10-percent.webp"
  alt="Strategic advisory visual"
  width={2752}
  height={1536}
  priority
/>
```

---

## 🔄 Next Steps

### Phase 2: Security & Admin Hardening (Pending)
- [ ] Migrate authentication to Supabase Auth
- [ ] Implement Row Level Security policies
- [ ] Create admin dashboard
- [ ] Sanitize robots.txt for AI crawlers
- [ ] Add rate limiting middleware

### Phase 3: Semantic Web & Knowledge Graph (Pending)
- [ ] Implement JSON-LD schemas for all pages
- [ ] Create Organization schema
- [ ] Create Person schema (team members)
- [ ] Create Article schema (perspectives)
- [ ] Test with Google Rich Results

### Phase 4: Agentic Features & API (Pending)
- [ ] Create AI plugin manifest
- [ ] Dynamic Open Graph image generation
- [ ] API routes for AI agents
- [ ] Webhook endpoints

### Phase 5: Vector Search Engine (Pending)
- [ ] Setup Supabase pgvector
- [ ] Generate embeddings for content
- [ ] Implement semantic search API
- [ ] RAG-ready content pipeline

---

## 📝 Build Output

```
Route (app)                       Size  First Load JS
┌ ○ /                            172 B         105 kB
├ ○ /_not-found                  995 B         103 kB
├ ƒ /briefing                    172 B         105 kB
├ ƒ /projects                    172 B         105 kB
├ ƒ /team                        172 B         105 kB
└ ƒ /team/tim-jacobs             172 B         105 kB

○  (Static)   - Prerendered as static content
ƒ  (Dynamic)  - Server-rendered on demand
```

**Total Bundle**: 105 kB (First Load JS)  
**Tailwind CSS**: Build-time generated (0ms runtime blocking)

---

## 🐛 Troubleshooting

### Build Errors

**ESLint `no-html-link-for-pages`**: Use `<Link />` from `next/link` instead of `<a>` tags.

**ESLint `react/no-unescaped-entities`**: Use `&apos;` instead of `'` in JSX text.

**TypeScript strict mode errors**: No `any` types allowed. Use proper type annotations.

### Development Server

```bash
# Start dev server
npm run dev

# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

## ✅ Phase 1 Complete

**Status**: Infrastructure and core routes implemented  
**Build**: ✅ Successful (0 errors, 0 warnings)  
**Deployment**: Ready for Vercel  
**Next Phase**: Port Perspectives pages and migrate content

---

**Created**: 2025-11-19  
**Last Updated**: 2025-11-19  
**Version**: 1.0.0 (Phase 1)
