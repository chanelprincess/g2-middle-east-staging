# 🚀 Deployment Instructions - Quick Start

## Overview

This document provides quick instructions for deploying the G2 Middle East Platform to a **staging environment** for testing.

**⚠️ IMPORTANT: This creates a STAGING deployment. Do NOT use for production until reviewed and approved.**

---

## 🎯 Recommended Approach: Vercel Staging

Vercel provides the best compatibility with this Next.js application, supporting all features:
- ✅ Server-side authentication (Supabase SSR)
- ✅ API routes with Node.js runtime (OpenAI, Supabase)
- ✅ Dynamic OG image generation
- ✅ Semantic vector search
- ✅ Middleware with cookies

---

## 🚀 Quick Deploy (3 Steps)

### Step 1: Run Deployment Script

```bash
cd /home/user/g2-next-platform
./deploy-staging.sh
```

This script will:
1. Verify Vercel CLI is installed
2. Check authentication (prompts login if needed)
3. Build the project
4. Deploy to Vercel staging

### Step 2: Add Environment Variables

After deployment, go to Vercel dashboard:

1. Visit: https://vercel.com/dashboard
2. Select project: `g2-middle-east-staging`
3. Go to: **Settings** → **Environment Variables**
4. Add these variables for **Production** and **Preview** environments:

```bash
NEXT_PUBLIC_SUPABASE_URL = https://your-staging-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = your-staging-anon-key
SUPABASE_SERVICE_ROLE_KEY = your-staging-service-key
OPENAI_API_KEY = sk-your-staging-key
NEXT_PUBLIC_SITE_URL = https://g2-middle-east-staging.vercel.app
```

**⚠️ Use STAGING credentials, NOT production!**

### Step 3: Redeploy with Environment Variables

```bash
npm run vercel:prod
```

This redeploys with the environment variables active.

---

## 🧪 Testing Your Deployment

### Get Your Staging URL

After deployment completes, you'll receive a URL like:

```
✅ Production: https://g2-middle-east-staging.vercel.app
```

### Test These Features

1. **Homepage:** https://g2-middle-east-staging.vercel.app/
2. **Search:** https://g2-middle-east-staging.vercel.app/search
3. **API:** https://g2-middle-east-staging.vercel.app/api/briefings
4. **llms.txt:** https://g2-middle-east-staging.vercel.app/llms.txt

**📋 Full testing checklist:** See `STAGING_DEPLOYMENT_GUIDE.md`

---

## 🔄 Update Deployment

When you make changes:

```bash
# Build and test locally first
npm run build

# Deploy updates to staging
npm run deploy:staging
```

---

## 🔐 Setting Up Staging Environment

### 1. Create Staging Supabase Project

```bash
# Go to: https://supabase.com/dashboard
# Create new project: "g2-middle-east-staging"
# Run SQL migration from: supabase/migrations/001_enable_vector_search.sql
```

### 2. Generate Embeddings

```bash
# Set staging credentials in .env.local
OPENAI_API_KEY=sk-staging-key
NEXT_PUBLIC_SUPABASE_URL=https://staging-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=staging-service-key

# Run ingestion
npm run generate-embeddings
```

---

## 📚 Additional Documentation

- **Detailed Guide:** `STAGING_DEPLOYMENT_GUIDE.md` - Complete testing checklist
- **Cloudflare Option:** `CLOUDFLARE_STAGING_DEPLOYMENT.md` - Alternative platform (limited features)
- **Platform Overview:** `docs/PLATFORM_COMPLETE.md` - Full feature documentation

---

## 🎯 What Happens Next?

After successful staging deployment:

1. **Test thoroughly** - Use checklist in `STAGING_DEPLOYMENT_GUIDE.md`
2. **Share staging URL** - Get team feedback
3. **Document issues** - Report any bugs or issues found
4. **Get approval** - Required before production deployment
5. **Production deploy** - Only after approval

---

## ⚡ Quick Commands

```bash
# Deploy to staging
npm run deploy:staging

# View deployment logs
npx vercel logs

# List deployments
npx vercel ls

# Open project in browser
npx vercel open
```

---

## 🆘 Troubleshooting

### Build Fails Locally

```bash
# Check for TypeScript errors
npm run lint

# Clear Next.js cache
rm -rf .next
npm run build
```

### Deployment Fails

```bash
# Check Vercel authentication
npx vercel whoami

# Re-login if needed
npx vercel login
```

### Environment Variables Not Working

1. Verify variables are set in Vercel dashboard
2. Redeploy after adding variables: `npm run vercel:prod`
3. Check variable names are EXACT (case-sensitive)

---

## 🎉 Success Criteria

Your staging deployment is successful when:

- ✅ Build completes without errors
- ✅ Staging URL is accessible
- ✅ Homepage loads correctly
- ✅ Search functionality works
- ✅ API endpoints respond
- ✅ All features from checklist pass

---

## 📞 Next Steps

1. **Run:** `./deploy-staging.sh`
2. **Add:** Environment variables in Vercel dashboard
3. **Test:** All features using staging URL
4. **Report:** Findings and get approval
5. **Deploy:** To production only after approval

---

**Ready? Start with Step 1 above!** 🚀

For detailed instructions, see: `STAGING_DEPLOYMENT_GUIDE.md`
