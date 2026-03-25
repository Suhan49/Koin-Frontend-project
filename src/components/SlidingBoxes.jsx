import { useRef } from "react";

export default function SlidingBoxes() {
  const containerRef = useRef(null);


  const scroll = (direction) => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      containerRef.current.scrollBy({
        left: direction === "next" ? width : -width,
        behavior: "smooth",
      });
    }
  };

  
  const boxes = [
    {
      bg: "bg-blue-100",
      img: "https://cdn-icons-png.flaticon.com/512/9068/9068670.png",
      title: "Lorem ipsum dolor sit amet consectetur",
      desc: "Dui vel quis dignissim mattis enim tincidunt.",
      extra: "Ac phasellus risus est faucibus metus quis...",
    },
    {
      bg: "bg-green-100",
      img: "https://img.pikbest.com/png-images/20240529/arrow-business-up-sign-icon-3d-symbol-growth_10588094.png!sw800",
      title: "Another Box Title",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      extra: "Amet sapien quam viverra adipiscing condimentum...",
    },
    {
      bg: "bg-yellow-100",
      img: "https://cdn-icons-png.flaticon.com/512/2910/2910761.png",
      title: "Extra Box Example",
      desc: "Quick description of box content.",
      extra: "More details can go here...",
    },
    {
      bg: "bg-purple-100",
      img: "https://cdn-icons-png.flaticon.com/512/2910/2910755.png",
      title: "Fourth Box",
      desc: "Short explanation here.",
      extra: "Optional extra info here.",
    },
  ];

  return (
    <div className="relative w-full mt-4">
      
      <button
        onClick={() => scroll("prev")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10 opacity-80 hover:opacity-100"
      >
        &#8249;
      </button>
      <button
        onClick={() => scroll("next")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10 opacity-80 hover:opacity-100"
      >
        &#8250;
      </button>

      
      <div
        ref={containerRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide px-2"
      >
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`${box.bg} rounded-md p-4 min-w-[300px] flex-shrink-0`}
          >
            <div className="flex space-x-3">
              <img src={box.img} className="w-10 h-10" />
              <p className="font-medium max-w-[200px]">{box.title}</p>
            </div>
            <p className="pl-12 opacity-80 max-w-[250px]">{box.desc}</p>
            <p className="pl-12 opacity-70 max-w-[250px] mt-1">{box.extra}</p>
          </div>
        ))}
      </div>
    </div>
  );
}