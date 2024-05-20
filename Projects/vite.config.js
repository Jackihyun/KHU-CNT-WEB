import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: "0.0.0.0",
  //   port: 3000,
  // },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'My App',
        short_name: 'App',
        description: '경희대 의상학과',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa작은거.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa큰거.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
