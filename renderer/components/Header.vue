<script setup lang="ts">
import { IpcRendererEvent } from "electron";
import { storeToRefs } from "pinia";
import { useGlobalStore } from "~/store/global-store";

const store = useGlobalStore();
const { isBluetoothAvailable } = storeToRefs(store);

const handleClickScanButton = () => {
  navigator.bluetooth.requestDevice({ acceptAllDevices: true });
  window.bluetoothAPI.handleSelectDetectedDevices(
    (_event: IpcRendererEvent, devices: Electron.BluetoothDevice[]) => {
      store.setAvailableDevices(devices);
    }
  );
};
</script>

<template>
  <v-app-bar color="grey-darken-1">
    <v-app-bar-title class="font-weight-bold">Bluetooth Devices Viewer</v-app-bar-title>
    <v-spacer />
    <v-btn
      prepend-icon="mdi-magnify-scan"
      variant="tonal"
      :disabled="!isBluetoothAvailable"
      @click="handleClickScanButton"
    >
      SCAN
    </v-btn>
  </v-app-bar>
</template>
