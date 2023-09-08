export interface ISerialConnection {
  invokeFetchSerialPorts: () => Promise<string[]>;
}

declare global {
  interface Window {
    serialConnection: ISerialConnection;
  }
}

export const { serialConnection } = window;
