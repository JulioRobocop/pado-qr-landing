<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineEmits<{ next: [] }>()

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-8 text-center">
    <img src="/logos/pado_90anos_preto.svg" alt="Pado" class="w-48 h-48" />
    <h1 class="text-2xl font-bold text-slate-800">{{ t('home.tagline') }}</h1>
    <button
      @click="$emit('next')"
      class="px-6 py-3 rounded-xl bg-black text-white font-semibold shadow-md
              active:scale-95 transition-all duration-150
             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
    >
      {{ t('home.selectDevice') }}
    </button>
  </div>
</template>