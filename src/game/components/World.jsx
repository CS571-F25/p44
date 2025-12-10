import { Physics } from "@react-three/rapier";
import Player from "./Player";
import Ground from "./Ground";
import { Bvh, KeyboardControls } from "@react-three/drei";
import { useDebugStore } from "../store/DebugStore";
import { keyboardMap } from "../core/Controls";
import InstancedTrees from "./InstancedTree";

import Enemy from "./Enemy"
import InstancedEnemies from "./InstancedTree"
import { useMemo } from "react";

export default function World() {

  const { debug, toggleDebug } = useDebugStore();

  // number of enemies
  const ENEMY_COUNT = 0;
  const SPAWN_RADIUS = 20;

  // Generate random enemy positions once
  const enemyPositions = useMemo(() => {
    return Array.from({ length: ENEMY_COUNT }, () => {
      const angle = Math.random() * Math.PI * 2;
      const radius = SPAWN_RADIUS + Math.random() * SPAWN_RADIUS;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = 3 + Math.random() * 3; // small random height
      return [x, y, z];
    });
  }, []);


  return (
    
    <>
	  
      <Physics debug={debug}>
      <Player />
	  <InstancedTrees count={2000} areaSize={700} globalScale={0.03}/>

      {/* Spawn many enemies */}
      {enemyPositions.map((pos, i) => (
        <Enemy key={i} position={pos} />
      ))}

      <Bvh firstHitOnly>
      <Ground />
      </Bvh>
      </Physics>
    </>

  );
}
