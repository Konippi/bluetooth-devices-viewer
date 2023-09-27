import { IGlobalStore } from "../types/store.d";
export const useGlobalStore = defineStore("globalStore", {
  state: () =>
    ({
      isSideBarOpen: false,
      isBluetoothAvailable: false,
      detectedDevices: [],
    }) as IGlobalStore,
  actions: {
    setIsSideBarOpen(isSideBarOpen: boolean) {
      this.isSideBarOpen = isSideBarOpen;
    },
    setIsBluetoothAvailable(isBluetoothAvailable: boolean) {
      this.isBluetoothAvailable = isBluetoothAvailable;
    },
    setAvailableDevices(devices: Electron.BluetoothDevice[]) {
      this.detectedDevices = devices;
    },
  },
});
