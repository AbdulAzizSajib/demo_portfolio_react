import { BiSolidQuoteAltLeft } from "react-icons/bi";
import profile from "../../../assets/picture/profile.png";
import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div>
      <section className="bg-[#8274ec]">
        <div className="relative flex items-center justify-center py-24 px-14">
          <div className="z-30 w-full  lg:h-[386px] lg:w-[686px] flex-shrink-0 rounded-2xl  bg-white px-6 py-12 ">
            <BiSolidQuoteAltLeft className="text-6xl text-[#D9D9D9] "></BiSolidQuoteAltLeft>
            <div className="text-center text-black ">
              <p className="lg:text-lg font-medium text-[#181818]">
                consultation discover apartments. ndulgence off under folly
                death wrote cause her way spite. Plan upon yet way get cold spot
                its week. Almost do am or limits hearts 1.
              </p>
              <h2 className="mt-1 text-2xl font-bold">Jhon Smith</h2>
              <p className="mb-2 text-lg font-medium">Product Desiger</p>
              <div className="flex items-center justify-center gap-1 text-[#ec1352]">
                <FaStar className="text-2xl"></FaStar>
                <FaStar className="text-2xl"></FaStar>
                <FaStar className="text-2xl"></FaStar>
                <FaStar className="text-2xl"></FaStar>
                <FaStar className="text-2xl"></FaStar>
              </div>
              {/* .. */}
              <div className="relative flex items-center justify-center ">
                <svg
                  className="absolute top-2 lg:top-10 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="108"
                  height="108"
                  viewBox="0 0 108 108"
                  fill="none"
                >
                  <circle
                    cx="54"
                    cy="54"
                    r="50"
                    stroke="#7352F6"
                    strokeWidth="10"
                  />
                  <clipPath id="circleClip">
                    <circle cx="54" cy="54" r="50" />
                  </clipPath>
                  <image
                    className="absolute rounded-full"
                    href={profile}
                    width="105"
                    height="105"
                    clipPath="url(#circleClip)"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute w-full z-20 lg:h-[335px] lg:w-[722px] flex-shrink-0 rounded-2xl bg-white opacity-50"></div>

          <div className="absolute w-full z-10 lg:h-[297px] lg:w-[756px] flex-shrink-0 rounded-2xl bg-white opacity-20"></div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
