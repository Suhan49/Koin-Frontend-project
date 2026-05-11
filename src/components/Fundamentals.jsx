import FundamentalsBlock from "./FundamentalsBlock"
import Crypto from "../hooks/Crypto"

function Fundamentals() {
    const crypto = Crypto()?.bitcoin;

  return (
    <div className="bg-white pl-4 pb-6">
         <div className="flex space-x-2">
                    <span className="font-medium text-2xl  ">Fundamentals </span>
                    <img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cartoon-exclamation-mark-icon-free-button-image_2291932.jpg" className="w-6 h-6 rotate-180 mt-1 opacity-70"/>
                  </div>
                  <div className="flex flex-row space-x-12 lg:space-x-15 -mb-6">
                    <div>
                    <FundamentalsBlock 
                    name={"Bitcoin"} price={crypto ? `$${crypto.current_price.toLocaleString()}` : "..."} className={" space-x-55 lg:space-x-73"}/>
                    <FundamentalsBlock 
                    name={"24h Low / 24h High"} price={
  crypto
    ? `$${crypto.low_24h.toLocaleString()} / $${crypto.high_24h.toLocaleString()}`
    : "..."
} className={"space-x-15 lg:space-x-32"}/>
                    <FundamentalsBlock
  name={"7d Low / 7d High"}
  price={
    crypto?.price_change_percentage_7d_in_currency != null
      ? `${crypto.price_change_percentage_7d_in_currency.toFixed(2)}%`
      : "..."
  } className={"space-x-39 lg:space-x-57"}
/>
                    <FundamentalsBlock 
                    name={"Trading Volume"} price={crypto ? `$${crypto.total_volume.toLocaleString()}` : "..."} className={"space-x-24 lg:space-x-43"}/>
                    <FundamentalsBlock 
                    name={"Market Cap Rank"} price={crypto ? `#${crypto.market_cap_rank}` : "..."} className={"space-x-45 lg:space-x-64"}/>
                  </div>
                  <div>
                    <FundamentalsBlock 
                    name={"Market Cap"} price={crypto ? `$${crypto.market_cap.toLocaleString()}` : "..."} className={"space-x-27 lg:space-x-45"}/>
                    <FundamentalsBlock 
                    name={"Market Cap Dominence"} price={
  crypto
    ? `${((crypto.market_cap / crypto.total_volume) * 100).toFixed(2)}%`
    : "..."
} className={"space-x-23 lg:space-x-40"}/>
                    <FundamentalsBlock 
                    name={"Volume / Market Cap"} price={
  crypto
    ? (crypto.total_volume / crypto.market_cap).toFixed(4)
    : "..."
} className={"space-x-30 lg:space-x-49"}/>
                    <div className="mt-2 " >
        <span className="opacity-60 ">All-Time High</span>
        <span className=" pl-25 lg:pl-44">{crypto ? `$${crypto.ath.toLocaleString()}` : "..."} </span>
        <span className="text-red-700 ">{crypto ? `${crypto.ath_change_percentage.toFixed(2)}%` : "..."}</span>
    </div>
    <div className="text-xs pl-65 lg:pl-83 opacity-75">{crypto
  ? new Date(crypto.ath_date).toLocaleDateString()
  : "..."}</div>
    <div className="w-83 lg:w-100 h-0.5 opacity-55  -mx-1 bg-gray-400 rounded-sm"></div>
                    <div className="mt-2 " >
        <span className="opacity-60 ">All-Time Low</span>
        <span className="pl-25 lg:pl-43">{crypto ? `$${crypto.atl.toLocaleString()}` : "..."}</span>
        <span className="text-green-600">{crypto ? `${crypto.atl_change_percentage.toFixed(2)}%` : "..."}</span>
    </div>
    <div className="text-xs pl-65 lg:pl-83 opacity-75">{crypto
  ? new Date(crypto.atl_date).toLocaleDateString()
  : "..."}</div>
    <div className="w-83 lg:w-100 h-0.5 opacity-55  -mx-1 bg-gray-400 rounded-sm"></div>
                  </div>
                  </div>
    </div>
  )
}

export default Fundamentals