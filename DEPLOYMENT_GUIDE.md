# 🚀 Deployment Guide - Publishing Your App

## Quick Publishing Options

### Option 1: Netlify (Easiest - Drag & Drop)

**Steps:**
1. Build your app:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com) and sign up (free)

3. Click "Add new site" → "Deploy manually"

4. Drag the `dist` folder into the Netlify drop zone

5. Wait 30 seconds - Done! You get a URL like: `https://yourapp.netlify.app`

**Adding Environment Variables:**
- In Netlify dashboard: Site settings → Environment variables
- Add:
  - `VITE_SUPABASE_URL` = your Supabase URL
  - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key

**Updating the app:**
- Run `npm run build` again
- Go to Netlify → Deploys → Drag new `dist` folder

---

### Option 2: Vercel (Fast & Professional)

**Steps:**
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow prompts (first time):
   - Login to Vercel
   - Choose project name
   - Accept defaults

4. Get your URL: `https://yourapp.vercel.app`

**Adding Environment Variables:**
```bash
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY
```

**Updating:**
```bash
vercel --prod
```

---

### Option 3: Local Network (WiFi - No Internet Needed)

**Steps:**
1. Run with network access:
   ```bash
   npm run dev -- --host
   ```

2. Look for the "Network" URL in terminal:
   ```
   ➜  Local:   http://localhost:3000/
   ➜  Network: http://192.168.1.5:3000/
   ```

3. Share the **Network** URL with students on same WiFi

**Create a QR Code:**
- Go to [qr-code-generator.com](https://www.qr-code-generator.com/)
- Paste your Network URL
- Download QR code
- Students scan with phone camera!

**Requirements:**
- Your computer must stay on
- All students must be on same WiFi network
- Good for classroom use without internet

---

### Option 4: GitHub Pages (Free & Permanent)

**Steps:**
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/', // Add this line
   })
   ```

3. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Your URL: `https://yourusername.github.io/your-repo-name/`

**Note:** GitHub Pages doesn't support environment variables easily. You'll need to hardcode Supabase credentials in `src/config/supabase.js`

---

## Sharing with Your Class

### Option A: Direct Link
- Send URL via email/WhatsApp
- Students click and use

### Option B: QR Code
- Create QR code from URL
- Print or display on projector
- Students scan with phone

### Option C: Bookmark Icon
Students can "Add to Home Screen":
- **Android (Chrome)**: Menu → Install app
- **iPhone (Safari)**: Share → Add to Home Screen

---

## Environment Variables for Production

When deploying, you MUST set these environment variables:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

**How to set them:**

**Netlify:**
Site settings → Environment variables → Add variable

**Vercel:**
Project settings → Environment Variables → Add

**Local/GitHub Pages:**
Create `.env` file in project root

---

## Custom Domain (Optional)

### Netlify:
1. Domain settings → Add custom domain
2. Follow DNS instructions
3. Example: `rights-game.school.edu`

### Vercel:
1. Project settings → Domains
2. Add domain
3. Configure DNS

---

## Performance Tips

1. **Enable Caching** (automatic on Netlify/Vercel)
2. **Use CDN** (automatic on Netlify/Vercel)
3. **Compress Assets** (already done in build)

---

## Monitoring Usage

### Netlify Analytics:
- Free tier: 2,500 page views/month
- Upgrade for more

### Vercel Analytics:
- Free tier: 100GB bandwidth
- Good for 1,000+ students

### Supabase:
- Free tier: 500MB database
- 50,000 monthly active users
- More than enough!

---

## Cost Breakdown (Free Tier Limits)

| Service | Free Tier | Good For |
|---------|-----------|----------|
| Netlify | 100GB bandwidth/month | 10,000+ students |
| Vercel | 100GB bandwidth/month | 10,000+ students |
| Supabase | 500MB database | Unlimited students |
| GitHub Pages | 100GB/month | 10,000+ students |

**All free tiers are MORE than enough for any classroom!**

---

## Security Notes

1. **Never commit `.env` file** - It's in `.gitignore`
2. **Supabase anon key is public** - It's safe to expose
3. **Teacher PIN** - Change from default `2468`
4. **Row Level Security** - Already enabled in Supabase

---

## Troubleshooting Deployments

**"Build failed"**
- Check `npm run build` works locally first
- Look at build logs for specific error

**"Environment variables not working"**
- Must start with `VITE_` prefix
- Redeploy after adding variables
- Clear cache and redeploy

**"404 on refresh"**
- Configure redirects (automatic in Vercel)
- Netlify: Add `_redirects` file in `public/`:
  ```
  /*    /index.html   200
  ```

**"Supabase connection fails"**
- Check environment variables are set
- Verify Supabase project is active
- Check browser console for errors

---

## Recommended Setup for Schools

1. **Deploy to Netlify** (easiest updates)
2. **Use Supabase** (shared leaderboard)
3. **Create custom domain** (optional, professional)
4. **Print QR code** (easy student access)
5. **Weekly reset** (use teacher PIN)

---

## Sample Deployment Timeline

- **5 minutes**: Deploy to Netlify
- **5 minutes**: Set up Supabase
- **2 minutes**: Add environment variables
- **1 minute**: Test with a student
- **13 minutes total** ✅

---

## Support & Updates

After deployment:
- Students automatically get updates (on refresh)
- No app store approval needed
- PWA installs update automatically
- Share URL never changes

---

**Ready to share with the world! 🌍**
