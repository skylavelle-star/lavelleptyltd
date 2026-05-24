import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://lavelleptyltd.com.au",
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  redirects: {
    "/enterprise-licensing": "/templates/complete-practitioner-library",
    "/enterprise-licensing/": "/templates/complete-practitioner-library",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
