// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  devServer: {
    port: 3001
  },
  nitro: {
    port: 3001,
    devServer: {
      port: 3001
    }
  },
  vite: {
    server: {
      port: 3001
    }
  }
})
