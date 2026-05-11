

function TeamMembers({link,name,description}) {
  return (
    <div className="bg-blue-100 rounded-md mt-5 px-6 pt-8 pb-2 flex flex-col lg:flex-row  space-x-6 w-full">
        <div>
            <img src={link} className="rounded-md w-36 h-26  -mt-3 mx-auto lg:-ml-2"/>
            <p className=" pl-70 lg:pl-5 font-bold pt-2">{name}</p>
            <p className=" pl-68 lg:pl-3 opacity-55 text-[14px] ">Designation here</p>
        </div>
        <div className=" w-160 lg:w-180 text-center pt-2">{description}</div>
    </div>
  )
}

export default TeamMembers