import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: [
      { find: "$lib", replacement: path.resolve(__dirname, "src", "lib") },
      { find: "$assets", replacement: path.resolve(__dirname, "src", "assets") },
      { find: "$components", replacement: path.resolve(__dirname, "src", "components") },
    ]
  }
})
