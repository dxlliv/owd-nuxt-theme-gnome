# GNOME Theme

An Adwaita style desktop shell for Open Web Desktop, using `@owdproject/nuxt` directly.

## Standalone playground

```sh
pnpm install
pnpm dev
```

The local workspace contains this theme and its playground. It installs the core, Nuxt adapter, kits, filesystem, persistence, and demo apps as packages. It does not require the client repository or `nuxt-desktop`.

```sh
pnpm dev:build
pnpm dev:generate
```

Local snapshot verification uses Verdaccio. From the engine checkout, run `npm run test:gnome:standalone`; the command creates an independent copy and tests its build and static export.

## Use in a Nuxt application

Install the theme and `@owdproject/nuxt`, then configure:

```ts
export default defineNuxtConfig({
  ssr: false,
  modules: ['@owdproject/nuxt'],
  desktop: { theme: '@dxlliv/owd-nuxt-theme-gnome' },
})
```

Additional apps and modules can be configured in `desktop.config.ts` using `defineDesktopConfig` from `@owdproject/nuxt`.

## License

MIT
