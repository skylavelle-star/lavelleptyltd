# CLAUDE.md - Vantage Meridian Website

Git repo root: `/Users/skylavelle/Claude/Portfolio/Vantage Meridian`
Astro app: `Website/` inside that repo
Live URL: https://vantagemeridian.com.au (live, behind a password gate — see below)
Vercel project: `vantage-meridian` under `sky-lavelles-projects`

## Repo layout — the app is not at the repo root

The repo root holds three sibling folders: `Contracting/` and `Tenders/` (both
gitignored — the repo is **public**) and `Website/`, the Astro app. Vercel's Root
Directory setting is still `.`, so three deploy-facing files live at the **repo
root**, not in `Website/`:

| File            | Why it is at the root                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vercel.json`   | Vercel only reads the one in the Root Directory. Holds the build overrides (`cd Website && npm ci` / `npm run build`, output `Website/dist`) plus all redirects and headers. |
| `middleware.ts` | Vercel Routing Middleware must sit in the Root Directory.                                                                                                                    |
| `.gitignore`    | Covers the whole repo, including the two private folders.                                                                                                                    |

There is deliberately **no `Website/vercel.json`** — a second one there would be
silently ignored and would drift.

## Password gate

The whole site sits behind a soft password gate so it stays out of search
results and away from casual visitors while content is finished.

- **Password:** `tender` (case-insensitive, trimmed). Low-value by design — this
  repo is public and the password is in `middleware.ts` in plain text.
- **How it works:** `middleware.ts` runs before the CDN cache. No access cookie
  → 302 to `/gate?next=<path>`. `src/pages/gate.astro` posts the password back to
  `/gate`; the middleware checks it, sets `lpl_gate=open` and redirects to the
  originally requested path.
- **Access lasts one browser session.** The cookie is set with no `Max-Age` and
  no `Expires`, so the browser drops it on close and the next visit has to
  re-enter the password. (Caveat outside our control: browsers set to restore
  the previous session — Chrome's "Continue where you left off" — hold session
  cookies across a restart.)
- **Exempt from the gate:** `/_astro/*`, `favicon.svg`, `og-default.jpg`,
  `robots.txt` (crawlers must read it to honour it) and `/_vercel/*`.
- **Also blocking indexing:** `robots.txt` is `Disallow: /`, the root
  `vercel.json` sends `X-Robots-Tag: noindex, nofollow` on every response, and
  `/gate` carries a `noindex, nofollow` meta tag.
- **`npm run dev` bypasses the gate entirely** — Vercel middleware does not run
  under `astro dev`. Test the gate against a deployment, not localhost.
- **`/logout`** expires the cookie and returns to the gate. Nothing links to
  it; it is typed by hand. It lives in a single marked block in
  `middleware.ts` between `---- LOGOUT` and `---- end LOGOUT` — deleting that
  block is the only step needed to remove the route.
- **To take the gate off:** delete `middleware.ts`, restore `robots.txt` to
  `Allow: /` plus the sitemap line, drop the `X-Robots-Tag` header from
  `vercel.json`, and delete `src/pages/gate.astro`.

## Tech stack

- **Astro 5** (`^5.7.0`, static output)
- **Tailwind CSS v4** - CSS-first config in `src/styles/global.css` via `@tailwindcss/vite` plugin, no `tailwind.config.js`
- **TypeScript** - strict mode
- **Astro content collections** - `src/content/articles/` for editorial articles, rendered at `/articles/[slug]`
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
    articles/         # Astro content collection — editorial articles in markdown
  layouts/
    BaseLayout.astro  # base layout (head, header nav, footer all integrated)
  pages/
    index.astro
    gate.astro                 # password gate — self-contained, posts to /gate
    framework.astro            # five phases, four gates, hybrid PRINCE2 + Agile
                               # SOURCE OF TRUTH: templates/Framework Definition/
                               # *.docx + *.pptx and templates/templates-folder.md.
                               # Never invent phase durations, gate evidence or
                               # artefact anchors - read them from those files.
    consulting.astro           # six capabilities + Vantage Meridian Recovery Protocol™
    delivery-team.astro        # delivery team — model, principal, nine role cards
    case-studies.astro
    privacy.astro
    terms.astro
    articles/
      index.astro              # article index, sorted by pubDate desc
      [...slug].astro          # individual article renderer
    resources/         # section labelled "Resources" in nav; route /resources (was /templates)
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

Header nav exposes four destinations (Consulting, Delivery Team, Case Studies, Framework) plus a persistent "Engage us" CTA → `/contact`. Articles and Resources sit in the footer only. Four items plus brand and CTA need roughly 720px, so the hamburger takes over at 880px — adding a nav item means re-checking that breakpoint. The "Resources" section lives at `/resources` (renamed from `/templates`; 301 redirect in `vercel.json`). The packs in it are still called "templates" in product copy — only the section name changed. Brand mark routes to home. Other pages — `/case-studies/`, `/articles/`, `/digital-assets/`, `/about/`, `/privacy/`, `/terms/` — are reached via footer or in-page CTAs. `/services` and `/network` are retired routes, 301'd in `vercel.json` to `/consulting` and `/delivery-team`.

## Config and environment

**Always read env vars from `src/config/site.ts`**, never directly from `import.meta.env` in pages.

```typescript
import { site, products } from "../config/site";
```

**Current env vars** (set in `.env` and Vercel project settings; `.env.example` documents the shape):

| Variable                                     | Notes                                                              |
| -------------------------------------------- | ------------------------------------------------------------------ |
| `PUBLIC_GA_ID`                               | Google Analytics 4                                                 |
| `PUBLIC_SITE_URL`                            | `https://vantagemeridian.com.au` (unset; code falls back to it)    |
| **Live packs (Tier 1)**                      |                                                                    |
| `PUBLIC_LS_STEERING_COMMITTEE_PACK`          | LS checkout URL — Steering Pack ($897)                             |
| `PUBLIC_LS_PROJECT_RECOVERY_PACK`            | LS checkout URL — Project Recovery Pack ($1,247)                   |
| `PUBLIC_LS_BUSINESS_CASE_PACK`               | LS checkout URL — Business Case Pack ($1,197)                      |
| `PUBLIC_LS_PROCUREMENT_PACK`                 | LS checkout URL — Procurement Pack ($1,197)                        |
| **Stage packs (stubs until variants exist)** |                                                                    |
| `PUBLIC_LS_PROJECT_SETUP_PACK`               | Project Setup Pack ($847)                                          |
| `PUBLIC_LS_DISCOVERY_PACK`                   | Discovery Pack ($947)                                              |
| `PUBLIC_LS_REQUIREMENTS_DESIGN_PACK`         | Requirements & Design Pack ($947)                                  |
| `PUBLIC_LS_FINANCIAL_CONTROL_PACK`           | Financial Control Pack ($1,247)                                    |
| `PUBLIC_LS_TESTING_PACK`                     | Testing Pack ($747)                                                |
| `PUBLIC_LS_CUTOVER_PACK`                     | Cutover Pack ($747)                                                |
| `PUBLIC_LS_TRAINING_CHANGE_PACK`             | Training / Change Pack ($747)                                      |
| **Flagship**                                 |                                                                    |
| `PUBLIC_LS_COMPLETE_LIBRARY`                 | Complete Practitioner Library ($12,997)                            |
| **Bundles**                                  |                                                                    |
| `PUBLIC_LS_TIER_3_LIGHT`                     | Tier 3 Light Bundle ($1,997)                                       |
| `PUBLIC_LS_TIER_2_STANDARD`                  | Tier 2 Standard Bundle ($4,497)                                    |
| `PUBLIC_LS_TIER_1_MAJOR`                     | Tier 1 Major Bundle ($7,997)                                       |
| `PUBLIC_LS_PROJECT_RECOVERY_BUNDLE`          | Project Recovery Bundle ($2,997) — also gated on `framingDocReady` |

Lemon Squeezy URL format: `https://lavelleptyltd.lemonsqueezy.com/checkout/buy/{variant_id}`. When a variable is unset, the page renders a notify-me Web3Forms fallback instead of a buy button. Keep `.env.example` in sync when adding new variables.

## Contact form

Web3Forms handles contact form submissions. Access key: `21e468ca-496b-45eb-8313-d1b7d5d229c9`. Set via `site.web3formsKey` in `src/config/site.ts` and read as a hidden input in `src/pages/contact.astro` — safe to commit (public identifier, not a secret).

## Lemon Squeezy checkout

`lemon.js` overlay is loaded on pages that use buy buttons. All buy links need `class="lemonsqueezy-button"` for the overlay to trigger. Checkout URLs are read from `src/config/site.ts` via env vars.

Pages that conditionally load `lemon.js`:

- `src/pages/index.astro` (homepage product teasers)
- The five PackPage users: `resources/business-case-pack.astro`, `procurement-pack.astro`, `project-recovery-pack.astro`, `steering-committee-pack.astro`, `complete-practitioner-library.astro`
- The four bundle pages: `bundles/tier-1-major.astro`, `tier-2-standard.astro`, `tier-3-light.astro`, `project-recovery-bundle.astro` — each gated on its own `PUBLIC_LS_*` variable

The PackPage component (`src/components/PackPage.astro`) takes price, audience, helpsWith, included artefacts, FAQ, ROI block and CTA props. The seven in-development stub packs render through `src/components/StubPack.astro` instead — same visual shape, but with a Web3Forms notify-me form in place of the buy button.

### Project Recovery Bundle gating

`src/pages/bundles/project-recovery-bundle.astro` carries a `framingDocReady` boolean (currently `false`). The buy button stays gated behind the notify-me fallback until both:

1. The recovery framing doc (`recovery-framing-doc.md` at the repo root) is reviewed end-to-end and signed off as production-ready, **and**
2. The framing doc is wired into the post-purchase download so buyers actually receive it.

When both are true: flip `framingDocReady` to `true`, set `PUBLIC_LS_PROJECT_RECOVERY_BUNDLE`, and update `/bundles/index.astro` to drop the "(in development)" qualifier from the framing-doc bullet.

## Deployment

**Pipeline:** Local → GitHub → Vercel → Live

| Step            | Value                                                 |
| --------------- | ----------------------------------------------------- |
| Local directory | `/Users/skylavelle/Claude/Portfolio/Vantage Meridian` |
| GitHub repo     | `github.com/skylavelle-star/vantage-meridian`         |
| Vercel project  | `vantage-meridian`                                    |
| Live site       | `https://vantagemeridian.com.au`                      |

Deploy by committing changes and running `git push origin main`. Vercel builds and publishes automatically (~9s). Never use `vercel --prod --yes` — the GitHub integration handles all deploys.

## Performance — what is already in place

- **HTML CDN cache:** the root `vercel.json` sets `Cache-Control: s-maxage=300, stale-while-revalidate=86400` on `/(.*)`. The edge revalidates every 5 minutes; visitors never wait for the origin thanks to the 24-hour SWR window. Vercel auto-purges the CDN on every deployment.
- **API routes:** `/api/(.*)` is forced to `no-store, max-age=0`. Vantage Meridian has no API routes today; the rule is defensive insurance.
- **Fingerprinted bundles:** `/_astro/(.*)` is cached for 1 year (`immutable`). Astro regenerates the hash on every build that changes the source.
- **Static images and fonts:** anything matching `*.{jpg,jpeg,png,webp,avif,gif,svg,ico,woff,woff2}` is cached for 1 year (`immutable`). **Convention: rename rather than overwrite** any file under `public/` — same filename means the CDN serves the old bytes for up to a year. Add a `-v2` or date suffix, update references.
- **Async fonts:** `BaseLayout.astro` loads Fraunces + DM Sans via `rel="preload" as="style" onload="..."` so they don't render-block.
- **Link prefetch:** `astro.config.mjs` sets `prefetch: { prefetchAll: true, defaultStrategy: 'hover' }` so internal navigation feels instant.
- **`npm run refresh`:** POSTs to `VERCEL_DEPLOY_HOOK_URL` to trigger an empty redeploy → CDN purge. Use when you need to force-bust the 5-minute HTML window. `/refresh-site` is the diagnose-then-act version.

## Things that look weird but are intentional

- **`VERCEL_DEPLOY_HOOK_URL` is empty after `vercel env pull`.** It's marked Sensitive in Vercel project settings, which means `vercel env pull --environment=production .env.local` writes it back as an empty string. Paste the hook URL into `.env.local` by hand after every pull. Same caveat applies to any future Sensitive env vars.
- **Order of `headers` rules in `vercel.json` matters.** `/api/(.*)` sits first; the global `/(.*)` rule sits last and only sets `Cache-Control` for paths that aren't already matched by a more specific rule. Don't reorder without re-checking that asset and HTML cache lifetimes still resolve correctly.
- **`.claude/` is gitignored.** Slash commands and Claude settings are local-only. Share them by copy-paste, not by committing.

## Delivery team consent gate

`/delivery-team` describes the principal-led delivery model. It is **role-based by
default**: nine role cards describing what each role delivers, with Sky as the
only named individual.

**The gate is consent, and only consent.** A practitioner may be named and
pictured on the site, and named in tender documentation, once they have signed
Section 4 (website and tender consent) of the Vantage Meridian Required Information Form.
That signature is the sole precondition.

**Explicitly not preconditions.** Team practitioners are independent
subcontractors engaged per assignment, not employees. An employment contract, a
sole-trader agreement and an agreed engagement rate are commercial matters
settled per assignment and have no bearing on the publishing decision. Do not
gate publishing on any of them, and do not re-litigate this — if a future
instruction implies a contract is needed before publishing, this rule wins.

**Fail loudly.** If a practitioner is queued for publishing and their signed
Section 4 is missing or unsigned, stop and report which practitioner and which
document is missing. Never silently skip them, never publish them anyway, and
never fall back to asking for a contract instead.

When a named profile is added, the content must trace to that person's resume —
never invent qualifications, employers or outcomes — and the photo comes from
`src/assets/images/delivery-team/{firstname-lastname}.jpg`. Where no photo exists,
render the profile without one; no placeholder silhouettes.

Signed forms are not kept in this repo. Resumes and photos live in
`Tenders/Delivery Team/` (gitignored); the blank forms live in `Tenders/Forms/`.

No day rates, seat rates or margin language anywhere on the page. Client names
stay anonymised to sector descriptors, matching the case studies.

## Writing rules

**Canonical style guide:** `/Users/skylavelle/Claude/Portfolio/Sky_Lavelle_Writing_Style_and_Voice.md` — read this before writing any user-facing copy. It is the source of truth for voice, tone, and style across all Sky Lavelle portfolio projects.

Project-specific additions on top of the canonical guide:

- No "coming soon" text — use actionable fallbacks
- No fake testimonials
