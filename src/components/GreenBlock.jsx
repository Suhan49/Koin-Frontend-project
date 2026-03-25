function GreenBlock({ value ,className }) {
  const isPositive = value >= 0;

  return (
    <div
      className={`px-4 py-2 m-4 rounded-md inline-flex items-center gap-1 ${className}
      ${isPositive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
    >
      <img
        src={
          isPositive
            ? "https://static.thenounproject.com/png/2228269-200.png"
            : "https://cdn-icons-png.flaticon.com/512/58/58979.png"
        }
        className={isPositive ? "size-4" : "size-2"}
      />
      <span className="font-medium">
        {/* {value}% */}
        {value != null ? `${value.toFixed(2)}%` : "..."}

      </span>
    </div>
  );
}

export default GreenBlock;