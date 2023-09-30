<script setup lang="ts">
import { IpcRendererEvent } from "electron";
import { useGlobalStore } from "~/store/global-store";

const store = useGlobalStore();

const handleClickScanButton = () => {
  navigator.bluetooth.requestDevice({ acceptAllDevices: true });
  window.bluetoothAPI.handleSelectDetectedDevices(
    (_event: IpcRendererEvent, value: Electron.BluetoothDevice[]) => {
      store.setAvailableDevices(value);
    }
  );
};
</script>

<template>
  <v-app-bar color="grey-darken-1">
    <v-app-bar-title class="font-weight-bold">Bluetooth Devices Viewer</v-app-bar-title>
    <v-spacer />
    <v-btn prepend-icon="mdi-magnify-scan" variant="tonal" @click="handleClickScanButton">
      Scan
    </v-btn>
  </v-app-bar>
</template>
