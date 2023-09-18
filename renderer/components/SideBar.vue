<template>
  <v-navigation-drawer width="200" color="grey-darken-3" permanent>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home-outline" value="home">
        <v-list-item-title class="font-weight-bold"> Home </v-list-item-title>
      </v-list-item>
      <v-list-item prepend-icon="mdi-cog-outline" value="settings">
        <v-list-item-title class="font-weight-bold">
          Settings
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
