import * as path from "path";
import { app, BrowserWindow } from "electron";

const SERVER_HOST: string | undefined = process.env.SERVER_HOST;
const SERVER_PORT: string | undefined = process.env.SERVER_PORT;

const createWindow = () => {
  app.whenReady().then(() => {
    const browserWindow = new BrowserWindow({
      title: "Connected Device Viewer",
      width: 1200,
      height: 800,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: path.join(__dirname, "preload.js"),
      },
    });

    browserWindow.webContents.on(
      "select-bluetooth-device",
      (event: Electron.Event, deviceList: Electron.BluetoothDevice[]) => {
        event.preventDefault();
        browserWindow.webContents.send("select:detected-devices", deviceList);
      }
    );

    browserWindow.loadURL(`http://${SERVER_HOST}:${SERVER_PORT}`);
  });
};

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
