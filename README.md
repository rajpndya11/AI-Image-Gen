# LuxeAds AI 🏢✨

A powerful AI-driven platform for generating high-converting luxury real estate marketing content in seconds.

**Powered by Claude AI** | Multi-channel Ad Generation | AI Image Prompts | Auto-Learning Project History

## ✨ Features

### 📝 Ad Generation
- 🤖 **Meta Ads** — 3 variations with primary text, headlines, descriptions
- 🔍 **Google RSAs** — Responsive Search Ads with headlines, descriptions, sitelinks
- ⚡ **Hook Lines** — 5 scroll-stopping opening lines
- 🎯 **CTAs** — 6 high-converting calls-to-action
- 🎨 **Creative Directions** — 3 visual briefs for design teams
- 🖼️ **Image Prompts** — Ready for Midjourney, DALL-E 3, Stable Diffusion XL

### 🖼️ AI Image Generation (NEW!)
- ✅ **8 Preset Dimensions** — Instagram, Facebook, LinkedIn, Pinterest, Google Ads, Billboard 4K
- ✅ **Custom Dimensions** — Any resolution 512-4096px with validation
- ✅ **3 AI Models** — Midjourney, DALL-E 3, Stable Diffusion XL selectors
- ✅ **Smart Prompts** — Auto-optimized for each dimension and model
- ��� **Copy-Ready Format** — Paste directly into image generators

### 📚 Project History (NEW!)
- 💾 **Auto-Save** — Last 10 projects saved to browser localStorage
- ⚡ **One-Click Restore** — Instantly load any previous project
- 📋 **Smart Sidebar** — Recent projects panel with timestamps
- 🔒 **Private Data** — Everything stays in your browser (no cloud)

### 🎨 Beautiful UI
- Glassmorphic design with gold accents
- Smooth animations (fadeUp, pulse, shimmer, float)
- Fully responsive (mobile, tablet, desktop)
- One-click copy functionality
- Real-time form validation

## Tech Stack

- **React** 18+ with Hooks
- **Claude AI API** (Sonnet 4)
- **Vercel Serverless** (Backend API)
- **CSS3** with modern effects
- **Vite** (recommended)

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn
- [Anthropic API key](https://console.anthropic.com/account/keys)

### Local Development

```bash
# Clone repository
git clone https://github.com/rajpndya11/AI-Image-Gen.git
cd AI-Image-Gen

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your API key (get from https://console.anthropic.com)
# Edit .env.local:
# ANTHROPIC_API_KEY=sk_your_actual_key_here

# Start dev server
npm run dev
# Opens at http://localhost:5173 ✅
```

### Deploy to Vercel (Production)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variable:
# ANTHROPIC_API_KEY = sk_your_key_here

# Done! Your site is live 🎉
```

## 📖 Usage Guide

### Generate Ads

1. **Fill Project Form**
   - Project Name (required)
   - Location (required)
   - Starting Price
   - Developer/Brand Name
   - Configuration (e.g., "3 & 4 BHK Ultra-Luxury")
   - Key Amenities
   - Project Type (dropdown)
   - Target Audience (dropdown)
   - Tone of Voice (dropdown)
   - Campaign Objective (dropdown)

2. **Click "✦ Generate Now"**
   - AI generates in ~10-15 seconds
   - Shows loading animation

3. **View Results in 6 Tabs**
   - Meta Ads
   - Google RSAs
   - Hook Lines
   - CTAs
   - Creative Ideas
   - **🖼️ AI Images** (NEW!)

4. **Copy & Use**
   - Click "⎘ Copy" on any item
   - Paste into ads platform

### Generate Images (NEW!)

1. **Click "🖼️ AI Images" Tab**
2. **Select AI Model**
   - 🎨 Midjourney (highest quality)
   - 🤖 DALL-E 3 (fast, artistic)
   - ⚡ Stable Diffusion (cost-effective)

3. **Choose Dimension**
   - Select from 8 presets, OR
   - Choose "Custom" for any size (512-4096px)

4. **Copy Prompt Card**
   - Full prompt pre-formatted
   - Dimension info included
   - Model recommendations

5. **Generate in Image Tool**
   - Paste prompt into Midjourney/DALL-E/SD
   - Generate at exact dimensions
   - Download image

6. **Upload to Ads Platform**
   - Meta Ads Manager
   - Google Ads
   - LinkedIn Campaign Manager

### Restore Previous Project

1. **View Right Sidebar**
   - "Recent Projects" section
   - Shows last 10 saved projects

2. **Click Any Project**
   - All fields auto-populate
   - Ready to regenerate or edit

## 📊 Supported Dimensions

| Dimension | Size | Best For |
|-----------|------|----------|
| Instagram Feed | 1080×1080 | Square posts |
| Instagram Story | 1080×1920 | Vertical stories |
| Facebook Ad | 1200×628 | Feed ads |
| LinkedIn Post | 1200×627 | Professional content |
| Twitter/X | 1024×512 | Tweet media |
| Pinterest | 1000×1500 | Pin boards |
| Google Ads | 300×250 | Display banners |
| Billboard 4K | 4096×2160 | Ultra-wide displays |
| Custom | 512-4096 | Your specs |

## 🤖 AI Models

### Midjourney
- **Quality**: ⭐⭐⭐⭐⭐ (Highest)
- **Best For**: Photorealistic luxury architecture
- **Speed**: 1-2 minutes
- **Cost**: ~$0.05-0.10 per image

### DALL-E 3
- **Quality**: ⭐⭐⭐⭐ (Very High)
- **Best For**: Artistic lifestyle imagery
- **Speed**: 30-60 seconds
- **Cost**: ~$0.08 per image

### Stable Diffusion XL
- **Quality**: ⭐⭐⭐⭐ (High)
- **Best For**: Fast, cost-effective generation
- **Speed**: 10-30 seconds
- **Cost**: ~$0.01 per image

## 📁 Project Structure

```
AI-Image-Gen/
├── src/
│   ├── App.jsx              # Main React component
│   ├── main.jsx
│   └── index.css
├── api/
│   └── generate.js          # Vercel serverless function (Claude API)
├── public/
├── .env.example             # Environment variables template
├── .gitignore
├── package.json
├── vite.config.js
├── README.md
├── IMAGE_GENERATION.md      # Detailed image guide
└── TROUBLESHOOTING.md       # Error solutions
```

## 🔧 Environment Setup

### Local Development

Create `.env.local`:
```env
# Required
ANTHROPIC_API_KEY=sk_your_key_here

# Optional
DALLE_API_KEY=sk_dalle_key
MIDJOURNEY_KEY=midjourney_key
```

### Production (Vercel)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Settings → Environment Variables
4. Add:
   - Key: `ANTHROPIC_API_KEY`
   - Value: `sk_your_key_here`
5. Redeploy

## 🎯 Generated Content

### Meta Ads (3 Variations)
Each includes:
- Primary Text (compelling narrative)
- Headline (attention-grabbing)
- Description (benefit-focused)

### Google RSAs (2 Variations)
Each includes:
- 3 Headlines (max 30 chars)
- 2 Descriptions (max 90 chars)
- Sitelink Extensions

### Hook Lines (5 Variations)
Scroll-stopping opening lines for:
- Social media captions
- Email subject lines
- Ad preview text

### CTAs (6 Variations)
Action-oriented phrases like:
- "Book Your Private Viewing"
- "Reserve Now, Pay Later"
- "Schedule Site Visit Today"

### Creative Ideas (3 Concepts)
Each with:
- Title (campaign concept)
- Creative Direction (artistic approach)
- Visual Concept (design style)
- Format (video/carousel/static)

### Image Prompts (3 Variations)
Each with:
- Title
- Full AI-ready prompt
- Model recommendations
- Dimension suggestions

## 🔐 Security

✅ **API Key Protection**
- Never exposed in frontend JavaScript
- Stored securely in environment variables
- Backend API (`/api/generate.js`) handles all requests

✅ **Data Privacy**
- Project history saved to browser localStorage
- No data sent to external databases
- No tracking or analytics

✅ **Best Practices**
- Never commit `.env.local` (in .gitignore)
- Rotate API keys regularly
- Use separate keys for dev/prod

## 🚨 Troubleshooting

### "Generation failed" Error

**Solution:**
1. Check `.env.local` has `ANTHROPIC_API_KEY`
2. Verify key is active (not expired)
3. Restart dev server: `npm run dev`
4. Fill required fields: Project Name + Location
5. Check browser console (F12) for detailed error

### Custom Dimensions Not Working

**Solution:**
1. Select "Custom" from dimension dropdown first
2. Enter width: 512-4096px
3. Enter height: 512-4096px
4. Aspect ratio should be 0.5 to 2.0

### Project History Not Saving

**Solution:**
1. Check if localStorage enabled in browser
2. Try incognito/private window
3. Clear browser cache
4. Check browser console for errors

See **TROUBLESHOOTING.md** for more solutions.

## 📈 Performance

| Metric | Result |
|--------|--------|
| Generation Time | 10-15 seconds |
| API Response | 5-10 seconds |
| Bundle Size | ~200KB (gzipped) |
| Supported Dimensions | 9 (8 preset + custom) |
| Max Projects Saved | 10 (localStorage) |
| Concurrent Users | Unlimited (Vercel) |

## 🎨 Customization

### Add Custom Tones

Edit `src/App.jsx`:
```javascript
const TONES = [
  "Luxury",
  "Aspirational",
  "Urgent",
  "Your Custom Tone",  // Add here
];
```

### Add Custom Project Types

```javascript
const TYPES = [
  "Luxury Residential",
  "Ultra-Luxury Penthouse",
  "Your Custom Type",  // Add here
];
```

### Add Custom Audiences

```javascript
const AUDIENCES = [
  "HNI Investors",
  "NRI Buyers",
  "Your Custom Audience",  // Add here
];
```

### Add Custom Dimensions

```javascript
// In the image generation section
const CUSTOM_DIMENSIONS = {
  "Your Custom": { w: 1200, h: 800 },
};
```

## 📚 Resources

- 📖 [IMAGE_GENERATION.md](./IMAGE_GENERATION.md) — Complete image guide
- 🆘 [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) — Error solutions
- 🔑 [Anthropic Docs](https://docs.anthropic.com)
- 🚀 [Vercel Docs](https://vercel.com/docs)

## 🔄 Roadmap

### Completed ✅
- [x] Meta Ads generation
- [x] Google RSAs generation
- [x] Hook Lines
- [x] CTAs
- [x] Creative Ideas
- [x] Image Prompts
- [x] Custom Dimensions
- [x] Project History
- [x] Secure Backend API

### Coming Soon 🚀
- [ ] Direct image generation (DALL-E 3 API)
- [ ] Midjourney API integration
- [ ] A/B testing dashboard
- [ ] Performance analytics
- [ ] Team collaboration
- [ ] Cloud project sync
- [ ] Export as PDF/ZIP

## 📞 Support

- **Issues:** Create issue in this repo
- **Docs:** See README and markdown files
- **API Help:** [Anthropic Support](https://support.anthropic.com)

## 📄 License

MIT License - Use freely in personal & commercial projects

## 👤 Author

**Raj Pandya** - [@rajpndya11](https://github.com/rajpndya11)

Real Estate AI Marketing Specialist

---

## 🌟 Show Your Support

If LuxeAds AI helps your real estate marketing, please star ⭐ this repository!

---

**Last Updated**: May 12, 2026  
**Version**: 2.0 (Image Generation + Project History + Secure API)  
**Status**: 🟢 Production Ready
