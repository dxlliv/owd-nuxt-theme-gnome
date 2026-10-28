import { ref } from 'vue'

const enabled = ref(false)

export function useNotificationsMenu() {
  return {
    enabled,
  }
}
