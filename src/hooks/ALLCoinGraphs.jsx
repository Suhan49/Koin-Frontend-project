// // useTradingChart.js
// import { useEffect, useState } from "react";

// export default function useTradingChart(coinId, intervalMs = 15000) {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     let interval;

//     const fetchChart = async () => {
//       try {
//         const res = await fetch(
//           `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1&interval=hourly`
//         );
//         const data = await res.json();
//         if (data.prices) {
//           const formatted = data.prices.map(([time, price]) => ({
//             time: new Date(time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
//             price,
//           }));
//           setChartData(formatted);
//         }
//       } catch (error) {
//         console.error("Error fetching chart for", coinId, error);
//       }
//     };

//     fetchChart();
//     interval = setInterval(fetchChart, intervalMs); // refresh periodically

//     return () => clearInterval(interval);
//   }, [coinId, intervalMs]);

//   return chartData;
// }



// useTradingChart.js
import { useEffect, useState } from "react";

export default function useTradingChart(coinId, intervalMs = 60000) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let isFetching = false;
    let interval;

    const fetchChart = async () => {
      if (isFetching) return; // ✅ prevent overlapping calls
      isFetching = true;

      try {
        const targetUrl = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1&interval=hourly`;

        // ✅ FIX: use proxy (avoids CORS error)
        const url = `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;

        const res = await fetch(url);

        // ✅ handle API / proxy errors
        if (!res.ok) {
          const text = await res.text();
          console.error("API Error:", coinId, text);
          return;
        }

        // ✅ safe JSON parse (prevents "Throttled" crash)
        const text = await res.text();
        let data;

        try {
          data = JSON.parse(text);
        } catch (err) {
          console.error("Not JSON:", coinId, text);
          return;
        }

        if (data.prices) {
          const formatted = data.prices.map(([time, price]) => ({
            time: new Date(time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            price,
          }));

          setChartData(formatted);
        }
      } catch (error) {
        console.error("Error fetching chart for", coinId, error);
      } finally {
        isFetching = false;
      }
    };

    // ✅ call once
    fetchChart();

    // ⚠️ keep interval slow to avoid rate limit
    interval = setInterval(fetchChart, intervalMs);

    return () => clearInterval(interval);
  }, [coinId, intervalMs]);

  return chartData;
}