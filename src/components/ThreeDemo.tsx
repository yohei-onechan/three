import React, { useRef, Suspense, VFC } from "react";
import { DirectionalLightHelper, DoubleSide, FrontSide } from "three";
import { Environment, OrbitControls, useHelper } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Maru from "./three_model/Maru";
import { CubeWithText } from "./three_model/CubeWithText";

export const ThreeDemo = () => {
  /** Canvas
   * 視野角（fov）,カメラ位置（position）,shadowsで影あり
   * 視野角（fov）やカメラ位置（position）を設定します。ほかに背景色やDPRなどを設
   */
  return (
    <Canvas
      style={{ width: "960px", height: "540px" }}
      camera={{ fov: 45, position: [5, 10, 15] }}
      shadows
    >
      <Contents />
    </Canvas>
  );
};

const Contents = () => {
  // ライトの可視化
  const lightRef = useRef();
  useHelper(lightRef, DirectionalLightHelper);

  // オブジェクトのアニメーション
  const boxRef = useRef<any>(null);
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    boxRef.current.rotation.x = a * 1;
    boxRef.current.rotation.y = a * 1;
    boxRef.current.rotation.z = a * 0;
  });

  return (
    <>
      {/* 
        カメラの視点操作ができるようになる
        軌道制御により、カメラはターゲットの周りを周回できます。
        enablePan={true} enableZoom={true} enableRotate={true}
      */}
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />

      {/* light */}
      <directionalLight
        position={[5, 5, 4]}
        intensity={5} // 光の強さ
        shadow-mapSize-width={2048} // 描画精度
        shadow-mapSize-height={2048}
        castShadow
      />

      <Suspense fallback={null}>
        <Maru position={[4, 3, 3]} castShadow receiveShadow />
        {/* 
          Environment背 景の設定をする
          https://github.com/pmndrs/drei#environment
        */}
        <Environment preset="lobby" background />
      </Suspense>

      {/* box 1 */}
      <mesh
        scale={1}
        ref={boxRef}
        position={[0, 2, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color="blue" />
      </mesh>

      {/* box 2 */}
      <mesh position={[1, 3, 2]} scale={0.5} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color="red" />
      </mesh>

      {/* floor */}
      <mesh
        scale={1.5}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow
        receiveShadow
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#15E5E5" side={DoubleSide} />
      </mesh>

      <CubeWithText text="あいうえお" />
    </>
  );
};
