# Deployment Guide for NFC Ring Contact Page

## Prerequisites
- A GitHub account
- A Vercel account (free - sign up at [vercel.com](https://vercel.com))

## Steps to Deploy

### 1. Push to GitHub

First, initialize git and push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit: NFC ring contact page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nfc-ring.git
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js settings
5. Click "Deploy"
6. Wait for deployment to complete (usually 1-2 minutes)
7. Your site will be live at `https://your-project-name.vercel.app`

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### 3. Configure Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

### 4. Program Your NFC Ring

Once deployed, you'll have a URL like:
- `https://your-project-name.vercel.app` (or your custom domain)

**To program your NFC ring:**

1. **Android:**
   - Install "NFC Tools" app from Play Store
   - Open the app and go to "Write" tab
   - Select "Add a record" → "URL/URI"
   - Enter your Vercel URL
   - Hold your NFC ring close to your phone
   - Tap "Write" and wait for confirmation

2. **iPhone:**
   - Install "NFC Tools" app from App Store
   - Follow similar steps as Android
   - On newer iPhones (iPhone XS and later), NFC scanning is automatic

### 5. Test Your NFC Ring

- Tap your NFC ring on your phone
- The contact page should open in the browser
- Test all links to ensure they work correctly

## Updating Your Site

### Method 1: Git Push (Automatic)
```bash
# Make your changes
git add .
git commit -m "Update contact info"
git push
# Vercel automatically deploys on push
```

### Method 2: Vercel CLI
```bash
vercel --prod
```

## Optimization Tips

### For Faster Loading (Important for NFC!)
- Vercel Edge Network automatically handles CDN
- Static pages are cached globally
- First Load JS is ~141 KB (very fast!)

### Custom Domain Benefits
- Shorter URL = faster NFC encoding
- Professional appearance
- Easier to remember

### Analytics (Optional)
1. In Vercel Dashboard, go to "Analytics"
2. Enable Vercel Analytics (free tier available)
3. Track page views from NFC taps

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Try building locally first: `npm run build`

### NFC Not Working
- Ensure URL uses HTTPS (Vercel provides this automatically)
- Check phone has NFC enabled
- Try different NFC writing apps
- Some phones require unlocking first

### Slow Loading
- Check Vercel deployment logs
- Enable Vercel Analytics to see performance metrics
- Consider upgrading to custom domain for shorter URL

## Environment Variables (If Needed)

If you add any environment variables later:

1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add your variables
3. Redeploy the project

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- NFC Tools Support: Check app's help section

---

**Congratulations! Your NFC ring contact page is now live! 🎉**
