import { create } from "zustand"
import * as THREE from "three"

export const usePlayerStore = create((set) => ({
  // Store as a Vector3 to match getWorldPosition()
  position: new THREE.Vector3(),

  // Accept Vector3 or array
  setPosition: (pos) =>
    set((state) => {
      if (pos instanceof THREE.Vector3) {
        state.position.copy(pos)
        return { position: state.position }
      }

      state.position.set(pos[0], pos[1], pos[2])
      return { position: state.position }
    }),
}))
