// store/TimeOfDayStore.js
import { create } from "zustand";

export const useTimeOfDayStore = create((set) => ({
  night: false, 
  toggleNight: () => set((state) => ({ night: !state.night })),
  setNight: (value) => set({ night: value }),
}));
