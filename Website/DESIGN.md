# Design guide — vantagemeridian.com.au

The aesthetic is editorial consultancy: PwC / KPMG / Deloitte information design,
recoloured for an Australian boutique sensibility. Serif display type, sans body,
warm neutrals, hairline rules, generous but disciplined space.

Everything below is what the site actually ships. `src/styles/global.css` is the
source of truth; if this document and the stylesheet disagree, the stylesheet
wins and this file needs correcting.

---

## Palette

Nine tokens, all defined in `:root`. There are no other colours in the site.

| Token          | Hex       | Used for                                                   |
| -------------- | --------- | ---------------------------------------------------------- |
| `--bone`       | `#f4efe6` | Page background, and text on ink sections                  |
| `--bone-deep`  | `#ece5d7` | Occasional deeper neutral panel                            |
| `--paper`      | `#fbf8f2` | Lifted panels — alternating sections, cards, form fields   |
| `--ink`        | `#181613` | Body text, headings, dark sections, primary buttons        |
| `--ink-soft`   | `#2c2a26` | Secondary body copy, card descriptions                     |
| `--ochre`      | `#b85c2a` | The single accent: eyebrows, emphasis, links, hover states |
| `--ochre-deep` | `#8e441e` | Link hover only                                            |
| `--sage`       | `#707262` | Muted metadata — labels, breadcrumbs, footnotes            |
| `--rule`       | `#ddd5c5` | Every hairline border and divider                          |

**Rules of use.** Ochre is an accent, never a surface — one or two ochre marks per
viewport. Backgrounds alternate bone → paper → bone to separate sections without
adding borders. Ink sections (`.engage`, `.thinking`) invert: bone text, ochre
accents, and rules drop to `rgba(244, 239, 230, 0.18)` so they don't glare.

---

## Typography

Two families, loaded from Google Fonts and preloaded asynchronously in
`BaseLayout.astro` so they never block render.

- **Fraunces** — serif display, optical size axis. All headings, the wordmark,
  stat numbers, pull quotes. Weight 300 at display sizes, 500 for smaller headings.
- **DM Sans** — body, UI, labels, buttons. Weight 400–500.

### Scale

Every display size is a `clamp()`, so the site is fluid rather than stepped.

| Token          | Value                            | Used for                      |
| -------------- | -------------------------------- | ----------------------------- |
| `--display-xl` | `clamp(2.75rem, 5.6vw, 4.75rem)` | Homepage hero headline only   |
| `--display-lg` | `clamp(2.25rem, 5vw, 4.25rem)`   | Sub-page `h1`, section titles |
| `--display-md` | `clamp(1.75rem, 3vw, 2.625rem)`  | `h3`, article headings        |
| `--display-sm` | `clamp(1.375rem, 2vw, 1.75rem)`  | `h4`, card names              |
| `--body-lg`    | `1.125rem`                       | `.lead` paragraphs            |
| `--body`       | `1rem`                           | Default body                  |
| `--body-sm`    | `0.9rem`                         | Card copy, buttons, nav       |
| `--micro`      | `0.75rem`                        | Eyebrows, labels, breadcrumbs |

### Rules

- Display headings run `line-height: 1.05` and negative tracking (`-0.018em`,
  tightening to `-0.028em` on the hero).
- Body runs `line-height: 1.55`.
- `<em>` inside a heading is **not** italic emphasis in the usual sense — it is the
  ochre italic Fraunces phrase that gives each headline its turn. One per heading.
- Paragraphs cap at `60ch`; `.lead` caps at `56ch`. Never let measure run wider.
- Uppercase micro-type always carries letterspacing: `0.2em`–`0.22em`. Lowercase
  body never does.

---

## Layout

| Token      | Value                       | Meaning                     |
| ---------- | --------------------------- | --------------------------- |
| `--max`    | `1320px`                    | Content max width (`.wrap`) |
| `--gutter` | `clamp(1.25rem, 4vw, 3rem)` | Horizontal page padding     |

### Vertical rhythm

```
section            padding: clamp(2rem, 4vw, 3.5rem) 0
.hero              clamp(2rem, 4.5vw, 4rem) top / clamp(1.5rem, 3.5vw, 3rem) bottom
.subhero           clamp(1.5rem, 3.5vw, 3rem) top / clamp(1.25rem, 2.5vw, 2rem) bottom
.section__head     margin-bottom: clamp(1.75rem, 3.5vw, 2.75rem)
```

This is deliberately tight — the spacing was halved from the original design and
then partially restored. Do not add ad-hoc margins to fix perceived crowding;
adjust the token so the whole site moves together.

### Breakpoints

Six, and no more should be added without good reason.

| Width    | What changes                                                                  |
| -------- | ----------------------------------------------------------------------------- |
| `700px`  | Capability grid goes 1 → 2 columns                                            |
| `760px`  | Two-column content blocks split                                               |
| `880px`  | Section heads split into heading + lead; **nav becomes hamburger** below this |
| `980px`  | Hero splits into headline + stat panel                                        |
| `1080px` | Capability grid goes 2 → 3 columns                                            |

The nav breakpoint is tied to content: four items plus the wordmark and CTA need
roughly 720px. **Adding a nav item means re-checking it.**

### The two-column section head

```
.section__head   grid-template-columns: 1.15fr 0.85fr   (≥880px)
                 gap: clamp(4rem, 6vw, 7rem)
                 align-items: end
```

Heading left in the wider column, `.lead` right in the narrower one, bottom
aligned so the lead reads as a margin note. The lead carries a 1px left rule
(`--rule`, dropped to 28% opacity on ink sections) to mark it as a distinct column.

---

## Components

### Buttons

Pill-shaped, `border-radius: 999px`, `padding: 0.95rem 1.6rem`, `--body-sm`, weight 500.

- `.btn--primary` — ink fill, bone text; **hovers to ochre**
- `.btn--ghost` — transparent with an ink border; inverts on hover
- `.btn__arrow` — the `→` translates 3px right on hover

### Eyebrow

The section label. Ochre, `--micro`, uppercase, `0.22em` tracking, with a 1px ochre
bottom border and `0.75rem` of padding above it. Every major section opens with one.

### Cards

- **`.cap`** — capability/role card. Bone, `2.25rem 2rem 2rem` padding, `min-height: 280px`,
  hovers to paper. Sits in `.capabilities`, a 1px-gap grid over a `--rule` background so
  the gaps read as hairlines. Structure: `.cap__num` (ochre italic kicker) → `.cap__title`
  (Fraunces) → `.cap__desc` (`--ink-soft`) → optional `.cap__link`.
- **`.think-card`** — article card on ink sections. Top rule, no fill.
- **`.product`** — pack/bundle card with price.

### Links in body copy

**This is the one that bites.** The global reset sets `a { color: inherit; text-decoration: none }`,
so a link in running prose is invisible unless styled. Use:

```html
<a href="/somewhere" class="link-inline">anchor text</a>
```

Ochre, underlined, `text-underline-offset: 3px`. A safety net also catches
unclassed anchors inside `.prose`, `.lead` and `.subhero__lead` — but be explicit.
Anchors carrying their own class (`.btn`, `.cap__link`, `.engage__list a`) are untouched.

### The wordmark

Three places, one lockup: **Vantage** in Fraunces beside **MERIDIAN** in DM Sans
caps at `0.2em` tracking, sharing a baseline.

| Where  | Treatment                                             |
| ------ | ----------------------------------------------------- |
| Header | Ochre dot + Fraunces `1.4rem` + sage sub              |
| Footer | Ochre dot + Fraunces `1.5rem` + ink sub at `0.42em`   |
| Gate   | No dot, both words ink, sub at `0.34em`, display size |

---

## Imagery

Photography is muted, architectural and unpeopled where possible. Warm neutrals,
no saturated colour.

**Saturation ceiling ≈ 70/255 mean.** Stock images routinely arrive at 95+ and read
as garish against this palette. Reduce with a colour-enhance factor and check the
result by eye — 0.65 suits landscapes and architecture, 0.75–0.88 suits anything
with skin in it, because faces go grey before objects do.

**Crop to the frame that displays.** `.case__image` is `aspect-ratio: 21/9` with
`object-fit: cover`, so a full-height source ships pixels the browser throws away.
Crop sources to the band that actually shows — this alone took the build from
5.7MB to 4.4MB.

**Never overwrite a file under `public/`.** It is cached `immutable` for a year.
Ship a new filename and update the reference. Files under `src/assets/` are exempt
— Astro fingerprints them on every build.

---

## Motion

Almost none, deliberately.

- Hover transitions only: `0.2s`–`0.25s ease` on colour, background and border.
- The `.btn__arrow` nudge and a `scale(1.02)` on hovered case images.
- One scroll effect survives: a parallax on the homepage image band.
- **No reveal-on-scroll.** It was removed; content renders in place. Don't reintroduce it.
- `prefers-reduced-motion: reduce` disables what remains.

---

## Voice in the interface

Full rules live in `Sky_Lavelle_Writing_Style_and_Voice.md`. What matters for UI:

- Australian English. No em or en dashes — a spaced hyphen ( - ) for a mid-sentence break.
- No Oxford comma.
- Sentence case in prose; title case only for nav items and proper nouns.
- Buttons name the action and its object: "Request an engagement conversation",
  not "Submit" or "Learn more".
- **No "coming soon".** Anything not yet shippable gets an actionable fallback —
  a notify-me form or a link to `/contact`.
- No fabricated testimonials, clients or credentials. Client names stay anonymised
  to sector descriptors.

---

## Gotchas

1. **Astro scopes `*` but not `body`.** A page-level `<style>` block compiles `* { padding: 0 }`
   to `[data-astro-cid-…]` (specificity 0,1,0) while leaving `body` unscoped (0,0,1).
   Since `<body>` carries that attribute, **padding set on `body` is silently zeroed**.
   Put page gutters on `main`, which Astro does scope. This cost a live mobile bug.
2. **`.sidecard li` reserves `padding-left: 1.25rem`** for an absolutely-positioned tick.
   Override it to `0` and the tick lands on top of the text.
3. **`BaseLayout.astro` is in `.prettierignore`** — prettier's Astro plugin throws a
   SyntaxError on the GA `define:vars` script and can't parse the file. Format it by hand.
4. **Order matters in `vercel.json` headers.** `/api/(.*)` first, the global `/(.*)`
   rule last.
