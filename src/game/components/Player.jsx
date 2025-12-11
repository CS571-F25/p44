import { KeyboardControls, useKeyboardControls  } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import CharacterModel from "./CharacterModel";
import { keyboardMap } from "../core/Controls";
import { useState, useRef, useEffect } from "react";
import PlayerShadow from "./PlayerShadow";
import { useTimeOfDayStore } from "../store/TimeOfDayStore";
import { usePlayerStore } from "../store/PlayerStore";
import { usePlayerRotationStore } from "../store/PlayerRotationStore";
import AutoAttack from "./AutoAttack";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const characterURL = "/p44/assets/models/wizardV_animated10.glb";

const animationSet = {
  idle: "idle",
  walk: "running",
  run: "running",
  jump: "jumpingFinal",
  jumpIdle: "jumpingFinal",
  jumpLand: "jumpingFinal",
  fall: "falling"
};

export default function Player() {

	const night = useTimeOfDayStore((state) => state.night);

	const worldPos = new THREE.Vector3();
	const modelGroup = useRef();
  	const setPosition = usePlayerStore((state) => state.setPosition);
	const setRotation = usePlayerRotationStore((state) => state.setRotation);

	useFrame(() => {
		if (!modelGroup.current) return;
		//console.log(performance.now())
		modelGroup.current.getWorldPosition(worldPos);
		setPosition(worldPos);

		const worldQuat = new THREE.Quaternion();
		modelGroup.current.getWorldQuaternion(worldQuat);
		setRotation(worldQuat);
	});

	return (
		<KeyboardControls map={keyboardMap}>
				<Ecctrl
					name="player"
					animated={true}
					autoBalance={false}
					camInitDis={-10}
					camMaxDis={-10}
					camZoomSpeed={0}
					camCollisionOffset={0.3}
					camUpLimit={1.3}
					camLowLimit={-0.3}


					capsuleHalfHeight={1} // half of model height
					capsuleRadius={0.3}   
					floatHeight={0}


					maxVelLimit={7} // default walking speed, set this to a variable eventually
					sprintMult={2} // sprinting speed modifies walking speed

					jumpVel={4}
					fallingGravityScale={2.9}
					>
					<EcctrlAnimation
						characterURL={characterURL}
						animationSet={animationSet}
					>
						<group ref={modelGroup} position={[0, -1.27, 0]} >
							<CharacterModel scale={0.5} />
						</group>
					</EcctrlAnimation>
					{!night && <PlayerShadow scale={0.6} opacity={0.8} yOffset={-1.26} />}
				</Ecctrl>
				<AutoAttack interval={1000} />
		</KeyboardControls>
	);
}
