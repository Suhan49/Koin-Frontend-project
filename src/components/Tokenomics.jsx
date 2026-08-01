import { useEffect, useState } from "react";

function Tokenomics() {
  const [tokenomics, setTokenomics] = useState({
    crowdsale: 0,
    foundation: 0,
  });

  useEffect(() => {
    const fetchTokenomics = async () => {
      try {
        const data = {
          crowdsale: 80,
          foundation: 20,
        };

        setTokenomics(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTokenomics();
  }, []);

  const total =
    tokenomics.crowdsale + tokenomics.foundation || 1;

  const crowdsalePercent =
    (tokenomics.crowdsale / total) * 100;

  const foundationPercent =
    (tokenomics.foundation / total) * 100;

  return (
    <div className="bg-white rounded-lg mt-6 p-6">

      <h2 className="text-3xl font-semibold">
        Tokenomics
      </h2>

      <h3 className="text-xl font-semibold mt-5 mb-6">
        Initial Distribution
      </h3>

      {/* Chart + Labels */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

        {/* Donut Chart */}
        <div className="relative w-44 h-44 shrink-0">

          <div
            className="w-full h-full rounded-full"
            style={{
              background: `conic-gradient(
                #2563eb 0% ${crowdsalePercent}%,
                #f59e0b ${crowdsalePercent}% ${
                crowdsalePercent + foundationPercent
              }%,
                #e5e7eb 0%
              )`,
            }}
          />

          <div className="absolute inset-6 bg-white rounded-full flex items-center justify-center">
            <span className="font-bold text-lg">
              {crowdsalePercent.toFixed(0)}%
            </span>
          </div>

        </div>

        {/* Labels */}
        <div className="space-y-5">

          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-blue-600"></div>

            <span className="text-gray-700">
              Crowdsale investors:
              <strong className="ml-2">
                {crowdsalePercent.toFixed(0)}%
              </strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-orange-500"></div>

            <span className="text-gray-700">
              Foundation:
              <strong className="ml-2">
                {foundationPercent.toFixed(0)}%
              </strong>
            </span>
          </div>

        </div>

      </div>

      {/* Description */}
      <p className="mt-8 text-gray-600 leading-7">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
        ornare vestibulum nunc dignissim vel consequat. Leo etiam
        nascetur bibendum amet enim sit eget leo amet. At metus orci
        augue fusce eleifend lectus eu fusce adipiscing. Volutpat
        ultrices nibh sodales massa habitasse urna felis augue.
        Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum
        eget in at curabitur sem posuere facilisis vitae. Sed lorem
        sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi
        eu ac risus.
      </p>

    </div>
  );
}

export default Tokenomics;