<script setup lang="ts">
import { useGlobalStore } from "~/store/global-store";

const store = useGlobalStore();

const handleClick = async () => {
  navigator.bluetooth.getAvailability().then((isAvailable: boolean) => {
    store.setIsBluetoothAvailable(isAvailable);
  });
  store.pushAvailableDevices(
    await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
    })
  );
};
</script>

<template>
  <v-container>
    <v-btn @click="handleClick">UPDATE</v-btn>
    <v-container v-for="device in store.detectedDevices" :key="device.id">
      <device-item :device="device" />
    </v-container>
  </v-container>
</template>
