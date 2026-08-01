import TeamMembers from "./TeamMembers";

function Block5() {
  return (
    <div className="bg-white rounded-lg mt-5 p-6">

      <h2 className="text-3xl font-semibold">
        Team
      </h2>

      <p className="mt-4 text-gray-600 leading-7">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing
        arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id
        pretium quam. Facilisis purus convallis quam augue.
      </p>

      <div className="mt-8 space-y-6">

        <TeamMembers
          link="https://static.bandonthewall.org/app/uploads/2017/03/17426377_10155983893762729_4182151704197896306_n-1.jpg"
          name="John Smith"
          description="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdum."
        />

        <TeamMembers
          link="https://thelewisfoundation.org/wp-content/uploads/2022/12/elina-headshot.jpg"
          name="Elina Williams"
          description="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdum."
        />

        <TeamMembers
          link="https://m.media-amazon.com/images/M/MV5BMGE3YmI5ZDMtODNlZi00NDRhLTk1ODMtNzY1YTljNGExYTZmXkEyXkFqcGc@._V1_QL75_UX328_.jpg"
          name="John Smith"
          description="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdum."
        />

      </div>

    </div>
  );
}

export default Block5;