<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale, type SupportedLocale } from '../i18n'
import { LANGUAGES } from '../config/languages'

const { locale } = useI18n()

const isOpen = ref(false)
const rootRef = ref<HTMLElement | null>(null)

const currentLanguage = computed(() =>
  LANGUAGES.find(l => l.code === locale.value) ?? LANGUAGES[0]
)

function toggle() {
  isOpen.value = !isOpen.value
}

function selectLanguage(code: SupportedLocale) {
  setLocale(code)
  isOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
  if (rootRef.value && !rootRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <div ref="rootRef" class="relative inline-block text-left">
    <button
      @click="toggle"
      class="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300
             bg-white shadow-sm hover:bg-slate-50 transition
             focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <span :class="`fi fi-${currentLanguage.flag}`"></span>
      <span class="text-sm font-medium text-slate-700">{{ currentLanguage.name }}</span>
      <span class="text-slate-400 text-xs">▾</span>
    </button>

    <ul
      v-if="isOpen"
      class="absolute right-0 mt-2 w-44 rounded-lg border border-slate-200
             bg-white shadow-lg overflow-hidden z-10"
    >
      <li
        v-for="lang in LANGUAGES"
        :key="lang.code"
        @click="selectLanguage(lang.code)"
        :class="[
          'flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-slate-100',
          lang.code === locale ? 'bg-slate-50 font-semibold' : ''
        ]"
      >
        <span :class="`fi fi-${lang.flag}`"></span>
        <span class="text-sm text-slate-700">{{ lang.name }}</span>
      </li>
    </ul>
  </div>
</template>