<script setup lang="ts">
import { useGlobalStore } from "./store/global-store";

const store = useGlobalStore();

setInterval(() => {
  navigator.bluetooth.getAvailability().then((isBluetoothAvailable) => {
    store.setIsBluetoothAvailable(isBluetoothAvailable);
  });
}, 1000);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
