import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/WalletMarketWeb',
  server: {
    proxy: {
      '/market_api': {
        target: 'https://market.csgo.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/market_api/, '')
      },
      '/steam_api': {
        target: 'http://csgobackpack.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/steam_api/, '')
      }
    }
  }

})