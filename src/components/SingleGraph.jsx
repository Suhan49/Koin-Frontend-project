import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";

import { graphData } from "../data/graphData";

export default function SingleCoinGraph({
  coinId,
  strokeColor = "#22c55e",
}) {
  const data = graphData[coinId] || [];

  if (!data.length) {
    return <div className="h-20 w-full" />;
  }

  return (
    <div
      className="w-full h-20 min-w-[180px]"
      style={{ minHeight: "80px" }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis hide dataKey="x" />
          <YAxis hide domain={["auto", "auto"]} />
          <Line
            type="monotone"
            dataKey="y"
            stroke={strokeColor}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}