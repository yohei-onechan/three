import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590, // ここの名称がそのまま反映される 全角文字も使用可能
    pv: 200,
    amt: 1400,
    cnt: 490
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380
  }
];

export const SameDataComposedChart = () => {
  return (
    <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 0,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      {/* グラフ背景の線 */}
      <CartesianGrid stroke="#f5f5f5" />

      <XAxis dataKey="name" scale="band" />
      <YAxis />
      {/* ツールチップの表示 */}
      <Tooltip />
      <Legend />
      {/* バーの表示 */}
      <Bar dataKey="uv" barSize={20} fill="#413ea0" />
      {/* ラインを引く */}
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />

      {/* 'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 
      'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' |
       'monotone' | 'step' | 'stepBefore' | 'stepAfter' */}
      <Bar dataKey="pv" barSize={20} fill="#127300" />
      <Line
        type="stepAfter"
        dot={{ stroke: "red", strokeWidth: 2 }}
        dataKey="pv"
        stroke="#11ff55"
      />

      <Line type="monotone" dot={false} dataKey="amt" stroke="#1273ff" />
    </ComposedChart>
  );
};
