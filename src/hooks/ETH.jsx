
import { useEffect, useState } from "react";

export function ETH() {

    const [eth, setEth] = useState(null);

useEffect(() => {
  const fetchETH = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum"
    );
    const data = await res.json();
    setEth(data[0]);
  };

  fetchETH();
  const interval = setInterval(fetchETH, 20000);

  return () => clearInterval(interval);
}, []);

  return eth;
}