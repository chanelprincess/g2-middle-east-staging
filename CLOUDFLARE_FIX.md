# 🔧 Cloudflare Pages Build Fix

## Issue
Your build failed with: **"It looks like you've run a Workers-specific command in a Pages project"**

## Solution
Update your Cloudflare Pages project settings to use the standard Next.js build.

---

## 📝 Step-by-Step Fix

### 1. Go to Your Cloudflare Pages Project
1. Visit: https://dash.cloudflare.com/
2. Navigate to **Workers & Pages**
3. Click on your project: **g2-middle-east-staging**
4. Click **Settings** tab
5. Scroll to **Build configuration** section

### 2. Update Build Settings

Click **Edit configuration** and change to:

```
Framework preset: Next.js

Build command:
npm run build

Build output directory:
.next

Root directory:
(leave empty)

Node version:
20
```

### 3. Save and Retry Build

1. Click **Save**
2. Go to **Deployments** tab
3. Click **Retry deployment** on the latest failed build

**OR**

Go to **Deployments** and click **Create deployment** → **Deploy from branch** → **main**

---

## ✅ What This Fixes

**Before (Wrong):**
- ❌ Used deprecated `@cloudflare/next-on-pages` adapter
- ❌ Build output: `.vercel/output/static`
- ❌ Deploy command tried to run `wrangler deploy` (Workers command)

**After (Correct):**
- ✅ Uses standard Next.js build (fully supported by Cloudflare)
- ✅ Build output: `.next` (standard Next.js output)
- ✅ No custom deploy command needed
- ✅ All 35 pages will deploy as static HTML

---

## 🎯 Expected Result

After updating the configuration and redeploying:

**Build Output:**
```
✓ Generating static pages (35/35)
Success: Build command completed
Deploying to Cloudflare Pages...
Success: Deployment complete
```

**Your site will be live at:**
```
https://g2-middle-east-staging.pages.dev
```

---

## 📦 Pages That Will Deploy

All **35 pages** from your Next.js build:

### ✅ Migrated Pages (9 core + 7 blog posts = 16 pages)
- `/group` ✓
- `/privacy-policy` ✓
- `/terms-of-service` ✓
- `/perspectives` ✓
- `/perspectives/competing-ai-arena` ✓
- `/perspectives/digital-authority-ai-era` ✓
- `/perspectives/perilous-path-brand-destruction` ✓
- `/perspectives/converging-virile-viral-approaches` ✓
- `/perspectives/cost-losing-10-percent` ✓
- `/perspectives/artistry-discovery` ✓
- `/perspectives/cultural-intelligence` ✓
- `/whitepapers` ✓
- `/whitepapers/login` ✓
- `/whitepapers/register` ✓
- `/whitepapers/pending` ✓

### ✅ Existing Pages (19 pages)
- Homepage, About, Contact, Services, Team, etc.
- Admin pages, Dashboard, Login
- API routes, Search
- Dynamic routes will work with Edge Runtime

---

## 🚀 Quick Actions

### If you have shell access:
```bash
# Pull latest changes
git pull origin main

# Verify the configuration
cat .cloudflare-pages-config.md
```

### In Cloudflare Dashboard:
1. Update build settings (as shown above)
2. Retry deployment
3. Wait 3-5 minutes
4. Test your site!

---

## 🎉 Success Indicators

You'll know it worked when you see:

1. **Build log shows:**
   ```
   ✓ Generating static pages (35/35)
   Success: Build command completed
   ```

2. **Your site loads at:**
   ```
   https://g2-middle-east-staging.pages.dev
   ```

3. **All migrated pages work:**
   - https://g2-middle-east-staging.pages.dev/group ✓
   - https://g2-middle-east-staging.pages.dev/perspectives ✓
   - https://g2-middle-east-staging.pages.dev/whitepapers ✓

---

## 📞 Still Having Issues?

Check the Cloudflare Pages build logs for specific errors. Common issues:

1. **Environment variables missing:** Add `NODE_VERSION=20` in Settings
2. **Build timeout:** Standard Next.js build should complete in 3-5 minutes
3. **Module not found:** Make sure `package-lock.json` is committed

---

## ✨ Why This Works

Cloudflare Pages natively supports Next.js. The `@cloudflare/next-on-pages` adapter was:
- Deprecated in favor of native support
- Causing the Workers/Pages command confusion
- Not needed for static sites

Standard Next.js build gives you:
- ✅ 35 static pages
- ✅ Fast deployment
- ✅ Edge runtime for dynamic routes
- ✅ No adapter complexity
