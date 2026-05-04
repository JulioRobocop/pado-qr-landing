<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Device } from '../config/devices'

const props = defineProps<{ device: Device }>()
const { t, locale } = useI18n()

const manualUrl = computed(() => props.device.manualPath[locale.value])
</script>

<template>
<a 
    v-if="manualUrl"
    :href="manualUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="w-full text-center px-6 py-3 rounded-xl bg-white text-black font-semibold shadow-md
            active:scale-95 transition-all duration-150
           focus:outline-none focus:ring-5 focus:ring-blue-400 focus:ring-offset-2"
  >
    {{ t('manual.button') }}
  </a>
  <span v-else class="text-sm text-slate-500">{{ t('manual.unavailable') }}</span>
</template>