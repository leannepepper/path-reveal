import { Box, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { CustomText } from "./CustomText";

export default function App() {
  return (
    <Canvas
      camera={{
        position: new THREE.Vector3(0, 0, 1),
        near: 0.01,
        far: 300,
      }}
    >
      <color attach="background" args={["#171d6c"]} />
      <ambientLight intensity={0.5} />
      <CustomText />
      <OrbitControls />
    </Canvas>
  );
}
