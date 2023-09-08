import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("serialConnection", {
  ...ipcRenderer,
  invokeFetchSerialPorts: async () => {
    return await ipcRenderer.invoke("fetch:serial-ports");
  },
});
