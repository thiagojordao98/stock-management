import { cloudflare } from '@cloudflare/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    cloudflare(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Stock Management',
        short_name: 'Stock',
        description: 'Generic inventory management PWA',
        start_url: '/',
        display: 'standalone',
        theme_color: '#111827',
        background_color: '#ffffff',
        icons: [],
      },
    }),
  ],
})
