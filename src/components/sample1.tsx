import React, { useEffect } from "react";
import * as THREE from "three";

export const Sample1 = () => {
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
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      box.rotation.y += 0.01;
      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    }
  };

  /** case2 */
  const createBox2 = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: document.querySelector("#nyumon-sample2") as HTMLCanvasElement
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      box.rotation.y += 0.01;
      box.rotation.z += 0.01;
      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    }
  };

  /** case3 */
  const createBox3 = () => {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラを作成
    const renderer: any = new THREE.WebGLRenderer({
      canvas: document.querySelector("#nyumon-sample3") as HTMLCanvasElement
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    tick();

    // 毎フレーム時に実行されるループイベント
    function tick() {
      box.rotation.y += 0.1;
      box.rotation.x += 0.1;
      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    }
  };

  // didMountの後で描画しないと、Cannot read property 'width' of nullというエラーが出る
  // canvasが表示される前だから？
  useEffect(() => {
    createBox();
    createBox2();
    createBox3();
    // createBox5()を呼び出すと第二引数でエラーが起きるため、react-hooks/exhaustive-deps を disable にしておく
    // 理由は後で調べる
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h2>入門編 - sample1</h2>
      <h3>case1</h3>
      <canvas id="nyumon-sample1" />
      <h3>case2 - ローテーションz軸方向追加</h3>
      <canvas id="nyumon-sample2" />
      <h3>case3 - ローテーション速度up</h3>
      <canvas id="nyumon-sample3" />
    </>
  );
};
