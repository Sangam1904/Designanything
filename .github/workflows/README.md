# GitHub Pages Deployment

This workflow automatically builds and deploys your Next.js site to GitHub Pages when you push to the `main` branch.

## How it works

1. **Build**: Builds the Next.js app as static files
2. **Export**: Exports to the `out` folder
3. **Deploy**: Deploys to GitHub Pages

## Configuration

### For Project Site (repo name: `anything-can-design`)

The site will be available at:
```
https://sangam1984.github.io/anything-can-design/
```

The base path is automatically set in the workflow.

### For User Site (repo name: `sangam1984.github.io`)

1. Update `next.config.js`:
   ```javascript
   basePath: '', // Empty string for user site
   ```

2. Update the workflow file to remove the base path:
   ```yaml
   GITHUB_PAGES_BASE_PATH: ''
   ```

## Manual Deployment

If you want to deploy manually:

```bash
# For project site
npm run build:gh-pages

# For user site
npm run build
```

Then copy the `out` folder contents to your `gh-pages` branch or use GitHub Actions.

## Troubleshooting

- **404 errors**: Check that `basePath` matches your repo name
- **Assets not loading**: Ensure paths start with `/` (absolute paths)
- **Build fails**: Check the Actions tab for error messages

