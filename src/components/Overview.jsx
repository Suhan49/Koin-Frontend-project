// import FundamentalsBlock from "./FundamentalsBlock"
// import Block2 from "./Block2"
// // import { useCoin } from "../hooks/usecoin";
// import Crypto from "../hooks/Crypto";


// function Overview() {
// // const coin = useCoin();

//  const crypto = Crypto();


// const position = crypto
//   ? ((crypto.current_price - crypto.low_24h) /
//       (crypto.high_24h - crypto.low_24h)) * 100
//   : 0;

//   return (
//     <>
//         <div className='bg-white  rounded-md mt-8 px-6 pb-18 pt-6' >
//                   <span className="font-medium text-4xl  ">Performance</span>
//                   <div className="flex w-161 md:w-full">
//                     <div className="py-6">
//                     <span className="opacity-75">Today's Low</span>
//                     <div className="py-2 font-medium opacity-75">{crypto ? crypto.low_24h.toLocaleString() : "..."}</div>
//                   </div>
//                   <div className="relative w-2xl h-1 opacity-55 mt-12 mx-9  bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-sm "></div>
//                   <div className="py-6 pl-4">
//                     <span className="opacity-75 ">Today's High</span>
//                     <div className="py-2 font-medium opacity-75">{crypto ? crypto.high_24h.toLocaleString() : "..."}</div>
//                   </div>
//                   </div>
//                   {/* <div className=" pl-90 md:pl-150 -mt-22 md:-mt-16 ">
//                     <img src="https://static.thenounproject.com/png/2228269-200.png" className="w-4 mx-7"/>
//                     <span >${crypto ? crypto.current_price.toLocaleString() : "Loading..."}</span>
//                   </div> */}

//                     <div
//                             className="relative -mt-16 "
//                             style={{ left: `${position}%` }}
//                           >
//                             <img
//                               src="https://static.thenounproject.com/png/2228269-200.png"
//                               className="w-4 -translate-x-1/2"
//                             />
//                             <span className="block text-sm font-medium">
//                               ${crypto ? crypto.current_price.toLocaleString() : "..."}
//                             </span>
//                           </div>

//                    <div className="flex w-161 md:w-full">
//                     <div className="py-6">
//                     <span className="opacity-75">52W Low</span>
//                     <div className="py-2 font-medium opacity-75">{crypto ? crypto.atl.toLocaleString() : "..."}</div>
//                   </div>
//                   <div className="w-2xl h-1 opacity-55 mt-12 mx-14  bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-sm "></div>
//                   <div className="py-6 pl-4">
//                     <span className="opacity-75">52W High</span>
//                     <div className="py-2 font-medium opacity-75">{crypto ? crypto.ath.toLocaleString() : "..."}</div>
//                   </div>
//                   </div>

//                   <div className="flex space-x-2">
//                     <span className="font-medium text-2xl  ">Fundamentals </span>
//                     <img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cartoon-exclamation-mark-icon-free-button-image_2291932.jpg" className="w-6 h-6 rotate-180 mt-1 opacity-70"/>
//                   </div>
//                   <div className="flex flex-col md:flex-row space-y-2 md:space-x-35 -mb-6">
//                     <div>
//                     <FundamentalsBlock 
//                     name={"Bitcoin"} price={crypto ? `$${crypto.current_price.toLocaleString()}` : "..."} className={" space-x-130 md:space-x-73"}/>
//                     <FundamentalsBlock 
//                     name={"24h Low / 24h High"} price={
//   crypto
//     ? `$${crypto.low_24h.toLocaleString()} / $${crypto.high_24h.toLocaleString()}`
//     : "..."
// } className={"space-x-85 md:space-x-33"}/>
//                     <FundamentalsBlock
//   name={"7d Low / 7d High"}
//   price={
//     crypto?.price_change_percentage_7d_in_currency != null
//       ? `${crypto.price_change_percentage_7d_in_currency.toFixed(2)}%`
//       : "..."
//   }
// />
//                     <FundamentalsBlock 
//                     name={"Trading Volume"} price={crypto ? `$${crypto.total_volume.toLocaleString()}` : "..."} className={"space-x-105 md:space-x-43"}/>
//                     <FundamentalsBlock 
//                     name={"Market Cap Rank"} price={crypto ? `#${crypto.market_cap_rank}` : "..."} className={"space-x-126 md:space-x-64"}/>
//                   </div>
//                   <div>
//                     <FundamentalsBlock 
//                     name={"Market Cap"} price={crypto ? `$${crypto.market_cap.toLocaleString()}` : "..."} className={"space-x-110 md:space-x-45"}/>
//                     <FundamentalsBlock 
//                     name={"Market Cap Dominence"} price={
//   crypto
//     ? `${((crypto.market_cap / crypto.total_volume) * 100).toFixed(2)}%`
//     : "..."
// } className={"space-x-104 md:space-x-40"}/>
//                     <FundamentalsBlock 
//                     name={"Volume / Market Cap"} price={
//   crypto
//     ? (crypto.total_volume / crypto.market_cap).toFixed(4)
//     : "..."
// } className={"space-x-111 md:space-x-49"}/>
//                     <div className="mt-2 " >
//         <span className="opacity-60 ">All-Time High</span>
//         <span className=" pl-105 md:pl-44">{crypto ? `$${crypto.ath.toLocaleString()}` : "..."} </span>
//         <span className="text-red-700 ">{crypto ? `${crypto.ath_change_percentage.toFixed(2)}%` : "..."}</span>
//     </div>
//     <div className="text-xs pl-125 md:pl-83 opacity-75">{crypto
//   ? new Date(crypto.ath_date).toLocaleDateString()
//   : "..."}</div>
//     <div className="w-165 md:w-100 h-0.5 opacity-55  -mx-1 bg-gray-400 rounded-sm"></div>
//                     <div className="mt-2 " >
//         <span className="opacity-60 ">All-Time Low</span>
//         <span className="pl-110 md:pl-43">{crypto ? `$${crypto.atl.toLocaleString()}` : "..."}</span>
//         <span className="text-green-600">{crypto ? `${crypto.atl_change_percentage.toFixed(2)}%` : "..."}</span>
//     </div>
//     <div className="text-xs pl-125 md:pl-83 opacity-75">{crypto
//   ? new Date(crypto.atl_date).toLocaleDateString()
//   : "..."}</div>
//     <div className="w-165 md:w-100 h-0.5 opacity-55  -mx-1 bg-gray-400 rounded-sm"></div>
//                   </div>
//                   </div>
//                 </div>
//              <div>
//                  <Block2/>
//                </div>
              
               
//     </>
    
                
//   )
// }

// export default Overview





// import FundamentalsBlock from "./FundamentalsBlock"
import Block2 from "./Block2"
// import { useCoin } from "../hooks/usecoin";
import Crypto from "../hooks/Crypto";
import Fundamentals from "./Fundamentals";


function Overview() {
// const coin = useCoin();

 const crypto = Crypto()?.bitcoin;


const position = crypto
  ? Math.min(
      95,   // instead of 100
      Math.max(
        5,   // instead of 0
        ((crypto.current_price - crypto.low_24h) /
          (crypto.high_24h - crypto.low_24h)) * 100
      )
    )
  : 0;

  return (
    <>
        <div className='bg-white  rounded-md mt-8 px-6 pb-18 pt-6' >
                  <span className="font-medium text-4xl  ">Performance</span>
                  <div className="flex w-161 md:w-full">
                    <div className="py-6">
                    <span className="opacity-75">Today's Low</span>
                    <div className="py-2 font-medium opacity-75">{crypto ? crypto.low_24h.toLocaleString() : "..."}</div>
                  </div>
                  <div >
                    <div className="relative w-90 md:w-2xl h-1 opacity-55 mt-12 mx-9  bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-sm "></div>
                   <div
                            className="relative -mt-1 "
                            style={{ left: `${position}%` }}
                          >
                            <img
                              src="https://static.thenounproject.com/png/2228269-200.png"
                              className="w-4 -translate-x-1/2"
                            />
                            <span className="block text-sm font-medium">
                              ${crypto ? crypto.current_price.toLocaleString() : "..."}
                            </span>
                          </div>
                  </div>
                  <div className="py-6 pl-4">
                    <span className="opacity-75 ">Today's High</span>
                    <div className="py-2 font-medium opacity-75">{crypto ? crypto.high_24h.toLocaleString() : "..."}</div>
                  </div>
                  </div>
                  {/* <div className=" pl-90 md:pl-150 -mt-22 md:-mt-16 ">
                    <img src="https://static.thenounproject.com/png/2228269-200.png" className="w-4 mx-7"/>
                    <span >${crypto ? crypto.current_price.toLocaleString() : "Loading..."}</span>
                  </div> */}

                    {/* <div
                            className="relative -mt-16 "
                            style={{ left: `${position}%` }}
                          >
                            <img
                              src="https://static.thenounproject.com/png/2228269-200.png"
                              className="w-4 -translate-x-1/2"
                            />
                            <span className="block text-sm font-medium">
                              ${crypto ? crypto.current_price.toLocaleString() : "..."}
                            </span>
                          </div> */}

                   <div className="flex w-161 md:w-full">
                    <div className="py-6">
                    <span className="opacity-75">52W Low</span>
                    <div className="py-2 font-medium opacity-75">{crypto ? crypto.atl.toLocaleString() : "..."}</div>
                  </div>
                  <div className="w-90 md:w-2xl h-1 opacity-55 mt-12 mx-14  bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-sm "></div>
                  <div className="py-6 pl-4">
                    <span className="opacity-75">52W High</span>
                    <div className="py-2 font-medium opacity-75">{crypto ? crypto.ath.toLocaleString() : "..."}</div>
                  </div>
                  </div>

                  <Fundamentals/>
                </div>
             <div>
                 <Block2/>
               </div>
              
               
    </>
    
                
  )
}

export default Overview







