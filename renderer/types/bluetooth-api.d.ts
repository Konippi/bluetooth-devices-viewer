interface IBluetoothAPI {}

declare global {
  interface Window {
    bluetoothAPI: IBluetoothAPI;
  }
}
