import { IGlobalStore } from "./../types/store.d";
export const useGlobalStore = defineStore("globalStore", {
  state: () =>
    ({
      isSideBarOpen: false,
      availableDevices: [],
    }) as IGlobalStore,
  actions: {
    setIsSideBarOpen(isSideBarOpen: boolean) {
      this.isSideBarOpen = isSideBarOpen;
    },
    setAvailableDevices(availableDevices: Electron.BluetoothDevice[]) {
      this.availableDevices = availableDevices;
    },
  },
});
