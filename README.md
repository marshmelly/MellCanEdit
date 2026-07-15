# Zara Voss — Portfolio

A Vite + React portfolio for a video editor / photographer / graphic designer.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Netlify, Vercel, GitHub Pages, or any static host.

## Editing content

Almost everything text-based (name, email, work items, testimonials, stats, capability
tracks) lives in one place: `src/data/content.js`. Edit that file to make the site yours
without touching component code.

## Structure

```
src/
  components/     # Nav, Hero, TimelineRuler, Capability, Work, Stats, Testimonials, CTA, Footer
  data/
    content.js    # all editable copy/content
  hooks/
    useReveal.js  # scroll-reveal animation hook
  index.css       # design system (colors, type, layout) + all component styles
  App.jsx         # assembles the page
  main.jsx        # React entry point
```

## Design notes

- Color system defined as CSS variables at the top of `src/index.css` (`--void`, `--blue`, `--rec`, etc.) — change those to re-theme the whole site.
- Fonts: Space Grotesk (headings), Inter (body), IBM Plex Mono (timecodes/labels) — loaded via Google Fonts in `index.html`.
- The horizontal "timeline ruler" dividers and V1/V2/V3 track layout are the site's signature visual motif, echoing a video editing timeline.
- Work grid and reel-strip thumbnails are CSS gradient placeholders — swap in real project images/videos when ready (see `.reel-frame`, `.work-card` in `index.css` for where background images can replace the gradients).
