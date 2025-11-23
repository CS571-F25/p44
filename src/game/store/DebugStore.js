// store/DebugStore.js
import { create } from "zustand";

export const useDebugStore = create((set) => ({
  debug: false, 
  toggleDebug: () => set((state) => ({ debug: !state.debug })),
  setDebug: (value) => set({ debug: value }),
}));
