<script setup lang="ts">
const handleClick = async () => {
  const device = await navigator.bluetooth.requestDevice({
    acceptAllDevices: true,
  });
  console.log(device);
};
</script>

<template>
  <v-container> <v-btn @click="handleClick()">sample</v-btn> </v-container>
</template>
