import { create } from "zustand";
import * as THREE from "three";

export const usePlayerRotationStore = create((set) => ({
  rotation: new THREE.Quaternion(),

  setRotation: (quat) =>
    set((state) => {
      if (quat instanceof THREE.Quaternion) {
        state.rotation.copy(quat);
      } else if (Array.isArray(quat) && quat.length === 4) {
        state.rotation.set(quat[0], quat[1], quat[2], quat[3]);
      }
      return { rotation: state.rotation };
    }),
}));
