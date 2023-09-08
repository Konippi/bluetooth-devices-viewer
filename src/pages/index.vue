<script setup lang="ts">
const handleClickButton = async () => {
  const ports = await window.serialConnection.invokeFetchSerialPorts();
  console.log(ports);
};
</script>

<template>
  <v-container> <v-btn @click="handleClickButton">sample</v-btn> </v-container>
</template>
