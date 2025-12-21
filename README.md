# Proviq | OptRL & TuskerAI

A modern, responsive website for Proviq highlighting OptRL and TuskerAI alongside services and impact.

## Overview

Proviq showcases two AI platforms and a focused services offering:

1. **OptRL** - Reinforcement learning decision intelligence platform
2. **TuskerAI** - No-code computer vision platform for operations

## Features

- **Modern Design**: Clean, professional UI with gradient accents and smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- **Interactive Elements**: Scroll-triggered animations and interactive forms
- **Performance Optimized**: Lightweight and fast-loading

## File Structure

```
proviq/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript for interactivity
├── robots.txt          # SEO robots file
├── sitemap.xml         # SEO sitemap
├── Dockerfile          # Docker container configuration
├── docker-compose.yml  # Docker Compose configuration
├── nginx.conf          # Nginx server configuration
├── .dockerignore       # Docker ignore file
└── README.md           # This file
```

## Getting Started

### Option 1: Open Directly

Simply open `index.html` in your web browser. No build process required!

### Option 2: Local Server (Recommended)

For the best experience, use a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
npx http-server
```

Then open `http://localhost:8000` in your browser.

### Option 3: Docker Container (Production Ready)

**Prerequisites:** Docker and Docker Compose installed

**Using Docker Compose (Recommended):**
```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

**Using Docker directly:**
```bash
# Build the image
docker build -t proviq-website .

# Run the container
docker run -d -p 8080:80 --name proviq-website proviq-website

# Stop the container
docker stop proviq-website

# Remove the container
docker rm proviq-website
```

The website will be available at `http://localhost:8080`

**Docker Features:**
- Lightweight nginx Alpine image
- Gzip compression enabled
- Security headers configured
- Static asset caching
- Health checks included
- Production-ready configuration

## Customization

### Updating Company Information

1. **Location**: Edit the contact section in `index.html` (line ~450)
2. **Email**: Update the email address in the contact section
3. **Social Media**: Add social media links in the footer section

### Styling

All styles are in `styles.css`. Key customization points:

- **Colors**: Modify CSS variables in `:root` (lines 6-18)
- **Fonts**: Change the Google Fonts import in `index.html` head section
- **Spacing**: Adjust padding and margins in section styles

### Content

- **Hero Section**: Update the main headline and description in the hero section
- **Company Sections**: Modify content in each company section (OptRL, TuskerAI)
- **Services**: Update service descriptions in the respective sections

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (Vanilla)**: No dependencies, pure JavaScript
- **Google Fonts**: IBM Plex Sans and Space Grotesk
- **Docker**: Containerization for easy deployment
- **Nginx**: High-performance web server

## Deployment

### Vercel Deployment (Recommended - Free Tier)

Vercel offers free hosting with automatic SSL, CDN, and custom domains. Perfect for static sites!

#### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Create a Vercel account** (if you don't have one):
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push your code to Git**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **Import project on Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your repository
   - Vercel will auto-detect settings (no build needed for static sites)
   - Click "Deploy"

4. **Your site is live!** 🎉
   - Vercel provides a URL like: `proviq.vercel.app`
   - SSL is automatic
   - Custom domain can be added in project settings

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
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

#### Vercel Features (Free Tier)
- ✅ Automatic SSL certificates
- ✅ Global CDN (fast worldwide)
- ✅ Custom domain support
- ✅ Automatic deployments from Git
- ✅ Preview deployments for PRs
- ✅ Analytics (optional)
- ✅ No build step needed (static site)
- ✅ Free forever for personal projects

#### Custom Domain Setup
1. Go to your project settings on Vercel
2. Click "Domains"
3. Add your domain (e.g., `proviq.com`)
4. Follow DNS configuration instructions
5. SSL is automatically configured

### Docker Deployment

The Docker setup is production-ready and can be deployed to any container hosting service:

**Popular Options:**
- **AWS ECS/Fargate**: Container orchestration
- **Google Cloud Run**: Serverless containers
- **Azure Container Instances**: Simple container hosting
- **DigitalOcean App Platform**: Easy container deployment
- **Heroku**: Container registry support

**For Production:**
1. Update `nginx.conf` with your domain name
2. Add SSL/TLS certificates (use nginx SSL configuration)
3. Set up a reverse proxy if needed
4. Configure environment variables
5. Set up monitoring and logging

## Next Steps

1. Update contact information (location, email, social media)
2. Add actual form submission backend
3. Add analytics tracking
4. Optimize images (if adding any)
5. Deploy to production hosting

## License

© 2025 Proviq. All rights reserved.
