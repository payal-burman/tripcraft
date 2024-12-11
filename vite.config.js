import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/deploy_react_app_github_pages_vercel',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})