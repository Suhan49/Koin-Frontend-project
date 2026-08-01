function FundamentalsBlock({ name, price }) {
  return (
    <div className="border-b border-gray-300 py-4">
      <div className="flex justify-between items-start gap-4">
        <span className="text-gray-500">
          {name}
        </span>

        <span className="font-medium text-right break-words max-w-[55%]">
          {price}
        </span>
      </div>
    </div>
  );
}

export default FundamentalsBlock;




