export interface IGlobalStore {
  isSideBarOpen: boolean;
  isBluetoothAvailable: boolean;
  availableDevices: Electron.BluetoothDevice[];
}
