# Deployment Guide - PrimeMark Apparel

## Vercel Deployment (Recommended)

Vercel is the recommended platform for deploying this Next.js application. It's created by the same team that built Next.js.

### Initial Setup

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub account

2. **Import Project**
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   - Click "Environment Variables"
   - Add the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL
   Value: https://jdwtqwntslopyczvvawm.supabase.co

   NEXT_PUBLIC_SUPABASE_ANON_KEY
   Value: your-supabase-anon-key
   ```

   - Select: **Production, Preview, Development**
   - Click "Save"

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Visit your live site!

### Deployment URL Structure

```
Production:    primemarkapparel.vercel.app
               (or custom domain)

Preview:       primemarkapparel-git-feature-user.vercel.app
               (for feature branches)

Development:   localhost:3000
               (local environment)
```

---

## Automatic Deployments

### Push to Deploy

Once connected, Vercel automatically deploys:

```bash
# Production deployment (main branch)
git push origin main

# Preview deployment (any other branch)
git checkout -b feature/new-feature
git push origin feature/new-feature
```

### Deployment Types

| Branch | Deployment Type | URL Pattern |
|--------|----------------|-------------|
| `main` | Production | `primemarkapparel.vercel.app` |
| Others | Preview | `primemarkapparel-git-branch.vercel.app` |

---

## Custom Domain Setup

### Add Custom Domain

1. **In Vercel Dashboard**
   - Go to Project Settings
   - Click "Domains"
   - Enter your domain (e.g., `primemarkapparel.com`)
   - Click "Add"

2. **Configure DNS**

   **Option A: Using Vercel Nameservers (Recommended)**
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

   **Option B: Using CNAME Record**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   **For Root Domain (no www)**
   ```
   Type: A
   Value: 76.76.21.21
   ```

3. **SSL Certificate**
   - Vercel automatically provisions SSL
   - HTTPS enabled by default
   - Certificate auto-renews

---

## Environment Variables Management

### Production vs. Preview vs. Development

```bash
# Production only
NEXT_PUBLIC_SUPABASE_URL=https://prod.supabase.co

# Preview and Development
NEXT_PUBLIC_SUPABASE_URL=https://staging.supabase.co
```

### Accessing Environment Variables

```tsx
// Client-side (must start with NEXT_PUBLIC_)
const url = process.env.NEXT_PUBLIC_SUPABASE_URL

// Server-side (can be any name)
const secret = process.env.SECRET_KEY
```

### Updating Environment Variables

1. Go to Project Settings → Environment Variables
2. Click "Edit" on the variable
3. Update value
4. **Redeploy** required for changes to take effect

---

## Build Configuration

### Build Command
```bash
npm run build
```

### Build Output Directory
```
.next/
```

### Install Command
```bash
npm install
```

### Framework Preset
```
Next.js
```

---

## Performance Optimization

### Vercel Analytics (Optional)

1. **Enable Analytics**
   - Go to Project Settings
   - Click "Analytics"
   - Toggle "Enable Analytics"

2. **View Metrics**
   - Page views
   - Unique visitors
   - Top pages
   - Performance scores

### Edge Functions

Next.js API routes automatically deploy as serverless functions on Vercel Edge Network.

---

## Monitoring Deployments

### Build Logs

1. Go to Deployments tab
2. Click on deployment
3. View build logs
4. Check for errors

### Deployment Status

| Status | Meaning |
|--------|---------|
| ✓ Ready | Deployment successful |
| ⏳ Building | In progress |
| ✗ Error | Build failed |
| ⚠ Canceled | Manually canceled |

---

## Rollback Strategy

### Instant Rollback

1. Go to Deployments
2. Find previous successful deployment
3. Click "..." menu
4. Click "Promote to Production"
5. Instant rollback (no rebuild required)

---

## CI/CD Pipeline

### Automatic Workflow

```
Code Push → GitHub
    ↓
Vercel detects change
    ↓
Runs build (`npm run build`)
    ↓
Runs tests (if configured)
    ↓
Deploys to Vercel Edge Network
    ↓
Live in seconds
```

### Preview Deployments

- Every branch gets its own preview URL
- Perfect for testing before merging to production
- Share preview link with team for review

---

## Alternative Deployment: Self-Hosted

If you prefer self-hosting instead of Vercel:

### Docker Deployment

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and Run**
   ```bash
   docker build -t primemarkapparel .
   docker run -p 3000:3000 \
     -e NEXT_PUBLIC_SUPABASE_URL=your-url \
     -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key \
     primemarkapparel
   ```

### VPS Deployment (Ubuntu/Debian)

1. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Clone and Build**
   ```bash
   git clone <repo-url>
   cd primemarkapparel
   npm install
   npm run build
   ```

3. **Set Environment Variables**
   ```bash
   export NEXT_PUBLIC_SUPABASE_URL=your-url
   export NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
   ```

4. **Run with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "primemarkapparel" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name primemarkapparel.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## Deployment Checklist

### Pre-Deployment

- [ ] All tests pass locally
- [ ] Run `npm run build` without errors
- [ ] Environment variables configured
- [ ] Database migrations run in Supabase
- [ ] Admin users invited in Supabase Auth
- [ ] RLS policies tested
- [ ] Mobile responsive tested
- [ ] Forms tested end-to-end
- [ ] Links and navigation tested
- [ ] Images optimized and loading

### Post-Deployment

- [ ] Visit production URL
- [ ] Test RFQ form submission
- [ ] Test admin login
- [ ] Test admin dashboard
- [ ] Check console for errors
- [ ] Test on mobile device
- [ ] Verify email links work
- [ ] Check page load speed
- [ ] Test all navigation links
- [ ] Verify images load

---

## Troubleshooting Deployments

### Build Fails with "Module not found"

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Environment Variables Not Working

**Solution:**
1. Ensure variables start with `NEXT_PUBLIC_` for client-side
2. Redeploy after adding/updating variables
3. Check variable names match exactly (case-sensitive)

### Supabase Connection Fails

**Solution:**
1. Verify environment variables are set in Vercel
2. Check Supabase project is not paused
3. Verify anon key is correct
4. Check CORS settings in Supabase

### Images Not Loading

**Solution:**
1. Verify images are in `public/` folder
2. Check file paths are correct (case-sensitive)
3. Ensure images are committed to git

### Build Timeout

**Solution:**
1. Check for infinite loops in code
2. Verify no large files in repo
3. Contact Vercel support if build takes >45 minutes

---

## Performance Monitoring

### Vercel Speed Insights

```bash
# Install
npm install @vercel/speed-insights

# Add to layout.tsx
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### Web Vitals Tracking

Vercel automatically tracks:
- **LCP** (Largest Contentful Paint)
- **FID** (First Input Delay)
- **CLS** (Cumulative Layout Shift)
- **TTFB** (Time to First Byte)

---

## Security Best Practices

### Environment Variables

- ✅ **DO**: Store sensitive keys in environment variables
- ✅ **DO**: Use `NEXT_PUBLIC_` prefix only for non-sensitive data
- ❌ **DON'T**: Commit `.env.local` to git
- ❌ **DON'T**: Expose API keys in client-side code

### Supabase Security

- ✅ **DO**: Use Row Level Security (RLS) policies
- ✅ **DO**: Restrict admin access to specific emails
- ❌ **DON'T**: Disable RLS in production
- ❌ **DON'T**: Use service role key in client code

### Headers Security

Add to `next.config.ts`:
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}
```

---

## Scaling Considerations

### Vercel Pro Features

- Unlimited deployments
- Increased build time (45 min)
- Commercial use license
- Advanced analytics
- Priority support

### Database Scaling

- Supabase free tier: 500MB database
- Upgrade to Pro for:
  - Unlimited API requests
  - 8GB database
  - Daily backups
  - Point-in-time recovery

---

## Backup Strategy

### Code Backup
- Git repository on GitHub (primary)
- Local clone (secondary)

### Database Backup
- Supabase automatic daily backups (Pro plan)
- Manual export via Supabase dashboard
- Weekly SQL dump recommended

### Environment Variables
- Document in password manager
- Keep backup in secure location
- Never commit to git

---

## Support Resources

### Vercel Support
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/next.js/discussions
- Status: https://vercel-status.com

### Next.js Support
- Documentation: https://nextjs.org/docs
- GitHub Issues: https://github.com/vercel/next.js/issues

### Supabase Support
- Documentation: https://supabase.com/docs
- Discord: https://discord.supabase.com
- GitHub: https://github.com/supabase/supabase

---

## Cost Estimation

### Vercel Pricing
- **Hobby** (Free): Perfect for this project
  - 100GB bandwidth/month
  - Unlimited deployments
  - Automatic HTTPS

- **Pro** ($20/month): For production sites
  - 1TB bandwidth
  - Advanced analytics
  - Password protection

### Supabase Pricing
- **Free Tier**: Sufficient for starting
  - 500MB database
  - 1GB file storage
  - 2GB bandwidth

- **Pro** ($25/month): For growth
  - 8GB database
  - 100GB file storage
  - 50GB bandwidth

### Total Monthly Cost
- **Startup**: $0 (Free tiers)
- **Production**: $45 (Vercel Pro + Supabase Pro)
