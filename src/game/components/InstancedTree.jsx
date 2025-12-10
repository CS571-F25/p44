import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useCallback, useEffect } from "react";
import { InstancedRigidBodies } from "@react-three/rapier";

export default function InstancedTrees({ count = 500, areaSize = 300, globalScale = 0.0001 }) {
  const { scene } = useGLTF("/p44/assets/models/treeM.glb");

  // Extract all meshes from the scene by traversing the entire tree
  const treeMeshes = useMemo(() => {
    const meshes = [];
    scene.traverse((child) => {
      if (child.isMesh && child.name.includes("SM_FreeTree")) {
        meshes.push(child);
      }
    });
    console.log("Found meshes:", meshes.map(m => m.name));
    return meshes;
  }, [scene]);

  const meshRefs = useRef([]);

  const setMeshRef = useCallback((el, index) => {
    meshRefs.current[index] = el;
  }, []);

  // Pre-generate positions and types
  const placements = useMemo(() => {
    if (treeMeshes.length === 0) return [];
    
    return Array.from({ length: count }, () => ({
      type: Math.floor(Math.random() * treeMeshes.length),
      x: (Math.random() - 0.5) * areaSize,
      z: (Math.random() - 0.5) * areaSize,
      scale: globalScale * (0.8 + Math.random() * 0.6),
      rotation: Math.random() * Math.PI * 2,
    }));
  }, [count, areaSize, globalScale, treeMeshes.length]);

  // Create instances array for InstancedRigidBodies
  const instances = useMemo(() => {
    return placements.map((p) => ({
      key: Math.random(),
      position: [p.x, 0, p.z],
      rotation: [0, p.rotation, 0],
      scale: [p.scale, p.scale, p.scale],
    }));
  }, [placements]);

  if (treeMeshes.length === 0) {
    return null;
  }

  return (
    <>
      {treeMeshes.map((treeMesh, i) => {
        const instancesForType = instances.filter((_, idx) => placements[idx].type === i);

        if (instancesForType.length === 0) return null;

        return (
          <InstancedRigidBodies
            key={i}
            instances={instancesForType}
            //scale={[0.05, 1, 0.05]}
            colliders="cuboid" // or "cuboid" for better performance
            type="fixed" // trees don't move
          >
            <instancedMesh
              ref={(el) => setMeshRef(el, i)}
              args={[treeMesh.geometry, treeMesh.material, instancesForType.length]}
              castShadow
              receiveShadow
            />
          //</InstancedRigidBodies>
        );
      })}
    </>
  );
}