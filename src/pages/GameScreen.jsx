import { Canvas, useFrame } from "@react-three/fiber";
import { Sky, Stars, Stats, Billboard, Clouds, Cloud } from "@react-three/drei";
import World from "../game/components/World";
import { Text } from "@react-three/drei";
import { useState } from "react";
import { useTimeOfDayStore } from "../game/store/TimeOfDayStore";
import * as THREE from "three";
import { usePlayerStore } from "../game/store/PlayerStore";
import { Perf } from "r3f-perf";
import PositionDisplay from "../game/components/PlayerPositionDisplay.jsx";
import { useDebugStore } from "../game/store/DebugStore.js";

export default function GameScreen() {

    const { night, toggleNight } = useTimeOfDayStore();
    const { debug, toggleDebug } = useDebugStore();

    return (
        <div style={{ position: "fixed", inset: 0 }}>
            
            {debug && (
                <div
                style={{
                    position: "absolute",
                    zIndex: 20,
                    bottom: 23,
                    left: 200,
                    color: "white",
                    fontSize: "18px",
                    background: "rgba(0,0,0,0.5)",
                    padding: "6px 10px",
                    borderRadius: 4
                }}
                >
                    Mouse capture disabled
                </div>
            )}

            <button
                style={{
                    position: "absolute",
                    zIndex: 10,
                    bottom: 20,     
                    left: 100,       
                    padding: "10px 16px",
                    background: "#222",
                    color: "white",
                    border: "1px solid #555",
                    borderRadius: 4,
                    cursor: "pointer"
                }}
                onClick={toggleDebug}
            >
                  Debug
            </button>

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
                onClick={toggleNight}
            >
                  {night ? "Night" : "Day"}
            </button>

            <Canvas
                onPointerDown={(e) => {
                    // Request pointer lock on the canvas element
                    if(debug === true) return;
                        (e.target).requestPointerLock();
                    }}

                >

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                {/* <Stats showPanel={0} className="stats"/> */}
                <ambientLight intensity={1} />
                <directionalLight position={[5, 10, 5]} castShadow />
                <World />


                {debug && (
                    <>
                        <Perf position="bottom-right" deepAnalyze={true} />
                        <PositionDisplay />
                    </>
                )}

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
