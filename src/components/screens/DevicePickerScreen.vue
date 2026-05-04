<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { DEVICES, type Device } from '../../config/devices'

defineEmits<{ select: [device: Device] }>()

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center gap-8 w-full max-w-3xl">
    <h2 class="text-2xl font-bold text-slate-800">{{ t('picker.title') }}</h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
      <button
        v-for="device in DEVICES"
        :key="device.id"
        @click="$emit('select', device)"
        class="flex flex-col items-center gap-3 p-6 rounded-xl bg-white border border-slate-200
               shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-95
               transition-all duration-150
               focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <img :src="device.svg" :alt="device.name" class="w-20 h-20" />
        <span class="text-sm font-medium text-slate-700">{{ device.name }}</span>
      </button>
    </div>
  </div>
</template>