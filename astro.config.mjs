// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "./src/styles/_mixins.scss" as mixin;
          @use "./src/styles/_variables.scss" as variable;
          `,
        },
      },
    },
  },
});
