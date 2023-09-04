import { app, BrowserWindow } from "electron";

const SERVER_HOST = process.env.SERVER_HOST;
const SERVER_PORT = process.env.SERVER_PORT;

app.whenReady().then(() => {
  new BrowserWindow().loadURL(`http://${SERVER_HOST}:${SERVER_PORT}`);
});
