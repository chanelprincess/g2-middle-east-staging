# 🚀 Phase 6: Unified CMS Deployment Guide

## ✅ What Was Built

Phase 6 implements a complete **Unified Content Management System** with:

- **Dual Storage Architecture** (Public + Secure assets)
- **Role-Based Authentication** (Admin + Client roles)
- **Client Portal** (Secure project file access)
- **Admin CMS** (Manage projects + blog posts)
- **Database-Driven Blog** (Replaces mock data)
- **Row Level Security** (Data isolation)

---

## 📋 Pre-Deployment Checklist

Before deploying Phase 6, ensure you have:

- ✅ Vercel deployment working (from Phase 5)
- ✅ Supabase project configured
- ✅ All environment variables set in Vercel
- ✅ Access to Supabase SQL Editor

---

## 🗄️ Step 1: Run Database Migration

### Open Supabase SQL Editor

1. Go to: https://supabase.com/dashboard/project/mvxlbrgzmzshyvuwowuj
2. Click: **SQL Editor** in sidebar
3. Click: **New Query**

### Run Migration Script

Copy and paste the contents of:
```
supabase/migrations/002_unified_cms_system.sql
```

Click **Run** to execute.

### What This Creates:

**Tables:**
- `profiles` - User profiles with roles (admin/client)
- `projects` - Private client projects
- `posts` - Public blog posts

**Storage Buckets:**
- `public-assets` - Public blog images
- `secure-assets` - Private project files

**RLS Policies:**
- Admins can see/edit everything
- Clients can only see their own projects
- Everyone can read published blog posts

**Seed Data:**
- 2 existing blog posts migrated to database

---

## 🔐 Step 2: Create Admin User

### In Supabase Dashboard:

1. Go to: **Authentication** → **Users**
2. Click: **Add User** → **Create new user**
3. Enter your admin email and password
4. Click: **Create user**

### Set Admin Role:

Run this SQL query (replace with your email):

```sql
UPDATE public.profiles
SET role = 'admin'
WHERE email = 'your-admin-email@example.com';
```

---

## 📦 Step 3: Verify Storage Buckets

### Check Buckets Exist:

1. Go to: **Storage** in Supabase sidebar
2. Verify buckets exist:
   - ✅ `public-assets` (Public = ON)
   - ✅ `secure-assets` (Public = OFF)

### If Buckets Don't Exist:

The migration should have created them, but if not:

**Create public-assets:**
```sql
INSERT INTO storage.buckets (id, name, public)
VALUES ('public-assets', 'public-assets', true)
ON CONFLICT (id) DO NOTHING;
```

**Create secure-assets:**
```sql
INSERT INTO storage.buckets (id, name, public)
VALUES ('secure-assets', 'secure-assets', false)
ON CONFLICT (id) DO NOTHING;
```

---

## 🚀 Step 4: Deploy to Vercel

### Automatic Deployment:

Vercel should automatically detect the new commit and redeploy.

Check: https://vercel.com/dashboard

### Manual Deployment (if needed):

1. Go to: **Deployments** tab
2. Click: **Redeploy** on latest deployment

---

## 🧪 Step 5: Test the Deployment

### 1. Test Public Blog

Visit:
```
https://g2-middle-east-staging.vercel.app/briefing
```

✅ Should show 2 blog posts (from seed data)

### 2. Test Login Page

Visit:
```
https://g2-middle-east-staging.vercel.app/login
```

✅ Should show G2 login form

### 3. Test Admin Login

1. Go to: `/login`
2. Enter your admin email/password
3. Should redirect to: `/admin`

✅ Should show Admin Dashboard with tabs:
- Projects tab (empty initially)
- Posts tab (2 seed posts)

### 4. Test Client Dashboard (After Creating Client)

First create a test client in Supabase Auth, then:

1. Login as client
2. Should redirect to: `/dashboard`

✅ Should show "No Active Projects" (initially)

---

## 📊 Step 6: Create Test Data

### Create a Test Project (As Admin):

1. Login as admin
2. Go to Admin Dashboard
3. Click **Projects** tab
4. Click **Create Project** button
5. Fill in details:
   - Select client email
   - Enter project title
   - Set status (Active/Pending/Completed)
6. Save

### Create a Blog Post (As Admin):

1. In Admin Dashboard
2. Click **Posts** tab
3. Click **Create Post** button
4. Fill in:
   - Title
   - Slug (URL-friendly)
   - Summary
   - Content (Markdown supported)
   - Publish status
5. Save

---

## 🔧 Troubleshooting

### Issue 1: "Missing Supabase environment variables"

**Solution:** Environment variables are already set from Phase 5. No action needed.

### Issue 2: Login redirects to 404

**Cause:** Middleware is working (stealth mode)  
**Check:** Are you using the correct login URL: `/login` (not `/portal-entry/login`)?

### Issue 3: Admin sees 404 on `/admin`

**Cause:** User role is not set to 'admin'  
**Solution:** Run the SQL query in Step 2 to set admin role

### Issue 4: Storage buckets don't exist

**Solution:** Run the storage bucket creation SQL from Step 3

### Issue 5: RLS policies block access

**Check:** Run this to verify policies:
```sql
SELECT * FROM pg_policies WHERE schemaname = 'public';
```

**Solution:** Re-run the migration script if policies are missing

---

## 📁 Project Structure

```
g2-next-platform/
├── src/
│   ├── app/
│   │   ├── login/           # NEW: Unified login page
│   │   ├── dashboard/       # NEW: Client portal
│   │   ├── admin/           # NEW: Admin CMS
│   │   ├── briefing/        # UPDATED: Database-driven blog
│   │   └── api/
│   │       ├── search/      # Vector search (Phase 5)
│   │       └── health/      # Health check
│   └── utils/
│       └── supabase/        # Supabase clients
├── middleware.ts            # UPDATED: Role-based protection
└── supabase/
    └── migrations/
        └── 002_unified_cms_system.sql  # NEW: Phase 6 schema
```

---

## 🎯 Success Criteria

Phase 6 is successfully deployed when:

- ✅ `/login` page loads
- ✅ Admin can login and access `/admin`
- ✅ Admin dashboard shows Projects + Posts tabs
- ✅ Client can login and access `/dashboard`
- ✅ `/briefing` shows posts from database
- ✅ Blog posts are visible to everyone
- ✅ Non-admin users see 404 on `/admin` (stealth security)

---

## 🔐 Security Features

### Stealth Middleware

- **Admin routes** return 404 for unauthorized users (not 403)
- **Prevents route enumeration** by bots/scanners
- **No information disclosure** about admin routes

### Row Level Security

- **Clients** can only read their own projects
- **Admins** can read/write everything
- **Public** can read published blog posts only

### Signed URLs

- **Secure assets** use time-limited signed URLs
- **No direct access** to private files
- **1-hour expiry** on file download links

---

## 📊 Database Schema

### profiles
```sql
id          UUID (PK, FK to auth.users)
email       TEXT
company_name TEXT
role        TEXT ('admin' or 'client')
created_at  TIMESTAMPTZ
updated_at  TIMESTAMPTZ
```

### projects
```sql
id          BIGSERIAL (PK)
client_id   UUID (FK to profiles)
title       TEXT
description TEXT
status      TEXT ('Active', 'Pending', 'Completed')
cover_image_path TEXT
secure_files JSONB (array)
created_at  TIMESTAMPTZ
last_updated TIMESTAMPTZ
```

### posts
```sql
id          BIGSERIAL (PK)
slug        TEXT (UNIQUE)
title       TEXT
summary     TEXT
content     TEXT (Markdown)
featured_image_url TEXT
author_id   UUID (FK to profiles)
published_at TIMESTAMPTZ
is_published BOOLEAN
view_count  INTEGER
created_at  TIMESTAMPTZ
updated_at  TIMESTAMPTZ
```

---

## 🎉 What's Next

With Phase 6 complete, you have:

1. ✅ **Complete Authentication System**
2. ✅ **Client Portal** for secure file sharing
3. ✅ **Admin CMS** for content management
4. ✅ **Database-Driven Blog** with public access
5. ✅ **Dual Storage** (public + secure)
6. ✅ **Row Level Security** protecting data

### Optional Enhancements:

- **File Upload UI** - Admin interface to upload files
- **Rich Text Editor** - WYSIWYG editor for blog posts
- **Email Notifications** - Notify clients of new projects
- **Analytics Dashboard** - Track blog views and engagement
- **Multi-Language Support** - Arabic/English content

---

## 🔗 Quick Links

**Staging URL:**  
https://g2-middle-east-staging.vercel.app/

**Login Page:**  
https://g2-middle-east-staging.vercel.app/login

**Blog (Public):**  
https://g2-middle-east-staging.vercel.app/briefing

**Admin Dashboard:**  
https://g2-middle-east-staging.vercel.app/admin

**Client Dashboard:**  
https://g2-middle-east-staging.vercel.app/dashboard

**Supabase Dashboard:**  
https://supabase.com/dashboard/project/mvxlbrgzmzshyvuwowuj

---

## 📝 Testing Checklist

- [ ] Run database migration in Supabase SQL Editor
- [ ] Create admin user in Supabase Auth
- [ ] Set admin role via SQL query
- [ ] Verify storage buckets exist
- [ ] Wait for Vercel deployment to complete
- [ ] Test login page loads
- [ ] Test admin login and dashboard access
- [ ] Test blog page shows database posts
- [ ] Create test project as admin
- [ ] Create test blog post as admin
- [ ] Verify RLS: Client can't see other clients' projects
- [ ] Verify stealth: Non-admin sees 404 on `/admin`

---

**Phase 6 Complete! Your unified CMS is ready to use.** 🚀
