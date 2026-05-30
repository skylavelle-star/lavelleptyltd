import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://lavelleptyltd.com.au",
  integrations: [
    sitemap({
      // Keep the holding page, confirmation pages and the retired /services
      // orphan out of the sitemap so only canonical, indexable URLs are submitted.
      filter: (page) =>
        !/\/(coming-soon|thank-you|services)(\/|$)/.test(page) &&
        !page.includes("/free-tools/project-recovery-checklist/thanks"),
    }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  redirects: {
    "/enterprise-licensing": "/resources/complete-practitioner-library",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
