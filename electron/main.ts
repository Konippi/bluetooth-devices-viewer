import * as path from "path";
import { app, BrowserWindow, ipcMain } from "electron";
import { SerialPort } from "serialport";

const SERVER_HOST = process.env.SERVER_HOST;
const SERVER_PORT = process.env.SERVER_PORT;

app.whenReady().then(() => {
  const browserWindow = new BrowserWindow({
    title: "Connected Device Viewer",
    width: 1000,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  browserWindow.loadURL(`http://${SERVER_HOST}:${SERVER_PORT}`);
});

app.on("ready", () => {
  ipcMain.handle("fetch:serial-ports", fetchSerialPorts);
});

const fetchSerialPorts = () => {
  SerialPort.list().then((ports) => {
    ports.forEach((port) => {
      console.log(port.path);
    });
  });
};
