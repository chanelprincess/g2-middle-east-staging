# 🚀 Manual Deployment via Vercel Dashboard

## 📦 Your Project is Ready

**Location:** `/home/user/g2-next-platform`  
**Status:** ✅ All code committed, database ready, embeddings generated

---

## 🎯 Deploy via Vercel Dashboard (No CLI Required)

### Step 1: Download/Export Your Code

If you need to get the code out of this sandbox:

**Option A: Create a ZIP file**
```bash
cd /home/user
tar -czf g2-next-platform.tar.gz g2-next-platform/
# Download this file
```

**Option B: Push to GitHub** (if you have access)
```bash
cd /home/user/g2-next-platform
git remote add origin https://github.com/YOUR-USERNAME/g2-staging.git
git push -u origin master
```

---

### Step 2: Import to Vercel

1. **Go to:** https://vercel.com/new

2. **If using GitHub:**
   - Click **Import Git Repository**
   - Select your repo
   - Click **Import**

3. **If uploading code:**
   - Use Vercel CLI on your local machine
   - Or connect GitHub after pushing code

---

### Step 3: Configure Project

**Project Settings:**
```
Project Name: g2-middle-east-staging
Framework: Next.js (auto-detected)
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Node.js Version: 18.x
```

---

### Step 4: Add Environment Variables

In the Vercel project settings, add these variables for **Production**:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-project-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-supabase-service-role-key>

# OpenAI Configuration
OPENAI_API_KEY=<your-openai-api-key>

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://g2-middle-east-staging.vercel.app
```

**Note:** Use the actual credentials from your `.env.local` file when deploying.

**⚠️ Important:** Set these for **Production** environment, not just Preview!

---

### Step 5: Deploy

Click **Deploy** and wait ~3 minutes for the build.

---

## ✅ Expected Results

### Build Output
```
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (15/15)
✓ Finalizing page optimization

Route (app)                              Size      First Load JS
┌ ○ /                                   177 B     105 kB
├ ○ /search                             2.46 kB   104 kB
├ ● /briefing/[slug]                    177 B     105 kB
└ + 12 more routes

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML
ƒ  (Dynamic)  server-rendered on demand
```

### Your Staging URL
```
https://g2-middle-east-staging.vercel.app
```

Or with auto-generated name:
```
https://g2-middle-east-staging-abc123xyz.vercel.app
```

---

## 🧪 Test Your Deployment

### Quick Tests

**1. Homepage:**
```
https://g2-middle-east-staging.vercel.app/
```
✅ Should load with G2 branding

**2. Search Page:**
```
https://g2-middle-east-staging.vercel.app/search
```
✅ Should show search UI

**3. Intelligence API:**
```
https://g2-middle-east-staging.vercel.app/api/briefings
```
✅ Should return JSON with 5 mock briefings

**4. Semantic Search API:**
```bash
curl -X POST https://g2-middle-east-staging.vercel.app/api/search \
  -H "Content-Type: application/json" \
  -d '{"query": "digital sovereignty"}'
```
✅ Should return matching document from database

**5. Public Files:**
```
https://g2-middle-east-staging.vercel.app/llms.txt
https://g2-middle-east-staging.vercel.app/ai-plugin.json
https://g2-middle-east-staging.vercel.app/openapi.yaml
```
✅ Should all be accessible

---

## 📊 What's Working

Your staging deployment will have:

- ✅ **2 test embeddings** in Supabase
  - Digital Sovereignty in the GCC
  - Cultural Intelligence in Market Entry

- ✅ **Functional semantic search**
  - Try: "What is digital sovereignty?"
  - Try: "How to enter Middle East markets?"

- ✅ **All 5 phases complete**
  - Infrastructure
  - Security
  - Knowledge Graph
  - Agentic API
  - Vector Search (RAG)

---

## 🔧 Troubleshooting

### Build Fails

**Error: Missing environment variables**
- Solution: Add all 5 environment variables listed above
- Make sure they're in "Production" environment
- Redeploy after adding

### Search Returns No Results

**Error: Search API returns empty results**
- Solution: Verify embeddings are in database
- Run in Supabase SQL Editor:
  ```sql
  SELECT COUNT(*) FROM documents;
  ```
- Should return `2`

### 500 Errors on API Routes

**Error: API routes return 500**
- Solution: Check Vercel function logs
- Verify OPENAI_API_KEY is set correctly
- Verify SUPABASE_SERVICE_ROLE_KEY is set correctly

---

## 📞 Getting Help

### View Logs
https://vercel.com/dashboard/[your-project]/logs

### Check Build
https://vercel.com/dashboard/[your-project]/deployments

### Supabase Database
https://supabase.com/dashboard/project/mvxlbrgzmzshyvuwowuj

---

## 🎉 Success!

Once deployed, you'll have a fully functional staging environment with:
- ✅ Semantic search (AI-powered)
- ✅ Intelligence API
- ✅ Knowledge graph
- ✅ Dynamic OG images
- ✅ Security hardened

**Share the staging URL with your team for review!** 🚀
