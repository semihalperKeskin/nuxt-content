// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts'
  ],
  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-10-17'
})