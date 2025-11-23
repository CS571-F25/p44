import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { usePlayerStore } from "../store/PlayerStore";

export default function PositionDisplay() {
    const [pos, setPos] = useState({ x: 0, y: 0, z: 0 });
    const playerPosition = usePlayerStore((state) => state.position);

    useFrame(() => {
        setPos({ ...playerPosition });
    });

    return (
        <group position={[pos.x, pos.y+5, pos.z]}>
            <Html center style={{ pointerEvents: "none" }}>
                <div style={{ 
                    background: "rgba(0,0,0,0.6)",
                    color: "white",
                    padding: "14px 24px",
                    borderRadius: 4,
                    width: "120px"
                    }}>

                    <div><b>Player Position</b></div>
                    <div>X: {pos.x.toFixed(2)}</div>
                    <div>Y: {pos.y.toFixed(2)}</div>
                    <div>Z: {pos.z.toFixed(2)}</div>
                </div>
            </Html>
        </group>
    );
}
