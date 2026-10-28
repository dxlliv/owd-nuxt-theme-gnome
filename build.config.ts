import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  failOnWarn: false,
  entries: [
    { input: 'src/i18n/', outDir: 'dist/i18n', ext: 'js' },
  ],
})
