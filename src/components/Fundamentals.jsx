import FundamentalsBlock from "./FundamentalsBlock";

function Fundamentals({ crypto }) {
  return (
    <div className="bg-white mt-8">

      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-semibold">Fundamentals</h2>

        <img
          src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cartoon-exclamation-mark-icon-free-button-image_2291932.jpg"
          className="w-5 h-5 rotate-180 opacity-70"
          alt=""
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT COLUMN */}

        <div>

          <FundamentalsBlock
            name="Bitcoin"
            price={crypto ? `$${crypto.current_price.toLocaleString()}` : "..."}
          />

          <FundamentalsBlock
            name="24h Low / 24h High"
            price={
              crypto
                ? `$${crypto.low_24h.toLocaleString()} / $${crypto.high_24h.toLocaleString()}`
                : "..."
            }
          />

          <FundamentalsBlock
            name="7d Low / 7d High"
            price={
              crypto?.price_change_percentage_7d_in_currency != null
                ? `${crypto.price_change_percentage_7d_in_currency.toFixed(2)}%`
                : "..."
            }
          />

          <FundamentalsBlock
            name="Trading Volume"
            price={crypto ? `$${crypto.total_volume.toLocaleString()}` : "..."}
          />

          <FundamentalsBlock
            name="Market Cap Rank"
            price={crypto ? `#${crypto.market_cap_rank}` : "..."}
          />

        </div>

        {/* RIGHT COLUMN */}

        <div>

          <FundamentalsBlock
            name="Market Cap"
            price={crypto ? `$${crypto.market_cap.toLocaleString()}` : "..."}
          />

          <FundamentalsBlock
            name="Market Cap Dominance"
            price={
              crypto
                ? `${((crypto.market_cap / crypto.total_volume) * 100).toFixed(2)}%`
                : "..."
            }
          />

          <FundamentalsBlock
            name="Volume / Market Cap"
            price={
              crypto
                ? (crypto.total_volume / crypto.market_cap).toFixed(4)
                : "..."
            }
          />

          <div className="py-2 border-b">

            <div className="flex justify-between items-center flex-wrap gap-2">

              <span className="text-gray-500">
                All-Time High
              </span>

              <div className="text-right ">
                <span>
                  ${crypto ? crypto.ath.toLocaleString() : "..."}
                </span>

                <span className="text-red-600 text-sm ">
                  {crypto ? `${crypto.ath_change_percentage.toFixed(2)}%` : "..."}
                </span>

                <div className="text-xs text-gray-500 ">
                  {crypto
                    ? new Date(crypto.ath_date).toLocaleDateString()
                    : "..."}
                </div>

              </div>

            </div>

          </div>

          <div className="py-2 border-b">

            <div className="flex justify-between items-center flex-wrap gap-2">

              <span className="text-gray-500">
                All-Time Low
              </span>

              <div className="text-right">
                <span>
                  ${crypto ? crypto.atl.toLocaleString() : "..."}
                </span>

                <span className="text-green-600 text-sm">
                  {crypto ? `${crypto.atl_change_percentage.toFixed(2)}%` : "..."}
                </span>

                <div className="text-xs text-gray-500">
                  {crypto
                    ? new Date(crypto.atl_date).toLocaleDateString()
                    : "..."}
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Fundamentals;