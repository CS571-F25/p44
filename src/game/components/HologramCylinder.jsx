import { RigidBody, useRapier } from "@react-three/rapier";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function HologramCylinder({ position = [0, 1, 0] }) {
  const shaderRef = useRef();

  useFrame((state) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const HologramMaterial = (
    <shaderMaterial
      ref={shaderRef}
      transparent
      depthWrite={false}
      uniforms={{
        uTime: { value: 0 },
        uColor: { value: new THREE.Color("#00eaff") },
      }}
      vertexShader={`
        varying vec3 vPos;
        void main() {
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `}
      fragmentShader={`
        uniform float uTime;
        uniform vec3 uColor;
        varying vec3 vPos;

        void main() {
          float grid = (sin(vPos.x * 10.0) * sin(vPos.z * 10.0)) * 0.5 + 0.5;
          float scan = sin(uTime * 4.0 + vPos.y * 5.0);
          float alpha = 0.4 + grid * 0.4 + scan * 0.2;
          gl_FragColor = vec4(uColor * (grid + scan), alpha);
        }
      `}
    />
  );

  return (
    <RigidBody
      type="fixed"        // static object, won't fall
      colliders="trimesh" // Trimesh for accurate collider
      position={position}
    >
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[3, 4, 1]} />
        {HologramMaterial}
      </mesh>
    </RigidBody>
  );
}

export default React.memo(HologramCylinder);