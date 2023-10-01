import { IpcRendererEvent, contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("bluetoothAPI", {
  ...ipcRenderer,
  handleSelectDetectedDevices: (
    callback: (_event: IpcRendererEvent, devices: Electron.BluetoothDevice[]) => void
  ) => {
    return ipcRenderer.on("select:detected-devices", callback);
  },
});
