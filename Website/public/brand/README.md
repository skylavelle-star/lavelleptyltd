<!--
  ============================================================================
  IMMUTABLE ASSETS — DO NOT RENAME, MOVE OR DELETE ANY FILE IN THIS DIRECTORY.

  Files here are referenced by absolute URL from email signatures and external
  documents that have already been sent. Those references live in other
  people's mail archives and cannot be updated, so a path that works today
  must keep working indefinitely.

  Any change to an asset ships as a NEW FILENAME. Never replace a file in
  place, even with "the same" image at a better quality or a corrected colour:
  mail already sent keeps pointing at this URL forever, so an in-place
  replacement silently rewrites the logo in every message a recipient has
  ever received, including ones sent under a previous brand.
  ============================================================================
-->

# Brand assets — permanently hosted

Served from `https://vantagemeridian.com.au/brand/…`. Public, un-gated and
never redirected.

## Current assets

| File                         | Size    | Intrinsic | Displayed | Used by                                      |
| ---------------------------- | ------- | --------- | --------- | -------------------------------------------- |
| `vantage-meridian-email.jpg` | 13.9 KB | 484×76    | 242×38    | Email signature, `docs/email-signature.html` |

Rendered at half its intrinsic size so it stays sharp on high-density
displays. It is the inline lockup — compass mark, "Vantage", "MERIDIAN" and
the ochre dot — flattened onto white, because JPEG has no transparency and
mail clients overwhelmingly render on white.

## Rules

1. **Never rename, move or delete.** See the block above.
2. **Never replace in place.** Ship `…-v2.jpg` and update the signature
   template. Leave the old file where it is, forever.
3. **Keep `/brand/*` exempt from the password gate.** The exemption is in the
   `matcher` in `middleware.ts` at the repo root. Behind the gate these files
   302 to `/gate` and render as broken images in every recipient's mail client
   — and it looks fine to anyone who is already logged in, so it fails
   silently.
4. **Nothing that matters goes inside the image.** Names, roles, ABN and
   contact details are live text in the signature, so the signature still
   reads correctly with images disabled — which is the default in Outlook and
   for many corporate mail gateways.

## Caching

Served `public, max-age=31536000, immutable` — cached for a year by browsers
and the CDN.

Rule 2 above does not depend on that. It exists because sent mail cannot be
updated, which is true at any cache lifetime.
