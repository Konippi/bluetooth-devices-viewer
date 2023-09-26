import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("bluetoothAPI", {
  ...ipcRenderer,
});
