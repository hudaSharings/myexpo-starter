import { create } from "zustand";

export interface AppState { 
  hasSeenIntro: false,
  isAuthenticated: false,
  setHasSeenIntro: () => void,
  setAuthenticated:(auth:boolean) => void
}
export interface Store extends AppState {
  getState: () => AppState;
  setState: (state: Partial<AppState>) => void;
  subscribe: (callback: (state: AppState) => void) => () => void;
}

export const useStore = create((set) => ({
  hasSeenIntro: false,
  isAuthenticated: false,
  setHasSeenIntro: () => set({ hasSeenIntro: true }),
  setAuthenticated: (auth:boolean) => set({ isAuthenticated: auth }),
}));

export default useStore;