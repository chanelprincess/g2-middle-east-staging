#!/bin/bash

# G2 Middle East Platform - Staging Deployment Script
# 
# This script deploys the platform to Vercel staging environment.
# DO NOT use for production deployment.

set -e

echo "🚀 G2 Middle East Platform - Staging Deployment"
echo "================================================"
echo ""

# Check if Vercel CLI is available
if ! command -v vercel &> /dev/null && ! npx vercel --version &> /dev/null
then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -D vercel
fi

echo "✅ Vercel CLI is available"
echo ""

# Check if user is logged in
echo "🔐 Checking Vercel authentication..."
if ! npx vercel whoami &> /dev/null
then
    echo "⚠️  Not logged in to Vercel. Please login:"
    npx vercel login
else
    echo "✅ Already logged in to Vercel"
fi
echo ""

# Run build to verify everything works
echo "🏗️  Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi
echo ""

# Deploy to staging
echo "🚀 Deploying to Vercel staging..."
echo ""
echo "⚠️  IMPORTANT: This is a STAGING deployment."
echo "    Do NOT use this URL for production."
echo ""

npx vercel --name g2-middle-east-staging

echo ""
echo "================================================"
echo "✅ Deployment Complete!"
echo ""
echo "📋 Next Steps:"
echo "   1. Test the staging URL provided above"
echo "   2. Add environment variables in Vercel dashboard:"
echo "      - NEXT_PUBLIC_SUPABASE_URL"
echo "      - NEXT_PUBLIC_SUPABASE_ANON_KEY"
echo "      - SUPABASE_SERVICE_ROLE_KEY"
echo "      - OPENAI_API_KEY"
echo "   3. Redeploy to apply environment variables:"
echo "      npm run vercel:prod"
echo "   4. Test all features using STAGING_DEPLOYMENT_GUIDE.md"
echo "   5. Get approval before production deployment"
echo ""
echo "📚 Full guide: STAGING_DEPLOYMENT_GUIDE.md"
echo "================================================"
