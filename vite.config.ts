import { test } from "vitest";
import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import { IonicResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "^/[^(welcome)].*": "https://cloud.nbtca.space/",
    },
    port: 4000,
  },
  plugins: [
    vue(),
    legacy(),
    Components({
      resolvers: [IonicResolver()],
      dts: "src/components.d.ts",
    }),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/auto-imports.d.ts",
    }),
  ],
  // base: "/welcome",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // test: {
  //   globals: true,
  //   environment: "jsdom",
  // },
});
