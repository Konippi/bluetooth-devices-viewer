export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-electron", "@pinia/nuxt", "dayjs-nuxt"],
  rootDir: "./",
  srcDir: "renderer/",
  devServer: {
    host: process.env.SERVER_HOST,
    port: Number(process.env.SERVER_PORT),
  },
  electron: {
    build: [
      {
        entry: "electron/main.ts",
      },
      {
        entry: "electron/preload.ts",
        onstart: (app) => {
          app.reload();
        },
      },
    ],
  },
  pinia: {
    autoImports: ["defineStore"],
  },
  build: {
    transpile: ["vuetify"],
  },
  buildDir: "renderer/.nuxt/",
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  css: ["@/assets/main.scss", "@mdi/font/css/materialdesignicons.css"],
});
