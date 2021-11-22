import React, { useEffect, useRef, Suspense, VFC } from "react";
import { css } from "@emotion/css";
import { Html } from "@react-three/drei";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import LeaderLine from "leader-line-new";

export const CubeWithText: VFC<{ text: string }> = ({ text }) => {
  const div2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let start = document.getElementById("start");
    let end = document.getElementById("div1");

    console.log("start && end:" + start && end);

    if (start && end) {
      // ReactならRefで要素を取得するべき！！！！
      // ラインをつなぐ設定
      new LeaderLine(
        LeaderLine.pointAnchor(div2Ref.current), // mouseHoverAnchor hoverで表示
        LeaderLine.pointAnchor(end, {
          x: 50,
          y: 1
        }), // pointAnchor 位置の変更
        {
          // color: "red",
          size: 6,
          dropShadow: true, // 影
          // outline: true,
          // endPlugOutline: true,
          // endPlugSize: 1,
          dash: {
            animation: {
              duration: 1000, // アニメーションの速さ（減らすごとに早くなる）
              timing: "ease-in-out" // アニメーションの動き方
            }
          },
          startPlugColor: "#1a6be0", // グラデーション時のスタートの色
          endPlugColor: "#1efdaa", // グラデーション時のエンド色
          gradient: true, // グラデーション
          path: "grid", // 曲線、角線など straight, arc, fluid, magnet, grid
          // startPlug: "square", // スタートの矢印などの表示
          endPlug: "arrow3" // エンドの矢印などの表示
          // startLabel: LeaderLine.captionLabel("START"),
          // middleLabel: LeaderLine.captionLabel("MIDDLE"),
          // endLabel: LeaderLine.pathLabel("This is additional label")
        }
      );
    }
  }, [div2Ref]);

  return (
    <group>
      <mesh position={[-2, 2, 5]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color="royalblue" />
        {/* distanceFactor どのくらい距離を取るか */}
        <Html className={styles.text} center distanceFactor={10}>
          {text}
          <div ref={div2Ref} id="div2">
            aaaa
          </div>
        </Html>
      </mesh>

      <mesh position={[-5, 2, 5]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color="royalblue" />
        <Suspense fallback={null}>
          <mesh position={[1.7, 2, 3]} scale={0.5} castShadow receiveShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshPhongMaterial color="red" />
            <Html center distanceFactor={10}>
              <div id="div1">aaaa</div>
            </Html>
          </mesh>
        </Suspense>
      </mesh>

      <mesh position={[2, 2, 5]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color="royalblue" />
        <Html className={styles.progressbar} center distanceFactor={11}>
          <SemiCircleProgressBar
            stroke={"#011732"} // ゲージの色
            background={"#fff"} // 空ゲージの色
            diameter={200} // 直径の大きさ
            orientation={"up"} // 円の向き上か下
            direction={"right"} // ゲージの方向
            strokeWidth={20} // 幅
            percentage={33.3} // ゲージ数
            showPercentValue={true} // ゲージ数を表示するかどうか
          />
        </Html>
      </mesh>
    </group>
  );
};

const styles = {
  text: css`
    white-space: nowrap;
    font-size: 1.5rem;
    color: red;
    margin-top: 70px;
    user-select: none;
  `,

  progressbar: css`
    /* white-space: nowrap; */
    font-size: 2.5rem;
    color: red;
    margin-top: -70px;
    user-select: none;
    background: #1f5;
    opacity: 0.7;
  `
};
