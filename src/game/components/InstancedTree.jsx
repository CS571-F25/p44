import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useEffect } from "react";

export default function InstancedTrees({ count = 500, areaSize = 300, globalScale = 0.0001 }) {
  const { scene } = useGLTF("/p44/assets/models/treeM.glb");

  // Collect only tree meshes
  const treeMeshes = useMemo(() => {
    const meshes = [];
    scene.traverse((child) => {
      if (child.isMesh && child.name.includes("SM_FreeTree")) {
        meshes.push(child);
      }
    });
    return meshes;
  }, [scene]);

  // Generate placements with exclusion zone at (0, 0)
  const placements = useMemo(() => {
    if (treeMeshes.length === 0) return [];

    const spawnRadius = 50; // <--- size of no-tree area around player spawn

    return Array.from({ length: count }, () => {
      let x, z;

      // Ensure tree position is **outside radius**
      do {
        x = (Math.random() - 0.5) * areaSize;
        z = (Math.random() - 0.5) * areaSize;
      } while (Math.sqrt(x * x + z * z) < spawnRadius);

      return {
        type: Math.floor(Math.random() * treeMeshes.length),
        x,
        z,
        scale: globalScale * (0.8 + Math.random() * 0.6),
        rotation: Math.random() * Math.PI * 2,
      };
    });
  }, [count, areaSize, globalScale, treeMeshes.length]);

  const meshRefs = useRef([]);

  // Apply per-instance transform matrices manually
  useEffect(() => {
    meshRefs.current.forEach((mesh, meshIndex) => {
      if (!mesh) return;

      const matrix = new THREE.Matrix4();
      let i = 0;

      placements.forEach((p) => {
        if (p.type === meshIndex) {
          matrix.compose(
            new THREE.Vector3(p.x, 0, p.z),
            new THREE.Quaternion().setFromEuler(new THREE.Euler(0, p.rotation, 0)),
            new THREE.Vector3(p.scale, p.scale, p.scale)
          );
          mesh.setMatrixAt(i++, matrix);
        }
      });

      mesh.instanceMatrix.needsUpdate = true;
    });
  }, [placements]);

  if (treeMeshes.length === 0) return null;

  return (
    <>
      {treeMeshes.map((treeMesh, i) => {
        const instanceCount = placements.filter((p) => p.type === i).length;
        if (instanceCount === 0) return null;

        return (
          <instancedMesh
            key={i}
            ref={(el) => (meshRefs.current[i] = el)}
            args={[treeMesh.geometry, treeMesh.material, instanceCount]}
            frustumCulled={false}
            castShadow
            receiveShadow
          />
        );
      })}
    </>
  );
}
