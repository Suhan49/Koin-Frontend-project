

// function GraphBox({logo,name,percentile,dollars,graph,backgroundcolor,textcolor,className}) {
//   return (
//     <div className={`bg-white rounded-md pt-8 border-1 mt-8 p-2  w-65 h-45 ${className}`}>
//         <div className="flex gap-2 -mt-6">
//             <img src={logo} className="w-8 h-8"/>
//             <p className="font-medium text-xl opacity-60">{name}</p>
//             <p className={`${backgroundcolor} rounded-md px-2 mb-1 ${textcolor}`}>{percentile}</p>
//         </div>
//                     <span className="font-medium text-2xl pl-2 ">{dollars}</span>
//         <img src={graph} className="size-36 pl-6 w-60 -mt-9"/>

        
//     </div>
//   )
// }

// export default GraphBox

// import AllTradingGraphs from "../hooks/ALLCoinGraphs"
import GreenBlock from "./GreenBlock";
import SingleCoinGraph from "./SingleGraph";

function GraphBox({ logo, name, percentile, dollars, coinId, className }) {


  const graphColor = percentile >= 0 ? "#16a34a" : "#dc2626";
  return (
    <div className={`bg-white rounded-md pt-8 border-1 mt-8 p-2 w-65 h-45 ${className}`}>
      
   
      <div className="flex gap-2 -mt-6">
        <img src={logo} className="w-8 h-8"/>
        <p className="font-medium text-xl opacity-60">{name}</p>
        <GreenBlock value={percentile} className="-mt-1 pl-2 -ml-1 -mb-2 h-8"/>
      </div>

     
      <span className="font-medium text-2xl pl-2">${dollars}</span>

     
      <div className="-mt-4">
        <SingleCoinGraph coinId={coinId} coinName={name} strokeColor={graphColor} />
      </div>
    </div>
  );
}

export default GraphBox;