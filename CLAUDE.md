# CLAUDE.md - Lavelle Pty Ltd Website

Project root: `/Users/skylavelle/Claude/Portfolio/Lavelle Pty Ltd`
Live URL: https://lavelleptyltd.com.au
Vercel project: `lavelle-pty-ltd` under `sky-lavelles-projects`

## Tech stack

- **Astro 5** (`^5.7.0`, static output)
- **Tailwind CSS v4** - CSS-first config in `src/styles/global.css` via `@tailwindcss/vite` plugin, no `tailwind.config.js`
- **TypeScript** - strict mode
- **Lemon Squeezy** - checkout overlay via `lemon.js`; loaded only on pages with buy buttons
- **Web3Forms** - contact form handler (key: `21e468ca-496b-45eb-8313-d1b7d5d229c9`)
- **Google Analytics** - GA4, injected in Layout when `PUBLIC_GA_ID` is set
- **@fontsource-variable/inter** - self-hosted Inter Variable font, imported in `global.css`

## Key commands

```bash
npm run dev          # local dev server at localhost:4321
npm run build        # astro build
npm run check        # astro check (TypeScript)
npm run lint         # eslint .
npm run format       # prettier --write .
npm run format:check # prettier --check .
```

## Directory structure

```
src/
  assets/images/      # hero images (optimised by Astro at build)
  components/         # Astro components
  config/site.ts      # ALL site config and env var reads — import from here, not import.meta.env
  layouts/
    Layout.astro      # base layout
  pages/
    index.astro
    about.astro
    consulting.astro
    delivery-framework.astro
    digital-assets.astro
    contact.astro
    pmo-resources.astro
    free-tools.astro
    free-tools/       # individual free tool pages
    templates/        # product pages (4 packs)
    thank-you/        # contact.astro, product.astro
    404.astro
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

**Current env vars** (set in `.env` and Vercel project settings):

| Variable | Notes |
|---|---|
| `PUBLIC_GA_ID` | Google Analytics 4 |
| `PUBLIC_SITE_URL` | `https://lavelleptyltd.com.au` |
| `PUBLIC_LS_PROJECT_RECOVERY_PACK` | Lemon Squeezy checkout URL |
| `PUBLIC_LS_BUSINESS_CASE_PACK` | Lemon Squeezy checkout URL |
| `PUBLIC_LS_PROCUREMENT_PACK` | Lemon Squeezy checkout URL |
| `PUBLIC_LS_STEERING_COMMITTEE_PACK` | Lemon Squeezy checkout URL |

## Contact form

Web3Forms handles contact form submissions. Access key: `21e468ca-496b-45eb-8313-d1b7d5d229c9`. Set via `site.web3formsKey` in `src/config/site.ts` and read as a hidden input in `src/pages/contact.astro` — safe to commit (public identifier, not a secret).

## Lemon Squeezy checkout

`lemon.js` overlay is loaded on pages that use buy buttons. All buy links need `class="lemonsqueezy-button"` for the overlay to trigger. Checkout URLs are read from `src/config/site.ts` via env vars.

Template pages:
- `src/pages/templates/project-recovery-pack.astro`
- `src/pages/templates/business-case-pack.astro`
- `src/pages/templates/procurement-pack.astro`
- `src/pages/templates/steering-committee-pack.astro`

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
- No "coming soon" text - use actionable fallbacks
- No fake testimonials
- Direct, professional, senior tone — no startup language or corporate filler
