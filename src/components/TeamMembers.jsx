function TeamMembers({ link, name, description }) {
  return (
    <div className="bg-blue-100 rounded-lg mt-5 p-5 flex flex-col lg:flex-row gap-6">

      {/* Left Section */}
      <div className="flex flex-col items-center lg:w-40 shrink-0">
        <img
          src={link}
          alt={name}
          className="w-32 h-32 rounded-lg object-cover"
        />

        <h3 className="mt-3 font-bold text-lg text-center">
          {name}
        </h3>

        <p className="text-sm text-gray-600 text-center">
          Designation here
        </p>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <p className="text-gray-700 leading-7 text-sm md:text-base">
          {description}
        </p>
      </div>

    </div>
  );
}

export default TeamMembers;