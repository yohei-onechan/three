import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const TsukueModel = () => {
  const LoadModel = () => {
    const gltf = useLoader(GLTFLoader, "/img/tsukue.glb");
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
