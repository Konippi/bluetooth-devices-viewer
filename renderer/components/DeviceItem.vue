<script setup lang="ts">
import { IDeviceItemProps } from "../types/props/device-item-props";

const props = defineProps<IDeviceItemProps>();
</script>

<template>
  <v-card prepend-icon="mdi-home">
    <v-card-title> {{ props.device.name }} </v-card-title>
    <v-card-text> Connected: {{ props.device.gatt?.connected }} </v-card-text>
  </v-card>
</template>
