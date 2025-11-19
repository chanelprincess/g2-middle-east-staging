# 🚀 G2 Middle East Platform - Staging Deployment Guide

## Overview

This guide helps you create a **STAGING/PREVIEW** deployment for testing purposes.

**⚠️ DO NOT deploy to production URL until after testing and review.**

---

## 🎯 Deployment Options

### Option 1: Vercel Staging (RECOMMENDED) ✅

**Pros:**
- ✅ Full Next.js feature support
- ✅ All API routes work (OpenAI, Supabase)
- ✅ Middleware with cookies works
- ✅ Dynamic OG images work
- ✅ Semantic search works
- ✅ Easy preview URLs
- ✅ Automatic HTTPS

**Deployment Time:** ~3 minutes

### Option 2: Cloudflare Pages Staging ⚠️

**Pros:**
- ✅ Fast edge delivery
- ✅ Static pages work well

**Cons:**
- ⚠️ Limited Next.js feature support
- ❌ Some API routes won't work (OpenAI requires Node.js)
- ❌ Dynamic OG images incompatible
- ❌ Complex middleware may fail
- ⚠️ Requires adaptations

**Recommendation:** Use only for static content testing

---

## 🚀 Quick Start: Vercel Staging Deployment

### Step 1: Install Vercel CLI

Already installed in this project:

```bash
cd /home/user/g2-next-platform
npx vercel --version
```

### Step 2: Login to Vercel

```bash
npx vercel login
```

This will prompt you to:
1. Enter your email
2. Verify via email link
3. Complete authentication

### Step 3: Create Staging Project

```bash
# Deploy to staging (this creates a preview deployment)
npx vercel --name g2-middle-east-staging
```

When prompted:
- **Set up and deploy?** `Y`
- **Which scope?** Select your account/team
- **Link to existing project?** `N`
- **Project name?** `g2-middle-east-staging`
- **Directory?** `.` (press Enter)
- **Override settings?** `N`

### Step 4: Add Environment Variables

After deployment, add environment variables via Vercel dashboard:

1. Go to https://vercel.com/dashboard
2. Select `g2-middle-east-staging` project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

```bash
# Supabase (Use staging/test project, NOT production)
NEXT_PUBLIC_SUPABASE_URL = https://staging-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = your-staging-anon-key
SUPABASE_SERVICE_ROLE_KEY = your-staging-service-key

# OpenAI (Use separate API key with limits for staging)
OPENAI_API_KEY = sk-your-staging-openai-key

# Site URL
NEXT_PUBLIC_SITE_URL = https://g2-middle-east-staging.vercel.app
```

### Step 5: Redeploy with Environment Variables

```bash
npx vercel --prod
```

This creates a production deployment within your staging project.

### Step 6: Get Your Staging URL

After deployment completes, you'll receive URLs like:

```
✅ Preview: https://g2-middle-east-staging-abc123.vercel.app
✅ Production: https://g2-middle-east-staging.vercel.app
```

**Share the production URL for testing.**

---

## 📋 Alternative: Vercel Dashboard Deployment

### Step 1: Push to GitHub

```bash
# Create GitHub repository
git remote add origin https://github.com/your-org/g2-staging.git
git push -u origin main
```

### Step 2: Import in Vercel Dashboard

1. Go to https://vercel.com/new
2. Click **Import Git Repository**
3. Select your GitHub repository
4. Configure:
   - **Project Name:** `g2-middle-east-staging`
   - **Framework Preset:** Next.js
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`

### Step 3: Add Environment Variables

Same as Step 4 above in the dashboard.

### Step 4: Deploy

Click **Deploy** and wait ~3 minutes.

---

## 🧪 Testing Checklist

After deployment, test all features:

### ✅ Static Pages
- [ ] Homepage (`/`)
- [ ] Team listing (`/team`)
- [ ] Team member pages (`/team/tim-jacobs`)
- [ ] Briefing listing (`/briefing`)
- [ ] Briefing pages (`/briefing/digital-sovereignty-gcc`)
- [ ] Search page (`/search`)

### ✅ API Endpoints
- [ ] Intelligence API (`/api/briefings`)
- [ ] Intelligence API with filter (`/api/briefings?topic=sovereignty`)
- [ ] OG Image API (`/api/og?title=Test`)
- [ ] Search API (POST `/api/search` with query)

### ✅ Authentication
- [ ] Login page loads (`/portal-entry/login`)
- [ ] Login with test credentials
- [ ] Admin dashboard protected (`/admin/dashboard` returns 404 when not logged in)
- [ ] Admin dashboard accessible when logged in

### ✅ Public Files
- [ ] llms.txt (`/llms.txt`)
- [ ] AI Plugin manifest (`/ai-plugin.json`)
- [ ] OpenAPI spec (`/openapi.yaml`)
- [ ] robots.txt (`/robots.txt`)

### ✅ Semantic Search
- [ ] Search UI renders
- [ ] Can submit search query
- [ ] Results display with similarity scores
- [ ] Can click through to full briefings

### ✅ Structured Data
- [ ] Homepage has Organization schema (view source)
- [ ] Team pages have Person schema (view source)
- [ ] Knowledge graph relationships intact

### ✅ Design & UX
- [ ] G2 branding (gold colors)
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Navigation works
- [ ] Loading states display correctly
- [ ] Error states display correctly

---

## 🔐 Staging Environment Setup

### Create Staging Supabase Project

1. Go to https://supabase.com/dashboard
2. Create new project: `g2-middle-east-staging`
3. Wait for provisioning (~2 minutes)
4. Run SQL migration:
   - Go to **SQL Editor**
   - Copy contents of `supabase/migrations/001_enable_vector_search.sql`
   - Execute
5. Copy credentials:
   - Go to **Settings** → **API**
   - Copy `URL` and `anon key` and `service_role key`

### Create Staging OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Create new key: `g2-staging`
3. Set usage limits (e.g., $5/month max)
4. Copy key

### Generate Staging Embeddings

After deploying and setting environment variables:

```bash
# Set staging credentials in .env.local
OPENAI_API_KEY=sk-staging-key
NEXT_PUBLIC_SUPABASE_URL=https://staging-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=staging-service-key

# Generate embeddings
npm run generate-embeddings
```

---

## 📊 Expected Results

### Build Output

```
Route (app)                              Size      First Load JS
┌ ○ /                                   177 B     105 kB
├ ○ /search                             2.46 kB   104 kB
├ ● /briefing/[slug]                    177 B     105 kB
├ ● /team/[slug]                        177 B     105 kB
├ ƒ /api/briefings                      133 B     102 kB
├ ƒ /api/og                             133 B     102 kB
├ ƒ /api/search                         133 B     102 kB
└ + 8 more routes
```

### Deployment URLs

```
Staging Project: g2-middle-east-staging
Preview URL:     https://g2-middle-east-staging-abc123.vercel.app
Production URL:  https://g2-middle-east-staging.vercel.app
```

### Performance

- **First Load:** ~105 KB
- **API Response:** 50-345ms
- **Build Time:** ~60 seconds
- **Deploy Time:** ~180 seconds

---

## 🐛 Troubleshooting

### Build Fails

**Error:** `Type error` or `Build failed`

**Solution:**
```bash
# Test build locally first
npm run build

# If local build passes, check environment variables in Vercel
```

### API Routes Return 500

**Error:** `Internal Server Error` on `/api/*` routes

**Solution:**
- Check environment variables are set in Vercel dashboard
- Verify `OPENAI_API_KEY` and `SUPABASE_SERVICE_ROLE_KEY` are correct
- Check Vercel function logs in dashboard

### Search Doesn't Work

**Error:** Search returns no results or errors

**Solution:**
1. Verify embeddings were generated:
   ```sql
   -- Run in Supabase SQL Editor
   SELECT COUNT(*) FROM documents;
   ```
2. Should return ~47 documents
3. If 0, run `npm run generate-embeddings`

### Login Doesn't Work

**Error:** Login form doesn't submit or returns error

**Solution:**
- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set
- Check Supabase project is active (not paused)
- Verify authentication is enabled in Supabase dashboard

### OG Images Don't Generate

**Error:** `/api/og` returns error

**Solution:**
- This is expected in development
- OG images require production Vercel deployment
- Test by visiting: `https://your-staging.vercel.app/api/og?title=Test`

---

## 🔒 Security Best Practices

### For Staging Deployment

1. **✅ DO:**
   - Use separate staging Supabase project
   - Use separate OpenAI API key with limits
   - Set usage limits on all APIs
   - Share staging URL only with team
   - Use test data, not production data

2. **❌ DON'T:**
   - Don't use production Supabase credentials
   - Don't use production OpenAI key without limits
   - Don't commit `.env.local` to git
   - Don't share staging credentials publicly
   - Don't index staging site (robots.txt handles this)

---

## 📝 Environment Variables Reference

### Required for All Features

```bash
# Supabase (Public - client-side)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...

# Supabase (Secret - server-side only)
SUPABASE_SERVICE_ROLE_KEY=eyJhbG...

# OpenAI (Secret - server-side only)
OPENAI_API_KEY=sk-proj-...

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://g2-middle-east-staging.vercel.app
```

### Optional

```bash
# Node.js Version (Vercel auto-detects)
NODE_VERSION=18

# Build Configuration
NEXT_TELEMETRY_DISABLED=1
```

---

## 📞 Support & Next Steps

### After Successful Staging Deployment

1. **✅ Test all features** using checklist above
2. **📝 Document any issues** found during testing
3. **👥 Share staging URL** with team for review
4. **🔄 Iterate** based on feedback
5. **✅ Get approval** before production deployment

### Production Deployment

Only after staging is tested and approved:

1. Create new Vercel project: `g2-middle-east-production`
2. Use production Supabase project
3. Use production OpenAI key
4. Configure custom domain: `www.g2middleeast.com`
5. Generate production embeddings
6. Monitor performance and errors

---

## 🎉 Quick Command Reference

```bash
# Deploy to staging
npx vercel --name g2-middle-east-staging

# Deploy to production (within staging project)
npx vercel --prod

# Check deployment status
npx vercel ls

# View logs
npx vercel logs

# Remove deployment
npx vercel rm g2-middle-east-staging
```

---

**Ready to deploy? Start with Step 1 of the Quick Start guide above!** 🚀
