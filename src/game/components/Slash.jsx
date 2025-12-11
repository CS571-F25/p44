import { useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Slash({
  url,
  rows,
  cols,
  totalFrames,
  fps = 30,
  scale = 1,
  onFinish,
}) {
  const texture = useTexture(url);
  const meshRef = useRef();

  const [frame, setFrame] = useState(0);
  const frameDuration = 1 / fps;
  const elapsedRef = useRef(0);

  useFrame((_, delta) => {
    elapsedRef.current += delta;

    if (elapsedRef.current >= frameDuration) {
      elapsedRef.current = 0;

      setFrame((prev) => {
        const next = prev + 1;
        if (next >= totalFrames) {
          onFinish?.();
          return 0;
        }
        return next;
      });
    }

    // Update UVs
    const col = frame % cols;
    const row = Math.floor(frame / cols);

    texture.offset.set(col / cols, 1 - (row + 1) / rows);
    texture.repeat.set(1 / cols, 1 / rows);
  });

  return (
    <mesh
      ref={meshRef}
      scale={scale}
      rotation={[-Math.PI / 2, 0, -2]} // Face up (horizontal plane)
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        side={THREE.DoubleSide} // Visible from both sides
      />
    </mesh>
  );
}