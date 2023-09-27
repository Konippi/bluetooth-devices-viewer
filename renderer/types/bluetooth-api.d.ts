interface IBluetoothAPI {
  handleSelectDetectedDevices: (
    callback: (_event: IpcRendererEvent, value: Electron.BluetoothDevice[]) => void
  ) => Electron.BluetoothDevice[];
}

// global declaration
export declare global {
  interface Window {
    bluetoothAPI: IBluetoothAPI;
  }
}
