# Cloudflare Pages Deployment Guide

## Overview

This project is configured to deploy to Cloudflare Pages using the `@cloudflare/next-on-pages` adapter and Wrangler CLI.

## Prerequisites

1. **Cloudflare Account**: You need a Cloudflare account with Pages access
2. **Wrangler CLI**: Already installed as a dev dependency
3. **Authentication**: You'll need to authenticate Wrangler with your Cloudflare account

## Deployment Steps

### 1. Authenticate with Cloudflare

```bash
npx wrangler login
```

This will open your browser to authenticate with Cloudflare. Once complete, Wrangler will be authenticated for deployments.

### 2. Build for Cloudflare Pages

```bash
npm run pages:build
```

This command:
- Runs `next build` to create the production build
- Uses `@cloudflare/next-on-pages` to convert the build for Cloudflare Pages
- Outputs to `.vercel/output/static` directory

### 3. Deploy to Cloudflare Pages

```bash
npm run pages:deploy
```

Or deploy manually:

```bash
npx wrangler pages deploy .vercel/output/static --project-name g2-middle-east-staging
```

## Project Configuration

### Wrangler Configuration (`wrangler.toml`)

```toml
name = "g2-middle-east-staging"
compatibility_date = "2024-11-19"
pages_build_output_dir = ".vercel/output/static"
```

### Environment-Specific Deployments

**Production:**
```bash
npx wrangler pages deploy .vercel/output/static --project-name g2-middle-east-production --branch main
```

**Preview:**
```bash
npx wrangler pages deploy .vercel/output/static --project-name g2-middle-east-preview --branch preview
```

## Migrated Pages (All Static)

The following pages from the migration are fully static and will work perfectly on Cloudflare Pages:

### Batch 1 - Legal & Corporate
- ✅ `/group` - Casta Diva Group overview
- ✅ `/privacy-policy` - Privacy policy page
- ✅ `/terms-of-service` - Terms of service page

### Batch 2 - Content/Blog
- ✅ `/perspectives` - Blog listing page
- ✅ `/perspectives/[slug]` - Individual blog posts (7 pre-rendered)
  - `/perspectives/competing-ai-arena`
  - `/perspectives/digital-authority-ai-era`
  - `/perspectives/perilous-path-brand-destruction`
  - `/perspectives/converging-virile-viral-approaches`
  - `/perspectives/cost-losing-10-percent`
  - `/perspectives/artistry-discovery`
  - `/perspectives/cultural-intelligence`

### Batch 3 - Whitepaper Portal
- ✅ `/whitepapers` - Whitepaper listing
- ✅ `/whitepapers/login` - Login page
- ✅ `/whitepapers/register` - Registration page
- ✅ `/whitepapers/pending` - Registration confirmation

## Dynamic Routes Requiring Edge Runtime

The following existing routes will need Edge Runtime configuration for full functionality:

### API Routes
- `/api/briefings` - Briefings API endpoint
- `/api/health` - Health check endpoint
- `/api/search` - Search API endpoint
- `/api/og` - OpenGraph image generation

### Dynamic Pages
- `/admin/dashboard` - Admin dashboard
- `/briefing` - Briefing listing (existing)
- `/briefing/[slug]` - Individual briefing pages
- `/projects` - Projects page

To enable these routes on Cloudflare Pages, add to each route file:

```typescript
export const runtime = 'edge';
```

## Troubleshooting

### Build Errors

If you encounter "routes were not configured to run with the Edge Runtime" errors:

1. **Static pages only**: Use `output: 'export'` in `next.config.ts` (removes server features)
2. **Full Next.js**: Add `export const runtime = 'edge'` to dynamic route files

### Authentication Issues

If `wrangler login` fails:
```bash
# Use API token instead
wrangler login --api-token YOUR_API_TOKEN
```

### Deployment Fails

Check the build output:
```bash
npm run pages:build 2>&1 | tee build.log
```

## Local Development with Cloudflare Adapter

```bash
npm run pages:dev
```

This runs the dev server with Cloudflare Pages adapter for testing.

## Deployment URLs

After deployment, your site will be available at:

- **Production**: `https://g2-middle-east-staging.pages.dev`
- **Custom domain**: Configure in Cloudflare Pages dashboard

## CI/CD Integration

For automated deployments via GitHub Actions, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run pages:build
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          command: pages deploy .vercel/output/static --project-name g2-middle-east-staging
```

## Environment Variables

Add environment variables in Cloudflare Pages dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Other secrets as needed

## Support

For issues:
1. Check [Next.js Cloudflare Pages docs](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/)
2. Check [@cloudflare/next-on-pages docs](https://github.com/cloudflare/next-on-pages)
3. Review Wrangler logs: `npx wrangler pages deployment list`
