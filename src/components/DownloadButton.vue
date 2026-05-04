<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { detectOS } from '../utils/detectOS'
import { APPS } from '../config/apps'
import type { Device } from '../config/devices'

const props = defineProps<{ device: Device }>()
const { t } = useI18n()

// Reactive: re-evaluates if the device prop changes
const app = computed(() =>
  props.device.appId ? APPS[props.device.appId] : null
)

function handleClick() {
  if (!app.value) return                   // safety net
  const os = detectOS()
  if (os === 'ios' || os === 'android') {
    window.location.href = app.value[os]
  } else {
    console.info('Download not available on desktop.')
  }
}
</script>

<template>
  <button
    v-if="app"
    @click="handleClick"
    class="px-6 py-3 rounded-xl bg-black text-white font-semibold shadow-md
            active:scale-95 transition-all duration-150
           focus:outline-none focus:ring-5 focus:ring-blue-400 focus:ring-offset-2"
  >
    {{ t('download.button') }}
  </button>
</template>