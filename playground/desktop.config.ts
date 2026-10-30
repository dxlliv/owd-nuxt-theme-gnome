import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  modules: ['@owdproject/nuxt-module-fs', '@owdproject/nuxt-module-pinia-persistence'],
  apps: [
    '@owdproject/nuxt-app-classic-audioplayer',
    '@owdproject/nuxt-app-classic-videoplayer',
    '@owdproject/nuxt-app-gridsky',
    '@owdproject/nuxt-app-wasmboy',
    '@owdproject/nuxt-app-terminal',
    '@owdproject/nuxt-app-youtube',
    '@owdproject/nuxt-app-soundcloud',
    '@owdproject/nuxt-app-todo',
  ],
  systemBar: { enabled: true, startButton: true },
  terminal: {
    welcomeMessage: 'Welcome to GNOME',
    prompt: '$',
  },
})
