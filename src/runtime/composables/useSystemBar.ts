import { computed } from 'vue'
import { useAppConfig } from 'nuxt/app'

export function useSystemBar() {
  const appConfig = useAppConfig()

  const enabled = computed(() => {
    return (appConfig.desktop as any)?.systemBar?.enabled
  })

  const position = computed(() => {
    return (appConfig.desktop as any)?.systemBar?.position
  })

  return {
    enabled,
    position,
  }
}
