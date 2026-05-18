# CLAUDE.md - Lavelle Pty Ltd Website

Project root: `/Users/skylavelle/Claude/Portfolio/Lavelle Pty Ltd`
Live URL: https://lavelleptyltd.com.au
Vercel project: `lavelle-pty-ltd` under `sky-lavelles-projects`

## Tech stack

- **Astro 5** (`^5.7.0`, static output)
- **Tailwind CSS v4** - CSS-first config in `src/styles/global.css` via `@tailwindcss/vite` plugin, no `tailwind.config.js`
- **TypeScript** - strict mode
- **Astro content collections** - `src/content/thinking/` for editorial articles, rendered at `/thinking/[slug]`
- **Lemon Squeezy** - checkout overlay via `lemon.js`; loaded only on pages with buy buttons. Storefront: `lavelleptyltd.lemonsqueezy.com`
- **Web3Forms** - contact form handler (key: `21e468ca-496b-45eb-8313-d1b7d5d229c9`)
- **Google Analytics** - GA4, injected in `BaseLayout.astro` when `PUBLIC_GA_ID` is set
- **Google Fonts** - Fraunces (serif display) + DM Sans (sans body), loaded via stylesheet in `BaseLayout.astro`

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
  assets/images/      # hero, about, services, templates etc. (optimised by Astro at build)
  components/
    PackPage.astro    # shared product-detail layout for the four pack pages
  config/site.ts      # ALL site config and env var reads — import from here, not import.meta.env
  content/
    thinking/         # Astro content collection — editorial articles in markdown
  layouts/
    BaseLayout.astro  # base layout (head, header nav, footer all integrated)
  pages/
    index.astro
    services.astro          # umbrella for Consulting / PMO Resources / Case Studies / Delivery Framework
    consulting.astro        # six capabilities + operating principles
    pmo-resources.astro     # product packs + enterprise licensing + free checklist
    case-studies.astro
    thinking/
      index.astro           # article index, sorted by pubDate desc
      [...slug].astro       # individual article renderer
    delivery-framework.astro
    templates/
      index.astro           # browse-only index of packs + standalone artefacts
      bundle.astro
      project-recovery-pack.astro
      business-case-pack.astro
      procurement-pack.astro
      steering-committee-pack.astro
    free-tools.astro
    free-tools/
      project-recovery-checklist.astro
    digital-assets.astro    # category-level descriptions only — no named properties
    about.astro
    contact.astro
    thank-you/
      contact.astro
      product.astro
    404.astro
  styles/
    global.css        # Tailwind v4 theme + design tokens
public/
  favicon.svg
  robots.txt
```

Header nav exposes five destinations (Services, Consulting, PMO Resources, Case Studies, Thinking). Other pages — `/templates/`, `/free-tools/`, `/delivery-framework/`, `/digital-assets/`, `/about/` — are reached via footer or in-page CTAs.

## Config and environment

**Always read env vars from `src/config/site.ts`**, never directly from `import.meta.env` in pages.

```typescript
import { site, products } from "../config/site";
```

**Current env vars** (set in `.env` and Vercel project settings):

| Variable                            | Notes                                               |
| ----------------------------------- | --------------------------------------------------- |
| `PUBLIC_GA_ID`                      | Google Analytics 4                                  |
| `PUBLIC_SITE_URL`                   | `https://lavelleptyltd.com.au`                      |
| `PUBLIC_LS_PROJECT_RECOVERY_PACK`   | Lemon Squeezy checkout URL                          |
| `PUBLIC_LS_BUSINESS_CASE_PACK`      | Lemon Squeezy checkout URL                          |
| `PUBLIC_LS_PROCUREMENT_PACK`        | Lemon Squeezy checkout URL                          |
| `PUBLIC_LS_STEERING_COMMITTEE_PACK` | Lemon Squeezy checkout URL                          |
| `PUBLIC_LS_BUNDLE_PACK`             | Lemon Squeezy checkout URL for the four-pack bundle |

Lemon Squeezy URL format is `https://lavelleptyltd.lemonsqueezy.com/checkout/buy/{variant_id}`. Keep `.env.example` in sync when adding new variables.

## Contact form

Web3Forms handles contact form submissions. Access key: `21e468ca-496b-45eb-8313-d1b7d5d229c9`. Set via `site.web3formsKey` in `src/config/site.ts` and read as a hidden input in `src/pages/contact.astro` — safe to commit (public identifier, not a secret).

## Lemon Squeezy checkout

`lemon.js` overlay is loaded on pages that use buy buttons. All buy links need `class="lemonsqueezy-button"` for the overlay to trigger. Checkout URLs are read from `src/config/site.ts` via env vars.

Pages that use the overlay (and conditionally load `lemon.js`):

- `src/pages/index.astro` (homepage product teasers)
- `src/pages/pmo-resources.astro`
- `src/pages/templates/bundle.astro`
- `src/pages/templates/project-recovery-pack.astro`
- `src/pages/templates/business-case-pack.astro`
- `src/pages/templates/procurement-pack.astro`
- `src/pages/templates/steering-committee-pack.astro`

The pack pages all render through the shared `src/components/PackPage.astro` component, which takes price, audience, helpsWith, included artefacts, FAQ and CTA props.

## Deployment

**Pipeline:** Local → GitHub → Vercel → Live

| Step            | Value                                                |
| --------------- | ---------------------------------------------------- |
| Local directory | `/Users/skylavelle/Claude/Portfolio/Lavelle Pty Ltd` |
| GitHub repo     | `github.com/skylavelle-star/lavelleptyltd`           |
| Vercel project  | `lavelle-pty-ltd`                                    |
| Live site       | `https://lavelleptyltd.com.au`                       |

Deploy by committing changes and running `git push origin main`. Vercel builds and publishes automatically (~9s). Never use `vercel --prod --yes` — the GitHub integration handles all deploys.

## Writing rules

**Canonical style guide:** `/Users/skylavelle/Claude/Portfolio/Sky_Lavelle_Writing_Style_and_Voice.md` — read this before writing any user-facing copy. It is the source of truth for voice, tone, and style across all Sky Lavelle portfolio projects.

Project-specific additions on top of the canonical guide:

- No "coming soon" text — use actionable fallbacks
- No fake testimonials
