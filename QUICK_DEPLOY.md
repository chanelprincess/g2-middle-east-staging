# Quick Deployment Fix Guide

## Issue: DNS_PROBE_FINISHED_NXDOMAIN

The error you're seeing means the Cloudflare Pages project doesn't exist yet. Here's how to fix it:

## Option A: Deploy via Command Line (Recommended)

### Prerequisites
```bash
# Make sure you're in the project directory
cd /path/to/g2-next-platform

# Pull latest changes
git pull origin main

# Install dependencies (if not already done)
npm install
```

### Deploy Steps

**1. Authenticate with Cloudflare:**
```bash
npx wrangler login
```
This will open your browser to log in to Cloudflare.

**2. Build the project:**
```bash
npm run pages:build
```

**3. Deploy to Cloudflare Pages:**
```bash
npx wrangler pages deploy .vercel/output/static --project-name g2-middle-east-staging
```

On first deployment, Wrangler will ask:
- "Create a new project?" → Yes
- "Project name?" → g2-middle-east-staging
- "Production branch?" → main

**4. After deployment, you'll get a URL like:**
```
https://g2-middle-east-staging.pages.dev
```

---

## Option B: Deploy via Cloudflare Dashboard (Easier for First Time)

### Step 1: Create Project in Cloudflare Dashboard

1. Go to https://dash.cloudflare.com/
2. Select your account
3. Click "Workers & Pages" in the left sidebar
4. Click "Create application" → "Pages" → "Connect to Git"

### Step 2: Connect GitHub Repository

1. Select GitHub as your provider
2. Authorize Cloudflare to access your GitHub
3. Select repository: `chanelprincess/g2-middle-east-staging`
4. Click "Begin setup"

### Step 3: Configure Build Settings

**Framework preset:** Next.js

**Build command:**
```bash
npm run pages:build
```

**Build output directory:**
```
.vercel/output/static
```

**Root directory:** (leave blank)

**Environment variables:** (optional for now)
- `NODE_VERSION` = `20`

### Step 4: Deploy

1. Click "Save and Deploy"
2. Wait 3-5 minutes for the build
3. Your site will be live at `https://g2-middle-east-staging.pages.dev`

---

## Option C: Alternative - Use Static Export

If the Cloudflare adapter doesn't work, we can use a simple static export:

### 1. Modify next.config.ts

Add to the config:
```typescript
output: 'export',
images: {
  unoptimized: true,
}
```

### 2. Build and Deploy

```bash
# Build static export
npm run build

# Deploy the out directory
npx wrangler pages deploy out --project-name g2-middle-east-staging
```

**Note:** This will work for all migrated pages but won't support API routes or dynamic server features.

---

## Verification

After deployment, test these URLs (replace with your actual domain):

### Batch 1 Pages
- https://g2-middle-east-staging.pages.dev/group
- https://g2-middle-east-staging.pages.dev/privacy-policy
- https://g2-middle-east-staging.pages.dev/terms-of-service

### Batch 2 Pages
- https://g2-middle-east-staging.pages.dev/perspectives
- https://g2-middle-east-staging.pages.dev/perspectives/competing-ai-arena
- https://g2-middle-east-staging.pages.dev/perspectives/digital-authority-ai-era

### Batch 3 Pages
- https://g2-middle-east-staging.pages.dev/whitepapers
- https://g2-middle-east-staging.pages.dev/whitepapers/login
- https://g2-middle-east-staging.pages.dev/whitepapers/register

---

## Troubleshooting Common Issues

### Issue: "Failed to produce a Cloudflare Pages build"

**Solution:** Some routes need Edge Runtime. For now, you can:

1. **Quick fix:** Use static export (Option C above)
2. **Full fix:** Add to dynamic routes:
   ```typescript
   export const runtime = 'edge';
   ```

### Issue: Build fails with "route not configured"

**Solution:** Check which routes are failing and either:
- Remove them temporarily
- Add Edge Runtime config
- Use static export mode

### Issue: "Cannot find module @cloudflare/next-on-pages"

**Solution:**
```bash
npm install
```

### Issue: Authentication fails

**Solution:**
```bash
# Use API token instead
npx wrangler login --scopes-list
# Or use environment variable
CLOUDFLARE_API_TOKEN=your_token npx wrangler pages deploy ...
```

---

## Custom Domain Setup (After Deployment)

Once deployed, to use a custom domain:

1. Go to Cloudflare Pages dashboard
2. Select your project "g2-middle-east-staging"
3. Go to "Custom domains" tab
4. Click "Set up a custom domain"
5. Enter your domain (e.g., staging.g2middleeast.com)
6. Cloudflare will provide DNS records to add

---

## Current Project Status

✅ **Code Status:**
- All 9 pages migrated (100% complete)
- Cloudflare configuration committed
- Build scripts configured
- Documentation created

❌ **Deployment Status:**
- Project not yet deployed to Cloudflare Pages
- DNS not resolving (NXDOMAIN)

🎯 **Next Action Required:**
Choose Option A, B, or C above and complete the deployment.

---

## Need Help?

If you encounter any issues:

1. Check build logs: `npm run pages:build 2>&1 | tee build.log`
2. Check Wrangler logs: `npx wrangler pages deployment list`
3. Review Cloudflare Pages dashboard for error messages
4. Try Option C (static export) as a fallback

---

## Quick Command Reference

```bash
# Authenticate
npx wrangler login

# Build
npm run pages:build

# Deploy
npx wrangler pages deploy .vercel/output/static --project-name g2-middle-east-staging

# Or deploy static export
npm run build
npx wrangler pages deploy out --project-name g2-middle-east-staging

# Check deployments
npx wrangler pages deployment list --project-name g2-middle-east-staging

# View logs
npx wrangler pages deployment tail --project-name g2-middle-east-staging
```
