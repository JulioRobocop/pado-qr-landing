<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Device } from '../../config/devices'
import DownloadButton from '../DownloadButton.vue'
import ManualButton from '../ManualButton.vue'

defineProps<{ device: Device }>()
defineEmits<{ back: [] }>()

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center gap-6 max-w-md w-full">
    <button
      @click="$emit('back')"
      class="self-start text-sm text-black   hover:underline"
    >
      {{ t('detail.back') }}
    </button>

    <img :src="device.svg" :alt="device.name" class="w-32 h-32" />
    <h2 class="text-2xl font-bold text-slate-800">{{ device.name }}</h2>
    <p class="text-slate-600 text-center">{{ t('detail.subtitle') }}</p>

    <div class="flex flex-col gap-3 w-full">
      <DownloadButton :device="device"/>
      <ManualButton :device="device" />
    </div>
  </div>
</template>