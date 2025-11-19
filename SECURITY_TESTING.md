# 🔐 SECURITY TESTING GUIDE

**Purpose**: Verify "Security by Invisibility" implementation  
**Phase**: 2 - Security Hardening  
**Strategy**: Stealth middleware + obscure login path

---

## 🧪 Test Scenarios

### Test 1: Unauthenticated Admin Access (CRITICAL)

**Goal**: Verify 404 response (not redirect)

```bash
# Command
curl -I http://localhost:3001/admin/dashboard

# Expected Response
HTTP/1.1 404 Not Found

# ❌ FAIL if you see:
HTTP/1.1 307 Temporary Redirect
Location: /login

# ✅ PASS: Returns 404 Not Found
```

**Why Important**: Confirms route appears non-existent to scanners

---

### Test 2: Login Page Accessibility

**Goal**: Verify non-standard login path works

```bash
# Command
curl -I http://localhost:3001/portal-entry/login

# Expected Response
HTTP/1.1 200 OK
Content-Type: text/html

# ✅ PASS: Login page loads successfully
```

**Manual Test**: 
1. Open http://localhost:3001/portal-entry/login
2. Should see "Portal Access" login form
3. No "G2" or "Admin" branding visible

---

### Test 3: Robots.txt Sanitization

**Goal**: Verify no admin route disclosure

```bash
# Command
curl http://localhost:3001/robots.txt

# Check Output
# ✅ PASS: Does NOT contain /admin or /api
# ❌ FAIL: If you see "Disallow: /admin"

# Should contain:
User-agent: *
Allow: /
Allow: /briefing/
Allow: /projects/
Allow: /team/
Allow: /perspectives/
```

---

### Test 4: Authentication Flow

**Prerequisites**: 
- Supabase project created
- Admin user created in Supabase
- `.env.local` updated with real credentials

**Steps**:

1. **Visit Login Page**
   ```
   http://localhost:3001/portal-entry/login
   ```

2. **Enter Credentials**
   - Email: (your admin email)
   - Password: (your admin password)

3. **Submit Form**
   - ✅ PASS: Redirects to `/admin/dashboard`
   - ✅ PASS: Shows "Authenticated as: your@email.com"
   - ❌ FAIL: Shows error or doesn't redirect

4. **Verify Session**
   - Check browser DevTools → Application → Cookies
   - Should see Supabase cookies (`sb-access-token`, etc.)

5. **Access Protected Route**
   ```
   http://localhost:3001/admin/dashboard
   ```
   - ✅ PASS: Dashboard loads, shows user email
   - ❌ FAIL: Redirects or shows 404

---

### Test 5: Session Persistence

**Goal**: Verify middleware refreshes session correctly

**Steps**:

1. Login successfully
2. Refresh the page
3. Wait 30 seconds
4. Navigate to different admin pages
5. ✅ PASS: Stays logged in
6. ❌ FAIL: Gets logged out randomly

---

### Test 6: Sign Out

**Goal**: Verify sign out clears session

**Steps**:

1. From admin dashboard, click "Sign Out"
2. Try accessing `/admin/dashboard` again
3. ✅ PASS: Returns 404 (not logged in)
4. ❌ FAIL: Still shows dashboard

---

### Test 7: Direct URL Enumeration

**Goal**: Simulate scanner/bot behavior

```bash
# Simulate a bot trying common admin paths
for path in /admin /admin/ /admin/dashboard /admin/login /api/admin /api/admin/users; do
  echo "Testing: $path"
  curl -I http://localhost:3001$path | grep HTTP
done

# Expected: All return 404 (except authenticated session)
```

---

## 🔍 Security Verification Checklist

### Pre-Authentication (Unauthenticated User)

- [ ] `/admin` → 404 Not Found
- [ ] `/admin/` → 404 Not Found
- [ ] `/admin/dashboard` → 404 Not Found
- [ ] `/api/admin` → 404 Not Found
- [ ] `/portal-entry/login` → 200 OK

### Post-Authentication (Authenticated User)

- [ ] `/admin/dashboard` → 200 OK (shows dashboard)
- [ ] `/api/admin/*` → 200 OK (when implemented)
- [ ] Displays correct user email
- [ ] Sign out button works
- [ ] Session persists across page refreshes

### Robots.txt

- [ ] `/robots.txt` → 200 OK
- [ ] Does NOT contain "Disallow: /admin"
- [ ] Does NOT contain "Disallow: /api"
- [ ] Contains only public routes in Allow list

### Security Headers (from Phase 1)

- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-Frame-Options: DENY`
- [ ] `X-XSS-Protection: 1; mode=block`
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`

---

## 🛡️ Attack Simulation

### Scenario 1: Brute Force Attempt

**Attacker Goal**: Find admin login

```bash
# Common admin paths attackers try
/admin/login      → 404 ❌ Not found
/login            → 404 ❌ Not found
/signin           → 404 ❌ Not found
/admin            → 404 ❌ Not found
/wp-admin         → 404 ❌ Not found
/administrator    → 404 ❌ Not found

# Our actual path (obscure)
/portal-entry/login → 200 ✅ (but hard to discover)
```

**Result**: Attacker gives up, no obvious target found

---

### Scenario 2: Directory Enumeration

**Attacker Goal**: Map application structure

```bash
# Attacker scans common paths
dirbuster -u http://localhost:3001 -w common_paths.txt

# What they see:
/                 → 200 OK
/briefing         → 503 Service Unavailable
/projects         → 503 Service Unavailable
/team             → 503 Service Unavailable
/admin            → 404 Not Found ← Appears to not exist
/api              → 404 Not Found ← Appears to not exist
```

**Result**: No indication admin routes exist

---

### Scenario 3: Information Disclosure via Robots.txt

**Attacker Goal**: Read robots.txt for hints

```bash
curl http://localhost:3001/robots.txt
```

**What they DON'T see**:
```
Disallow: /admin     ← This would tell them where admin is!
Disallow: /api       ← This would reveal API structure!
```

**What they DO see**:
```
Allow: /
Allow: /briefing/
Allow: /projects/
Allow: /team/
```

**Result**: No clues about admin location

---

## 🎯 Success Criteria

### All Tests Must Pass

| Test | Expected Result | Status |
|------|-----------------|--------|
| Unauthenticated /admin | 404 Not Found | ⏳ |
| Login page loads | 200 OK | ⏳ |
| Robots.txt clean | No /admin disclosure | ⏳ |
| Login works | Redirects to dashboard | ⏳ |
| Session persists | No random logouts | ⏳ |
| Sign out works | Clears session | ⏳ |
| Enumeration fails | All admin routes → 404 | ⏳ |

**Phase 2 Complete When**: All tests pass ✅

---

## 🚨 Common Issues & Solutions

### Issue 1: Getting 307 Redirect Instead of 404

**Symptom**: `/admin` returns `307 Temporary Redirect`

**Cause**: Middleware not catching route correctly

**Solution**: 
- Check `middleware.ts` matcher config
- Verify route starts with `/admin` or `/api/admin`
- Ensure Supabase middleware runs first

---

### Issue 2: Login Page Shows 404

**Symptom**: `/portal-entry/login` returns 404

**Cause**: Route not created or middleware blocking it

**Solution**:
- Verify `src/app/portal-entry/login/page.tsx` exists
- Check middleware doesn't protect `/portal-entry/*`
- Rebuild: `npm run build`

---

### Issue 3: Login Succeeds But Dashboard Shows 404

**Symptom**: After login, still get 404 on dashboard

**Cause**: Session cookie not being set or read

**Solution**:
- Check browser DevTools → Application → Cookies
- Verify Supabase cookies are present
- Check `.env.local` has correct Supabase URL/keys
- Try clearing cookies and logging in again

---

### Issue 4: Random Logouts

**Symptom**: User gets logged out unexpectedly

**Cause**: Middleware not refreshing session

**Solution**:
- Check `src/utils/supabase/middleware.ts` is correct
- Verify `updateSession()` is called in middleware
- Check Supabase project settings for session duration

---

## 📊 Testing Checklist

### Phase 2 Security Testing

**Prerequisites**:
- [ ] Supabase project created
- [ ] Admin user created in Supabase
- [ ] `.env.local` updated with real credentials
- [ ] App rebuilt: `npm run build`
- [ ] Dev server running: `npm run dev`

**Automated Tests** (run these commands):
```bash
# Test 1: Unauthenticated admin access
curl -I http://localhost:3001/admin/dashboard | grep "404"

# Test 2: Login page accessible
curl -I http://localhost:3001/portal-entry/login | grep "200"

# Test 3: Robots.txt clean
curl http://localhost:3001/robots.txt | grep -q "admin" && echo "FAIL" || echo "PASS"

# Test 7: Enumeration fails
for path in /admin /admin/dashboard /api/admin; do
  curl -I http://localhost:3001$path 2>&1 | grep "404" && echo "$path: PASS" || echo "$path: FAIL"
done
```

**Manual Tests** (do these in browser):
- [ ] Visit `/portal-entry/login`
- [ ] Login with admin credentials
- [ ] Verify redirect to `/admin/dashboard`
- [ ] Check email is displayed correctly
- [ ] Refresh page (should stay logged in)
- [ ] Click "Sign Out"
- [ ] Try accessing `/admin/dashboard` (should get 404)

---

## ✅ Test Report Template

```
# Phase 2 Security Testing Report
Date: YYYY-MM-DD
Tester: [Your Name]

## Automated Tests
- [ ] Test 1: Unauthenticated admin → 404
- [ ] Test 2: Login page → 200
- [ ] Test 3: Robots.txt clean
- [ ] Test 7: Enumeration fails

## Manual Tests
- [ ] Login flow works
- [ ] Session persists
- [ ] Dashboard displays user info
- [ ] Sign out clears session

## Issues Found
1. [Describe any issues]
2. [Resolution steps]

## Conclusion
- [ ] All tests PASS - Phase 2 complete ✅
- [ ] Some tests FAIL - needs fixes ❌
```

---

**Ready to test?** Run through all scenarios above!

**Status**: ⏳ Waiting for Supabase credentials  
**Next**: Add real API keys to `.env.local` and test auth flow
