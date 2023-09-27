export interface IGlobalStore {
  isSideBarOpen: boolean;
  isBluetoothAvailable: boolean;
  detectedDevices: Electron.BluetoothDevice[];
}
