import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  modules: ['@owdproject/module-nuxt-fs', '@owdproject/module-nuxt-pinia-persistence'],
  apps: [
    '@owdproject/app-nuxt-classic-audioplayer',
    '@owdproject/app-nuxt-classic-videoplayer',
    '@owdproject/app-gridsky',
    '@owdproject/app-nuxt-wasmboy',
    '@owdproject/app-nuxt-terminal',
    '@owdproject/app-nuxt-youtube',
    '@owdproject/app-nuxt-soundcloud',
    '@owdproject/app-nuxt-todo',
  ],
  systemBar: { enabled: true, startButton: true },
  terminal: {
    welcomeMessage: 'Welcome to GNOME',
    prompt: '$',
  },
})
