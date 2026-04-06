# NexOps IT Solutions Website

A professional multi-page website for NexOps IT Solutions, built with pure HTML, CSS, and JavaScript. Designed for GitHub Pages hosting.

## 🚀 Pages Included

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, services overview, stats, CTA |
| About Us | `pages/about.html` | Mission, values, timeline, team |
| BPO Services | `pages/bpo.html` | Customer support, data processing, QA |
| IT Consulting | `pages/itconsulting.html` | Cloud, digital transformation, security |
| Careers | `pages/careers.html` | Job listings with department filter |
| Contact | `pages/contact.html` | Contact form, offices, FAQ |

## 📁 File Structure

```
nexops/
├── index.html              # Homepage
├── css/
│   └── style.css           # All styles
├── js/
│   ├── main.js             # Interactions, scroll, animations
│   └── components.js       # Shared nav/footer templates
└── pages/
    ├── about.html
    ├── bpo.html
    ├── itconsulting.html
    ├── careers.html
    └── contact.html
```

## 🌐 Deploy to GitHub Pages

### Option 1: GitHub UI (Easiest)
1. Create a new GitHub repository (e.g., `nexops-website`)
2. Upload all files maintaining the folder structure
3. Go to **Settings → Pages**
4. Set Source to **Deploy from a branch**
5. Select `main` branch, `/ (root)` folder
6. Click **Save** — your site will be live at `https://yourusername.github.io/nexops-website/`

### Option 2: Git CLI
```bash
git init
git add .
git commit -m "Initial NexOps website"
git remote add origin https://github.com/yourusername/nexops-website.git
git push -u origin main
```
Then enable GitHub Pages in repository Settings → Pages.

### Option 3: Custom Domain
1. Complete Option 1 or 2 above
2. Add a `CNAME` file to the root containing your domain: `www.yourdomain.com`
3. Configure your DNS to point to GitHub Pages
4. Enable custom domain in Settings → Pages

## ✏️ Customization Guide

### Update Contact Info
Search and replace in all HTML files:
- `email@nexops.com` → your email
- `(117) 235 7899` → your phone
- `Address, Flowe, Suite 380` → your address

### Update Brand Name
Replace `NexOps` and `IT Solutions` throughout all files.

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --orange: #f5a623;       /* Primary accent color */
  --black: #0a0a0a;        /* Background */
  --dark: #111111;         /* Section backgrounds */
}
```

### Add Google Analytics
Add before `</head>` in each HTML file:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Make Contact Form Work
The contact form currently shows a success animation. To make it send real emails, use one of:
- **Formspree**: Change `<form id="contactForm">` to `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
- **Netlify Forms**: Add `netlify` attribute to form tag (if hosting on Netlify)
- **EmailJS**: Integrate via their JavaScript SDK

## 🛠️ Technologies Used
- **HTML5** — Semantic structure
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JS** — No frameworks, fast and lightweight
- **Google Fonts** — Rajdhani, Exo 2, JetBrains Mono

## 📱 Browser Support
Chrome, Firefox, Safari, Edge (all modern versions)
Mobile responsive from 320px and up.

---
Built with ❤️ by Claude for NexOps IT Solutions
