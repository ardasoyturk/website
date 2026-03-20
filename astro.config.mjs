import { fileURLToPath } from "node:url";

import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";

import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  adapter: cloudflare({ imageService: "compile" }),
  integrations: [preact({ compat: true }), mdx()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
