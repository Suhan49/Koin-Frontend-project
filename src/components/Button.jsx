function Button({ label, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full sm:w-auto text-white bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium rounded-lg text-sm px-4 py-2 transition-colors ${className}`}
    >
      {label}
    </button>
  );
}

export default Button



