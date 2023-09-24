<script setup lang="ts">
import { useGlobalStore } from "~/store/global-store";

const store = useGlobalStore();
</script>

<template>
  <v-navigation-drawer v-model="store.isSideBarOpen" width="54" permanent>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home-outline" value="home" @click="$router.push('/')">
        <v-tooltip activator="parent">Home</v-tooltip>
      </v-list-item>
      <v-divider />
      <v-list-item prepend-icon="mdi-cog-outline" value="control" @click="$router.push('/control')">
        <v-tooltip activator="parent">Settings</v-tooltip>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
