import { useState, useRef, useEffect } from "react";
import Overview from "./Overview";
// import Fundamentals from "./Fundamentals";
import Sentiment from "./Sentiment";
import Block5 from "./Block5";
import NewInsights from "./NewInsights";
import Tokenomics from "./Tokenomics";
import AboutBitcoin from "./AboutBitcoin";


function TabSection() {
  const tabs = [
    "Overview",
    // "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  const [activeTab, setActiveTab] = useState("Overview");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef([]);


  useEffect(() => {
    const index = tabs.indexOf(activeTab);
    if (tabRefs.current[index]) {
      const tab = tabRefs.current[index];
      setUnderlineStyle({ left: tab.offsetLeft, width: tab.offsetWidth });
    }
  }, [activeTab]);

  return (
    <div className="relative">
      
      <div className="flex space-x-17 lg:space-x-25 py-8 font-medium bg-blue-50 relative">
        {tabs.map((tab, index) => (
          <span
            key={tab}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer ${
              activeTab === tab ? "text-blue-700" : "text-black"
            }`}
          >
            {tab}
          </span>
        ))}

        
        <span
          className="absolute bottom-0 h-1 bg-blue-700 rounded-md transition-all duration-300"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
          }}
        ></span>
      </div>

      
      <div className="bg-blue-50 mt-4">
        {activeTab === "Overview" && <Overview />}
        {/* {activeTab === "Fundamentals" && <Fundamentals/>} */}
        {activeTab === "News Insights" && <NewInsights/>}
        {activeTab === "Sentiments" && <Sentiment/>}
        {activeTab === "Team" && <Block5/>}
        {activeTab === "Technicals" && <AboutBitcoin/>}
        {activeTab === "Tokenomics" && <Tokenomics/>}
      </div>
    </div>
  );
}

export default TabSection;