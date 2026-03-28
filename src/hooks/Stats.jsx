// import { useEffect, useState } from "react";
// import GreenBlock from "../components/GreenBlock";

// const Stats = () => {
//   const [stats, setStats] = useState(null);

//   useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const res = await fetch(
//         "http://localhost:3000/api/stats?coin=bitcoin"
//       );
//       const data = await res.json();
//       setStats(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchData();

//   const interval = setInterval(fetchData, 20000); 

//   return () => clearInterval(interval);
// }, []);

//   return (
//     <div>
//       <h2 className="mx-auto font-bold text-2xl p-4">Crypto Stats (20's before)</h2>
//       <div className="flex items-center gap-2 mx-auto font-bold text-2xl p-4">
//                           <img
//                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEEUJQPS_ARZeaL2PTiA5K0qDjwFzMoVQA&s"
//                             className="w-6 h-6"
//                           />
//                           <span className="font-medium">Bitcoin (BTC)</span>
//                         </div>

//       {stats ? (
//         <div>
//           <p className="mx-auto font-medium text-xl pl-4 ">Price: ${stats.price.toLocaleString()}</p>
//           <p className="mx-auto font-medium text-xl pl-4">Market Cap: {stats.marketCap}</p>
//           <div className="flex ">
//             <p className="mx-auto font-medium text-xl ml-4 pt-1">24h Change:</p>
//            <GreenBlock value={stats.change24h} className={"mx-11 mt-1"}/>
//           </div>
          
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Stats;