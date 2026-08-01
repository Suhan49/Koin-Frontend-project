import SlidingBoxes from "./SlidingBoxes";

function Sentiment({ crypto }) {

const buy = Math.max(0,crypto?.bitcoin?.price_change_percentage_24h ?? 0 );

const sell = Math.max(0,-(crypto?.bitcoin?.price_change_percentage_24h ?? 0) );
const hold = 100 - (buy + sell);


const total = buy + sell + hold;

const buyPercent = total ? (buy / total) * 100 : 0;
const sellPercent = total ? (sell / total) * 100 : 0;
const holdPercent = total ? (hold / total) * 100 : 0;



  return (
    <div>
        <div className='bg-white  rounded-md mt-5 px-6 py-8'>
                <span className="font-medium text-4xl ">Sentiment</span>
                <div className="flex space-x-3 pt-2">
                    <span className="font-medium text-xl opacity-80">Key Events</span>
                    <img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cartoon-exclamation-mark-icon-free-button-image_2291932.jpg" className="w-6 h-6 rotate-180 mt-1 opacity-70" />
                </div>
                {/* <div className="flex space-x-4 mt-2">
                    <div className="bg-blue-100 rounded-md p-4 ">
                        <div className=" flex space-x-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/9068/9068670.png" className="w-10 h-10"/>
                        <p className="font-medium max-w-90">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
                        </div>
                                        <p className="pl-12 opacity-80 max-w-110">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
        
                    </div>
        
                    <div className="bg-green-100 rounded-md p-4  ">
                       <div className=" flex space-x-3">
                         <img src="https://img.pikbest.com/png-images/20240529/arrow-business-up-sign-icon-3d-symbol-growth_10588094.png!sw800" className="w-10 h-10"/>
                        <p className="font-medium max-w-90">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>
                       </div>
                       <p  className="pl-12 opacity-80 max-w-110">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra 
        in a adipisinc metus quis del</p>
                    </div>
                    
                
                </div> */}
                <SlidingBoxes/>
<div className="mt-6">
  <div className="flex items-center gap-2">
    <span className="font-medium text-xl opacity-80">
      Analyst Estimates
    </span>

    <img
      src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cartoon-exclamation-mark-icon-free-button-image_2291932.jpg"
      className="w-5 h-5 rotate-180 opacity-70"
      alt="info"
    />
  </div>

  <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">

    {/* Left Circle */}
    <div className="flex justify-center">
      <div className="bg-green-50 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center">
        <span className="font-bold text-green-600 text-2xl sm:text-3xl">
          {buyPercent.toFixed(0)}%
        </span>
      </div>
    </div>

    {/* Right Bars */}
    <div className="w-full flex-1 space-y-4">

      {/* Buy */}
      <div className="flex items-center gap-3">
        <span className="w-12 text-sm text-gray-600">Buy</span>

        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-2 bg-green-600 rounded-full"
            style={{ width: `${buyPercent}%` }}
          />
        </div>

        <span className="w-12 text-right text-sm">
          {buyPercent.toFixed(0)}%
        </span>
      </div>

      {/* Hold */}
      <div className="flex items-center gap-3">
        <span className="w-12 text-sm text-gray-600">Hold</span>

        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-2 bg-gray-500 rounded-full"
            style={{ width: `${holdPercent}%` }}
          />
        </div>

        <span className="w-12 text-right text-sm">
          {holdPercent.toFixed(0)}%
        </span>
      </div>

      {/* Sell */}
      <div className="flex items-center gap-3">
        <span className="w-12 text-sm text-gray-600">Sell</span>

        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-2 bg-red-600 rounded-full"
            style={{ width: `${sellPercent}%` }}
          />
        </div>

        <span className="w-12 text-right text-sm">
          {sellPercent.toFixed(0)}%
        </span>
      </div>

    </div>
  </div>
</div>
</div>
</div>
  )
}

export default Sentiment