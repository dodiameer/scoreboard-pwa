import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa"
import svelte from '@sveltejs/vite-plugin-svelte'
import path from "path"
// @ts-ignore
// const svelteConfig = require("./svelte.config.cjs")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      manifest: {
        // content of manifest
        "name": "YNWAScore",
        "short_name": "YNWAScore",
        "icons": [
          {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
        "theme_color": "#ff6333",
        "background_color": "#ff6333",
        "display": "standalone"
      },
      workbox: {
        // workbox options for generateSW 
        // skipWaiting: true,
      },
      registerType: "prompt"
    })
  ],
  resolve: {
    alias: [
      { find: "$lib", replacement: path.resolve(__dirname, "src", "lib") },
      { find: "$assets", replacement: path.resolve(__dirname, "src", "assets") },
      { find: "$components", replacement: path.resolve(__dirname, "src", "components") },
    ]
  }
})
