# Nathasha Perera — Portfolio

A personal portfolio built with **React + Vite**. Single-file design refactored into a
clean, component-based structure so each section is easy to find and edit.

## Project structure

```
nathasha-portfolio/
├── index.html                  # HTML entry (Vite)
├── package.json
├── vite.config.js
├── public/
│   └── Nathasha_Perera_CV.pdf  # served as-is; the "Download CV" button links here
└── src/
    ├── main.jsx                # React entry — mounts <App/> and loads the stylesheet
    ├── App.jsx                 # composes all sections + intro-load state
    ├── data/
    │   └── portfolioData.js    # ⭐ ALL content lives here (edit this to update the site)
    ├── hooks/
    │   └── useReveal.js         # reveal-on-scroll IntersectionObserver hook
    ├── styles/
    │   └── portfolio.css        # all styling for the site
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Marquee.jsx          # scrolling "film strip" of tech
        ├── ProfilePanel.jsx     # stats, quote, about
        ├── Stack.jsx            # skills grouped by area
        ├── Work.jsx             # project grid
        ├── ProjectVideo.jsx     # per-project demo video / gradient fallback
        ├── Experience.jsx       # work timeline
        ├── Contact.jsx
        └── Footer.jsx
```

## Getting started

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

Requires Node.js 18+.

## Editing your content

Almost everything you'll want to change is in **`src/data/portfolioData.js`**:

- **Text & links** — name, role, tagline, email, GitHub/LinkedIn URLs.
- **Projects** — add/remove entries in the `projects` array (title, subtitle, year, blurb, `tags`, `live`, `code`).
- **Skills** — the `stack` array (groups keyed by `frontend | backend | database | mobile`).
- **Experience** — the `experience` array. Add your two LinkedIn roles here.
- **Photo** — set the `PORTRAIT` constant to an image URL or base64 string (a background-removed PNG works best). Leave it `""` and the hero shows the name over the disc instead.
- **CV** — replace `public/Nathasha_Perera_CV.pdf` with your latest CV (keep the filename, or update `resumeUrl`).
- **Project demo videos (optional)** — set `CLOUDINARY.cloudName`, then put each clip's Cloudinary `public_id` in a project's `video` field.

## Deploying

The `dist/` folder from `npm run build` is a static site you can host anywhere:

- **Vercel / Netlify** — import the repo; framework preset **Vite**, build `npm run build`, output `dist`.
- **GitHub Pages** — set `base: "/your-repo-name/"` in `vite.config.js`, then publish `dist/`.

## Notes

- Only runtime dependency is `lucide-react` (icons). React 18 + Vite 5 for tooling.
- Respects `prefers-reduced-motion` — animations are disabled for users who ask for it.
