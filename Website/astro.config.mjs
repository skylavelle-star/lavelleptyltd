import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://vantagemeridian.com.au",
  integrations: [
    sitemap({
      // Keep the password gate and the confirmation pages out of the sitemap
      // so only canonical, indexable URLs are submitted.
      filter: (page) =>
        !/\/(gate|thank-you)(\/|$)/.test(page) &&
        !page.includes("/free-tools/project-recovery-checklist/thanks"),
    }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  redirects: {
    "/enterprise-licensing": "/consulting",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
