

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

import GreenBlock from "./GreenBlock";
import SingleCoinGraph from "./SingleGraph";

function GraphBox({
  logo,
  name,
  percentile,
  dollars,
  coinId,
  className,
}) {

  const positive = (percentile ?? 0) >= 0;

  return (
    <div
      className={`bg-white rounded-md border mt-8 px-4 w-64  ${className}`}
    >
      <div className="flex items-center gap-2">
        <img src={logo} className="w-8 h-8" />

        <p className="font-semibold">{name}</p>

        <GreenBlock value={percentile} />
      </div>

      <div className="text-xl font-bold mt-2">
        ${dollars?.toLocaleString()}
      </div>

      <SingleCoinGraph
        coinId={coinId}
        positive={positive}
        strokeColor={positive ? "#16a34a" : "#dc2626"}
      />
    </div>
  );
}

export default GraphBox;