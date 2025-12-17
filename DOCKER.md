# Docker Deployment Guide

Quick reference for deploying the Proviq website using Docker.

## Quick Start

```bash
# Using Docker Compose (Recommended)
docker-compose up -d

# Using Docker directly
docker build -t proviq-website .
docker run -d -p 8080:80 --name proviq-website proviq-website
```

Access the website at: `http://localhost:8080`

## Commands Reference

### Docker Compose

```bash
# Start containers
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down

# Rebuild and restart
docker-compose up -d --build

# View container status
docker-compose ps
```

### Docker Direct

```bash
# Build image
docker build -t proviq-website .

# Run container
docker run -d -p 8080:80 --name proviq-website proviq-website

# View logs
docker logs -f proviq-website

# Stop container
docker stop proviq-website

# Start stopped container
docker start proviq-website

# Remove container
docker rm proviq-website

# Remove image
docker rmi proviq-website
```

## Custom Port

To use a different port (e.g., 3000):

**Docker Compose:**
```yaml
# Edit docker-compose.yml
ports:
  - "3000:80"
```

**Docker:**
```bash
docker run -d -p 3000:80 --name proviq-website proviq-website
```

## Production Deployment

### Update nginx.conf for Production

1. Change `server_name` to your domain:
```nginx
server_name proviq.com www.proviq.com;
```

2. Add SSL/TLS configuration (recommended):
```nginx
server {
    listen 443 ssl http2;
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    # ... rest of config
}
```

### Environment Variables

You can pass environment variables to customize nginx:

```yaml
# docker-compose.yml
environment:
  - NGINX_HOST=proviq.com
  - NGINX_PORT=80
```

## Troubleshooting

### Container won't start
```bash
# Check logs
docker logs proviq-website

# Check if port is already in use
lsof -i :8080  # macOS/Linux
netstat -ano | findstr :8080  # Windows
```

### Files not updating
```bash
# Rebuild the image
docker-compose up -d --build
# or
docker build -t proviq-website . --no-cache
```

### Permission issues
```bash
# Check container permissions
docker exec proviq-website ls -la /usr/share/nginx/html/
```

### Test nginx configuration
```bash
# Test config inside container
docker exec proviq-website nginx -t
```

## Health Check

The container includes a health check. View status:

```bash
docker ps  # Check STATUS column
docker inspect proviq-website | grep Health -A 10
```

## Clean Up

```bash
# Remove container and image
docker-compose down --rmi all

# Remove all unused Docker resources
docker system prune -a
```

## Image Size

The nginx:alpine image is ~23MB, making it very lightweight for production use.

