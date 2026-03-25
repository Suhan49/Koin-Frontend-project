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



import { useState, useEffect } from "react";

function Crypto() {
  const [crypto, setcrypto] = useState({});

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,polygon-pos,binancecoin,solana,ripple,cardano,avalanche-2,lido-staked-ether,uniswap,centrifuge&price_change_percentage=1h,24h,7d,30d,1y"
        );

        const data = await res.json();

        // 🔥 convert array → object
        const coinMap = {};
        data.forEach((coin) => {
          coinMap[coin.id] = coin;
        });

        setcrypto(coinMap);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCoins();
    const interval = setInterval(fetchCoins, 20000);

    return () => clearInterval(interval);
  }, []);

  return crypto;
}

export default Crypto;