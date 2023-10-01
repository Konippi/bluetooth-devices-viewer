<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useGlobalStore } from "~/store/global-store";

const store = useGlobalStore();
const { detectedDevices } = storeToRefs(store);

const inputDeviceName = ref("");

const filteredDevices = computed(() => {
  return detectedDevices.value.filter((device) =>
    device.deviceName.includes(inputDeviceName.value)
  );
});
</script>

<template>
  <v-container class="pa-5">
    <v-alert v-if="detectedDevices.length === 0" border="start" color="grey" outlined type="info">
      <strong>Not yet scanned</strong> or <strong>No bluetooth devices around</strong>.
      <strong>Please press the SCAN button</strong>
    </v-alert>
    <v-container v-else>
      <v-text-field
        v-model="inputDeviceName"
        label="Device Name"
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
      />
      <v-row>
        <v-col v-for="device in filteredDevices" :key="device.deviceId" cols="4">
          <device-item :device="device" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
