import React, { useEffect } from "react";
import * as THREE from "three";
import { MaruModel } from "./three_model/maru_model";
import { ShikakuModel } from "./three_model/shikaku_model";
import { TsukueModel } from "./three_model/tsukue_model";
import { ThreeDemo } from "./ThreeDemo";
import { SameDataComposedChart } from "./recharts/SameDataComposedChart";
import { LeaderLineNew } from "./line/LeaderLineNew";

export const Sample2 = () => {
  /** case1 */
  const createBox = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: document.querySelector("#nyumon-sample1") as HTMLCanvasElement
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    // シーンとは3D空間のことで、3Dオブジェクトや光源などの置き場
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xddddddd);

    // カメラを作成
    // 画角、アスペクト比、描画開始距離、描画終了距離の4つの情報を引数として渡しカメラを作成
    // 一般的に画角が約60°以上のレンズが広角レンズ、45°前後のレンズが標準レンズ、約30°以下のレンズが望遠レンズ
    const camera = new THREE.PerspectiveCamera(45, width / height);

    // カメラの位置（横、縦、奥行き）
    camera.position.set(700, 600, 800);
    // カメラの方向　lookAt カメラを常に中央に向かせる
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // lookAtを使っていることによってカメラの回転が不要になっている
    // カメラの回転　ローテーション（回転）
    // camera.rotation.y += 0.1;
    // camera.position.x += 1;
    // camera.position.z = 90;

    // 箱を作成 (幅, 高さ, 奥行き)
    const geometry = new THREE.BoxGeometry(600, 100, 300);
    const material = new THREE.MeshNormalMaterial({
      opacity: 0.5,
      transparent: true,
      side: THREE.DoubleSide
    });
    const box = new THREE.Mesh(geometry, material);

    // シーンに追加
    scene.add(box);

    const geometry2 = new THREE.BoxGeometry(50, 100, 300);
    // const material2 = new THREE.MeshNormalMaterial();
    const box2 = new THREE.Mesh(geometry2, material);
    box2.position.set(300, -100, -500);
    // シーンに追加
    scene.add(box2);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      // 移動方向と移動速度
      // box.rotation.y += 0.006;
      // box.rotation.x += 0.005;
      renderer.render(scene, camera); // レンダリング
      requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    createBox();
  }, []);

  // three.jsでの書き方とreactでの書き方
  return (
    <>
      <canvas id="nyumon-sample1" />
      <ShikakuModel />
      {/* <TsukueModel />
      <MaruModel /> */}
      <ThreeDemo />

      <SameDataComposedChart />

      <LeaderLineNew />
    </>
  );
};
