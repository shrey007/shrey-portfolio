# 🚀 Deploy to GitHub Pages

This guide will help you deploy your cyberpunk AI portfolio to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed locally
- Repository created on GitHub

## 🔧 Setup Steps

### 1. Create GitHub Repository

1. Go to [github.com/shrey007](https://github.com/shrey007)
2. Click "New repository"
3. Name it `shrey-portfolio` 
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (we already have files)

### 2. Connect Local Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "🎉 Initial commit: Cyberpunk AI Portfolio"

# Add remote origin
git remote add origin https://github.com/shrey007/shrey-portfolio.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository: `https://github.com/shreychopra/shrey-portfolio`
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **"GitHub Actions"**
5. Save the settings

### 4. Automatic Deployment

The GitHub Actions workflow will automatically:
- ✅ Run on every push to `main` branch
- ✅ Install dependencies with `npm ci`
- ✅ Build the project with `npm run build`
- ✅ Deploy to GitHub Pages

Your site will be available at:
**https://shrey007.github.io/shrey-portfolio/**

## 🔄 Making Updates

Every time you push changes:

```bash
git add .
git commit -m "✨ Your update message"
git push
```

The site will automatically rebuild and deploy!

## 🐛 Troubleshooting

### Build Failures
- Check the **Actions** tab in your GitHub repo
- Look for error messages in the workflow logs
- Common issues: Node.js version, dependency conflicts

### Page Not Loading
- Ensure repository is **Public**
- Check that GitHub Pages is enabled
- Verify the base URL in `vite.config.ts` matches your repo name

### Assets Not Loading
- The `base: '/shrey-portfolio/'` in `vite.config.ts` should match your repository name
- If you rename the repo, update this value

## 🎯 Custom Domain (Optional)

To use a custom domain like `shreychopra.dev`:

1. Add a `CNAME` file to the `public/` folder with your domain
2. Configure DNS with your domain provider
3. Enable custom domain in GitHub Pages settings

## 📊 Performance

- Build size: ~136KB gzipped
- First paint: <1MB target achieved
- Optimized for fast loading

Your cyberpunk portfolio is now live! 🎉
