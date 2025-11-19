# 🔧 Deployment Error - Troubleshooting Guide

## 🚨 Current Issue

**Error Message:** "Application error: a server-side exception has occurred (see the server logs for more information)."

This is a generic Next.js error that means something failed on the server. Let's diagnose and fix it.

---

## 🔍 Step 1: Check Environment Variables

The **most common cause** of this error is missing environment variables.

### Verify in Vercel Dashboard:

1. **Go to:** https://vercel.com/dashboard
2. **Select:** `g2-middle-east-staging` project
3. **Click:** Settings → Environment Variables
4. **Verify ALL 5 variables exist:**

```bash
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
OPENAI_API_KEY
NEXT_PUBLIC_SITE_URL
```

### Required Values:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://mvxlbrgzmzshyvuwowuj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12eGxicmd6bXpzaHl2dXdvd3VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1Mzc3NDQsImV4cCI6MjA3OTExMzc0NH0.wDecb6_8qdDFNyS94bVkPVuUEhBDNyjQiUosfcw6qs4
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
OPENAI_API_KEY=<your-openai-api-key>
NEXT_PUBLIC_SITE_URL=https://g2-middle-east-staging.vercel.app
```

### ⚠️ CRITICAL:
- Each variable must be checked for **"Production"** environment
- Not just "Preview" or "Development"
- Click the checkboxes: ✅ Production ✅ Preview ✅ Development

---

## 🩺 Step 2: Use Health Check API

Once redeployed, test the health check endpoint:

```bash
curl https://g2-middle-east-staging.vercel.app/api/health
```

**Expected Response (if all env vars are set):**
```json
{
  "status": "ok",
  "timestamp": "2024-11-19T...",
  "environment": {
    "NEXT_PUBLIC_SUPABASE_URL": true,
    "NEXT_PUBLIC_SUPABASE_ANON_KEY": true,
    "SUPABASE_SERVICE_ROLE_KEY": true,
    "OPENAI_API_KEY": true,
    "NEXT_PUBLIC_SITE_URL": true
  },
  "missing": []
}
```

**If env vars are missing:**
```json
{
  "status": "error",
  "environment": {
    "NEXT_PUBLIC_SUPABASE_URL": false,
    "OPENAI_API_KEY": false,
    ...
  },
  "missing": ["NEXT_PUBLIC_SUPABASE_URL", "OPENAI_API_KEY"]
}
```

---

## 🔧 Step 3: Check Vercel Function Logs

### View Real-Time Logs:

1. **Go to:** Vercel Dashboard → `g2-middle-east-staging`
2. **Click:** Deployments tab
3. **Select:** Latest deployment
4. **Click:** "Functions" tab or "Logs" tab
5. **Look for:** Error stack traces

### Common Errors:

**Error 1: "Missing Supabase environment variables"**
- **Cause:** NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY not set
- **Fix:** Add them in Settings → Environment Variables
- **Redeploy:** Required after adding variables

**Error 2: "OpenAI API key not configured"**
- **Cause:** OPENAI_API_KEY not set
- **Fix:** Add it in Settings → Environment Variables
- **Redeploy:** Required after adding variables

**Error 3: "Supabase credentials not configured"**
- **Cause:** SUPABASE_SERVICE_ROLE_KEY not set
- **Fix:** Add it in Settings → Environment Variables
- **Redeploy:** Required after adding variables

---

## 🚀 Step 4: Redeploy After Fixing

After adding/fixing environment variables:

### Method 1: Via Dashboard
1. Go to: Deployments tab
2. Find latest deployment
3. Click three dots (⋯) → "Redeploy"
4. Select "Use existing Build Cache" or "Rebuild"

### Method 2: Via Git Push
1. Any new commit will trigger automatic redeployment
2. Or use: `git commit --allow-empty -m "trigger redeploy" && git push`

---

## 📊 Step 5: Verify Deployment

After redeployment completes (~2-3 minutes):

### Test 1: Health Check
```bash
curl https://g2-middle-east-staging.vercel.app/api/health
```
✅ Should return `"status": "ok"`

### Test 2: Homepage
```
https://g2-middle-east-staging.vercel.app/
```
✅ Should load without "Application error"

### Test 3: Search Page
```
https://g2-middle-east-staging.vercel.app/search
```
✅ Should render the search UI

### Test 4: API Endpoint
```bash
curl https://g2-middle-east-staging.vercel.app/api/briefings
```
✅ Should return JSON with briefings

---

## 🔍 Advanced Debugging

### Check Build Logs

1. **Deployments** → Latest deployment
2. **Building** section → Expand logs
3. Look for:
   - ✅ "Build completed successfully"
   - ❌ Any errors during build

### Check Function Invocations

1. **Functions** tab
2. Look for failed invocations (red status)
3. Click on failed invocation to see error details

### Check Edge Configuration

1. Settings → Functions
2. Verify: **Node.js Version**: 18.x or 20.x
3. Verify: **Region**: Auto (or closest to users)

---

## 🎯 Most Likely Fix

Based on the error you're seeing, **99% chance** it's one of these:

1. ❌ **Environment variables not set in Production**
   - **Fix:** Go to Settings → Environment Variables
   - **Add all 5 variables** 
   - **Check "Production" checkbox**
   - **Redeploy**

2. ❌ **NEXT_PUBLIC_* variables not available in browser**
   - **Fix:** Make sure they start with `NEXT_PUBLIC_`
   - **Example:** `NEXT_PUBLIC_SUPABASE_URL` ✅
   - **Not:** `SUPABASE_URL` ❌

3. ❌ **Service role key not set**
   - **Fix:** Add `SUPABASE_SERVICE_ROLE_KEY`
   - **Get from:** Supabase dashboard → Settings → API

---

## 📝 Checklist

Before asking for more help, verify:

- [ ] All 5 environment variables are set in Vercel
- [ ] Each variable is checked for "Production" environment
- [ ] Values are correct (no typos, no trailing spaces)
- [ ] Redeployed after adding variables
- [ ] Waited for deployment to complete (~2-3 minutes)
- [ ] Tested /api/health endpoint
- [ ] Checked Vercel function logs for errors

---

## 🆘 If Still Broken

Share with me:

1. **Output of health check API:**
   ```bash
   curl https://g2-middle-east-staging.vercel.app/api/health
   ```

2. **Screenshot of Vercel environment variables page**
   - Settings → Environment Variables
   - (Hide the actual values, just show names and checkboxes)

3. **Function logs from Vercel**
   - Deployments → Latest → Functions tab
   - Copy any error messages

---

## 🎉 Success Criteria

Deployment is fixed when:

- ✅ `/api/health` returns `"status": "ok"`
- ✅ Homepage loads without errors
- ✅ No "Application error" message
- ✅ Function logs show no errors

---

## 🔗 Quick Links

**Vercel Dashboard:**  
https://vercel.com/dashboard

**Environment Variables:**  
https://vercel.com/dashboard/[project]/settings/environment-variables

**Deployments:**  
https://vercel.com/dashboard/[project]/deployments

**Supabase Dashboard:**  
https://supabase.com/dashboard/project/mvxlbrgzmzshyvuwowuj

---

**Most likely you just need to add the environment variables and redeploy!** 🚀
