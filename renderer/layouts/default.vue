<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useGlobalStore } from "~/store/global-store";

const store = useGlobalStore();
const { isBluetoothAvailable } = storeToRefs(store);
</script>

<template>
  <v-app>
    <Header />
    <v-main>
      <slot v-if="isBluetoothAvailable" />
      <v-row v-else id="progress-circular-container" align-content="center">
        <v-col cols="12" align="center">
          <v-progress-circular
            :size="50"
            :width="7"
            color="blue-grey-lighten-2"
            indeterminate
            class="d-flex justify-center"
          />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<style scoped>
#progress-circular-container {
  height: 100%;
}
</style>
