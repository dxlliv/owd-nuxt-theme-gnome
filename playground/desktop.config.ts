import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  modules: ['@owdproject/module-fs', '@owdproject/nuxt-persistence-pinia'],
  apps: [
    '@owdproject/app-classic-audioplayer',
    '@owdproject/app-classic-videoplayer',
    '@owdproject/app-gridsky',
    '@owdproject/app-wasmboy',
    '@owdproject/app-terminal',
    '@owdproject/app-youtube',
    '@owdproject/app-soundcloud',
    '@owdproject/app-todo',
  ],
  systemBar: { enabled: true, startButton: true },
  terminal: {
    welcomeMessage: 'Welcome to GNOME',
    prompt: '$',
  },
})
