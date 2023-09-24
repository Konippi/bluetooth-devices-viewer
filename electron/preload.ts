import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("bluetoothAPI", {
  ...ipcRenderer,
  invokeSelectBluetoothDevices: async () => {
    return await ipcRenderer.invoke("select:bluetooth-devices");
  },
});
