import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const ShikakuModel = () => {
  const LoadModel = () => {
    const gltf = useLoader(GLTFLoader, "/img/sikaku.glb");
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
