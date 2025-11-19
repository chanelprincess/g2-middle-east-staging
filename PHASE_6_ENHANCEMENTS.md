# 🎨 Phase 6 Enhancements: File Uploads & Rich Editor

## ✨ What's New

Phase 6 enhancements add **complete UI for content management** with file uploads and a rich blog editor.

### New Features:
- ✅ **File Upload System** - Upload to Supabase Storage
- ✅ **Project Creation Form** - Full UI with multiple file uploads
- ✅ **Blog Post Editor** - Markdown editor with image upload
- ✅ **Real-time Progress** - Upload progress indicators
- ✅ **Image Preview** - See uploaded images immediately

---

## 📁 File Upload System

### Storage Utility (`src/utils/storage.ts`)

Provides helper functions for working with Supabase Storage:

```typescript
// Upload to public-assets (blog images)
const result = await uploadPublicAsset(file, 'blog');
// Returns: { success, path, url }

// Upload to secure-assets (project files)
const result = await uploadSecureAsset(file, 'projects');
// Returns: { success, path }

// Validate file size
const isValid = validateFileSize(file, 10); // 10MB max

// Format file size for display
const formatted = formatFileSize(bytes); // "5.2 MB"
```

### Features:
- **Automatic unique filenames** (timestamp + random string)
- **Folder organization** (blog/, projects/, etc.)
- **Public vs Secure** - Right bucket for the right content
- **Validation helpers** - Size and type checking
- **Error handling** - Graceful failures with error messages

---

## 📝 Project Creation Form

### Location: `/admin/projects/create`

Complete UI for creating client projects with file attachments.

### Features:

#### 1. Client Selection
- Dropdown of all client users
- Shows company name or email
- Auto-fetches from profiles table
- Empty state if no clients exist

#### 2. Project Details
- **Title** (required) - Project name
- **Description** (optional) - Rich textarea
- **Status** - Active, Pending, or Completed

#### 3. Cover Image Upload
- **Single image** - Optional project cover
- **5MB limit** - Automatic validation
- **Image types** - JPG, PNG, WebP
- **Preview** - Shows selected image
- **Remove option** - Clear selection

#### 4. File Attachments
- **Multiple files** - Upload many at once
- **10MB per file** - Size validation
- **All file types** - PDFs, docs, images, etc.
- **Real-time progress** - Spinner during upload
- **Success indicator** - Green checkmark when complete
- **Error display** - Shows upload errors
- **Remove files** - Delete before submission

### Upload Process:

1. **Select files** - User chooses files
2. **Client validation** - Check size/type on frontend
3. **Form submission** - User clicks "Create Project"
4. **Upload cover image** - To secure-assets/projects/covers/
5. **Upload each file** - To secure-assets/projects/files/
6. **Update progress** - Show spinners for each file
7. **Create database entry** - Save project with file paths
8. **Redirect** - Back to admin dashboard

### Database Entry:
```json
{
  "client_id": "uuid",
  "title": "Market Entry Strategy",
  "description": "Q1 2025 market analysis",
  "status": "Active",
  "cover_image_path": "projects/covers/123456-abc.jpg",
  "secure_files": [
    {
      "name": "market-analysis.pdf",
      "path": "projects/files/123457-def.pdf",
      "size": 2048576
    }
  ]
}
```

---

## ✍️ Blog Post Editor

### Location: `/admin/posts/create`

Professional blog post editor with Markdown support.

### Features:

#### 1. Title & Slug
- **Title field** - Post headline
- **Auto-slug generation** - Creates URL from title
- **Manual override** - Edit slug if needed
- **Preview** - Shows full URL: `/briefing/your-slug`

#### 2. Summary
- **200 character limit** - Enforced in UI
- **Character counter** - Shows remaining chars
- **Required field** - Must be filled
- **Used in** - Blog listing, meta descriptions

#### 3. Markdown Content Editor
- **Large textarea** - 20 rows for comfortable writing
- **Markdown support** - Full Markdown formatting
- **Quick reference** - Built-in cheat sheet
- **Monospace font** - Easy to read/write code

**Markdown Quick Reference:**
```markdown
# Heading 1
## Heading 2
### Heading 3

**bold text**
*italic text*

- Bullet point
- Another point

1. Numbered list
2. Second item

[Link text](https://url.com)
```

#### 4. Featured Image
- **Optional** - Not required
- **Immediate upload** - Uploads when selected
- **Public URL** - Uses public-assets bucket
- **5MB limit** - Validated
- **Image preview** - Full-width preview
- **Remove option** - Clear and re-select

**Recommended Size:** 1200x630px (OG image standard)

#### 5. Publishing Options
- **Checkbox** - Publish immediately or save as draft
- **Published posts** - Visible on `/briefing`
- **Drafts** - Only visible in admin
- **Timestamp** - Auto-set `published_at` when published

### Content Flow:

1. **Write content** - Fill in title, summary, body
2. **Auto-slug** - Slug generated from title
3. **Upload image** (optional) - Select featured image
4. **Immediate upload** - Image uploads to public-assets
5. **Choose publish** - Checkbox for immediate publish
6. **Submit** - Creates post in database
7. **Redirect** - Back to admin posts tab

---

## 🎯 How to Use

### Creating a Project:

```bash
1. Login as admin
2. Go to Admin Dashboard
3. Click "Projects" tab
4. Click "Create Project" button
5. Select client from dropdown
6. Fill in title and description
7. (Optional) Upload cover image
8. (Optional) Attach project files
9. Set status (Active/Pending/Completed)
10. Click "Create Project"
11. Files upload automatically
12. Redirects to dashboard
```

### Creating a Blog Post:

```bash
1. Login as admin
2. Go to Admin Dashboard
3. Click "Posts" tab
4. Click "Create Post" button
5. Enter title (slug auto-generates)
6. Write summary (max 200 chars)
7. Write content in Markdown
8. (Optional) Upload featured image
9. Check "Publish Immediately" if ready
10. Click "Publish Post" or "Save Draft"
11. Redirects to dashboard
```

---

## 🔒 Security & Permissions

### File Upload Security:

**Storage Policies:**
- Only **admins** can upload files
- **Clients** can download their project files (via signed URLs)
- **Public** can view blog images (public-assets)
- **No one** can directly access secure-assets

**Validation:**
- **Client-side** - Immediate feedback on size/type
- **Server-side** - Supabase Storage enforces policies
- **RLS** - Database policies ensure data isolation

**File Size Limits:**
- **Blog images:** 5MB max
- **Project cover:** 5MB max
- **Project files:** 10MB max per file
- **No limit** on number of files per project

---

## 📊 File Storage Architecture

```
Supabase Storage
├── public-assets/
│   ├── blog/
│   │   ├── 1234567-abc123.jpg  (Featured images)
│   │   ├── 1234568-def456.png  (Inline images)
│   │   └── ...
│   └── team/  (Future: team photos)
│
└── secure-assets/
    └── projects/
        ├── covers/
        │   ├── 1234567-xyz789.jpg  (Project covers)
        │   └── ...
        └── files/
            ├── 1234568-abc123.pdf  (Client files)
            ├── 1234569-def456.docx
            └── ...
```

### URLs:

**Public Assets:**
```
https://mvxlbrgzmzshyvuwowuj.supabase.co/storage/v1/object/public/public-assets/blog/1234567-abc123.jpg
```
- Direct access
- No expiry
- SEO-friendly

**Secure Assets:**
```javascript
const { data } = await supabase.storage
  .from('secure-assets')
  .createSignedUrl('projects/files/1234567-abc.pdf', 3600);

// Returns: https://...?token=jwt_token
```
- Signed URLs
- 1-hour expiry
- Client access only

---

## 🐛 Troubleshooting

### Issue 1: "Failed to upload file"

**Possible Causes:**
- File too large (check limits)
- Wrong file type
- Storage quota exceeded
- Network error

**Solution:**
- Check file size < limit
- Check browser console for errors
- Verify storage buckets exist in Supabase
- Check Supabase storage quota

### Issue 2: "Client dropdown is empty"

**Cause:** No client users exist

**Solution:**
```sql
-- Create a test client user in Supabase Auth
-- Then run:
UPDATE public.profiles
SET role = 'client'
WHERE email = 'client@example.com';
```

### Issue 3: "Image preview not showing"

**Possible Causes:**
- Upload failed
- CORS issue
- Bucket not public

**Solution:**
- Check browser console for errors
- Verify public-assets bucket is public:
```sql
UPDATE storage.buckets
SET public = true
WHERE id = 'public-assets';
```

### Issue 4: "Slug already exists error"

**Cause:** Duplicate slug

**Solution:**
- Change the slug to something unique
- Or edit the existing post with that slug

---

## 🎨 UI/UX Features

### Upload Progress Indicators:

**Project Files:**
- Spinner icon during upload
- Green checkmark when complete
- Red error message if failed
- File size display
- Remove button before upload

**Featured Images:**
- "Uploading..." text with spinner
- Full-width preview after upload
- Remove button to clear
- Immediate feedback

### Form Validation:

**Client-side:**
- Required field indicators (red asterisk)
- Character counters
- File size validation
- File type validation
- Disabled submit button until valid

**Server-side:**
- Duplicate slug detection
- Database constraints
- Storage policy enforcement

---

## 📈 Next Steps

### Optional Enhancements:

1. **Drag & Drop**
   - Add drag-drop file upload
   - Visual drop zone
   - Multiple file selection

2. **Rich Text Editor**
   - WYSIWYG editor instead of Markdown
   - TinyMCE or Quill integration
   - Inline image uploads

3. **File Manager**
   - Browse uploaded files
   - Delete unused files
   - File organization

4. **Markdown Preview**
   - Live preview while writing
   - Split-screen editor
   - Syntax highlighting

5. **Image Optimization**
   - Auto-resize images
   - WebP conversion
   - Multiple sizes (thumbnail, full)

6. **Bulk Upload**
   - Upload entire folders
   - Progress bar for all files
   - Batch operations

---

## 🎉 What You Have Now

### Complete CMS Features:

✅ **Project Management**
- Create projects with files
- Assign to clients
- Track status
- Secure file storage

✅ **Blog Management**
- Create/edit posts
- Markdown editor
- Featured images
- Publish/draft workflow

✅ **File Uploads**
- Public assets (blog)
- Secure assets (projects)
- Real-time progress
- Validation

✅ **Storage System**
- Dual buckets
- Signed URLs
- RLS protection
- Size limits

---

## 🔗 Quick Links

**Project Creation:**
https://g2-middle-east-staging.vercel.app/admin/projects/create

**Blog Post Creation:**
https://g2-middle-east-staging.vercel.app/admin/posts/create

**Admin Dashboard:**
https://g2-middle-east-staging.vercel.app/admin

**Supabase Storage:**
https://supabase.com/dashboard/project/mvxlbrgzmzshyvuwowuj/storage/buckets

---

## ✅ Testing Checklist

- [ ] Create a test client user in Supabase Auth
- [ ] Set client role via SQL
- [ ] Login as admin
- [ ] Go to Projects tab → Create Project
- [ ] Select client from dropdown
- [ ] Upload cover image (< 5MB)
- [ ] Upload multiple project files (< 10MB each)
- [ ] Submit form
- [ ] Verify project appears in dashboard
- [ ] Login as client
- [ ] Verify project is visible
- [ ] Download project files (signed URLs)
- [ ] Go to Posts tab → Create Post
- [ ] Write post with Markdown
- [ ] Upload featured image
- [ ] Publish post
- [ ] View post on `/briefing`

---

**Phase 6 Enhancements Complete! Your CMS is fully functional.** 🚀
