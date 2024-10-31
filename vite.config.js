import { defineConfig } from "vite";

export default defineConfig({
  base: "./",

  server: {
    port: 3000,
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        importers: [],
      },
    },
  },
});
