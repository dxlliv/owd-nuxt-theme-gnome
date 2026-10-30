export default defineNuxtConfig({
  modules: ['@owdproject/nuxt'],
  desktop: { theme: '@owdproject/nuxt-theme-gnome' },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  i18n: {
    strategy: 'no_prefix',
  },
  devtools: { enabled: true },
  compatibilityDate: 'latest',
  ssr: false,
})
