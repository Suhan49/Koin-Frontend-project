
// import Box from "./Box"
// import Graphs from "./Graphs"
// import GreenBlock from "./GreenBlock"
// import Overview from "./Overview"
// import TradingViewWidget from "./TradingViewWidget"
// // import { useCoin } from "../hooks/usecoin"
// import { ETH } from "../hooks/ETH"
// import { Polygon } from "../hooks/Polygon"
// import Crypto from "../hooks/Crypto"

// function Block1() {

// //  const coin = useCoin();

//  const eth = ETH();

//  const matic = Polygon();

//  const crypto = Crypto();




//   return (
//     <>
//     <div className='bg-blue-50 min-h-screen w-full pb-14'>
//         <div >
//         <div className=' px-2 md:px-12 flex space-x-2 pt-2'>
//           <span className='opacity-65'>Cryptocurrencies</span>
//           <img src='https://img.freepik.com/premium-vector/fast-forward-right-direction-arrow-icon_34480-1448.jpg' className='w-4 opacity-65'/>
//           <span className='font-medium'>{crypto ? crypto.name : "Loading..."}</span>
//         </div>

//         <div className='flex  px-2 md:px-12 py-4 space-x-3'>
//               <div className='bg-white  w-183 md:w-280 rounded-md overflow-hidden'>
//                  <div className='flex '>
//                     <img src={crypto?.image} className='w-12 m-4'/>
//                  <span className='py-6 font-bold text-2xl -ml-2'>{crypto ? crypto.name : "Loading..."}</span>
//                  <span className='py-6 font-bold  px-2 opacity-35 text-xl'>{crypto ? crypto.symbol.toUpperCase() : ""}</span>
                 
//                  <Box 
//                  label = {crypto ? `Rank #${crypto.market_cap_rank}` : "Rank"}
//                  className='bg-gray-500 m-5 text-white ' 
//                  />
//                  </div>
//                  <div className="px-4 flex">
//                 <span className="font-bold text-3xl mt-4"> ${crypto ? crypto.current_price.toLocaleString() : "Loading..."}</span>
//                 {/* <div className="bg-green-100 m-2 ">
//                     <img src="https://static.thenounproject.com/png/2228269-200.png" className="w-4 "/>
//                     <Box
//                 label={"2.52%"}
//                 className=" text-green-500 m-4"
//                 />
//                 </div> */}
//                 <GreenBlock 
//                 value={
//     crypto
//       ? `${crypto.price_change_percentage_24h.toFixed(2)}`
//       : "..."
//   }
//                 />
//                 <span className="py-6 font-medium opacity-50">24(H)</span>
//               </div>
//               <div className="-mt-3">
//                 <span className="px-4 font-medium ">₹ {crypto ? (crypto.current_price * 83).toLocaleString() : "..."}</span>
//               </div>
//               <div className="w-5xl h-0.5 opacity-55 m-4 bg-gray-400 rounded-sm"></div>
//               <div className="h-70 md:h-100">
//                 <TradingViewWidget/>
//               </div>
//               <div className="flex space-x-7 md:space-x-16 py-8 font-medium bg-blue-50">
//                 <span className="text-blue-700">Overview</span>
//                 <span>Fundamentals</span>
//                 <span>News Insights</span>
//                 <span>Sentiments</span>
//                 <span>Team</span>
//                 <span>Technicals</span>
//                 <span>Tokenomics</span>
//               </div>
//               <div className="w-16  bg-blue-700 h-1 rounded-md -m-5 mx-0.5 "></div>
              
//                  <div className="bg-blue-50">
//                   <Overview/>
//                  </div>
                    
                
              
//               </div>
              
              
//              <div className="hidden md:block">
//                <div className=' bg-blue-700 w-88 h-110 rounded-xl py-2 text-white '>
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
//                       <span className="mx-auto font-bold text-2xl p-6">Trending cryptos (24h)</span>
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
//                        <GreenBlock
//   value={
//     eth
//       ? `${eth.price_change_percentage_24h.toFixed(2)}%`
//       : "..."
//   }
// />

//                       </div>

//                       <div className="flex items-center justify-between px-10 -m-4">
//                         <div className="flex items-center gap-2">
//                           <img
//                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEEUJQPS_ARZeaL2PTiA5K0qDjwFzMoVQA&s"
//                             className="w-6 h-6"
//                           />
//                           <span className="font-medium">Bitcoin (BTC)</span>
//                         </div>
//                         <GreenBlock  value={
//     crypto
//       ? `${crypto.price_change_percentage_24h.toFixed(2)}`
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
//                        <GreenBlock
//   value={
//     matic
//       ? `${matic.price_change_percentage_24h.toFixed(2)}%`
//       : "..."
//   }
// />

//                       </div>
                      
                      
//                   </div>
//                   </div>
//               </div>
//              </div>
//         </div>
//     </div>
//     </div>
                
//                 <div>
//                   <Graphs />
//                 </div>

//     </>
//   )
// }

// export default Block1





import Box from "./Box";
import Graphs from "./Graphs";
import GreenBlock from "./GreenBlock";
import TradingViewWidget from "./TradingViewWidget";
import Crypto from "../hooks/Crypto";
import TabSection from "./Tabs";
import { useNavigate } from "react-router-dom";

function Block1() {
  const navigate = useNavigate();
  const crypto = Crypto();

  return (
    <>
      <div className="bg-blue-50 min-h-screen w-full overflow-x-hidden pb-14">

        {/* Main Container */}
        <div className="w-full px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 py-4 text-sm">
            <span className="text-gray-500">Cryptocurrencies</span>

            <img
              src="https://cdn.creazilla.com/icons/3261662/double-arrow-icon-md.png"
              className="w-3 h-3 opacity-60"
              alt=">"
            />

            <span className="font-medium">
              {crypto?.bitcoin?.name ?? "Loading..."}
            </span>
          </div>

          {/* Main Layout */}
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Left Section */}
            <div className="flex-1 bg-white rounded-xl overflow-hidden">

              {/* Coin Header */}
              <div className="flex flex-wrap items-center gap-3 p-5">

                <img
                  src={crypto?.bitcoin?.image}
                  className="w-10 h-10"
                  alt="Bitcoin"
                />

                <h1 className="font-bold text-xl md:text-2xl">
                  {crypto?.bitcoin?.name ?? "Loading..."}
                </h1>

                <span className="uppercase text-lg text-gray-400 font-semibold">
                  {crypto?.bitcoin?.symbol?.toUpperCase() ?? ""}
                </span>

                <Box
                  label={
                    crypto?.bitcoin?.market_cap_rank
                      ? `Rank #${crypto.bitcoin.market_cap_rank}`
                      : "Rank"
                  }
                  className="bg-gray-500 text-white"
                />

              </div>

              {/* Price */}
              <div className="flex flex-wrap items-center gap-3 px-5">

                <h2 className="text-3xl font-bold">
                  $
                  {crypto?.bitcoin?.current_price?.toLocaleString() ?? "..."}
                </h2>

                <GreenBlock
                  value={
                    crypto?.bitcoin?.price_change_percentage_24h ?? null
                  }
                />

                <span className="text-gray-500 font-medium">
                  24(H)
                </span>

              </div>

              {/* INR Price */}

              <div className="px-5 mt-2 mb-4">
                <span className="font-medium text-gray-700">
                  ₹{" "}
                  {crypto?.bitcoin?.current_price
                    ? (crypto.bitcoin.current_price * 83).toLocaleString()
                    : "..."}
                </span>
              </div>

              <div className="border-t border-gray-200"></div>

              {/* Trading View */}

              <div className="w-full h-[420px] md:h-[500px] overflow-hidden">
  <TradingViewWidget />
</div>

              {/* Tabs */}

              <TabSection crypto={crypto} />

            </div>

            {/* Right Sidebar Starts Here */}
              
              
                         {/* Right Sidebar */}
            <div className="hidden lg:flex lg:w-[350px] flex-col gap-6 shrink-0">

              {/* Blue Card */}
              <div className="bg-blue-700 rounded-xl text-white p-6">

                <h2 className="text-center font-bold text-2xl">
                  Get Started with KoinX
                </h2>

                <h2 className="text-center font-bold text-2xl">
                  for FREE
                </h2>

                <p className="text-center mt-5 text-sm leading-6">
                  With our range of features that you can equip for free,
                  KoinX allows you to be more educated and aware of your tax reports.
                </p>

                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/011/344/620/small/teenage-girl-is-using-digital-tablet-while-sitting-on-the-sofa-3d-character-illustration-png.png"
                  className="w-40 md:w-52 mx-auto my-6"
                  alt="girl"
                />

                <div className="flex justify-center">
                  <button
                    onClick={() => navigate("/signup")}
                    className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-2 font-semibold"
                  >
                    Get Started For FREE

                    <img
                      src="https://static.thenounproject.com/png/888647-200.png"
                      className="w-5 h-5"
                      alt="arrow"
                    />
                  </button>
                </div>

              </div>

              {/* Trending Card */}

              <div className="bg-white rounded-xl shadow-md p-5">

                <h2 className="text-xl font-bold mb-6">
                  Trending Cryptos (24h)
                </h2>

                <div>

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <img
                        src="https://cdn-icons-png.flaticon.com/512/14446/14446160.png"
                        className="w-7 h-7"
                        alt="ETH"
                      />

                      <span className="font-medium">
                        Ethereum (ETH)
                      </span>

                    </div>

                    <GreenBlock
                      value={crypto?.ethereum?.price_change_percentage_24h ?? null}
                    />

                  </div>

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEEUJQPS_ARZeaL2PTiA5K0qDjwFzMoVQA&s"
                        className="w-7 h-7"
                        alt="BTC"
                      />

                      <span className="font-medium">
                        Bitcoin (BTC)
                      </span>

                    </div>

                    <GreenBlock
                      value={crypto?.bitcoin?.price_change_percentage_24h ?? null}
                    />

                  </div>

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <img
                        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/solana-sol-icon-svg-download-png-5795323.png"
                        className="w-7 h-7"
                        alt="SOL"
                      />

                      <span className="font-medium">
                        Solana (SOL)
                      </span>

                    </div>

                    <GreenBlock
                      value={crypto?.solana?.price_change_percentage_24h ?? null}
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Bottom Graphs */}
        <div className="bg-white pt-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <Graphs crypto={crypto} />
        </div>
        </div>
        {/* Mobile Sidebar */}


                </div>
    </>
  );
}

export default Block1;