<script setup lang="ts">
import { useGlobalStore } from "~/store/global-store";

const store = useGlobalStore();
</script>

<template>
  <v-app-bar color="grey-darken-1">
    <v-app-bar-nav-icon @click="store.setIsSideBarOpen(!store.isSideBarOpen)" />
    <v-app-bar-title class="font-weight-bold">Connected Bluetooth Devices Viewer</v-app-bar-title>
  </v-app-bar>
</template>
