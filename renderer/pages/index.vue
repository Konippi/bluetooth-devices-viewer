<script setup lang="ts">
const handleClick = async () => {
  navigator.bluetooth.getAvailability().then((isAvailable) => {
    console.log(isAvailable);
  });
  await navigator.bluetooth.requestDevice({
    acceptAllDevices: true,
  });
  const deviceList = await window.bluetoothAPI.invokeSelectBluetoothDevices();
  console.log(deviceList);
};
</script>

<template>
  <v-container> <v-btn @click="handleClick()">sample</v-btn> </v-container>
</template>
