import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import useTradingChart from "../hooks/ALLCoinGraphs";

export default function SingleCoinGraph({ coinId, strokeColor = "#3b82f6" }) {
  const data = useTradingChart(coinId);

  return (
    <div className="p-2   mb-4">
      {/* <h3 className="font-medium text-sm mb-1">{coinName}</h3> */}
      <ResponsiveContainer width="100%" height={120}>
        <LineChart data={data} style={{ pointerEvents: "none" }}>
          <XAxis dataKey="time" hide />
          <YAxis hide domain={["auto", "auto"]} />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Line type="monotone" dataKey="price" stroke={strokeColor} dot={false} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}