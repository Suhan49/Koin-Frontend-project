// import React, { useEffect, useRef, memo, useState } from "react";

// function TradingViewWidget() {
//   const container = useRef();
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     container.current.innerHTML = "";

//     const script = document.createElement("script");
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;

//     script.innerHTML = JSON.stringify({
//       symbol: "NASDAQ:AAPL",
//       interval: "D",
//       theme: "light",
//       autosize: true, // ✅ makes width responsive
//       height: 500, // ✅ dynamic height
//     });

//     container.current.appendChild(script);
//   }, [isMobile]);

//   return (
//     <div
//       className="tradingview-widget-container w-full"
//       ref={container}
//     >
//       <div className="tradingview-widget-container__widget w-full"></div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);



import React, { useEffect, useRef, memo, useState } from "react";

function TradingViewWidget() {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // ✅ FIX 1: check if container exists
    if (!container.current) return;

    // ✅ FIX 2: delay execution (important)
    const timer = setTimeout(() => {
      if (!container.current) return;

      container.current.innerHTML = "";

      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;

      script.innerHTML = JSON.stringify({
  autosize: true,
  symbol: "BINANCE:BTCUSDT",
  interval: "60",
  timezone: "Etc/UTC",
  theme: "light",
  style: "1",
  locale: "en",
  enable_publishing: false,
  allow_symbol_change: true,
  hide_top_toolbar: false,
  save_image: false,
  support_host: "https://www.tradingview.com",
});

      container.current.appendChild(script);
    }, 500); // ✅ delay prevents null error

    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <div
  className="tradingview-widget-container w-full"
  style={{ height: "500px" }}
>
      {/* ✅ FIX 3: ensure inner div exists */}
      <div
  ref={container}
  className="tradingview-widget-container__widget"
  style={{ height: "100%", width: "100%" }}
/>
    </div>
  );
}

export default memo(TradingViewWidget);