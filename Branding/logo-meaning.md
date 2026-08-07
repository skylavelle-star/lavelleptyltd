# Vantage Meridian — Logo Meaning

**Status:** Canonical brand rationale
**Scope:** Explains what the mark means. Construction, colour tokens, clear space and minimum sizes live in the design guide and `src/styles/global.css`.

---

## Summary

The logo represents a trusted navigator for complex business challenges. It visualises the promise of a superior strategic viewpoint (**Vantage**) and a precise path forward (**Meridian**) that leads to quantifiable growth and success.

---

## 1. The graphic symbol (icon)

The symbol above the text is a combined representation of a compass, a sextant, and a viewpoint.

### The "V" and the arc — horizon and foundation

The dark grey "V" represents *Vantage*. It is set against a curved arc symbolising the horizon, or a meridian line, and with it a global scope. Together they create a literal vantage point: a superior position affording a clear view over a wide field.

### The diamond — True North and precision

The reddish-orange diamond at the centre sits exactly where a compass needle would. It stands for precision, focus, and True North — finding the single correct strategic direction within a complex situation.

### The arrow — trajectory and action

A thin diagonal line with a triangular tip strikes through the entire mark, pointing upward and to the right. It represents upward trajectory, progress, breaking through barriers, and decisive action. It takes the strategic *view* from the vantage point and turns it into measurable results.

---

## 2. Typography

The choice of typeface carries as much of the identity as the mark itself.

| Element | Treatment | Conveys |
|---|---|---|
| **Vantage** | Classic, elegant serif | Experience, professionalism, stability, authority |
| **MERIDIAN** | Serif, lighter weight, wider spacing | Clean contrast; sophisticated and premium |

---

## 3. Colour palette

| Colour | Applied to | Psychological reading |
|---|---|---|
| **Dark grey** | Main structure and text | Seriousness, maturity, balance, sophisticated intelligence |
| **Terracotta-red / burnt orange** | Compass diamond, full stop | Energy, focus, confidence, warmth — draws the eye to the critical elements of direction and finality |

---

## 4. The full stop

The small dot after "MERIDIAN" is not accidental. It acts as a visual anchor, symbolising finality, precision, and completion — reinforcing that Vantage Meridian delivers definitive, finished solutions with no loose ends.

---

## Open items

These affect how the rationale above is executed, and are tracked against the design system rather than settled here:

- **Full stop placement.** The rationale and the design guide both specify the dot *after* MERIDIAN. `src/styles/global.css` currently renders it *before*. The stylesheet is the source of truth for the live site, so the CSS needs correcting to match.
- **Accent colour authority.** The logo artwork samples terracotta at approximately `#AE6652`; the site token `--ochre` is `#B85C2A`. Likely a bevel sampling artefact. Either recolour the artwork to the token, or confirm `#AE6652` as authoritative and add it to `global.css` — pending confirmation.
- **Gate wordmark.** Dot treatment at display size is undecided.
