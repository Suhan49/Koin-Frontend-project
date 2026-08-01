import { useState, useRef, useEffect } from "react";
import Overview from "./Overview";
import Sentiment from "./Sentiment";
import Block5 from "./Block5";
import NewInsights from "./NewInsights";
import Tokenomics from "./Tokenomics";
import AboutBitcoin from "./AboutBitcoin";

function TabSection({ crypto }) {
  const tabs = [
    "Overview",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  const [activeTab, setActiveTab] = useState("Overview");
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
  });

  const tabRefs = useRef([]);

  useEffect(() => {
    const index = tabs.indexOf(activeTab);

    if (tabRefs.current[index]) {
      const tab = tabRefs.current[index];

      setUnderlineStyle({
        left: tab.offsetLeft,
        width: tab.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="w-full">

      {/* Tabs */}
      <div className="relative border-b border-gray-300 bg-blue-50 overflow-x-auto">

        <div className="flex whitespace-nowrap min-w-max px-4">

          {tabs.map((tab, index) => (
            <button
              key={tab}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => setActiveTab(tab)}
              className={`relative py-5 px-5 text-sm md:text-base font-medium transition-colors ${
                activeTab === tab
                  ? "text-blue-700"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
              {tab}
            </button>
          ))}

          <span
            className="absolute bottom-0 h-1 bg-blue-700 transition-all duration-300"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </div>

      </div>

      {/* Content */}

      <div className="mt-4">

        {activeTab === "Overview" && (
          <Overview crypto={crypto?.bitcoin} />
        )}

        {activeTab === "News Insights" && (
          <NewInsights />
        )}

        {activeTab === "Sentiments" && (
          <Sentiment crypto={crypto} />
        )}

        {activeTab === "Team" && (
          <Block5 />
        )}

        {activeTab === "Technicals" && (
          <AboutBitcoin />
        )}

        {activeTab === "Tokenomics" && (
          <Tokenomics />
        )}

      </div>

    </div>
  );
}

export default TabSection;