# Cloudflare Pages Staging Deployment Guide

## ⚠️ IMPORTANT NOTICE

This guide is for creating a **STAGING/PREVIEW** deployment on Cloudflare Pages for testing purposes.

**DO NOT deploy to production URL until after testing and review.**

---

## 🚨 Architecture Compatibility Notes

### Current Application Architecture
The G2 Middle East Platform uses several features that have **limitations on Cloudflare Pages**:

1. **✅ Compatible:**
   - Static pages (homepage, team, briefing listings)
   - Client-side components
   - Supabase client-side auth (browser)
   - JSON-LD structured data
   - Public llms.txt, ai-plugin.json

2. **⚠️ Limited Compatibility:**
   - Middleware with cookies (may need adaptation)
   - Dynamic API routes requiring Node.js runtime
   - Server-side Supabase operations
   - OpenAI API calls (requires API key security)

3. **❌ Not Compatible:**
   - `/api/og` route (uses Node.js `@vercel/og` with specific runtime)
   - `/api/search` route (requires OpenAI API + Supabase service key)
   - Server-side authentication flows with complex cookie operations

### Recommended Approach

**Option 1: Vercel Deployment (RECOMMENDED)**
- ✅ Full feature compatibility
- ✅ Native Next.js optimization
- ✅ Edge functions support
- ✅ Image optimization
- ✅ Middleware with full cookie support

**Option 2: Cloudflare Pages (Limited Features)**
- ⚠️ Some features disabled or adapted
- ⚠️ API routes may need edge-compatible rewrites
- ⚠️ Image optimization disabled
- ✅ Static content works perfectly
- ✅ Client-side features work

**Option 3: Hybrid Approach (For This Testing)**
- Deploy static/client-side features to Cloudflare Pages staging
- Keep API routes and server features on separate endpoint
- Use for visual/UI testing only

---

## 📋 Prerequisites

1. **Cloudflare Account**
   - Sign up at https://dash.cloudflare.com/sign-up
   - Verify email

2. **Wrangler CLI**
   - Already installed in this environment
   - Version: 4.42.2

3. **GitHub Repository**
   - Push code to GitHub repository
   - Cloudflare Pages can auto-deploy from GitHub

4. **Environment Variables**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Note: Service keys should NOT be exposed in edge deployments

---

## 🚀 Deployment Method 1: Cloudflare Dashboard (RECOMMENDED)

### Step 1: Push to GitHub

```bash
# Create new GitHub repository
# Then push code:
git remote add origin https://github.com/your-org/g2-staging.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Go to https://dash.cloudflare.com/
2. Navigate to **Workers & Pages** → **Create Application** → **Pages**
3. Click **Connect to Git**
4. Authorize GitHub and select your repository
5. Choose branch: `main` or `master`

### Step 3: Configure Build Settings

**Framework preset:** Next.js

**Build command:**
```bash
npm run build
```

**Build output directory:**
```
.next
```

**Root directory:**
```
/
```

**Environment variables:**
```
NEXT_PUBLIC_SUPABASE_URL = https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = your-anon-key
NODE_VERSION = 18
```

### Step 4: Deploy

- Click **Save and Deploy**
- Wait for build to complete (~3-5 minutes)
- You'll get a staging URL like: `https://g2-staging.pages.dev`

---

## 🚀 Deployment Method 2: Wrangler CLI

### Step 1: Login to Cloudflare

```bash
wrangler login
```

This will open a browser for authentication.

### Step 2: Build for Cloudflare

```bash
npm run pages:build
```

This uses `@cloudflare/next-on-pages` to create a Cloudflare-compatible build.

### Step 3: Deploy

```bash
npm run deploy:staging
```

Or manually:

```bash
wrangler pages deploy .vercel/output/static --project-name=g2-staging
```

### Step 4: Set Environment Variables

```bash
wrangler pages project create g2-staging

wrangler pages secret put NEXT_PUBLIC_SUPABASE_URL --project-name=g2-staging
# Enter value when prompted

wrangler pages secret put NEXT_PUBLIC_SUPABASE_ANON_KEY --project-name=g2-staging
# Enter value when prompted
```

---

## 🧪 Testing Checklist

After deployment, test these features:

### ✅ Should Work
- [ ] Homepage loads (`/`)
- [ ] Team listing page (`/team`)
- [ ] Team member pages (`/team/tim-jacobs`)
- [ ] Briefing listing page (`/briefing`)
- [ ] Static briefing pages
- [ ] llms.txt accessible (`/llms.txt`)
- [ ] AI plugin manifest (`/ai-plugin.json`)
- [ ] OpenAPI spec (`/openapi.yaml`)
- [ ] Client-side navigation
- [ ] Responsive design
- [ ] Tailwind CSS styling

### ⚠️ May Have Issues
- [ ] Login page (`/portal-entry/login`) - may need adaptation
- [ ] Admin dashboard (`/admin/dashboard`) - middleware may not work
- [ ] Intelligence API (`/api/briefings`) - may need edge adaptation
- [ ] OG image generation (`/api/og`) - likely won't work
- [ ] Search API (`/api/search`) - requires Node runtime
- [ ] Search UI (`/search`) - depends on API

### ❌ Expected Not to Work (Without Adaptation)
- [ ] Server-side authentication flows
- [ ] OpenAI embedding generation
- [ ] Dynamic OG images
- [ ] Supabase service role operations

---

## 🔧 Troubleshooting

### Build Fails with "unsupported Node.js API"

**Problem:** Next.js route uses Node.js features not available in edge runtime.

**Solution:** 
- Comment out problematic API routes temporarily
- Or adapt them to edge runtime:

```typescript
// Add to API routes that should work on edge:
export const runtime = 'edge';
```

### Images Don't Load

**Problem:** Cloudflare Pages doesn't support Next.js Image Optimization API.

**Solution:** Already configured in `next.config.cloudflare.ts`:
```typescript
images: {
  unoptimized: true
}
```

### Middleware Returns 500 Errors

**Problem:** Cookie operations may not work identically in Cloudflare Workers.

**Solution:** Simplify middleware or disable for staging:

```typescript
// middleware.ts - Add condition for Cloudflare
export const config = {
  matcher: process.env.CLOUDFLARE ? [] : ['/admin/:path*']
};
```

### Environment Variables Not Working

**Problem:** Build-time vs runtime environment variables.

**Solution:** Ensure all public variables start with `NEXT_PUBLIC_`:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://...
```

---

## 📊 Expected Staging URL

After successful deployment, you'll receive a URL like:

```
https://g2-staging.pages.dev
```

Or with custom branch:

```
https://[branch-name].g2-staging.pages.dev
```

---

## 🔐 Security Considerations for Staging

1. **DO NOT expose service role keys** in Cloudflare environment variables
2. **DO NOT use production Supabase** - use a staging/test project
3. **DO NOT index staging site** - verify robots.txt blocks crawlers
4. **DO share staging link** only with authorized team members

---

## 📝 Staging Environment Variables

Create a `.env.staging` file (DO NOT commit):

```bash
# Supabase (Staging/Test Project)
NEXT_PUBLIC_SUPABASE_URL=https://staging-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=staging-anon-key

# Site URL
NEXT_PUBLIC_SITE_URL=https://g2-staging.pages.dev

# DO NOT INCLUDE THESE IN CLOUDFLARE:
# SUPABASE_SERVICE_ROLE_KEY=...  (server-only, not for edge)
# OPENAI_API_KEY=...              (server-only, not for edge)
```

---

## 🎯 Recommended Testing Workflow

### Phase 1: Visual Testing (Cloudflare Staging)
1. Deploy static pages to Cloudflare Pages
2. Test UI/UX, responsive design, styling
3. Verify client-side navigation
4. Check public files (llms.txt, etc.)

### Phase 2: Full Feature Testing (Vercel Staging)
1. Create separate Vercel project for staging
2. Deploy with all features enabled
3. Test authentication, API routes, search
4. Verify server-side operations

### Phase 3: Production Deployment
1. After approval of both staging environments
2. Deploy to production Vercel instance
3. Configure production domain
4. Monitor performance

---

## 🚦 Current Status

- ✅ Wrangler configuration created (`wrangler.toml`)
- ✅ Cloudflare build script added (`npm run pages:build`)
- ✅ Deployment script added (`npm run deploy:staging`)
- ⏳ Waiting for Cloudflare authentication (`wrangler login`)
- ⏳ Waiting for GitHub repository setup

---

## 🎓 Next Steps

### Immediate (For You):

1. **Authenticate Wrangler:**
   ```bash
   wrangler login
   ```

2. **Choose Deployment Method:**
   - **Option A:** Use Cloudflare Dashboard + GitHub (easier, recommended)
   - **Option B:** Use Wrangler CLI (more control)

3. **Deploy to Staging:**
   ```bash
   npm run deploy:staging
   ```

4. **Test Staging URL** and report findings

### Post-Testing:

1. Review staging deployment results
2. Document any compatibility issues
3. Decide on production deployment platform:
   - **Vercel** for full features (recommended)
   - **Cloudflare Pages** for static/adapted version
   - **Hybrid** with API routes on separate service

---

## 📚 Additional Resources

- **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages/
- **Next.js on Cloudflare:** https://developers.cloudflare.com/pages/framework-guides/nextjs/
- **Wrangler CLI Docs:** https://developers.cloudflare.com/workers/wrangler/
- **OpenNext (Recommended Adapter):** https://opennext.js.org/cloudflare

---

## 💡 Recommendation

Given the complexity of this application (Supabase SSR, OpenAI API, dynamic routes), I **strongly recommend Vercel for production deployment** as it provides native Next.js support without compatibility concerns.

Use Cloudflare Pages staging **only for visual/UI testing** of static content.

For full feature testing, create a **Vercel preview deployment** instead.

---

**Questions or Issues?** Document them before proceeding to production deployment.
