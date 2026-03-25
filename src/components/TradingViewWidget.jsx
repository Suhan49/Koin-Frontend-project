import React, { useEffect, useRef, memo, useState } from "react";

function TradingViewWidget() {
  const container = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbol: "NASDAQ:AAPL",
      interval: "D",
      theme: "light",
      autosize: true, // ✅ makes width responsive
      height: isMobile ? 300 : 400, // ✅ dynamic height
    });

    container.current.appendChild(script);
  }, [isMobile]);

  return (
    <div
      className="tradingview-widget-container w-full"
      ref={container}
    >
      <div className="tradingview-widget-container__widget w-full"></div>
    </div>
  );
}

export default memo(TradingViewWidget);