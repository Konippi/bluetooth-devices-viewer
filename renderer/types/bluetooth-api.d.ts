interface IBluetoothAPI {
  invokeSelectBluetoothDevices: () => Promise<BluetoothDevice[]>;
}

// global declaration
declare global {
  interface Window {
    bluetoothAPI: IBluetoothAPI;
  }
}
