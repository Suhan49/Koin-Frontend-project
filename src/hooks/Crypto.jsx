// import { useState,useEffect } from "react";

// function Crypto() {

//      const [crypto, setcrypto] = useState(null);
    
//     useEffect(() => {
//       const fetchETH = async () => {
//         const res = await fetch(
//           "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
//         );
//         const data = await res.json();
//         setcrypto(data[0]);
//       };
    
//       fetchETH();
//       const interval = setInterval(fetchETH, 20000);
    
//       return () => clearInterval(interval);
//     }, []);
    
//       return crypto;

  
// }

// export default Crypto



// import { useState, useEffect } from "react";

// function Crypto() {
//   const [crypto, setcrypto] = useState({});

//   useEffect(() => {
//     const fetchCoins = async () => {
//       try {
//         const res = await fetch(
//           "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,polygon-pos,binancecoin,solana,ripple,cardano,avalanche-2,lido-staked-ether,uniswap,centrifuge&price_change_percentage=1h,24h,7d,30d,1y"
//         );

//         const data = await res.json();

//         // 🔥 convert array → object
//         const coinMap = {};
//         data.forEach((coin) => {
//           coinMap[coin.id] = coin;
//         });

//         setcrypto(coinMap);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchCoins();
//     const interval = setInterval(fetchCoins, 60000);

//     return () => clearInterval(interval);
//   }, []);

//   return crypto;
// }

// export default Crypto;



import { useState, useEffect } from "react";

function Crypto() {
  const [crypto, setcrypto] = useState({});

  useEffect(() => {
    let isFetching = false;

    const fetchCoins = async () => {
      if (isFetching) return;
      isFetching = true;

      try {
        const targetUrl =
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,binancecoin,cardano,ripple,uniswap,centrifuge&price_change_percentage=1h,24h,7d";

        // ✅ CHANGED PROXY (more reliable than allorigins)
        const url = `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;

        const res = await fetch(url);

        if (!res.ok) {
          const text = await res.text();
          console.error("API Error:", text);
          return;
        }

        // ✅ SAFE PARSE (fixes 'Throttled' crash)
        const text = await res.text();
        let data;

        try {
          data = JSON.parse(text);
        } catch (err) {
          console.error("Not JSON response:", text);
          return;
        }

        // ✅ convert array → object
        const coinMap = {};
        data.forEach((coin) => {
          coinMap[coin.id] = coin;
        });

        setcrypto(coinMap);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        isFetching = false;
      }
    };

    // ✅ ONLY CALL ONCE (remove interval for stability)
    fetchCoins();

    // ❌ COMMENTED OUT (causes rate limit issues)
    // const interval = setInterval(fetchCoins, 60000);
    // return () => clearInterval(interval);

  }, []);

  return crypto;
}

export default Crypto;