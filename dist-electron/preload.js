"use strict";const e=require("electron");e.contextBridge.exposeInMainWorld("bluetoothAPI",{...e.ipcRenderer,handleSelectDetectedDevices:t=>e.ipcRenderer.on("select:detected-devices",t)});
