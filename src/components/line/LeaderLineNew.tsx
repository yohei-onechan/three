import React, { useEffect, useRef } from "react";
import { css } from "@emotion/css";
import LeaderLine from "leader-line-new";

export const LeaderLineNew = () => {
  useEffect(() => {
    let start = document.getElementById("start");
    let end = document.getElementById("div1");

    console.log("start && end:" + start && end);

    if (start && end) {
      // ラインをつなぐ設定
      new LeaderLine(
        LeaderLine.pointAnchor(start), // mouseHoverAnchor hoverで表示
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
          endPlug: "arrow3", // エンドの矢印などの表示
          startLabel: LeaderLine.captionLabel("START"),
          middleLabel: LeaderLine.captionLabel("MIDDLE"),
          endLabel: LeaderLine.pathLabel("This is additional label")
        }
      );
    }
  });

  return (
    <>
      <div className={styles.start} id="start">
        start
      </div>
      <div className={styles.end} id="end">
        end
      </div>
    </>
  );
};

const styles = {
  start: css`
    font-size: 2.5rem;
    color: red;
    user-select: none;
    background: #1f5;
    opacity: 0.7;
  `,
  end: css`
    font-size: 2.5rem;
    color: red;
    margin-top: 170px !important;
    user-select: none;
    background: #ff5;
    opacity: 0.7;
  `
};
