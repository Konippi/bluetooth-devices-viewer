<script setup lang="ts">
import { IpcRendererEvent } from "electron";
import { storeToRefs } from "pinia";
import { useGlobalStore } from "~/store/global-store";

const store = useGlobalStore();
const { detectedDevices } = storeToRefs(store);

const handleClick = () => {
  navigator.bluetooth.getAvailability().then((isAvailable: boolean) => {
    store.setIsBluetoothAvailable(isAvailable);
  });
  navigator.bluetooth.requestDevice({ acceptAllDevices: true });
  window.bluetoothAPI.handleSelectDetectedDevices(
    (_event: IpcRendererEvent, value: Electron.BluetoothDevice[]) => {
      store.setAvailableDevices(value);
    }
  );
};
</script>

<template>
  <v-container>
    <v-btn @click="handleClick">UPDATE</v-btn>
    <v-container v-for="device in detectedDevices" :key="device.deviceId">
      <device-item :device="device" />
    </v-container>
  </v-container>
</template>
