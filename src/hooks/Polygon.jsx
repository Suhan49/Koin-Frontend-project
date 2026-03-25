import { useEffect, useState } from "react";

export function Polygon() {

    const [matic, setMatic] = useState(null);

useEffect(() => {
  const fetchMatic = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,polygon-pos&vs_currencies=usd&include_24hr_change=true"
    );
    const data = await res.json();
    setMatic(data[0]);
  };

  fetchMatic();
  const interval = setInterval(fetchMatic, 20000);

  return () => clearInterval(interval);
}, []);

  return matic;
}

