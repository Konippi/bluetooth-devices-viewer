<script setup lang="ts">
const handleClick = async () => {
  navigator.bluetooth.getAvailability().then((isAvailable) => {
    console.log(isAvailable);
  });
  navigator.bluetooth.getDevices().then((devices) => {
    console.log(devices);
  });
  const device = await navigator.bluetooth.requestDevice({
    acceptAllDevices: true,
  });
  console.log(device);
};
</script>

<template>
  <v-container> <v-btn @click="handleClick()">sample</v-btn> </v-container>
</template>
