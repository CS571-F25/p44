import { InstancedMesh } from "three";
import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { usePlayerStore } from "../store/PlayerStore";

export default function InstancedEnemies({ positions, speed = 3 }) {
  const meshRef = useRef();
  const bodiesRef = useRef([]);

  // Precompute matrices
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Initialize an array for rigidbody refs
  const enemyCount = positions.length;

  // Called by each rigidbody to register itself
  const registerBody = (i, api) => {
    bodiesRef.current[i] = api;
  };

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const playerPos = usePlayerStore.getState().position;

    for (let i = 0; i < enemyCount; i++) {
      const body = bodiesRef.current[i];
      if (!body) continue;

      const ePos = body.translation();

      // Steering
      const dx = playerPos.x - ePos.x;
      const dy = playerPos.y - ePos.y;
      const dz = playerPos.z - ePos.z;
      const len = Math.hypot(dx, dy, dz);

      if (len > 0.001) {
        body.setLinvel(
          {
            x: (dx / len) * speed,
            y: (dy / len) * speed,
            z: (dz / len) * speed,
          },
          true
        );
      }

      // Update instance matrix
      dummy.position.set(ePos.x, ePos.y, ePos.z);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      {/* This is the single draw-call mesh */}
      <instancedMesh
        ref={meshRef}
        args={[null, null, enemyCount]}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[0.5, 8, 8]} />
        <meshStandardMaterial color="red" />
      </instancedMesh>

      {/* Create the physics bodies (not rendered) */}
      {positions.map((pos, i) => (
        <RigidBody
          key={i}
          type="dynamic"
          position={pos}
          colliders="ball"
          ref={(api) => registerBody(i, api)}
        />
      ))}
    </>
  );
}
