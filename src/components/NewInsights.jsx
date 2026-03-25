import React from 'react'

function NewInsights() {
  return (
    <div className='bg-white pb-4 rounded-md'>
         <div className=" flex flex-col md:flex-row space-x-16 pl-12 " >
          <div class="bg-gradient-to-r from-green-400 to-blue-500 p-8 text-white rounded-md mt-4 w-110 h-36 flex space-x-6 ">
              <div>
              <img src="https://images.unsplash.com/photo-1716279083223-006db39251e1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8" className="rounded-md w-36 h-26 -mt-3 -ml-2"/>
            </div>
             <div className="flex flex-col font-bold text-xl -mt-4"> 
                <span>Calculate your</span>
                <span>Profits</span>
                 <div className="bg-white rounded-md mt-2 ">
                  <button className="text-black flex  text-[16px] p-2 gap-2 ">
                    Check Now
                    <img src="https://static.thenounproject.com/png/888647-200.png" className="size-5 mt-1"/>
                  </button>
                 </div>
              </div>
</div>
        <div class="bg-gradient-to-r from-orange-400 to-red-500 p-8 text-white rounded-md mt-4 w-110 h-36 flex space-x-4">
              <div>
              <img src="https://cdn-blog.supermoney.com/wp-content/uploads/2023/03/forex-trading-tax.jpeg" className="rounded-md w-36 h-26 -mt-3 -ml-2"/>
            </div>
             <div className="flex flex-col font-bold text-xl -mt-4"> 
                <span>Calculate your tax</span>
                <span>liability</span>
                 <div className="bg-white rounded-md mt-2 mr-8">
                  <button className="text-black flex  text-[16px] p-2 gap-2 ">
                    Check Now
                    <img src="https://static.thenounproject.com/png/888647-200.png" className="size-5 mt-1"/>
                  </button>
                 </div>
              </div>
</div>



         </div>
    </div>
  )
}

export default NewInsights