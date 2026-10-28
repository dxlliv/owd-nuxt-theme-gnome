import { ref } from 'vue'

const enabled = ref(false)

export function useSettingsMenu() {
  return {
    enabled,
  }
}
