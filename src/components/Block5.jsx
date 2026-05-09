import TeamMembers from "./TeamMembers"


function Block5() {
  return (
    <div className='bg-white  rounded-md mt-5 px-6 py-8 '>
        <span className="font-medium text-3xl ">Team</span>
        <p className="max-w-210 lg:max-w-230 pt-2 font-medium opacity-70"> Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
        <TeamMembers 
        link={"https://static.bandonthewall.org/app/uploads/2017/03/17426377_10155983893762729_4182151704197896306_n-1.jpg"}
        name={"John Smith"}
        description={"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"}
        />

        <TeamMembers 
        link={"https://thelewisfoundation.org/wp-content/uploads/2022/12/elina-headshot.jpg"}
        name={"Elina Williams"}
        description={"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"}

        />

        <TeamMembers 
        link={"https://m.media-amazon.com/images/M/MV5BMGE3YmI5ZDMtODNlZi00NDRhLTk1ODMtNzY1YTljNGExYTZmXkEyXkFqcGc@._V1_QL75_UX328_.jpg"}
        name={"John Smith"}
                description={"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"}
            
        />
        <div className=""></div>
    </div>
  )
}

export default Block5