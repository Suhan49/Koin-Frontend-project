// useTradingChart.js
import { useEffect, useState } from "react";

export default function useTradingChart(coinId, intervalMs = 15000) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let interval;

    const fetchChart = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1&interval=hourly`
        );
        const data = await res.json();
        if (data.prices) {
          const formatted = data.prices.map(([time, price]) => ({
            time: new Date(time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            price,
          }));
          setChartData(formatted);
        }
      } catch (error) {
        console.error("Error fetching chart for", coinId, error);
      }
    };

    fetchChart();
    interval = setInterval(fetchChart, intervalMs); // refresh periodically

    return () => clearInterval(interval);
  }, [coinId, intervalMs]);

  return chartData;
}