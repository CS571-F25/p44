import React, { useState, useEffect } from "react";
import { Html } from "@react-three/drei";
import { usePlayerStore } from "../store/PlayerStore";
import { useFrame } from "@react-three/fiber";


const KeyControls = () => {
  const [showControls, setShowControls] = useState(true);
  const [pos, setPos] = useState({ x: 0, y: 0, z: 0 });
  const playerPosition = usePlayerStore((state) => state.position);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" || event.key === "Return") {
        setShowControls(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

    useFrame(() => {
        setPos({ ...playerPosition });
    });

  if (!showControls) return null;

  return (
    <group position={[pos.x, pos.y-3, pos.z]}>
    <Html center>
      <div
        style={{
          position: "absolute",
          zIndex: 10,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          background: "rgba(0,0,0,0.0)",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <img
          src="/p44/assets/images/XZSO_KeyControl.png" 
          alt="Key Controls"
          style={{
            width: "30vw",
            height: "auto",
          }}
        />
        <p style={{ color: "white", marginTop: "20px", marginRight: "10px" }}>
          Press ENTER to close
        </p>
      </div>
    </Html>
    </group>
  );
};

export default KeyControls;
