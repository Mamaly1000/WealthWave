import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "WealthWave",
        short_name: "WealthWave",
        description: "wealth wave is the wave of being uptodate",
        theme_color: "#fff", // The theme color of your app
        background_color: "#fff", // The background color of your app
        display: "standalone", // The display mode of your app
        scope: "/", // The scope of your app
        start_url: "/",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            purpose: "any maskable",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
