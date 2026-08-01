function NewInsights() {
  return (
    <div className="bg-white pb-4 rounded-md">
      <div className="flex flex-col lg:flex-row gap-6 mt-5">

        {/* First Card */}
        <div className="flex-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4">

          <img
            src="https://images.unsplash.com/photo-1716279083223-006db39251e1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8"
            alt="profit"
            className="w-28 h-28 sm:w-32 sm:h-24 rounded-lg object-cover"
          />

          <div className="flex-1 text-white text-center sm:text-left">
            <h3 className="text-xl font-bold">
              Calculate your
            </h3>

            <h3 className="text-xl font-bold mb-4">
              Profits
            </h3>

            <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 mx-auto sm:mx-0">
              Check Now
              <img
                src="https://static.thenounproject.com/png/888647-200.png"
                className="w-5 h-5"
                alt="arrow"
              />
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className="flex-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4">

          <img
            src="https://cdn-blog.supermoney.com/wp-content/uploads/2023/03/forex-trading-tax.jpeg"
            alt="tax"
            className="w-28 h-28 sm:w-32 sm:h-24 rounded-lg object-cover"
          />

          <div className="flex-1 text-white text-center sm:text-left">
            <h3 className="text-xl font-bold">
              Calculate your
            </h3>

            <h3 className="text-xl font-bold mb-4">
              Tax Liability
            </h3>

            <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 mx-auto sm:mx-0">
              Check Now
              <img
                src="https://static.thenounproject.com/png/888647-200.png"
                className="w-5 h-5"
                alt="arrow"
              />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default NewInsights;