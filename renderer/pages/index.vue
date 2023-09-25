<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useGlobalStore } from "~/store/global-store";

const store = useGlobalStore();
const { availableDevices } = storeToRefs(store);

const handleClick = async () => {
  navigator.bluetooth.getAvailability().then((isAvailable) => {
    store.setIsBluetoothAvailable(isAvailable);
  });
  await navigator.bluetooth.requestDevice({
    acceptAllDevices: true,
  });
  const devices = await window.bluetoothAPI.invokeSelectBluetoothDevices();
  store.setAvailableDevices(devices);
};
</script>

<template>
  <v-container>
    <v-btn @click="handleClick">sample</v-btn>
    <v-container v-for="device in availableDevices" :key="device.deviceId">
      <device-item :device="device" />
    </v-container>
  </v-container>
</template>
