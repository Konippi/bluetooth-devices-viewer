interface IBluetoothAPI {}

// global declaration
export declare global {
  interface Window {
    bluetoothAPI: IBluetoothAPI;
  }
}
