

function TeamMembers({link,name,description}) {
  return (
    <div className="bg-blue-100 rounded-md mt-5 px-6 pt-8 pb-2 flex flex-col md:flex-row  space-x-6 w-165 md:w-full">
        <div>
            <img src={link} className="rounded-md w-36 h-26  -mt-3 ml-60 md:-ml-2"/>
            <p className=" pl-68 md:pl-5 font-bold pt-2">{name}</p>
            <p className=" pl-65 md:pl-3 opacity-55 text-[14px] ">Designation here</p>
        </div>
        <div className=" w-150 md:w-180 text-center pt-2">{description}</div>
    </div>
  )
}

export default TeamMembers