function Box({ label,  className = "" }) {
  return (
    <box
      type="button"
      className={`w-full sm:w-auto  focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold rounded-md text-sm px-4 py-2 transition-colors ${className}`}
    >
      {label}
    </box>
  );
}

export default Box