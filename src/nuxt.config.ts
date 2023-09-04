export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-electron"],
  rootDir: "./",
  srcDir: "src/",
  devServer: {
    host: process.env.SERVER_HOST,
    port: Number(process.env.SERVER_PORT),
  },
  electron: {
    build: [{ entry: "electron/main.ts" }],
  },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  css: ["@/assets/main.scss"],
});
