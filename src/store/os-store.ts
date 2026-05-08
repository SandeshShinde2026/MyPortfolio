import { create } from 'zustand';

export type AppId = 'process' | 'techStack' | 'contact' | 'project-trackate' | 'project-healthsync' | 'project-smarthome' | null;
export type OsType = 'ios' | 'android';
export type BootState = 'onboarding1' | 'onboarding2' | 'onboarding3' | 'booting' | 'booted';

interface OsState {
  osType: OsType;
  setOsType: (type: OsType) => void;
  
  bootState: BootState;
  setBootState: (state: BootState) => void;
  
  activeApp: AppId;
  openApp: (appId: AppId) => void;
  closeApp: () => void;
  
  activeFolder: string | null;
  openFolder: (folderId: string) => void;
  closeFolder: () => void;
  
  currentTime: Date;
}

export const useOsStore = create<OsState>((set) => ({
  osType: 'ios',
  setOsType: (type) => set({ osType: type }),
  
  bootState: 'onboarding1',
  setBootState: (state) => set({ bootState: state }),
  
  activeApp: null,
  openApp: (appId) => set({ activeApp: appId }),
  closeApp: () => set({ activeApp: null }),
  
  activeFolder: null,
  openFolder: (folderId) => set({ activeFolder: folderId }),
  closeFolder: () => set({ activeFolder: null }),
  
  currentTime: new Date(),
}));
