import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const MaruModel = () => {
  const LoadModel = () => {
    const gltf = useLoader(GLTFLoader, "/img/maru.glb");
    return <primitive object={gltf.scene} dispose={null} />;
  };

  const UseModel = () => {
    return (
      <Suspense fallback={null}>
        <LoadModel />
      </Suspense>
    );
  };

  return (
    <>
      <Canvas>
        <mesh>
          <UseModel />
        </mesh>
      </Canvas>
    </>
  );
};
