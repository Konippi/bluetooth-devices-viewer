<script setup lang="ts">
import { IDeviceItemProps } from "../types/props/device-item-props";

const props = defineProps<IDeviceItemProps>();
</script>

<template>
  <v-card prepend-icon="mdi-bluetooth">
    <v-card-title class="text-body-2 font-weight-bold">
      {{ props.device.deviceName }}
    </v-card-title>
    <v-card-subtitle class="text-body-2">
      {{ props.device.deviceId }}
    </v-card-subtitle>
  </v-card>
</template>
