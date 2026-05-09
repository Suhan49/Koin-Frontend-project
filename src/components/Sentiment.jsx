import Crypto from "../hooks/Crypto";
import SlidingBoxes from "./SlidingBoxes";

function Sentiment() {

        const crypto = Crypto();

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
          <div className="flex space-x-2">
            <span className="font-medium text-xl opacity-80">
              Analyst Estimates
            </span>
            <img
              src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cartoon-exclamation-mark-icon-free-button-image_2291932.jpg"
              className="w-6 h-6 rotate-180 mt-1 opacity-70"
            />
          </div>
        
          <div className="flex pt-6">
        
            <div>
              <span className="bg-green-50 h-35 w-35 rounded-full flex items-center justify-center font-bold text-green-500 text-3xl">
                {buyPercent.toFixed(0)}%
              </span>
            </div>
        
        
            <div className="w-full">
              
        
              <div className="flex pl-16 opacity-70 pt-4 items-center gap-3">
                <span>Buy</span>
                <div
                    className="h-2 bg-green-600 rounded-sm ml-3" 
                    style={{ width: `${buyPercent}%` }}
                  ></div>
                <span>{buyPercent.toFixed(0)}%</span>
              </div>
        
        
              <div className="flex pl-16 opacity-70 pt-4 items-center gap-3">
                <span>Hold</span>
                <div
                    className="h-2 bg-gray-400 rounded-sm"
                    style={{ width: `${holdPercent}%` }}
                  ></div>
                <span>{holdPercent.toFixed(0)}%</span>
              </div>
        
        
              <div className="flex pl-16 opacity-70 pt-4 items-center gap-3">
                <span>Sell</span>
                 <div
                    className="h-2 bg-red-600 rounded-sm ml-3"
                    style={{ width: `${sellPercent}%` }}
                  ></div>
                <span>{sellPercent.toFixed(0)}%</span>
              </div>
        
            </div>
          </div>
        </div>
               
                           
                
            </div>
    </div>
  )
}

export default Sentiment