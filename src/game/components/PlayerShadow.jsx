// PlayerShadow.js
import { useMemo } from "react";
import * as THREE from "three";

export default function PlayerShadow({ scale = 0.5, opacity = 0.3, yOffset = 0.01 }) {
  const shadowTexture = useMemo(() => {
    const size = 128;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    );
    gradient.addColorStop(0, `rgba(0,0,0,${opacity})`);
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, [opacity]);

  return (
    <mesh
      position={[0, yOffset, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[scale, scale, scale]}
    >
      <circleGeometry args={[1, 32]} />
      <meshBasicMaterial
        map={shadowTexture}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}
