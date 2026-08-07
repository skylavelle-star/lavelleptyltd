/**
 * Vercel Routing Middleware — site-wide password gate.
 *
 * Runs before the CDN cache on every request except static assets and
 * robots.txt. Visitors without the access cookie are redirected to /gate,
 * which posts back here; a correct password sets the cookie and sends them on.
 * The cookie is a session cookie — no Max-Age, no Expires — so closing the
 * browser drops it and the next visit has to re-enter the password.
 *
 * This is a soft gate, not security. Its job is to keep the site out of search
 * results and away from casual visitors while the content is being finished.
 * The password is deliberately low-value and this repo is public.
 *
 * Deliberately dependency-free: this file sits at the repo root, while
 * node_modules lives in Website/, so it cannot import @vercel/functions.
 * `passThrough()` below is exactly what that package's `next()` returns.
 */

const PASSWORD = "tender";
const COOKIE_NAME = "lpl_gate";
const COOKIE_VALUE = "open";
const GATE_PATH = "/gate";

// The company renamed to Vantage Meridian. The old domain stays registered and
// attached to the project because its DNS zone holds the Google Workspace mail
// records - deleting it would kill email. Web traffic moves; mail does not.
const CANONICAL_HOST = "vantagemeridian.com.au";
const RETIRED_HOSTS = ["lavelleptyltd.com.au", "www.lavelleptyltd.com.au"];

export const config = {
  // Everything except fingerprinted bundles, /brand/* , any /favicon* file,
  // the social share images (og-*.jpg) and robots.txt — crawlers must be able
  // to read robots.txt to honour it, must be able to fetch the og image to
  // render a link preview, and a gated favicon simply fails to load in the
  // browser tab.
  //
  // /brand/* MUST stay exempt. Those files are hotlinked from email signatures
  // and external documents; behind the gate they would 302 to /gate and render
  // as a broken image in every recipient's mail client. See
  // public/brand/README.md.
  matcher: [
    "/((?!_astro/|brand/|favicon|robots\\.txt|og-[a-z-]+\\.jpg|_vercel/).*)",
  ],
};

export default async function middleware(request: Request): Promise<Response> {
  const url = new URL(request.url);

  // ---- RETIRED DOMAIN --------------------------------------------------
  // Send the old domain to the new one, path and query intact, before the
  // gate runs so the redirect works whether or not the visitor is unlocked.
  // Preview and *.vercel.app hosts are untouched.
  const host = request.headers.get("host")?.toLowerCase() ?? "";
  if (RETIRED_HOSTS.includes(host)) {
    return new Response(null, {
      status: 308,
      headers: {
        Location: `https://${CANONICAL_HOST}${url.pathname}${url.search}`,
        "Cache-Control": "no-store",
      },
    });
  }
  // ---- end RETIRED DOMAIN ----------------------------------------------

  // ---- LOGOUT: delete this block to remove /logout ------------------------
  // Visiting /logout expires the access cookie and returns to the gate. There
  // is no link to it anywhere in the site; it is typed by hand. Removing this
  // block is the only step needed to take the route away.
  if (url.pathname.replace(/\/$/, "") === "/logout") {
    return new Response(null, {
      status: 303,
      headers: {
        Location: GATE_PATH,
        "Set-Cookie": `${COOKIE_NAME}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`,
        "Cache-Control": "no-store",
      },
    });
  }
  // ---- end LOGOUT ---------------------------------------------------------

  // Match /gate and /gate/ alike — Vercel may add or strip the trailing slash.
  if (url.pathname.replace(/\/$/, "") === GATE_PATH) {
    return request.method === "POST" ? handleSubmit(request) : passThrough();
  }

  if (isUnlocked(request)) {
    return passThrough();
  }

  const target = new URL(GATE_PATH, url.origin);
  const wanted = url.pathname + url.search;
  if (wanted !== "/") {
    target.searchParams.set("next", wanted);
  }
  return redirect(target.toString(), 302);
}

async function handleSubmit(request: Request): Promise<Response> {
  const origin = new URL(request.url).origin;
  let supplied = "";
  let next = "/";

  try {
    const form = await request.formData();
    supplied = String(form.get("password") ?? "")
      .trim()
      .toLowerCase();
    next = safeNext(String(form.get("next") ?? "/"));
  } catch {
    // Unparseable body — fall through to the failure path.
  }

  if (supplied !== PASSWORD) {
    const retry = new URL(GATE_PATH, origin);
    retry.searchParams.set("error", "1");
    if (next !== "/") {
      retry.searchParams.set("next", next);
    }
    return redirect(retry.toString(), 303);
  }

  return new Response(null, {
    status: 303,
    headers: {
      Location: next,
      // No Max-Age / Expires: a session cookie, gone when the browser closes.
      "Set-Cookie": `${COOKIE_NAME}=${COOKIE_VALUE}; Path=/; HttpOnly; Secure; SameSite=Lax`,
      "Cache-Control": "no-store",
    },
  });
}

function isUnlocked(request: Request): boolean {
  const header = request.headers.get("cookie");
  if (!header) return false;
  return header
    .split(";")
    .some((part) => part.trim() === `${COOKIE_NAME}=${COOKIE_VALUE}`);
}

/** Reject anything that could redirect off-site: only same-origin paths. */
function safeNext(value: string): string {
  if (!value.startsWith("/") || value.startsWith("//")) return "/";
  return value;
}

function redirect(location: string, status: number): Response {
  return new Response(null, {
    status,
    headers: { Location: location, "Cache-Control": "no-store" },
  });
}

/** Equivalent to `next()` from @vercel/functions — continue to the origin. */
function passThrough(): Response {
  return new Response(null, { headers: { "x-middleware-next": "1" } });
}
