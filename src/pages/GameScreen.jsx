import { Canvas } from "@react-three/fiber";
import { OrbitControls, PointerLockControls, Sky, Stars, Stats, Billboard } from "@react-three/drei";
import World from "../game/components/World";
import { Text } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";

export default function GameScreen() {

    const [night, setNight] = useState(false);

    return (
        <div style={{ position: "fixed", inset: 0 }}>

            <button
                style={{
                    position: "absolute",
                    zIndex: 10,
                    bottom: 20,     
                    left: 20,       
                    padding: "10px 16px",
                    background: "#222",
                    color: "white",
                    border: "1px solid #555",
                    borderRadius: 4,
                    cursor: "pointer"
                }}
                onClick={() => setNight(prev => !prev)}
            >
                  {night ? "Night" : "Day"}
            </button>

            <Canvas
                onPointerDown={(e) => {
                    // Request pointer lock on the canvas element
                    (e.target).requestPointerLock();
                    }}

                >

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Stats showPanel={0} className="stats"/>
                <ambientLight intensity={1} />
                <directionalLight position={[5, 10, 5]} castShadow />
                <World />
                
                {/* Set Day */}
                {!night && (
                    <Sky
                        distance={450000}
                        sunPosition={[1, 1, 0]}
                        inclination={0}
                        azimuth={0.25}
                    /> 
                )}


                {/* Set Night */}
                {night && (
                <>
                    <color attach="background" args={["black"]} />
                    <fogExp2 attach="fog" color="black" density={0.05} />
                </>
                )}
            </Canvas>
        </div>
    );
}
