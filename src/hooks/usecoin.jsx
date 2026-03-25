import { useEffect, useState } from "react";

export function useCoin() {
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&price_change_percentage=7d"
      );
      const data = await res.json();
      setCoin(data[0]);
    };

    fetchCoin();
    const interval = setInterval(fetchCoin, 20000);

    return () => clearInterval(interval);
  }, []);

  return coin;
}