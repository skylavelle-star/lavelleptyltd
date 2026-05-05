# CLAUDE.md - Lavelle Pty Ltd Website

Project root: `/Users/skylavelle/Claude/Portfolio/Lavelle Pty Ltd`
Live URL: https://lavelleptyltd.com.au
Vercel project: `lavelle-pty-ltd` under `sky-lavelles-projects`

## Tech stack

- **Astro** (static output)
- **Tailwind CSS v4** - CSS-first config in `src/styles/global.css` via `@tailwindcss/vite` plugin, no `tailwind.config.js`
- **TypeScript** - strict mode
- **Lemon Squeezy** - checkout overlay via `lemon.js`
- **Web3Forms** - contact form handler (key read from `src/config/site.ts`)
- **Google Analytics** - GA4, injected in Layout when `PUBLIC_GA_ID` is set

## Key commands

```bash
npm run dev          # local dev server at localhost:4321
npm run build        # astro build
npm run lint         # eslint
npm run format       # prettier
```

## Directory structure

```
src/
  assets/images/      # hero images (optimised by Astro at build)
  components/         # Astro components
  config/site.ts      # ALL site config and env var reads — import from here, not import.meta.env
  layouts/
    Layout.astro      # base layout
  pages/              # file-based routing
  styles/
    global.css        # Tailwind v4 theme
public/
  favicon.svg
  robots.txt
```

## Config and environment

**Always read env vars from `src/config/site.ts`**, never directly from `import.meta.env` in pages.

```typescript
import { site, products } from '../config/site';
```

## Deployment

**Pipeline:** Local → GitHub → Vercel → Live

| Step | Value |
|---|---|
| Local directory | `/Users/skylavelle/Claude/Portfolio/Lavelle Pty Ltd` |
| GitHub repo | `github.com/skylavelle-star/lavelleptyltd` |
| Vercel project | `lavelle-pty-ltd` |
| Live site | `https://lavelleptyltd.com.au` |

Deploy by committing changes and running `git push origin main`. Vercel builds and publishes automatically (~9s). Never use `vercel --prod --yes` — the GitHub integration handles all deploys.

## Writing rules

- Australian English
- No em dashes (use spaced hyphens where a dash is needed)
- Direct, professional tone — no startup language or corporate filler
