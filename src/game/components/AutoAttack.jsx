// AutoAttack.js
import { useEffect, useState } from "react";
import * as THREE from "three";
import Slash from "./Slash";
import { usePlayerStore } from "../store/PlayerStore";
import { usePlayerRotationStore } from "../store/PlayerRotationStore";
import { RigidBody, CuboidCollider } from "@react-three/rapier"; // Import CuboidCollider

export default function AutoAttack({ interval = 3000 }) {
  const [play, setPlay] = useState(false);
  const [slashPosition, setSlashPosition] = useState([0, 0, 0]);
  const [slashRotation, setSlashRotation] = useState(0);

  const playerPosition = usePlayerStore((state) => state.position);
  const playerRotation = usePlayerRotationStore((state) => state.rotation);

  useEffect(() => {
    const id = setInterval(() => {
      if (!playerPosition || !playerRotation) return;

      const pos = playerPosition.clone();
      const euler = new THREE.Euler().setFromQuaternion(playerRotation);
      const yRotation = euler.y;

      const forward = new THREE.Vector3(0, 0, 1)
        .applyQuaternion(playerRotation)
        .setY(0)
        .normalize();

      pos.add(forward.multiplyScalar(4)); // Reduced distance slightly so it hits closer enemies
      pos.y += 2;

      setSlashPosition(pos.toArray());
      setSlashRotation(yRotation);

      setPlay(false);
      setTimeout(() => setPlay(true), 0);

    }, interval);

    return () => clearInterval(id);
  }, [interval, playerPosition, playerRotation]);

  if (!play) return null;

  return (
    <RigidBody
      type="kinematicPosition"
      name="slash" // 1. FIX: Name must match what Enemy looks for
      colliders={false} // We provide our own collider below
      position={slashPosition}
      rotation={[0, slashRotation, 0]}
    >
      {/* 2. FIX: Add an actual Physics Shape. 
          Args are half-extents (width/2, height/2, depth/2). 
          Box is 8,4,1 -> Collider is 4, 2, 0.5 
      */}
      <CuboidCollider args={[4, 2, 3]} sensor /> 

      {/* Visual slash */}
      <Slash
        url="/p44/assets/animation/s4.png"
        rows={2}
        cols={5}
        totalFrames={7}
        fps={24}
        scale={15}
        onFinish={() => setPlay(false)}
      />
    </RigidBody>
  );
}