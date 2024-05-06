import Marquee from "react-fast-marquee";
import redStar from "../../assets/picture/Star2.svg";
const MarqueeSlider = () => {
  return (
    <div>
      <Marquee speed={100}>
        <div className="flex items-center justify-between gap-6 py-5 my-4 text-2xl text-black lg:text-2xl ">
          <h2>UI Design</h2>
          <img className="w-8" src={redStar} alt="" />
          <h2>Graphic Design</h2>
          <img className="w-8" src={redStar} alt="" />
          <h2>Mobile App Development</h2>
          <img className="w-8" src={redStar} alt="" />
          <h2>UX Design</h2>
          <img className="w-8" src={redStar} alt="" />
          <h2>UI Design</h2>
          <img className="w-8" src={redStar} alt="" />
          <h2>Graphic Design</h2>
          <img className="w-8" src={redStar} alt="" />
          <h2>Mobile App Development</h2>
          <img className="w-8" src={redStar} alt="" />
          <h2>UX Design</h2>
          <img className="w-8 mr-5" src={redStar} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
