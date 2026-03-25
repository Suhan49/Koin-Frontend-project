

function FundamentalsBlock( {name,price,className}) {
  return (
    <>
    <div className={` mt-4  ${className}`}>
        <span className="opacity-60">{name}</span>
        <span>{price}</span>
    </div>
    <div className="w-165 md:w-100 h-0.5 opacity-55 m-2 -mx-1 bg-gray-400 rounded-sm"></div>
    </>
    
  )
}

export default FundamentalsBlock




