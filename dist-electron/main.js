"use strict";const e=require("electron"),R=process.env.SERVER_HOST,n=process.env.SERVER_PORT;e.app.whenReady().then(()=>{new e.BrowserWindow().loadURL(`http://${R}:${n}`)});
