# Vercel Deployment Guide

Complete guide for deploying the Proviq website to Vercel's free tier.

## Quick Start

### Method 1: GitHub Integration (Recommended)

1. **Push code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/proviq.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login (use GitHub account)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy" (no configuration needed!)

3. **Done!** Your site is live at `proviq.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

## Configuration

The `vercel.json` file is already configured with:
- Security headers
- Cache control for static assets
- Proper routing for SPA

## Custom Domain

1. Go to your project on Vercel dashboard
2. Navigate to **Settings** → **Domains**
3. Add your domain (e.g., `proviq.com`)
4. Follow DNS instructions:
   - Add a CNAME record pointing to `cname.vercel-dns.com`
   - Or add A records (provided by Vercel)
5. SSL certificate is automatically provisioned

## Environment Variables

If you need environment variables:

1. Go to **Settings** → **Environment Variables**
2. Add your variables
3. Redeploy for changes to take effect

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request gets a preview URL

## Vercel Free Tier Limits

- ✅ 100GB bandwidth/month
- ✅ Unlimited deployments
- ✅ Custom domains
- ✅ Automatic SSL
- ✅ Global CDN
- ✅ Preview deployments

## Updating Your Site

Simply push to your Git repository:
```bash
git add .
git commit -m "Update website"
git push
```

Vercel automatically detects changes and redeploys!

## Troubleshooting

### Build Fails
- Check that all files are committed
- Verify `vercel.json` syntax is correct
- Check Vercel build logs in dashboard

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check domain in Vercel dashboard

### Files Not Updating
- Clear browser cache
- Check deployment status in Vercel dashboard
- Verify files are in Git repository

## Analytics (Optional)

Enable Vercel Analytics:
1. Go to **Settings** → **Analytics**
2. Enable Web Analytics
3. Add tracking code (optional, for custom tracking)

## Performance

Vercel automatically:
- Optimizes images
- Minifies CSS/JS
- Enables compression
- Uses edge caching

Your site will be fast! ⚡

## Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

