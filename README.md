# LuxeAds AI 🏢✨

A powerful AI-driven platform for generating high-converting luxury real estate marketing content in seconds.

**Powered by Claude AI** | Multi-channel Ad Generation | Performance-Optimized Copy

## Features

- 🤖 **AI Ad Generation** — Generate Meta Ads, Google RSAs, Hook Lines, CTAs, Creative Directions, and Image Prompts instantly
- 📝 **Smart Form Input** — Collect project details and target audience parameters
- 🎨 **Beautiful UI** — Glassmorphic dark theme with gold accents and smooth animations
- 📋 **Multi-Tab Output** — View and copy generated content across 6 different formats
- ⚡ **One-Click Copy** — Copy any generated content instantly to clipboard
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile
- 🔄 **Regenerate** — Generate fresh variations with a single click

## Tech Stack

- **React** 18+ with Hooks
- **Claude AI API** (Sonnet 4)
- **CSS3** with CSS Variables & Grid/Flexbox
- **Vite** (recommended for bundling)

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- Anthropic API key (for Claude AI)

### Installation

1. Clone the repository
```bash
git clone https://github.com/rajpndya11/AI-Image-Gen.git
cd AI-Image-Gen
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env.local` file (for development)
```env
VITE_ANTHROPIC_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure

```
├── src/
│   ├── App.jsx              # Main component (LuxeAds AI)
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles (optional)
├── public/                  # Static assets
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
└── README.md               # This file
```

## Usage

### Basic Flow

1. **Enter Project Details** — Fill in the form with your luxury real estate project information:
   - Project name and location
   - Starting price
   - Project type (Luxury Residential, Villas, Commercial, etc.)
   - Target audience (HNI, NRI, C-Suite, etc.)
   - Key amenities
   - Tone of voice
   - Campaign objective

2. **Generate Ads** — Click "Generate Ad Copies" to let Claude AI create your content suite

3. **Review & Copy** — Browse through 6 different tabs and copy any content you want to use

4. **Launch** — Deploy the generated copies to Meta Ads Manager or Google Ads

## Generated Content Types

### Meta Ads (3 variations)
- Primary Text
- Headline
- Description

### Google RSAs (2 variations)
- 3 Headlines
- 2 Descriptions
- Sitelink Extensions

### Hook Lines (5 variations)
Scroll-stopping opening lines for social media

### CTAs (6 variations)
High-converting calls-to-action tailored to your campaign objective

### Creative Directions (3 concepts)
- Creative direction
- Visual concept
- Format suggestions

### Image Prompts (3 variations)
Ready-to-use prompts for Midjourney, DALL·E 3, Stable Diffusion XL

## API Configuration

The app calls Claude AI with a structured prompt that includes:
- Project metadata
- Target audience profiling
- Tone and objective parameters
- JSON response format specification

**Model:** `claude-sonnet-4-20250514`  
**Max Tokens:** 1000  

## Environment Variables

```env
# Anthropic API
VITE_ANTHROPIC_API_KEY=sk_...

# Optional: API endpoint override
VITE_API_ENDPOINT=https://api.anthropic.com/v1/messages
```

## Styling

The component uses an embedded CSS-in-JS approach with:

- **Color Palette:**
  - Gold: `#C9A84C` (primary accent)
  - Background: `#080808` (near-black)
  - Text Primary: `#F5F5F0` (off-white)
  - Text Secondary: `rgba(255,255,255,0.45)` (muted)

- **Typography:**
  - Headings: Cormorant (serif)
  - Body: DM Sans (sans-serif)
  - Monospace: DM Mono (code)

- **Effects:**
  - Glassmorphism (backdrop blur)
  - Smooth animations (fadeUp, pulse, shimmer, float)
  - Responsive grid layouts

## Performance Considerations

- **API Calls:** ~10 seconds average generation time
- **Bundle Size:** Minimal (no heavy dependencies)
- **Mobile:** Fully responsive with touch-friendly UI
- **Accessibility:** Semantic HTML, keyboard navigation

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Add environment variables in Vercel dashboard:
- `VITE_ANTHROPIC_API_KEY`

### Netlify

```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
```

## Known Limitations

- API key is exposed in frontend (use backend proxy in production)
- No user authentication implemented
- No data persistence (use localStorage or database for saving projects)
- Rate limiting depends on Anthropic API tier

## Security Notes

**⚠️ Important:** For production deployment:

1. **Never expose API keys in frontend code**
2. Create a backend API endpoint to handle Claude calls
3. Implement rate limiting and authentication
4. Add CORS configuration
5. Use environment variables securely

### Secure Backend Example

```javascript
// backend/api/generate-ads.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { projectData } = req.body;
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [{ role: 'user', content: buildPrompt(projectData) }],
    }),
  });

  const data = await response.json();
  res.status(200).json(data);
}
```

## Future Enhancements

- [ ] User accounts and project history
- [ ] Saved templates and presets
- [ ] A/B testing variants
- [ ] Direct integration with Meta & Google Ads APIs
- [ ] Multi-language support
- [ ] Custom brand voice profiles
- [ ] Real-time collaboration
- [ ] Analytics dashboard

## Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License — feel free to use this project for commercial and personal purposes.

## Support

For issues, questions, or suggestions:
- Open a GitHub issue
- Contact: rajpndya11@github.com

---

**Built with ❤️ for luxury real estate marketers**
