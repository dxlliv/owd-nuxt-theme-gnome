import { defineNuxtPlugin } from 'nuxt/app'
import { defineDesktopApp } from '@owdproject/nuxt/kit/defineDesktopApp'
import configAppExplorer from './app.config'

export default defineNuxtPlugin({
  parallel: true,
  async setup(nuxtApp) {
    nuxtApp.hook('app:created', async () => {
      await defineDesktopApp(configAppExplorer)
    })
  },
})
