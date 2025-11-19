# 🧪 SCHEMA TESTING GUIDE

**Purpose**: Validate JSON-LD structured data implementation  
**Phase**: 3 - Semantic Web & Knowledge Graph  
**Tools**: Google Rich Results, Schema.org Validator

---

## 🎯 Quick Tests

### Test 1: View JSON-LD in Page Source

```bash
# Homepage - Organization schema
curl http://localhost:3001 | grep -A 50 "application/ld+json"

# Expected output:
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.g2middleeast.com/#organization",
  "name": "G2 Middle East",
  ...
}
</script>
```

---

### Test 2: Check llms.txt Accessibility

```bash
# Fetch the Rosetta Stone file
curl http://localhost:3001/llms.txt

# Expected: Markdown content starting with:
# G2 Middle East: Strategic Advisory & Government Relations
```

**✅ PASS**: Returns 200 OK with Markdown content  
**❌ FAIL**: Returns 404 or empty content

---

### Test 3: Verify subjectOf Link

```bash
# Extract Organization schema
curl http://localhost:3001 | grep -o '"subjectOf"[^}]*}'

# Expected output should contain:
"subjectOf": {
  "@type": "WebPage",
  "@id": "https://www.g2middleeast.com/llms.txt"
}
```

**Why Critical**: This tells AI agents where to find detailed entity info

---

### Test 4: Team Member Schema

```bash
# Tim Jacobs profile page
curl http://localhost:3001/team/tim-jacobs | grep -A 30 "application/ld+json"

# Expected output:
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Tim Jacobs",
    "worksFor": {
      "@id": "https://www.g2middleeast.com/#organization"
    }
  }
}
</script>
```

---

## 🌐 Google Rich Results Test

### Step-by-Step

1. **Go to Google Rich Results Test Tool**:
   ```
   https://search.google.com/test/rich-results
   ```

2. **Test Homepage**:
   - Enter URL: `https://your-deployment-url.com`
   - Click "Test URL"
   - Wait for analysis (~10 seconds)

3. **Expected Results**:
   ```
   ✅ Organization
      - Name: G2 Middle East
      - Type: ProfessionalService
      - URL: https://www.g2middleeast.com
   
   ℹ️  subjectOf property might show as warning
      (Not all properties are displayed in Rich Results)
   ```

4. **Check for Errors**:
   - ✅ **0 Errors**: Schema is valid
   - ⚠️  **Warnings**: Usually cosmetic, often okay
   - ❌ **Errors**: Must be fixed

5. **Test Team Member Page**:
   - Enter URL: `https://your-deployment-url.com/team/tim-jacobs`
   - Click "Test URL"
   - Expected: ProfilePage + Person recognized

---

## 🔍 Schema.org Validator

### Step-by-Step

1. **Extract JSON-LD from Page**:
   ```bash
   # Homepage
   curl http://localhost:3001 | \
     grep -o '<script type="application/ld+json">.*</script>' | \
     sed 's/<script type="application\/ld+json">//; s/<\/script>//'
   ```

2. **Go to Schema.org Validator**:
   ```
   https://validator.schema.org
   ```

3. **Paste JSON-LD**:
   - Click "Code Snippet" tab
   - Paste the extracted JSON-LD
   - Click "Validate"

4. **Expected Results**:
   ```
   ✅ Valid Schema.org markup
   ✅ No errors
   ℹ️  Possible info messages about optional properties
   ```

---

## 🤖 AI Agent Testing

### Test with ChatGPT (Manual)

1. **Ensure site is deployed publicly**

2. **Ask ChatGPT**:
   ```
   "Can you browse https://www.g2middleeast.com and tell me what 
   services G2 Middle East provides?"
   ```

3. **Expected Behavior**:
   - ChatGPT browses the site
   - Reads Organization schema
   - Follows `subjectOf` to `/llms.txt`
   - Provides accurate answer about services

4. **✅ PASS Indicators**:
   - Mentions specific services (Government Relations, Cultural Intelligence)
   - References GCC countries
   - Cites Tim Jacobs as Regional COO

---

### Test with Perplexity (Manual)

1. **Ask Perplexity**:
   ```
   "What does G2 Middle East do and where do they operate?"
   ```

2. **Expected Behavior**:
   - Perplexity searches and finds site
   - Reads structured data
   - Includes G2 Middle East in sources
   - Provides accurate information

3. **✅ PASS Indicators**:
   - G2 Middle East appears in answer
   - Correct geographic focus (UAE, Saudi Arabia, etc.)
   - Accurate service descriptions

---

## 📊 Schema Checklist

### Organization Schema (Homepage)

Check that all these properties are present:

```json
{
  "@context": "https://schema.org",          ← Must be present
  "@type": "ProfessionalService",            ← More specific than Organization
  "@id": "https://.../#organization",        ← Stable entity ID
  "name": "G2 Middle East",                  ← Organization name
  "url": "https://www.g2middleeast.com",     ← Canonical URL
  "description": "...",                       ← Clear description
  "areaServed": [...],                        ← GCC countries
  "serviceType": [...],                       ← All services
  "subjectOf": {                              ← THE CRITICAL LINK
    "@type": "WebPage",
    "@id": "https://.../llms.txt"
  }
}
```

**Validation**:
- [ ] All required properties present
- [ ] `@id` uses URL fragment (`#organization`)
- [ ] `subjectOf` points to `/llms.txt`
- [ ] `areaServed` includes 6 GCC countries
- [ ] `serviceType` lists all 5 services

---

### Person Schema (Team Pages)

Check that all these properties are present:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",                     ← Page type
  "mainEntity": {
    "@type": "Person",                        ← Entity type
    "@id": "https://.../team/tim-jacobs#person", ← Stable ID
    "name": "Tim Jacobs",                     ← Person name
    "jobTitle": "Regional Chief Operating Officer", ← Title
    "worksFor": {                             ← THE CRITICAL LINK
      "@id": "https://.../#organization"
    }
  }
}
```

**Validation**:
- [ ] ProfilePage type used
- [ ] Person as mainEntity
- [ ] `@id` uses URL fragment (`#person`)
- [ ] `worksFor` links to Organization `@id`
- [ ] Knowledge graph connection established

---

## 🔗 Knowledge Graph Validation

### Entity Linking Test

**Goal**: Verify entities are connected via `@id` references

```bash
# Step 1: Get Organization @id from homepage
HOMEPAGE_JSON=$(curl -s http://localhost:3001 | grep -oP '<script type="application/ld\+json">\K.*(?=</script>)' | head -1)
ORG_ID=$(echo $HOMEPAGE_JSON | jq -r '.["@id"]')

echo "Organization @id: $ORG_ID"
# Expected: https://www.g2middleeast.com/#organization

# Step 2: Get Person worksFor from team page
TEAM_JSON=$(curl -s http://localhost:3001/team/tim-jacobs | grep -oP '<script type="application/ld\+json">\K.*(?=</script>)' | head -1)
WORKS_FOR=$(echo $TEAM_JSON | jq -r '.mainEntity.worksFor["@id"]')

echo "Person worksFor: $WORKS_FOR"
# Expected: https://www.g2middleeast.com/#organization

# Step 3: Verify they match
if [ "$ORG_ID" == "$WORKS_FOR" ]; then
  echo "✅ PASS: Entities correctly linked"
else
  echo "❌ FAIL: Entity @id mismatch"
fi
```

---

## 🚨 Common Issues & Fixes

### Issue 1: Schema Not Found

**Symptom**: Google Rich Results says "No structured data found"

**Causes**:
- JSON-LD script tag not in HTML
- JavaScript rendering issue
- Syntax error in JSON

**Solutions**:
```bash
# Check if script tag exists
curl https://your-site.com | grep "application/ld+json"

# Validate JSON syntax
curl https://your-site.com | \
  grep -oP '<script type="application/ld\+json">\K.*(?=</script>)' | \
  jq .
```

---

### Issue 2: Invalid JSON

**Symptom**: Validator shows "Invalid JSON"

**Causes**:
- Trailing commas in JSON
- Unescaped quotes in strings
- Missing quotes on property names

**Solutions**:
- Use `JSON.stringify()` for serialization (we do this)
- Validate with `jq` command
- Check browser console for parse errors

---

### Issue 3: @id Not Resolving

**Symptom**: "Referenced entity not found"

**Causes**:
- Typo in `@id` reference
- `worksFor` doesn't match Organization `@id`
- Wrong URL format

**Solutions**:
```typescript
// Ensure exact match
Organization: "@id": "https://www.g2middleeast.com/#organization"
Person: "worksFor": { "@id": "https://www.g2middleeast.com/#organization" }
                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                Must match exactly (including protocol, #fragment)
```

---

### Issue 4: subjectOf Not Working

**Symptom**: AI agents not reading llms.txt

**Causes**:
- File not accessible (404)
- Wrong MIME type
- Missing in `subjectOf`

**Solutions**:
```bash
# 1. Verify file exists and is accessible
curl -I http://localhost:3001/llms.txt
# Expected: HTTP/1.1 200 OK

# 2. Check content type
curl -I http://localhost:3001/llms.txt | grep "content-type"
# Expected: text/plain or text/markdown

# 3. Verify subjectOf in schema
curl http://localhost:3001 | grep "subjectOf"
# Expected: Should contain llms.txt URL
```

---

## ✅ Validation Checklist

### Pre-Deployment

- [ ] Run dev server: `npm run dev`
- [ ] View source: `http://localhost:3001`
- [ ] Find `<script type="application/ld+json">` tags
- [ ] Copy JSON-LD to Schema.org Validator
- [ ] Fix any validation errors
- [ ] Test llms.txt accessibility
- [ ] Verify `@id` links match

### Post-Deployment

- [ ] Test with Google Rich Results (homepage)
- [ ] Test with Google Rich Results (team pages)
- [ ] Verify llms.txt is publicly accessible
- [ ] Ask ChatGPT to browse site
- [ ] Check Perplexity sources
- [ ] Monitor for 2-4 weeks for Google Knowledge Panel

---

## 📈 Success Metrics

### Immediate (Within 24 Hours)

- ✅ Google Rich Results: Valid schema
- ✅ Schema.org Validator: No errors
- ✅ llms.txt: Accessible at `/llms.txt`
- ✅ Entity linking: `@id` references work

### Short Term (1-2 Weeks)

- ✅ AI agents (ChatGPT): Accurate information
- ✅ Perplexity: G2 Middle East in sources
- ✅ Search Console: Rich Results appear

### Long Term (4-8 Weeks)

- ✅ Google Knowledge Panel: Eligible
- ✅ Rich Snippets: In search results
- ✅ Entity recognition: Consistent across AI platforms

---

## 🎯 Testing Report Template

```markdown
# Schema Testing Report
Date: YYYY-MM-DD
Tester: [Your Name]
URL: https://your-deployment-url.com

## Automated Tests
- [ ] Homepage JSON-LD present
- [ ] Team page JSON-LD present
- [ ] llms.txt accessible
- [ ] Entity @ids match

## Google Rich Results
- [ ] Homepage: Organization recognized
- [ ] Team page: Person recognized
- [ ] Zero errors
- [ ] Warnings documented (if any)

## Schema.org Validator
- [ ] Homepage schema valid
- [ ] Team schema valid
- [ ] No syntax errors

## AI Agent Tests
- [ ] ChatGPT: Accurate info
- [ ] Perplexity: G2 ME in sources

## Issues Found
1. [Describe issue]
2. [Resolution]

## Conclusion
- [ ] All tests PASS - Schema deployed ✅
- [ ] Some tests FAIL - needs fixes ❌
```

---

**Ready to test?** Start with automated tests, then manual validation!

**Status**: ⏳ Waiting for deployment  
**Next**: Test schemas on live URL
