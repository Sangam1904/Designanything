# GitHub Pages Deployment Setup Guide

This guide will help you deploy your Next.js portfolio to GitHub Pages.

## 📋 Prerequisites

- ✅ Your code is pushed to GitHub
- ✅ Repository is public (or you have GitHub Pro for private repos)
- ✅ You have admin access to the repository

---

## 🚀 Quick Setup (Automatic)

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Deploy from a branch**
   - **Branch**: `gh-pages` (or `main` if using Actions)
   - **Folder**: `/ (root)` or `/out` (depending on setup)
4. Click **Save**

### Step 2: Push Your Code

The GitHub Actions workflow will automatically:
- Build your Next.js app
- Export static files
- Deploy to GitHub Pages

Just push to `main` branch and wait 2-3 minutes.

---

## 🔧 Manual Setup (If Actions Don't Work)

### Option A: Project Site (Recommended)

**If your repo name is NOT `sangam1984.github.io`:**

1. **Build the site:**
   ```bash
   npm install
   npm run build:gh-pages
   ```

2. **The `out` folder contains your static site**

3. **Deploy to GitHub Pages:**
   ```bash
   # Install gh-pages package
   npm install --save-dev gh-pages
   
   # Add to package.json scripts:
   "deploy": "npm run build:gh-pages && gh-pages -d out"
   
   # Deploy
   npm run deploy
   ```

4. **Your site will be at:**
   ```
   https://sangam1984.github.io/anything-can-design/
   ```

### Option B: User Site

**If your repo name IS `sangam1984.github.io`:**

1. **Update `next.config.js`:**
   ```javascript
   basePath: '', // Empty for user site
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Your site will be at:**
   ```
   https://sangam1984.github.io/
   ```

---

## 📁 Repository Structure

After building, your repo should have:

```
your-repo/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment workflow
├── out/                        # Static files (generated)
│   ├── index.html              # ✅ This is what GitHub Pages needs
│   ├── _next/
│   ├── images/
│   └── ...
├── pages/
├── components/
└── package.json
```

---

## ✅ Checklist

Before deploying, ensure:

- [ ] `next.config.js` has `output: 'export'`
- [ ] `basePath` is set correctly (empty for user site, `/repo-name` for project site)
- [ ] All image/model paths start with `/` (absolute paths)
- [ ] GitHub Actions workflow file exists (`.github/workflows/deploy.yml`)
- [ ] Repository Settings → Pages is configured
- [ ] You've pushed code to `main` branch

---

## 🔍 Troubleshooting

### Issue: "404 - Page Not Found"

**Solution:**
- Check `basePath` in `next.config.js` matches your repo name
- For project site: `basePath: '/your-repo-name'`
- For user site: `basePath: ''`

### Issue: "Assets Not Loading"

**Solution:**
- Ensure all paths in code start with `/` (absolute paths)
- Example: `/images/logo.svg` ✅
- Not: `./images/logo.svg` ❌ or `images/logo.svg` ❌

### Issue: "Build Fails in Actions"

**Solution:**
1. Go to **Actions** tab in GitHub
2. Click on the failed workflow
3. Check the error message
4. Common issues:
   - Missing dependencies
   - Build errors in code
   - Path issues

### Issue: "Blank Page"

**Solution:**
- Check browser console for errors (F12)
- Verify `index.html` exists in `out/` folder
- Check that GitHub Pages is pointing to correct folder
- Try clearing browser cache

---

## 📊 Check Deployment Status

1. Go to your repository
2. Click **Actions** tab
3. Look for "Deploy to GitHub Pages" workflow
4. Status will show:
   - ⏳ **In progress** - Building
   - ✅ **Deployed** - Success!
   - ❌ **Failed** - Check errors

---

## 🎯 Next Steps

After successful deployment:

1. **Wait 2-5 minutes** for DNS propagation
2. **Visit your site:**
   - Project site: `https://sangam1984.github.io/anything-can-design/`
   - User site: `https://sangam1984.github.io/`
3. **Test all pages** to ensure everything works
4. **Check mobile responsiveness**

---

## 💡 Pro Tips

- **Custom Domain**: Add `CNAME` file in `public/` folder
- **HTTPS**: GitHub Pages provides free SSL
- **Analytics**: Add Google Analytics in `components/Layout.js`
- **SEO**: Update meta tags in `components/Layout.js`

---

## 📞 Need Help?

If you're still having issues:

1. Check the **Actions** tab for error messages
2. Verify your repository structure matches the guide
3. Ensure `basePath` is set correctly
4. Test locally with `npm run build && npm start`

---

**🎉 Once deployed, your portfolio will be live on GitHub Pages!**

