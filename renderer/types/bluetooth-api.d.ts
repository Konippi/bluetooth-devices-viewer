interface IBluetoothAPI {
  invokeSelectBluetoothDevices: () => Promise<Electron.BluetoothDevice[]>;
}

// global declaration
export declare global {
  interface Window {
    bluetoothAPI: IBluetoothAPI;
  }
}
