<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useGlobalStore } from "~/store/global-store";

const store = useGlobalStore();
const { detectedDevices } = storeToRefs(store);
</script>

<template>
  <v-container>
    <v-alert v-if="detectedDevices.length === 0" border="start" color="grey" outlined type="info">
      <strong>Not yet scanned</strong> or <strong>No bluetooth devices around</strong>.
      <strong>Please press the SCAN button</strong>
    </v-alert>
    <v-row v-else>
      <v-col v-for="device in detectedDevices" :key="device.deviceId" cols="4">
        <device-item :device="device" />
      </v-col>
    </v-row>
  </v-container>
</template>
