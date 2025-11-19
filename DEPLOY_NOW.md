# 🚀 DEPLOY TO VERCEL STAGING - READY NOW!

## ✅ CURRENT STATUS

```
✅ SQL Migration Complete
✅ Supabase Database Ready
✅ Test Embeddings Generated (2 documents)
✅ All Code Committed to Git
✅ Environment Variables Configured
```

**YOU ARE READY TO DEPLOY!** 🎉

---

## 🎯 OPTION 1: Deploy via Vercel CLI (Fastest)

### Step 1: Login to Vercel

```bash
cd /home/user/g2-next-platform
npx vercel login
```

This will:
1. Prompt for your email
2. Send you a verification email
3. Click the link to authenticate

### Step 2: Deploy to Staging

```bash
npx vercel --name g2-middle-east-staging
```

Answer the prompts:
- **Set up and deploy?** `Y`
- **Which scope?** Select your account
- **Link to existing project?** `N`  
- **Project name?** `g2-middle-east-staging`
- **Directory?** `.` (press Enter)
- **Override settings?** `N`

### Step 3: Add Environment Variables

After deployment, go to:
https://vercel.com/dashboard

1. Select `g2-middle-east-staging` project
2. Go to **Settings** → **Environment Variables**
3. Add these for **Production** environment:

```bash
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-project-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-supabase-service-role-key>
OPENAI_API_KEY=<your-openai-api-key>
NEXT_PUBLIC_SITE_URL=https://g2-middle-east-staging.vercel.app
```

**Note:** Use the actual credentials from your `.env.local` file when deploying.

### Step 4: Redeploy with Environment Variables

```bash
npx vercel --prod
```

**Done!** Your staging URL will be: `https://g2-middle-east-staging.vercel.app`

---

## 🎯 OPTION 2: Deploy via Vercel Dashboard (Easiest)

### Step 1: Push to GitHub

```bash
cd /home/user/g2-next-platform

# Create GitHub repository first, then:
git remote add origin https://github.com/YOUR-ORG/g2-staging.git
git push -u origin master
```

### Step 2: Import in Vercel

1. Go to: https://vercel.com/new
2. Click **Import Git Repository**
3. Select your GitHub repo
4. Configure:
   - **Project Name:** `g2-middle-east-staging`
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`

### Step 3: Add Environment Variables (in Vercel UI)

Add the same environment variables as Option 1 above.

### Step 4: Deploy

Click **Deploy** button.

**Wait ~3 minutes** for build to complete.

---

## 🧪 TESTING YOUR STAGING DEPLOYMENT

### Critical URLs to Test

Once deployed, test these URLs (replace with your actual staging URL):

```
Homepage:
https://g2-middle-east-staging.vercel.app/

Search Page:
https://g2-middle-east-staging.vercel.app/search

Intelligence API:
https://g2-middle-east-staging.vercel.app/api/briefings

Search API (POST):
https://g2-middle-east-staging.vercel.app/api/search

Test with:
curl -X POST https://g2-middle-east-staging.vercel.app/api/search \
  -H "Content-Type: application/json" \
  -d '{"query": "digital sovereignty"}'

llms.txt:
https://g2-middle-east-staging.vercel.app/llms.txt

AI Plugin Manifest:
https://g2-middle-east-staging.vercel.app/ai-plugin.json
```

### Expected Results

✅ Homepage loads with G2 branding
✅ Search UI renders correctly  
✅ API endpoints return JSON
✅ Search returns 2 test documents
✅ Public files accessible

---

## 📊 WHAT'S IN YOUR DATABASE

Currently, you have **2 test embeddings** for semantic search:

1. **Digital Sovereignty in the GCC**
   - Content about data localization in GCC
   
2. **Cultural Intelligence in Market Entry**
   - Content about relationship-based business

### To Add More Embeddings Later

After deployment is working, you can generate more embeddings by:

1. **Create smaller content files** (to avoid memory issues)
2. **Run the test script** multiple times with different content
3. **Or use the Vercel deployment** to generate embeddings (it has more memory)

---

## 🔧 TROUBLESHOOTING

### Build Fails

**Check:**
- Environment variables are set correctly
- All variables are in "Production" environment
- Redeploy after adding variables

### Search Doesn't Work

**Check:**
- Embeddings are in database (should be 2)
- OPENAI_API_KEY is set
- SUPABASE_SERVICE_ROLE_KEY is set

### 404 on All Pages

**Check:**
- Build completed successfully
- No build errors in Vercel logs
- Next.js version is 15.1.0+

---

## 📞 SUPPORT

### Vercel Deployment Logs

View logs at:
https://vercel.com/dashboard/g2-middle-east-staging/deployments

### Supabase Database

Check documents:
https://supabase.com/dashboard/project/mvxlbrgzmzshyvuwowuj/editor

Run:
```sql
SELECT COUNT(*) FROM documents;
SELECT metadata->>'title' as title FROM documents;
```

---

## 🎉 SUCCESS CRITERIA

Your staging deployment is successful when:

- ✅ Build completes in ~3 minutes
- ✅ Staging URL is accessible
- ✅ Homepage loads correctly
- ✅ Search page renders
- ✅ Search API returns results
- ✅ No 500 errors in logs

---

## 📝 NEXT STEPS AFTER DEPLOYMENT

1. **Test all features** using checklist
2. **Share staging URL** with team
3. **Collect feedback**
4. **Add more embeddings** if needed
5. **Get approval** for production
6. **Deploy to production** (separate project)

---

## 🚀 READY TO DEPLOY?

**Choose your method:**

- **Fast:** Run `npx vercel login` then `npx vercel --name g2-middle-east-staging`
- **Easy:** Push to GitHub, import in Vercel dashboard

**Time to live staging URL:** ~5-10 minutes! 🎉

---

**All credentials are configured. All code is committed. Database is ready.**

**YOU ARE 100% READY TO DEPLOY!** 🚀
