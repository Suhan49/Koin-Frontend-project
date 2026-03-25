import { useState, useEffect } from "react";

export default function useTokenomics(coinId) {
  const [tokenomics, setTokenomics] = useState({
    crowdsale: 0,
    foundation: 0,
  });

  useEffect(() => {
    const fetchTokenomics = async () => {
      try {
        const res = await fetch(`YOUR_API_ENDPOINT/${coinId}/tokenomics`);
        const data = await res.json();
        
        setTokenomics({
          crowdsale: data.crowdsale ?? 0,
          foundation: data.foundation ?? 0,
        });
      } catch (err) {
        console.error("Error fetching tokenomics", err);
      }
    };

    fetchTokenomics();
  }, [coinId]);

  return tokenomics;
}