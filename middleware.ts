/**
 * Vercel Routing Middleware — site-wide password gate.
 *
 * Runs before the CDN cache on every request except static assets and
 * robots.txt. Visitors without the access cookie are redirected to /gate,
 * which posts back here; a correct password sets the cookie and sends them on.
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
const MAX_AGE = 60 * 60 * 24 * 90; // 90 days
const GATE_PATH = "/gate";

export const config = {
  // Everything except fingerprinted bundles, the favicon, the social image and
  // robots.txt — crawlers must be able to read robots.txt to honour it.
  matcher: [
    "/((?!_astro/|favicon\\.svg|robots\\.txt|og-default\\.jpg|_vercel/).*)",
  ],
};

export default async function middleware(request: Request): Promise<Response> {
  const url = new URL(request.url);

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
      "Set-Cookie": `${COOKIE_NAME}=${COOKIE_VALUE}; Path=/; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`,
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
