<script setup lang="ts">
import { ref } from 'vue'
import LanguageSelector from './components/LanguageSelector.vue'
import HomeScreen from './components/screens/HomeScreen.vue'
import DevicePickerScreen from './components/screens/DevicePickerScreen.vue'
import DeviceDetailScreen from './components/screens/DeviceDetailScreen.vue'
import type { Device } from './config/devices'

type Screen = 'home' | 'picker' | 'detail'

const currentScreen = ref<Screen>('home')
const selectedDevice = ref<Device | null>(null)

function goToPicker() {
  currentScreen.value = 'picker'
}

function selectDevice(device: Device) {
  selectedDevice.value = device
  currentScreen.value = 'detail'
}

function goBackToPicker() {
  selectedDevice.value = null
  currentScreen.value = 'picker'
}
</script>

<template>
  <main class="min-h-screen flex flex-col bg-slate-50 font-sans">
    <header class="flex justify-between items-center p-4">
  <img
    src="/logos/pado_90anos_preto.svg"
    alt="Pado"
    class="h-10 w-auto"
  />
  <LanguageSelector />
</header>

    <section class="flex-1 flex items-center justify-center p-6">
      <Transition name="screen" mode="out-in">
        <HomeScreen
          v-if="currentScreen === 'home'"
          key="home"
          @next="goToPicker"
        />

        <DevicePickerScreen
          v-else-if="currentScreen === 'picker'"
          key="picker"
          @select="selectDevice"
        />

        <DeviceDetailScreen
          v-else-if="currentScreen === 'detail' && selectedDevice"
          key="detail"
          :device="selectedDevice"
          @back="goBackToPicker"
        />
      </Transition>
    </section>
  </main>
</template>

<style>
.screen-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

.screen-leave-to {
  opacity: 0;
  transform: translateY(-12px) scale(0.98);
}

.screen-enter-active,
.screen-leave-active {
  transition: opacity 250ms ease, transform 250ms ease;
}
</style>