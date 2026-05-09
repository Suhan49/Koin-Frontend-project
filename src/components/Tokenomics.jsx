import { useEffect, useState } from "react";


function Tokenomics() {
  // Tokenomics state
  const [tokenomics, setTokenomics] = useState({
    crowdsale: 0,
    foundation: 0,
  });

  useEffect(() => {
    
    const fetchTokenomics = async () => {
      try {
        // Replace this with your real API call
        // const res = await fetch("YOUR_API_ENDPOINT");
        // const data = await res.json();

        // Demo/fallback values
        const data = {
          crowdsale: 80,
          foundation: 20,
        };

        setTokenomics({
          crowdsale: data.crowdsale,
          foundation: data.foundation,
        });
      } catch (err) {
        console.error("Error fetching tokenomics:", err);
      }
    };

    fetchTokenomics();
  }, []);

  
  const total = tokenomics.crowdsale + tokenomics.foundation || 1; // avoid division by zero
  const crowdsalePercent = (tokenomics.crowdsale / total) * 100;
  const foundationPercent = (tokenomics.foundation / total) * 100;

  return (
    <>
      <div className=" bg-white rounded-md mt-5 px-6 py-8">
        <span className="font-medium text-3xl">Tokenomics</span>
        <p className="font-medium text-xl pt-4">Initial Distribution</p>

        <div className="flex items-center gap-10 p-6 rounded-lg w-fit">
          
          <div className="relative w-40 h-40">
            <div
              className="w-full h-full rounded-full opacity-95"
              style={{
                background: `conic-gradient(
                  #1d4ed8 ${crowdsalePercent}%,
                  #f59e0b ${crowdsalePercent}% ${crowdsalePercent + foundationPercent}%,
                  #e5e7eb 0
                )`,
              }}
            ></div>
            <div className="absolute inset-6 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold">
                {Math.round(crowdsalePercent)}% / {Math.round(foundationPercent)}%
              </span>
            </div>
          </div>

          {/* Labels */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-700 rounded-full opacity-95"></div>
              <span className="text-lg opacity-75">
                Crowdsale investors: {crowdsalePercent.toFixed(0)}%
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-orange-500 rounded-full opacity-95"></div>
              <span className="text-lg opacity-75">
                Foundation: {foundationPercent.toFixed(0)}%
              </span>
            </div>
          </div>
        </div>

        <p className="max-w-210 lg:max-w-230 pt-2 font-medium opacity-70">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac
          risus.
        </p>
      </div>

      
    </>
  );
}

export default Tokenomics;