# Lakshana N - Portfolio Website

Simple HTML/CSS/JavaScript portfolio website with no dependencies (except CDN libraries).

## 🚀 Features

- **Pure HTML/CSS/JavaScript** - No build process required
- **Dark/Light Mode** - Theme switcher with localStorage
- **Fully Responsive** - Mobile-first design
- **Fast Loading** - All data embedded, no API calls
- **Easy to Deploy** - Works on GitHub Pages, Netlify, Vercel, or any static host

## 📁 Files

```
portfolio/
├── index.html          # Main HTML file
├── app.js              # JavaScript with embedded data
├── styles.css          # All styles
├── images/
│   └── profile.jpg     # Profile photo
└── README.md           # This file
```

## 🌐 Deployment Options

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select `main` branch
4. Your site will be live at `https://username.github.io/repository-name/`

### Netlify
1. Drag and drop the folder to Netlify
2. Or connect your GitHub repository
3. Site will be live instantly

### Vercel
1. Import from GitHub
2. No configuration needed
3. Deploy!

### Any Static Host
Just upload all files to your web server.

## 🎨 Customization

All portfolio data is in `app.js` at the top:
```javascript
const portfolioData = {
  name: "Your Name",
  tagline: "Your Tagline",
  // ... edit as needed
};
```

## 💻 Local Development

Simply open `index.html` in your browser. No server needed!

Or use Python's built-in server:
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

## 📦 No Dependencies!

All libraries loaded from CDN:
- Tailwind CSS
- Font Awesome
- Google Fonts (Inter, IBM Plex Sans)

## ✨ Features

- Hero section with animated background
- Profile photo with clean frame
- Who Am I section
- Technical Skills (categorized)
- Featured Projects (case study format)
- Hackathons & Achievements
- Training & Experience
- Campus Involvement
- Education & Certifications
- Contact section with social links

## 🎯 Perfect For

- GitHub Pages hosting
- Netlify/Vercel deployment
- Simple static hosting
- No build/compile needed
- Fast and lightweight

---

**Built with** ❤️ **by Lakshana N**
