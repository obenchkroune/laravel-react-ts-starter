import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    laravel({
      input: ["resources/css/app.css", "resources/ts/app.tsx"],
      ssr: "resources/ts/ssr.jsx",
      refresh: true,
    }),
  ],
});
