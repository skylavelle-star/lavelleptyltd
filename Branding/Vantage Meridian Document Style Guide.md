# Vantage **MERIDIAN.**

**Brand system**

## Document *style guide*

Word, PowerPoint, Excel and PDF

Version 1.0 · 7 August 2026

**Scope:** Word, PowerPoint, Excel and PDF. This is the print and office-document counterpart to src/styles/global.css, which remains the source of truth for the website. Where this guide and the stylesheet disagree on a colour or a font, the stylesheet wins and this document needs correcting.

**Companion file:** Sky Lavelle Writing Style Guide 260806.md for voice and copy rules. This guide covers only the formatting decisions those rules do not.

**How to use it:** read section 1 once, do the twenty minutes of setup it describes, and after that you should rarely need to open this file again. Sections 2 to 5 are the underlying system. Sections 6 to 9 are per-application recipes. Section 12 is the pre-send checklist.

This document is set in the system it describes - Fraunces and DM Sans, the nine palette colours, A4 with an asymmetric margin. If it does not look right on your screen, the fonts are not installed. See section 3.1.

---

*Section one*

# Set it up once

Do not style documents one at a time. Office has a single theme file that carries colours and fonts across Word, PowerPoint and Excel simultaneously. Build it once, and every new document starts correct.

## 1.1 Install the fonts first

Both fonts are free and licensed under the SIL Open Font Licence 1.1, which permits commercial use and embedding.

1.  Download Fraunces and DM Sans from Google Fonts.

2.  Install the static instances, not just the variable font file. Office handles variable fonts badly - it will usually expose only the default weight, and you need Fraunces at 300 and 500. If the download gives you only a variable file, use the static subfolder in the zip.

3.  Install on every machine that will author documents. Fraunces Light, Fraunces Medium, DM Sans Regular and DM Sans Medium is the minimum set.

4.  Fraunces' soft and wonk axes are not reachable in Office. Accept the defaults and do not try to compensate.

## 1.2 Build the theme

In PowerPoint, which has the fullest theme editor of the three applications: Design, Variants, Colours, Customise Colours. Set the twelve slots as below, and name the result Vantage Meridian.

| **Theme slot** | **Token** | **Hex** |
| --- | --- | --- |
| Text / Background - Dark 1 | ink | #181613 |
| Text / Background - Light 1 | paper | #FBF8F2 |
| Text / Background - Dark 2 | ink-soft | #2C2A26 |
| Text / Background - Light 2 | bone | #F4EFE6 |
| Accent 1 | ochre | #B85C2A |
| Accent 2 | sage | #707262 |
| Accent 3 | rule | #DDD5C5 |
| Accent 4 | bone-deep | #ECE5D7 |
| Accent 5 | ochre-deep | #8E441E |
| Accent 6 | ink-soft | #2C2A26 |
| Hyperlink | ochre-deep | #8E441E |
| Followed hyperlink | sage | #707262 |

Then Design, Variants, Fonts, Customise Fonts. Heading font Fraunces, body font DM Sans, named Vantage Meridian. Finally Design, Themes, Save Current Theme as Vantage Meridian.thmx. It lands in your Templates folder and appears in the theme gallery in all three applications.

## 1.3 The trap in the colour picker

> Office generates a column of automatic tints and shades beneath each theme colour. Never use them. They are algorithmic lightenings of ochre and ink that sit outside the palette and look muddy in print. Use only the top row of the picker, plus the nine values in section 2. If you find yourself wanting a lighter ochre, the answer is to use less ochre, not paler ochre.

---

*Section two*

# Colour

Nine tokens. Nothing outside this list, in any document, ever.

| **Token** | **Hex** | **RGB** | **CMYK approx.** | **Use** |
| --- | --- | --- | --- | --- |
| bone | #F4EFE6 | 244 239 230 | 0 2 6 4 | Default page and slide background |
| bone-deep | #ECE5D7 | 236 229 215 | 0 3 9 7 | Deeper neutral panel |
| paper | #FBF8F2 | 251 248 242 | 0 1 4 2 | Lifted panels, cards, form fields |
| ink | #181613 | 24 22 19 | 0 8 21 91 | Body text, headings, dark slides |
| ink-soft | #2C2A26 | 44 42 38 | 0 5 14 83 | Secondary copy, captions |
| ochre | #B85C2A | 184 92 42 | 0 50 77 28 | The single accent |
| ochre-deep | #8E441E | 142 68 30 | 0 52 79 44 | Hyperlinks, small ochre text |
| sage | #707262 | 112 114 98 | 2 0 14 55 | Metadata, labels, footnotes |
| rule | #DDD5C5 | 221 213 197 | 0 4 11 13 | Every hairline and divider |

CMYK values are naive conversions. Treat them as a starting point and send a printer the hex values plus a proof request for anything commercially printed.

### Rules of use

- **Ochre is an accent, never a surface.** Maximum one or two ochre marks per page or per slide. A full ochre box, a full ochre table header row or a chart with six ochre bars is wrong.

- **Backgrounds do the separating, not borders.** Alternate bone and paper between sections rather than drawing boxes.

- **Inverted sections** on ink flip to bone text, ochre accents, and rules at 18% white.

- Every hairline is rule at 0.5pt. Not black, not grey, not 1pt.

## 2.1 Contrast, and the one that catches people out

Measured against a bone background.

| **Foreground** | **Ratio** | **Verdict** |
| --- | --- | --- |
| ink | 15.7 : 1 | Anything, any size |
| ink-soft | 14.0 : 1 | Anything, any size |
| ochre-deep | 6.1 : 1 | Passes for body text |
| sage | 4.3 : 1 | Large text and short labels only. Marginal at body size |
| **ochre** | 4.0 : 1 | **Headings and large text only. Fails for body copy** |

> Ochre on bone does not pass AA at body size. This is why hyperlinks use ochre-deep, not ochre. On ink backgrounds, ochre sits at 4.0 : 1 - fine for a slide headline, wrong for a footnote.

---

*Section three*

# Type

Fraunces for display, DM Sans for everything else. No third family, and no substitutes chosen for convenience.

## 3.1 The document scale

Fixed points, sized for A4. The web scale is fluid; this is its printed equivalent, not a conversion of it.

| **Role** | **Font** | **Size** | **Weight** | **Colour** | **Leading** |
| --- | --- | --- | --- | --- | --- |
| Cover title | Fraunces | 36pt | 300 | ink or bone | 0.95 |
| Document title / H1 | Fraunces | 28pt | 300 | ink | 1.05 |
| Section heading / H2 | Fraunces | 18pt | 300 | ink | 1.10 |
| Sub-heading / H3 | Fraunces | 13pt | 500 | ink | 1.20 |
| Eyebrow / label | DM Sans | 8pt | 500 | ochre | 1.20 |
| Lead paragraph | DM Sans | 12pt | 400 | ink-soft | 1.50 |
| Body | DM Sans | 10.5pt | 400 | ink | 15pt exact |
| Table body | DM Sans | 9.5pt | 400 | ink | 1.30 |
| Caption / footnote | DM Sans | 8.5pt | 400 | sage | 1.35 |
| Page furniture | DM Sans | 7.5pt | 500 | sage | 1.20 |

Set line spacing in Word as Exactly, in points, not as a multiplier. Multipliers drift when a line contains a superscript or an inline logo.

## 3.2 Tracking

Uppercase micro-type is always letterspaced. Lowercase body never is. Word and PowerPoint expand by points, not ems, so the conversion is points equals ems multiplied by font size.

- Eyebrow, 0.22em at 8pt becomes Expanded by 1.75pt

- Label, 0.2em at 7.5pt becomes Expanded by 1.5pt

- Wordmark sub, 0.2em at 12pt becomes Expanded by 2.4pt

Display headings tighten instead: Condensed by 0.5pt at 28pt, Condensed by 0.8pt at 36pt.

## 3.3 The italic phrase

One emphasis span per heading on the website, and the same here. Within a headline, one phrase may be set in Fraunces italic, ochre, and it should be *the phrase that gives the sentence its turn*. One per heading. Not per paragraph, not per page.

## 3.4 Measure

Body paragraphs cap at roughly 70 characters per line in print, which is wider than the 60ch web cap. Do not chase 60ch on A4 - it forces margins that look starved. Leads cap at about 60 characters.

## 3.5 When the recipient does not have the fonts

- **Windows Word and PowerPoint can embed fonts.** File, Options, Save, Embed fonts in the file, and choose to embed only the characters used. The OFL permits this.

- **Mac Office cannot embed.** There is no workaround.

- **Therefore: never send a working .docx or .pptx to a client.** Send PDF. Editable files go only to people who have the fonts installed.

- If a fallback does fire, the substitution order is Fraunces to Georgia to serif, and DM Sans to Aptos to Calibri to Arial. Expect the layout to shift. It is a failure state, not a supported mode.

---

*Section four*

# Page setup

## 4.1 A4, asymmetric margins

A4, 210 by 297mm, everywhere. Never Letter.

| **Document** | **Top** | **Bottom** | **Inside / left** | **Outside / right** |
| --- | --- | --- | --- | --- |
| Standard document | 24mm | 22mm | 28mm | 44mm |
| Letter, first page | 48mm | 22mm | 28mm | 44mm |
| Dense report / appendix | 22mm | 20mm | 24mm | 24mm |

The wide right margin is deliberate. It is the print translation of the website's section head, where the lead sits in a narrower right column and reads as a margin note. Use it for eyebrows, captions, pull quotes and figure numbers. Leave it empty rather than filling it for the sake of it.

## 4.2 Vertical rhythm

Spacing is tight on purpose. Do not add ad-hoc space to fix perceived crowding - change the value everywhere.

- Space after body paragraph 6pt. No first-line indent.

- Space before H2 24pt, after 8pt.

- Space before H3 14pt, after 4pt.

- Eyebrow sits directly above its heading with 6pt below, and carries a 0.5pt ochre bottom border with 5pt of padding above it.

- Space around a rule 12pt above and 12pt below.

## 4.3 Furniture

- **Header.** Empty on page 1. From page 2, the document title in 7.5pt DM Sans sage, left, with a 0.5pt rule line beneath.

- **Footer.** Vantage Meridian with an ochre full stop, 7.5pt DM Sans sage, left. Page number right, same size. No line above.

- Page numbering starts at the first content page, not the cover.

---

*Section five*

# The wordmark in documents

| ![Standard wordmark](media/logo_on_light.png) | ![Reversed wordmark](media/logo_on_dark.png) |
| --- | --- |
| Standard, on bone or paper | Reversed, on ink |

One lockup, and it is stacked. A compass and arrow sit above Vantage in Fraunces; MERIDIAN follows beneath in DM Sans caps at 0.2em tracking, closed by an ochre full stop. The stop is a terminal anchor - finality, precision, completion - not decoration.

The three parts are fixed relative to one another. The mark is never set horizontally, never split into its components, and never re-spaced.

## 5.1 The background is transparent, always

The mark has no plate. It ships as PNG with a real alpha channel and sits directly on whatever is behind it. Close to two thirds of its pixels are fully transparent, and most of the partial ones are the soft shadow.

- **Approved backgrounds are bone, paper and ink.** Nothing else - not sage, not ochre, not a photograph that is busy behind the mark.

- **Never save or place the logo as a JPEG.** JPEG has no alpha channel and bakes a white rectangle behind the mark. This is the most common way the logo gets broken in Word and PowerPoint, and it is invisible until the file lands on a bone background.

- **Never use Word's Set Transparent Colour to fix it after the fact.** It keys out one flat value and leaves a halo along every anti-aliased edge, and the bevel has hundreds of intermediate tones.

- **No keyline, no container, no rounded rectangle behind the mark.** If it needs a box to be legible, the background is wrong.

- **There is no white in the artwork.** What looks like a white outline on screen is the page showing through. Do not try to preserve it by placing the mark on a white plate.

## 5.2 Two files, named for the background they sit on

| **Variant** | **File** | **Use it on** |
| --- | --- | --- |
| Standard | logo_on_light.png | bone #F4EFE6, paper #FBF8F2, white, and photography that is light behind the mark |
| Reversed | logo_on_dark.png | ink #181613, and any dark panel or dark photography |

The names describe the destination, not the artwork. logo_on_light.png goes on a light background, where its own shapes are dark. Naming these files after the colour of their own ink instead - dark artwork, light artwork - inverts the meaning, and the mistake is invisible until the file lands on the wrong page. If you meet a file named that way, rename it before using it.

| **Element** | **On bone / paper** | **On ink** |
| --- | --- | --- |
| Wordmark, the V, the arc, the arrow | ink #181613 | bone #F4EFE6, inverted |
| Diamond, the compass needle | ochre | ochre, unchanged |
| Full stop | ochre | ochre, unchanged |

Structural elements invert with the background. The ochre does not. The needle and the stop are the fixed reference of the mark - the thing that points and the thing that closes - and inverting them would remove the one element that stays constant between the two versions.

- **Never recolour ochre to ink or bone.** Never recolour a structural element to ochre.

- **Never place the standard variant on a dark ground, and never sit either variant on a white box to force it there.** The reversed file does that job properly, and a plate reintroduces the rectangle that the alpha channel exists to avoid.

## 5.3 The accent value, settled

Earlier drafts left this open, between the site token ochre #B85C2A and a terracotta sampled off the mark at roughly #AE6652. It is now closed. Ochre #B85C2A is authoritative, the artwork has been recoloured to match, and the palette in section 2 stays at nine tokens with nothing new in global.css.

Both circulating figures were wrong about the file in any case. Taken from the source rather than a screenshot, the old accent measured about #AB4120 at its brightest - darker and more saturated than the #AE6652 that had been quoted, which was a bevel mid-tone. Sampling a bevelled surface always misreads the flat colour underneath it. Take the accent from the palette, never from the artwork.

Measured as a graphical element, ochre sits at 3.98 : 1 on bone, 4.30 : 1 on paper and 3.96 : 1 on ink. All three clear the 3 : 1 threshold for non-text contrast, which is what lets the accent hold its colour on either ground without a keyline. None would pass as body text, and it is never used as text.

## 5.4 Size and placement

The proportion is fixed at 1.421 : 1, wide to high, measured on the trimmed artwork. Set the size by width and let the height follow. The values below are the tested minimums for each position in the document set, chosen so the mark sits inside the page margin without pushing the text block down and adding a page.

| **Position** | **Width** | **Height** |
| --- | --- | --- |
| Document header, right aligned | 1.7cm | 1.20cm |
| Resume footer, right aligned | 1.3cm | 0.91cm |
| Cover or title page | 3.4cm | 2.39cm |

- **Floor. 1.2cm wide in print, 120px on screen.** Below that, the tracking on MERIDIAN closes up and the full stop disappears.

- **Clear space. The height of the V in Vantage, on all four sides.** No type, rule or image edge enters it.

- **Never stretch, rotate, outline, add a keyline, place on a busy photograph, or rebuild it in a different typeface.** If the artwork and this guide disagree on the typeface, the artwork is wrong - the logo has no display face of its own.

## 5.5 The bevel, and the live-text fallback

- **Use the asset with its bevel and drop shadow for deck covers, report covers and business cards.** Documents are the isolated-object context the asset was made for. This is the opposite of the website, which renders the wordmark flat as live text. Never reintroduce the bevel on the site, never strip it from the asset.

- **The artwork already carries its own soft shadow.** Never add a second drop shadow, an outline or a glow.

- **On ink, check that the drop shadow still does anything.** A dark shadow under a light mark on a dark ground is invisible, which is fine - do not compensate by adding a glow.

- **If you only need the words and not the mark, set them as live text in Fraunces and DM Sans with the ochre stop.** That is a legitimate lockup, not a compromise.

## 5.6 Rebuilding the reversed file

Anyone regenerating logo_on_dark.png from the source should know that the obvious method fails. Classifying pixels by saturation on the composited image produces speckle across the letterforms, because the fill is textured rather than flat. Two things fix it.

- **Make the accent mask soft rather than a hard threshold.** Ramp it on both chroma and proximity to the accent hue, so that no pixel flips between classes at the boundary.

- **Invert on alpha, not luminance.** The high-alpha shapes lift to bone while the low-alpha drop shadow stays dark and disappears against the ink. Inverting on luminance instead turns the shadow into a bone halo, which is the wrong result.

**Open item.** The master is a 512px raster, trimmed to 469 x 330. It holds up at every size in the table above but is thin for large-format print or signage, and each reversed version has to be derived from it rather than switched. A vector master in SVG or EPS, with the reversed variant supplied alongside it, would remove both limits.

---

*Section six*

# Word

## 6.1 Build a template, not a document

Configure the styles below once in a blank document, then File, Save As, Word Template (.dotx) into your Custom Office Templates folder. Every report, letter and memo starts from it. Restyling documents individually is how a system dies.

> Redefine the built-in styles - Normal, Heading 1, Heading 2, Heading 3, Caption, Quote - rather than creating new ones. Built-ins carry through to PDF bookmarks, navigation panes and accessibility tags. Custom styles do not.

| **Word style** | **Maps to** |
| --- | --- |
| Normal | Body, 10.5pt DM Sans, exactly 15pt leading, 6pt after |
| Title | Cover title, 36pt Fraunces Light |
| Heading 1 | 28pt Fraunces Light |
| Heading 2 | 18pt Fraunces Light |
| Heading 3 | 13pt Fraunces Medium |
| Subtitle | Lead, 12pt DM Sans, ink-soft |
| Intense Reference | Eyebrow, 8pt DM Sans Medium, ochre, caps, expanded 1.75pt |
| Caption | 8.5pt DM Sans, sage |
| Quote | 13pt Fraunces italic, ink, 12mm left indent, no quote marks |
| Hyperlink | ochre-deep, underlined |

## 6.2 Tables

Hairlines only. Copy the website: no vertical rules, no fills, no zebra striping. The tables in this document are the reference implementation.

- Header row: 8pt DM Sans Medium, caps, expanded 1.5pt, sage, with a 1pt ink bottom border.

- Body rows: 9.5pt, separated by 0.5pt rule lines. No outer border.

- Cell padding 4pt top and bottom, 6pt left and right. First column flush left with the text margin.

- Numbers right-aligned, text left-aligned, never centred. Turn on tabular figures under Font, Advanced, Number spacing, so columns of digits align.

- If a table genuinely needs banding to be readable, it is probably too wide. If you must, band with bone-deep at full strength, not a tint.

- Total rows get a 1pt ink top border and DM Sans Medium. Never bold-and-shaded.

## 6.3 Lists

- Bullets: a small ochre square, never a filled black disc. Indent 5mm, text at 10mm.

- Numbered lists: DM Sans Medium numerals in ochre, full stop after, text aligned.

- 4pt between items, 10pt before and after the list.

- Nested lists go one level only. Two levels means the section needs sub-headings instead.

## 6.4 Links and cross-references

Set link text to name its destination and the action, the same rule the site's buttons follow. Request the capability overview, not click here and not a bare URL. Colour ochre-deep, underlined. In documents destined for print, put the URL in a footnote rather than exposing it inline.

## 6.5 Report cover

Full-bleed ink page. Wordmark asset top-left at 34mm wide, logo_on_dark.png. Eyebrow in ochre. Title in Fraunces Light 36pt bone, sitting on the lower third. Beneath it, in sage, the client sector descriptor - never the client name - and the date as 7 August 2026. Nothing else. No stock photograph on the cover. The cover of this document is the pattern.

---

*Section seven*

# PowerPoint

## 7.1 Deck setup

- Slide size 16:9, 33.87 by 19.05cm, the Widescreen preset. Never 4:3.

- Apply the Vantage Meridian theme, then edit the Slide Master so the layouts carry the styling. Do not format individual slides.

- Margin 2.5cm on all sides as a hard content boundary. Nothing crosses it except deliberate full-bleed images and ink panels.

## 7.2 The five layouts

Build exactly these in the master, and resist adding more.

1.  **Cover.** Ink background, logo_on_dark.png, ochre eyebrow, Fraunces Light 40pt title, sage sub-line with sector descriptor and date.

2.  **Section divider.** Ink background, oversized Fraunces Light 44pt bone title, ochre section number as an italic kicker, nothing else.

3.  **Statement.** Bone background, one Fraunces Light 32pt line, maximum 12 words, wide margins. Use these more than you think you should.

4.  **Content.** Bone background, eyebrow, 24pt Fraunces Light title, body in 16pt DM Sans, optional two-column split.

5.  **Data.** Paper background, chart occupying the upper two-thirds, a single 14pt DM Sans takeaway line beneath in ink, source note in 9pt sage.

## 7.3 Slide typography

| **Role** | **Font** | **Size** |
| --- | --- | --- |
| Cover title | Fraunces Light | 40pt |
| Divider title | Fraunces Light | 44pt |
| Slide title | Fraunces Light | 24pt |
| Statement line | Fraunces Light | 32pt |
| Body | DM Sans | 16pt |
| Bullet | DM Sans | 16pt, 8pt between items |
| Eyebrow | DM Sans Medium | 10pt, caps, expanded 2.2pt |
| Chart label | DM Sans | 11pt |
| Source note | DM Sans | 9pt, sage |

Nothing below 9pt on a slide. If it does not fit, it belongs in the appendix or in a leave-behind document.

## 7.4 Restraint rules

- **One ochre mark per slide.** One highlighted number, one accent rule, one emphasised phrase. Not three.

- No more than 30 words on a content slide. The statement layout exists so you can split.

- Sentence case in slide prose. Title case only for proper nouns.

- No icons unless they carry information. No icon rows as decoration.

- **Motion: none, deliberately.** No entrance animations, no build sequences, no fly-ins. A 0.2 second fade between slides is the ceiling, and no transition at all is better. This mirrors the site, which removed reveal-on-scroll on purpose.

---

*Section eight*

# Excel

## 8.1 Workbook conventions

- Apply the Vantage Meridian theme, then turn gridlines off under View before sharing. A workbook with gridlines showing is a draft.

- One purpose per sheet. Tab order runs left to right: cover, inputs, workings, outputs.

- Tab colours: ochre for input sheets, ink for output and summary sheets, no colour for workings.

- Freeze panes below the header row on any table longer than a screen.

- Row height 18pt minimum. Excel's default is cramped at 10.5pt type.

## 8.2 Cell styles

Define these as named cell styles in the workbook so they can be reapplied rather than rebuilt.

| **Style** | **Format** |
| --- | --- |
| Sheet title | Fraunces Light 18pt, ink |
| Header | DM Sans Medium 8pt, caps, expanded 1.5pt, sage, 1pt ink bottom border |
| Body | DM Sans 10pt, ink, no fill |
| Input | DM Sans 10pt, ochre-deep text, paper fill, thin rule border |
| Calculated | DM Sans 10pt, ink, no fill, locked |
| Total | DM Sans Medium 10pt, ink, 1pt ink top border |
| Note | DM Sans 8.5pt, sage, italic |

The ochre-deep-on-paper convention for input cells means anyone opening the model can see immediately what they are allowed to change. Never use the traditional blue-for-inputs convention - it is off-palette.

## 8.3 Number formats

Australian conventions throughout.

| **Type** | **Format string** | **Renders as** |
| --- | --- | --- |
| Currency | $#,##0;($#,##0) | $1,240 / ($1,240) |
| Currency, precise | $#,##0.00;($#,##0.00) | $1,240.50 |
| Thousands | #,##0,"k" | 1,240k |
| Percentage | 0.0% | 12.4% |
| Multiple | 0.0"x" | 2.4x |
| Date, short | d mmm yyyy | 7 Aug 2026 |
| Date, long | d mmmm yyyy | 7 August 2026 |
| Zero | #,##0;(#,##0);"-" | - |

Negatives in parentheses, never in red with a minus sign. Empty and zero both render as a single dash so the eye skips them.

## 8.4 Print setup

Set this before anyone asks for a PDF, not afterwards.

- A4, landscape for anything wider than eight columns.

- Fit to 1 page wide by many tall.

- Margins 15mm, header and footer 10mm.

- Repeat the header row at the top of every page, under Page Layout, Print Titles.

- Footer: Vantage Meridian left in sage, sheet name centre, page x of y right.

- Print gridlines off, print headings off.

---

*Section nine*

# Charts and data

The same restraint applies. A chart's job is to make one comparison obvious.

## 9.1 Series palette, in order

| **Order** | **Hex** | **Role** |
| --- | --- | --- |
| 1 ochre | #B85C2A | **The series that matters** |
| 2 ink | #181613 | Primary comparison |
| 3 sage | #707262 | Context |
| 4 rule | #DDD5C5 | Background series |
| 5 ochre-deep | #8E441E | Only if a second warm tone is unavoidable |
| 6 ink-soft | #2C2A26 | Last resort |

> Only ever one ochre series. If everything is highlighted, nothing is. A six-series chart with one ochre line and five neutral ones is the house style; a rainbow is not. Beyond six series the chart is the wrong format - use a table.

## 9.2 Chart formatting

- No chart border, no plot area fill, no 3D, no shadows, no gradients.

- Gridlines horizontal only, 0.5pt rule. Vertical gridlines off. Often no gridlines at all is better.

- Axis lines 0.5pt rule, tick marks off.

- Axis labels 9pt DM Sans sage. Data labels 9pt DM Sans ink, and only where the reader needs the number.

- Remove legends and label the series directly at the end of the line or above the bar. If a legend is unavoidable, put it top-left, horizontal, 9pt.

- Bar charts: 40% gap width, no outline on bars.

- Line charts: 1.5pt lines, no markers unless there are fewer than eight points.

- Chart title off - the slide title or the paragraph above says it. Source note beneath in 8.5pt sage.

---

*Section ten*

# Imagery

Muted, architectural, unpeopled where possible. Warm neutrals, no saturated colour.

- **Saturation ceiling is roughly 70 out of 255 mean.** Stock arrives at 95 or higher and reads garish beside the palette. Reduce with a colour-enhance factor and check by eye - about 0.65 for landscapes and architecture, 0.75 to 0.88 for anything with skin, because faces go grey before objects do.

- Crop to the frame that will display it. Do not ship a 4000px image into a 21:9 band.

- Target under 300KB per image in documents. Use Compress Pictures, Print 220ppi, in Word and PowerPoint before final export.

- No stock photograph on a report cover or a section divider. Ink and type carry those.

- No people-in-a-meeting-room stock. No handshakes. No arrows going up.

---

*Section eleven*

# Writing conventions

Full rules live in Sky_Lavelle_Writing_Style_and_Voice.md. The formatting-adjacent ones follow.

- Australian English. Organise, recognise, analyse, centre.

- **No em dashes and no en dashes.** A spaced hyphen takes a mid-sentence break. En dashes are also out of number ranges - write 2024 to 2026.

- **Turn off the autocorrect that fights you.** File, Options, Proofing, AutoCorrect Options, AutoFormat As You Type, untick Hyphens with dash. Do this in Word, PowerPoint and Outlook. Otherwise Office silently reinstates the dash you just removed.

- No Oxford comma.

- Sentence case in prose and in headings. Title case only for proper nouns and navigation-style labels.

- Dates as 7 August 2026. Never 08/07/2026, which is ambiguous across markets.

- Numbers: spell out one to nine in prose, numerals from 10. Always numerals in tables, with data, and with units.

- Currency $1.2m AUD on first mention in a document, $1.2m thereafter.

- Buttons, links and calls to action name the action and its object. Request an engagement conversation, not Submit or Learn more.

- No coming soon and no placeholder sections in a shared document. Anything unfinished gets removed or gets a real fallback.

- No fabricated testimonials, clients or credentials. Client names stay anonymised to sector descriptors - a listed resources business, a mid-market logistics operator.

---

*Section twelve*

# Export and naming

## 12.1 PDF export

- **Word.** Save as Adobe PDF, or Export, Create PDF/XPS with Standard quality. Tick Document structure tags for accessibility and Create bookmarks using Headings.

- **PowerPoint.** Export as PDF at Standard quality, slides only, no notes, no handout frames.

- **Excel.** Set the print area first, then Export, Create PDF. Never PDF a whole workbook without checking each sheet's page breaks.

- Confirm fonts are embedded: open the PDF, File, Properties, Fonts, and check Fraunces and DM Sans both appear as embedded subsets.

- Anything going to a client goes as PDF. Editable files circulate internally only.

## 12.2 File naming

VM_YYYY-MM-DD_Descriptor_v1.pdf

For example VM_2026-08-07_Resources-Sector-Diagnostic_v3.pdf. No spaces, no client names in filenames for anonymised work, ISO date first so files sort chronologically, version number always present even on version one.

## 12.3 Before you send

- Built from the template, not restyled by hand

- Only the nine palette colours appear, and no automatic tints from the picker

- One or two ochre marks per page, one per slide

- No em dashes, no en dashes, no Oxford commas

- Dates in 7 August 2026 form

- Client names anonymised to sector descriptors

- No coming soon, no placeholder text, no lorem

- All rules are 0.5pt rule, no black borders anywhere

- Tables have no vertical lines and no fills

- Images compressed, saturation checked by eye

- Excel gridlines off, print area set

- Exported as PDF, fonts confirmed embedded

- Filename follows the convention

---

*Section thirteen*

# Things that will bite you

1.  **Fonts do not travel.** A client on a Mac opening your deck sees Calibri. Always send PDF.

2.  **Variable font files hide their weights in Office.** If Fraunces Light is missing from the font menu, you installed the variable file instead of the static instances.

3.  **Autocorrect reinstates em dashes.** Turn it off per application, per machine, once.

4.  **The tint column in the colour picker is off-palette.** Top row only.

5.  **Word's Exactly line spacing clips tall glyphs.** Fraunces at 28pt with exactly 29pt leading will clip an accented capital. Give display type 1.05 of its size, not less.

6.  **Excel theme colours only apply if the theme is applied to that workbook.** A workbook created before you saved the theme keeps the old palette, silently.

7.  **Restyling one document is a trap.** If you find yourself formatting from scratch, stop and open the template instead. If the template is wrong, fix the template.

8.  **A JPEG logo has no transparency.** If you see a white rectangle behind the mark on a bone page, someone exported the wrong format. Replace the file, do not key the colour out.

9.  **This guide is downstream of the stylesheet.** global.css defines the colours and the type. If a value here contradicts it, correct this document.

---

Vantage **MERIDIAN.**

Version 1.0 · Last updated 7 August 2026 · Review annually or whenever global.css changes.
