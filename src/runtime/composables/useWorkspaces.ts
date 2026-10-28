import { computed } from 'vue'
import { useAppConfig } from 'nuxt/app'

export function useWorkspaces() {
  const appConfig = useAppConfig()

  const enabled = computed(() => {
    return (appConfig.desktop as any)?.workspaces?.enabled
  })

  return {
    enabled,
  }
}
