"use strict";const e=require("electron");e.contextBridge.exposeInMainWorld("bluetoothAPI",{...e.ipcRenderer});
