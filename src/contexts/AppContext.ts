import { createContext } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

type AppContextType = {
  clientHint?: {
    deviceMemory?: string | null;
    ect?: string | null;
  };
  deviceType?: DeviceType;
};
export const AppContext = createContext<AppContextType>({});
export const AppContextProvider = AppContext.Provider;
