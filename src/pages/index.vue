<script setup lang="ts">
onMounted(async () => {
  const ports = await window.serialConnection.invokeFetchSerialPorts();
  console.log(ports);
});
</script>

<template>
  <v-container> <v-btn>sample</v-btn> </v-container>
</template>
