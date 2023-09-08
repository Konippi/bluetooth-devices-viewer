"use strict";const e=require("electron");e.contextBridge.exposeInMainWorld("serialConnection",{...e.ipcRenderer,invokeFetchSerialPorts:async()=>await e.ipcRenderer.invoke("fetch:serial-ports")});
