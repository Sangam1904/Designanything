# 🚀 Quick GitHub Pages Deployment Guide

## ✅ What I've Set Up For You

1. ✅ **Next.js configured for static export** (`next.config.js`)
2. ✅ **GitHub Actions workflow** (`.github/workflows/deploy.yml`)
3. ✅ **Build scripts** in `package.json`

---

## 🎯 Two Options: Choose Your Repo Name

### Option A: Project Site (Any Repo Name)

**If your repo is named:** `anything-can-design` (or any name)

**Your site URL will be:**
```
https://sangam1984.github.io/anything-can-design/
```

**What to do:**
1. Push your code to GitHub
2. Go to **Settings → Pages**
3. Select **Source**: `GitHub Actions`
4. The workflow will auto-deploy!

---

### Option B: User Site (Special Repo Name)

**If your repo is named:** `sangam1984.github.io` (exactly this)

**Your site URL will be:**
```
https://sangam1984.github.io/
```

**What to do:**
1. Rename your repo to `sangam1984.github.io`
2. Update `next.config.js` line 9:
   ```javascript
   basePath: '', // Empty for user site
   ```
3. Push code
4. Go to **Settings → Pages**
5. Select **Source**: `GitHub Actions`

---

## 📋 Step-by-Step Deployment

### Step 1: Push Your Code
```bash
git add .
git commit -m "Configure for GitHub Pages"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - **Deploy from a branch** → **GitHub Actions**
5. Click **Save**

### Step 3: Wait for Deployment

1. Go to **Actions** tab
2. You'll see "Deploy to GitHub Pages" workflow running
3. Wait 2-3 minutes
4. Status will show ✅ when done

### Step 4: Visit Your Site

- **Project site**: `https://sangam1984.github.io/your-repo-name/`
- **User site**: `https://sangam1984.github.io/`

---

## 🔍 Check Deployment Status

1. **Actions Tab** → Look for green checkmark ✅
2. **Settings → Pages** → See your site URL at the top
3. **Visit the URL** → Should see your portfolio!

---

## ❌ Troubleshooting

### "404 - Page Not Found"

**Fix:** Check `basePath` in `next.config.js`
- Project site: `basePath: '/your-repo-name'`
- User site: `basePath: ''`

### "Build Failed" in Actions

**Fix:**
1. Click on the failed workflow
2. Check error message
3. Common issues:
   - Missing `package.json`
   - Build errors in code
   - Node version mismatch

### "Blank Page"

**Fix:**
- Check browser console (F12) for errors
- Verify `index.html` exists in `out/` folder
- Clear browser cache

---

## 🎉 That's It!

Once deployed, your portfolio will be live on GitHub Pages!

**Need help?** Check `GITHUB_PAGES_SETUP.md` for detailed guide.

