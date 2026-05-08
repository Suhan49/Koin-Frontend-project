// import GraphBox from "./GraphBox"
// import GreenBlock from "./GreenBlock"
// import { useCoin } from "../hooks/usecoin";


// function Graphs() {
//      const coin = useCoin();
//   return (
//    <>
//    <div className=' mt-5 px-6 md:px-18  py-8'>
//     <span className='font-medium text-3xl'>You May Also Like</span>
//     <div className="flex gap-4">
//         <GraphBox
//         logo={"https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/vectors/bnb-2c9adc7qw85po528q8y3b.png/bnb-tss7lyzvhxyjfc9ivae0l.png?_a=DATAiZAAZAA0"} 
//         name={"BNB"}
//         percentile={"+0.52%"} backgroundcolor={"bg-green-100"} textcolor={"text-green-500"}
//         dollars={"$319.34"}
//         graph={"https://png.pngtree.com/png-vector/20251211/ourmid/pngtree-colorful-financial-candlestick-chart-in-green-and-red-tones-ideal-for-vector-png-image_18195061.webp"}
//         />
//          <GraphBox
//         logo={"https://cdn.iconscout.com/icon/premium/png-256-thumb/solana-sol-icon-svg-download-png-5795323.png"} 
//         name={"SOL"}
//         percentile={"-2.89%"} backgroundcolor={"bg-red-100"} textcolor={"text-red-500"}
//         dollars={"$109.33"}
//         graph={"https://png.pngtree.com/png-vector/20230620/ourmid/pngtree-trading-candlestick-in-red-green-colors-vector-png-image_7296988.png"}
//         />
//          <GraphBox
//         logo={"https://cdn-icons-png.flaticon.com/512/12114/12114256.png"} 
//         name={"XRP"}
//         percentile={"+0.78%"}  backgroundcolor={"bg-green-100"} textcolor={"text-green-500"}
//         dollars={"$0.634810"}
//         graph={"https://png.pngtree.com/png-vector/20251211/ourmid/pngtree-colorful-financial-candlestick-chart-in-green-and-red-tones-ideal-for-vector-png-image_18195061.webp"}
//         />
//          <GraphBox 
//          className={"hidden md:block"}
//         logo={"https://followmymoney.de/wp-content/uploads/2021/11/Cardano-Logo-1.png"} 
//         name={"ADA"}
//         percentile={"-1.57%"}  backgroundcolor={"bg-red-100"} textcolor={"text-red-500"}
//         dollars={"$0.614869"}
//         graph={"https://static.vecteezy.com/system/resources/previews/056/489/704/non_2x/trading-candle-stick-graph-chart-isolated-on-transparent-background-png.png"}
//         />
//          <GraphBox
//          className={"hidden md:block"}
//         logo={"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/avalanche-avax-icon.png"} 
//         name={"AVAX"}
//         percentile={"-3.78%"}  backgroundcolor={"bg-red-100"} textcolor={"text-red-500"}
//         dollars={"$41.05"}
//         graph={"https://png.pngtree.com/png-vector/20251211/ourmid/pngtree-colorful-financial-candlestick-chart-in-green-and-red-tones-ideal-for-vector-png-image_18195061.webp"}
//         />
//     </div>
//    </div>


//    <div className=' mt-5 px-6 md:px-18  pb-26'>
//     <span className='font-medium text-3xl'>Trending Coins</span>
//     <div className="flex gap-4">
//         <GraphBox
//         logo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEEUJQPS_ARZeaL2PTiA5K0qDjwFzMoVQA&s"} 
//         name={"BTC"}
//         percentile={"+0.10%"} backgroundcolor={"bg-green-100"} textcolor={"text-green-500"}
//         dollars={"$45,332.83"}
//         graph={"https://png.pngtree.com/png-vector/20240616/ourmid/pngtree-trade-chart-increase-vector-png-image_12770965.png"}
//         />
//          <GraphBox
//         logo={"https://i.pinimg.com/736x/b0/8e/54/b08e54bd5c0c7d31a5070134e10bf10c.jpg"} 
//         name={"ETH"}
//         percentile={"-0.21%"} backgroundcolor={"bg-red-100"} textcolor={"text-red-500"}
//         dollars={"$2,375.15"}
//         graph={"https://png.pngtree.com/png-vector/20251211/ourmid/pngtree-colorful-financial-candlestick-chart-in-green-and-red-tones-ideal-for-vector-png-image_18195061.webp"}
//         />
//          <GraphBox
//         logo={"https://res.coinpaper.com/coinpaper/stETH_ug10fg.svg"} 
//         name={"stETH"}
//         percentile={"-0.34%"}  backgroundcolor={"bg-red-100"} textcolor={"text-red-500"}
//         dollars={"$2,37172"}
//         graph={"https://png.pngtree.com/png-vector/20251211/ourmid/pngtree-colorful-financial-candlestick-chart-in-green-and-red-tones-ideal-for-vector-png-image_18195061.webp"}
//         />
//          <GraphBox
//          className={"hidden md:block"}
//         logo={"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/uniswap-uni-icon.png"} 
//         name={"UNI"}
//         percentile={"-4.02%"}  backgroundcolor={"bg-red-100"} textcolor={"text-red-500"}
//         dollars={"$7.3192"}
//         graph={"https://png.pngtree.com/png-vector/20230620/ourmid/pngtree-trading-candlestick-in-red-green-colors-vector-png-image_7296988.png"}
//         />
//          <GraphBox
//          className={"hidden md:block"}
//         logo={"https://assets.kraken.com/marketing/web/icons-uni-webp/s_cfg.webp?i=kds"} 
//         name={"CFG"}
//         percentile={"-1.76%"}  backgroundcolor={"bg-red-100"} textcolor={"text-red-500"}
//         dollars={"$0.773600"}
//         graph={"https://png.pngtree.com/png-vector/20251211/ourmid/pngtree-colorful-financial-candlestick-chart-in-green-and-red-tones-ideal-for-vector-png-image_18195061.webp"}
//         />
//     </div>
//    </div>


//    <div className="block md:hidden ">
//                <div className=' bg-blue-700 w-158 h-110 rounded-xl text-white p-8 mx-auto'>
//                   <div className="text-center m-4 font-bold text-2xl">Get Started with KoinX</div>
//                   <div className="text-center -m-4 font-bold text-2xl">for FREE</div>
//                   <div className="text-center m-4 py-4 ">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports</div>
//                   <img src="https://static.vecteezy.com/system/resources/thumbnails/011/344/620/small/teenage-girl-is-using-digital-tablet-while-sitting-on-the-sofa-3d-character-illustration-png.png" className="w-52 mx-auto -mt-10"/>
//                   <div className="bg-white text-black px-6 py-2  rounded-md w-fit mx-auto">
//                 <button className="flex items-center font-medium gap-2">
//                   Get Started For FREE
//                   <img
//                     src="https://static.thenounproject.com/png/888647-200.png"
//                     className="size-5"
//                   />
//                 </button>
//               </div>

//                   <div className="py-10 ">
//                     <div className='bg-white py-2 my-4 rounded-md text-black'> 
//                       <span className="mx-auto font-bold text-2xl p-6">Trending Coins (24h)</span>
//                       {/* <div className="flex">
//                         <img src="https://cdn-icons-png.flaticon.com/512/14446/14446160.png" className="w-6 h-6 m-6"/>
//                         <span className="font-medium py-11 -m-5 ">Ethereum(ETH)</span> 
//                         <div className="mx-24 ">
//                           <GreenBlock 
//                         label={"8.21%"} className=" "
//                         />
//                         </div>
//                       </div> */}

//                       <div className="flex items-center justify-between px-9 -m-2">
//                         <div className="flex items-center gap-2">
//                           <img
//                             src="https://cdn-icons-png.flaticon.com/512/14446/14446160.png"
//                             className="w-6 h-6"
//                           />
//                           <span className="font-medium">Ethereum (ETH)</span>
//                         </div>
//                         <GreenBlock value={
//     coin
//       ? `${coin.price_change_percentage_24h.toFixed(2)}%`
//       : "..."
//   } />

//                       </div>

//                       <div className="flex items-center justify-between px-10 -m-4">
//                         <div className="flex items-center gap-2">
//                           <img
//                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEEUJQPS_ARZeaL2PTiA5K0qDjwFzMoVQA&s"
//                             className="w-6 h-6"
//                           />
//                           <span className="font-medium">Bitcoin (BTC)</span>
//                         </div>
//                         <GreenBlock value={
//     coin
//       ? `${coin.price_change_percentage_24h.toFixed(2)}%`
//       : "..."
//   } />

//                       </div>

//                       <div className="flex items-center justify-between px-9 -m-4">
//                         <div className="flex items-center gap-2">
//                           <img
//                             src="https://logowik.com/content/uploads/images/polygon-matic-icon3725.logowik.com.webp" 
//                             className="w-8 h-7 "
//                           />
//                           <span className="font-medium">Polygon (Matic)</span>
//                         </div>
//                         <GreenBlock value={
//     coin
//       ? `${coin.price_change_percentage_24h.toFixed(2)}%`
//       : "..."
//   } />

//                       </div>
                      
                      
//                   </div>
//                   </div>
//               </div>
//              </div>
//    </>
//   )
// }

// export default Graphs





import GraphBox from "./GraphBox"
import GreenBlock from "./GreenBlock"
// import { useCoin } from "../hooks/usecoin";
import Crypto from "../hooks/Crypto"
// import AllCoinGraphs from "../hooks/ALLCoinGraphs";


function Graphs() {
    //  const coin = useCoin();
    const crypto = Crypto();
  return (
   <>
   <div className=' mt-5 px-6 md:px-18  py-8'>
    <span className='font-medium text-3xl'>You May Also Like</span>
    <div className="flex gap-4 md:gap-4">
        <GraphBox
        logo={"https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/vectors/bnb-2c9adc7qw85po528q8y3b.png/bnb-tss7lyzvhxyjfc9ivae0l.png?_a=DATAiZAAZAA0"} 
        name={"BNB"}
        percentile={crypto?.binancecoin?.price_change_percentage_24h ?? null}
        dollars={crypto?.binancecoin?.current_price ?? null}
        coinId="binancecoin"        />
         <GraphBox
        logo={"https://cdn.iconscout.com/icon/premium/png-256-thumb/solana-sol-icon-svg-download-png-5795323.png"} 
        name={"SOL"}
       percentile={crypto?.solana?.price_change_percentage_24h ?? null}
        dollars={crypto?.solana?.current_price ?? null}
        coinId="solana"
        />
         <GraphBox
        logo={"https://cdn-icons-png.flaticon.com/512/12114/12114256.png"} 
        name={"XRP"}
        percentile={crypto?.ripple?.price_change_percentage_24h ?? null}
        dollars={crypto?.ripple?.current_price ?? null}
        coinId="ripple"
        />
         <GraphBox 
         className={"hidden md:block"}
        logo={"https://followmymoney.de/wp-content/uploads/2021/11/Cardano-Logo-1.png"} 
        name={"ADA"}
        percentile={crypto?.cardano?.price_change_percentage_24h ?? null}
        dollars={crypto?.cardano?.current_price ?? null}
        coinId="cardano"
        />
         <GraphBox
         className={"hidden md:block"}
        logo={"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/avalanche-avax-icon.png"} 
        name={"AVAX"}
        percentile={crypto?.bitcoin?.price_change_percentage_24h ?? null}
        dollars={crypto?.bitcoin?.current_price ?? null}
        coinId="bitcoin"
        />
    </div>
   </div>


   <div className=' mt-5 px-6 md:px-18  pb-26'>
    <span className='font-medium text-3xl'>Trending Coins</span>
    <div className="flex gap-4 md:gap-4">
        <GraphBox
        logo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEEUJQPS_ARZeaL2PTiA5K0qDjwFzMoVQA&s"} 
        name={"BTC"}
        percentile={crypto?.bitcoin?.price_change_percentage_24h ?? null}
        dollars={crypto?.bitcoin?.current_price ?? null}
        coinId="bitcoin"
        />
        
         <GraphBox
        logo={"https://i.pinimg.com/736x/b0/8e/54/b08e54bd5c0c7d31a5070134e10bf10c.jpg"} 
        name={"ETH"}
        percentile={crypto?.ethereum?.price_change_percentage_24h ?? null}
        dollars={crypto?.ethereum?.current_price ?? null}
       coinId="ethereum"
        />
         <GraphBox
         className={"hidden md:block"}
        logo={"https://res.coinpaper.com/coinpaper/stETH_ug10fg.svg"} 
        name={"stETH"}
       percentile={crypto?.bitcoin?.price_change_percentage_24h ?? null}
        dollars={crypto?.bitcoin?.current_price ?? null}
        coinId="bitcoin"
        />
         <GraphBox
         
        logo={"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/uniswap-uni-icon.png"} 
        name={"UNI"}
       percentile={crypto?.uniswap?.price_change_percentage_24h ?? null}
        dollars={crypto?.uniswap?.current_price ?? null}
       coinId="uniswap"
        />
         <GraphBox
         className={"hidden md:block"}
        logo={"https://assets.kraken.com/marketing/web/icons-uni-webp/s_cfg.webp?i=kds"} 
        name={"CFG"}
        percentile={crypto?.centrifuge?.price_change_percentage_24h ?? null}
        dollars={crypto?.centrifuge?.current_price ?? null}
       coinId="centrifuge"
        />
    </div>
   </div>

   


   <div className="block md:hidden ">
               <div className=' bg-blue-700 w-158 h-110 rounded-xl text-white p-8 mx-auto'>
                  <div className="text-center m-4 font-bold text-2xl">Get Started with KoinX</div>
                  <div className="text-center -m-4 font-bold text-2xl">for FREE</div>
                  <div className="text-center m-4 py-4 ">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports</div>
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/011/344/620/small/teenage-girl-is-using-digital-tablet-while-sitting-on-the-sofa-3d-character-illustration-png.png" className="w-52 mx-auto -mt-10"/>
                  <div className="bg-white text-black px-6 py-2  rounded-md w-fit mx-auto">
                <button className="flex items-center font-medium gap-2">
                  Get Started For FREE
                  <img
                    src="https://static.thenounproject.com/png/888647-200.png"
                    className="size-5"
                  />
                </button>
              </div>

                  <div className="py-10 ">
                    <div className='bg-white py-2 my-4 rounded-md text-black'> 
                      <span className="mx-auto font-bold text-2xl p-6">Trending Coins (24h)</span>
                      {/* <div className="flex">
                        <img src="https://cdn-icons-png.flaticon.com/512/14446/14446160.png" className="w-6 h-6 m-6"/>
                        <span className="font-medium py-11 -m-5 ">Ethereum(ETH)</span> 
                        <div className="mx-24 ">
                          <GreenBlock 
                        label={"8.21%"} className=" "
                        />
                        </div>
                      </div> */}

                      <div className="flex items-center justify-between px-9 -m-2">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/14446/14446160.png"
                            className="w-6 h-6"
                          />
                          <span className="font-medium">Ethereum (ETH)</span>
                        </div>
                        <GreenBlock
  value={crypto?.ethereum?.price_change_percentage_24h ?? null}
/>

                      </div>

                      <div className="flex items-center justify-between px-10 -m-4">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEEUJQPS_ARZeaL2PTiA5K0qDjwFzMoVQA&s"
                            className="w-6 h-6"
                          />
                          <span className="font-medium">Bitcoin (BTC)</span>
                        </div>
                        <GreenBlock value={crypto?.bitcoin?.price_change_percentage_24h ?? null} />


                      </div>

                      <div className="flex items-center justify-between px-9 -m-4">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://logowik.com/content/uploads/images/polygon-matic-icon3725.logowik.com.webp" 
                            className="w-8 h-7 "
                          />
                          <span className="font-medium">Polygon (Matic)</span>
                        </div>
                       <GreenBlock
  value={crypto?.solana?.price_change_percentage_24h ?? null}
/>


                      </div>
                      
                      
                  </div>
                  </div>
              </div>
             </div>
   </>
  )
}

export default Graphs


