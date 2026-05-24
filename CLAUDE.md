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
    PackPage.astro    # shared product-detail layout for the five PackPage users
    StubPack.astro    # shared layout for the seven in-development stub packs (with notify-me form + ROI block)
  config/site.ts      # ALL site config and env var reads — import from here, not import.meta.env
  content/
    thinking/         # Astro content collection — editorial articles in markdown
  layouts/
    BaseLayout.astro  # base layout (head, header nav, footer all integrated)
  pages/
    index.astro
    framework.astro            # seven stages, six gates, three paths
    consulting.astro           # six capabilities + Lavelle Recovery Protocol™
    case-studies.astro
    services.astro             # LEGACY / orphan — to be retired via /retire-services
    privacy.astro
    terms.astro
    thinking/
      index.astro              # article index, sorted by pubDate desc
      [...slug].astro          # individual article renderer
    templates/
      index.astro                            # browse: flagship + nine stage packs + additional packs + standalone
      complete-practitioner-library.astro    # $12,997 flagship (uses PackPage)
      business-case-pack.astro               # live PackPage
      project-recovery-pack.astro            # live PackPage
      steering-committee-pack.astro          # live PackPage (display name "Steering Pack")
      procurement-pack.astro                 # live PackPage
      project-setup-pack.astro               # stub
      discovery-pack.astro                   # stub
      requirements-design-pack.astro         # stub
      financial-control-pack.astro           # stub
      testing-pack.astro                     # stub
      cutover-pack.astro                     # stub
      training-change-pack.astro             # stub
    bundles/
      index.astro                            # tier-bundle index + Project Recovery callout
      tier-1-major.astro
      tier-2-standard.astro
      tier-3-light.astro
      project-recovery-bundle.astro          # gated on framingDocReady flag — see below
    free-tools.astro                         # Framework One-Page + Tailoring Calculator + supplementary
    free-tools/
      project-recovery-checklist.astro
      project-recovery-checklist/
        thanks.astro
    digital-assets.astro                     # category-level descriptions only — no named properties
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

Header nav exposes six destinations (Consulting, Framework, Templates, Bundles, Free Tools, Contact) plus a persistent "Engage us" CTA → `/contact`. Brand mark routes to home. Other pages — `/case-studies/`, `/thinking/`, `/digital-assets/`, `/about/`, `/privacy/`, `/terms/` — are reached via footer or in-page CTAs. `/services/` survives as a legacy orphan pending the `/retire-services` cleanup.

## Config and environment

**Always read env vars from `src/config/site.ts`**, never directly from `import.meta.env` in pages.

```typescript
import { site, products } from "../config/site";
```

**Current env vars** (set in `.env` and Vercel project settings; `.env.example` documents the shape):

| Variable                              | Notes                                                |
| ------------------------------------- | ---------------------------------------------------- |
| `PUBLIC_GA_ID`                        | Google Analytics 4                                   |
| `PUBLIC_SITE_URL`                     | `https://lavelleptyltd.com.au`                       |
| **Live packs (Tier 1)**               |                                                      |
| `PUBLIC_LS_STEERING_COMMITTEE_PACK`   | LS checkout URL — Steering Pack ($897)               |
| `PUBLIC_LS_PROJECT_RECOVERY_PACK`     | LS checkout URL — Project Recovery Pack ($1,247)     |
| `PUBLIC_LS_BUSINESS_CASE_PACK`        | LS checkout URL — Business Case Pack ($1,197)        |
| `PUBLIC_LS_PROCUREMENT_PACK`          | LS checkout URL — Procurement Pack ($1,197)          |
| **Stage packs (stubs until variants exist)** |                                               |
| `PUBLIC_LS_PROJECT_SETUP_PACK`        | Project Setup Pack ($847)                            |
| `PUBLIC_LS_DISCOVERY_PACK`            | Discovery Pack ($947)                                |
| `PUBLIC_LS_REQUIREMENTS_DESIGN_PACK`  | Requirements & Design Pack ($947)                    |
| `PUBLIC_LS_FINANCIAL_CONTROL_PACK`    | Financial Control Pack ($1,247)                      |
| `PUBLIC_LS_TESTING_PACK`              | Testing Pack ($747)                                  |
| `PUBLIC_LS_CUTOVER_PACK`              | Cutover Pack ($747)                                  |
| `PUBLIC_LS_TRAINING_CHANGE_PACK`      | Training / Change Pack ($747)                        |
| **Flagship**                          |                                                      |
| `PUBLIC_LS_COMPLETE_LIBRARY`          | Complete Practitioner Library ($12,997)              |
| **Bundles**                           |                                                      |
| `PUBLIC_LS_TIER_3_LIGHT`              | Tier 3 Light Bundle ($1,997)                         |
| `PUBLIC_LS_TIER_2_STANDARD`           | Tier 2 Standard Bundle ($4,497)                      |
| `PUBLIC_LS_TIER_1_MAJOR`              | Tier 1 Major Bundle ($7,997)                         |
| `PUBLIC_LS_PROJECT_RECOVERY_BUNDLE`   | Project Recovery Bundle ($2,997) — also gated on `framingDocReady` |

Lemon Squeezy URL format: `https://lavelleptyltd.lemonsqueezy.com/checkout/buy/{variant_id}`. When a variable is unset, the page renders a notify-me Web3Forms fallback instead of a buy button. Keep `.env.example` in sync when adding new variables.

## Contact form

Web3Forms handles contact form submissions. Access key: `21e468ca-496b-45eb-8313-d1b7d5d229c9`. Set via `site.web3formsKey` in `src/config/site.ts` and read as a hidden input in `src/pages/contact.astro` — safe to commit (public identifier, not a secret).

## Lemon Squeezy checkout

`lemon.js` overlay is loaded on pages that use buy buttons. All buy links need `class="lemonsqueezy-button"` for the overlay to trigger. Checkout URLs are read from `src/config/site.ts` via env vars.

Pages that conditionally load `lemon.js`:

- `src/pages/index.astro` (homepage product teasers)
- The five PackPage users: `templates/business-case-pack.astro`, `procurement-pack.astro`, `project-recovery-pack.astro`, `steering-committee-pack.astro`, `complete-practitioner-library.astro`
- The four bundle pages: `bundles/tier-1-major.astro`, `tier-2-standard.astro`, `tier-3-light.astro`, `project-recovery-bundle.astro` — each gated on its own `PUBLIC_LS_*` variable

The PackPage component (`src/components/PackPage.astro`) takes price, audience, helpsWith, included artefacts, FAQ, ROI block and CTA props. The seven in-development stub packs render through `src/components/StubPack.astro` instead — same visual shape, but with a Web3Forms notify-me form in place of the buy button.

### Project Recovery Bundle gating

`src/pages/bundles/project-recovery-bundle.astro` carries a `framingDocReady` boolean (currently `false`). The buy button stays gated behind the notify-me fallback until both:

1. The recovery framing doc (`recovery-framing-doc.md` at the repo root) is reviewed end-to-end and signed off as production-ready, **and**
2. The framing doc is wired into the post-purchase download so buyers actually receive it.

When both are true: flip `framingDocReady` to `true`, set `PUBLIC_LS_PROJECT_RECOVERY_BUNDLE`, and update `/bundles/index.astro` to drop the "(in development)" qualifier from the framing-doc bullet.

## Deployment

**Pipeline:** Local → GitHub → Vercel → Live

| Step            | Value                                                |
| --------------- | ---------------------------------------------------- |
| Local directory | `/Users/skylavelle/Claude/Portfolio/Lavelle Pty Ltd` |
| GitHub repo     | `github.com/skylavelle-star/lavelleptyltd`           |
| Vercel project  | `lavelle-pty-ltd`                                    |
| Live site       | `https://lavelleptyltd.com.au`                       |

Deploy by committing changes and running `git push origin main`. Vercel builds and publishes automatically (~9s). Never use `vercel --prod --yes` — the GitHub integration handles all deploys.

## Performance — what is already in place

- **HTML CDN cache:** `vercel.json` sets `Cache-Control: s-maxage=300, stale-while-revalidate=86400` on `/(.*)`. The edge revalidates every 5 minutes; visitors never wait for the origin thanks to the 24-hour SWR window. Vercel auto-purges the CDN on every deployment.
- **API routes:** `/api/(.*)` is forced to `no-store, max-age=0`. Lavelle has no API routes today; the rule is defensive insurance.
- **Fingerprinted bundles:** `/_astro/(.*)` is cached for 1 year (`immutable`). Astro regenerates the hash on every build that changes the source.
- **Static images and fonts:** anything matching `*.{jpg,jpeg,png,webp,avif,gif,svg,ico,woff,woff2}` is cached for 1 year (`immutable`). **Convention: rename rather than overwrite** any file under `public/` — same filename means the CDN serves the old bytes for up to a year. Add a `-v2` or date suffix, update references.
- **Async fonts:** `BaseLayout.astro` loads Fraunces + DM Sans via `rel="preload" as="style" onload="..."` so they don't render-block.
- **Link prefetch:** `astro.config.mjs` sets `prefetch: { prefetchAll: true, defaultStrategy: 'hover' }` so internal navigation feels instant.
- **`npm run refresh`:** POSTs to `VERCEL_DEPLOY_HOOK_URL` to trigger an empty redeploy → CDN purge. Use when you need to force-bust the 5-minute HTML window. `/refresh-site` is the diagnose-then-act version.

## Things that look weird but are intentional

- **`VERCEL_DEPLOY_HOOK_URL` is empty after `vercel env pull`.** It's marked Sensitive in Vercel project settings, which means `vercel env pull --environment=production .env.local` writes it back as an empty string. Paste the hook URL into `.env.local` by hand after every pull. Same caveat applies to any future Sensitive env vars.
- **Order of `headers` rules in `vercel.json` matters.** `/api/(.*)` sits first; the global `/(.*)` rule sits last and only sets `Cache-Control` for paths that aren't already matched by a more specific rule. Don't reorder without re-checking that asset and HTML cache lifetimes still resolve correctly.
- **`.claude/` is gitignored.** Slash commands and Claude settings are local-only. Share them by copy-paste, not by committing.

## Writing rules

**Canonical style guide:** `/Users/skylavelle/Claude/Portfolio/Sky_Lavelle_Writing_Style_and_Voice.md` — read this before writing any user-facing copy. It is the source of truth for voice, tone, and style across all Sky Lavelle portfolio projects.

Project-specific additions on top of the canonical guide:

- No "coming soon" text — use actionable fallbacks
- No fake testimonials
