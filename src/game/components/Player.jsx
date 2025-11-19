import { KeyboardControls } from "@react-three/drei";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import CharacterModel from "./CharacterModel";
import { keyboardMap } from "../core/Controls";
import CameraRig from "./CameraRig";
import { useState, useRef } from "react";

const characterURL = "/p44/assets/models/wizardV_animated2.glb";

const animationSet = {
  idle: "idle",
  walk: "running",
  run: "running",
  jump: "jumping",
  jumpIdle: "jumping",
  jumpLand: "jumping",
  fall: "falling"
};

export default function Player() {

	return (
		<KeyboardControls map={keyboardMap}>
				<Ecctrl
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
					>
					<EcctrlAnimation
						characterURL={characterURL}
						animationSet={animationSet}
						jumpSpeed={1.5}
					>
						<group position={[0, -1.27, 0]}>
							<CharacterModel scale={0.5} />
						</group>
					</EcctrlAnimation>
				</Ecctrl>
		</KeyboardControls>
	);
}
