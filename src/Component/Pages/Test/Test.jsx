import { Swiper, SwiperSlide } from "swiper/react";

import { BiSolidQuoteAltLeft } from "react-icons/bi";
import profile from "../../../assets/picture/profile.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Test.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa6";

const Test = () => {
  return (
    <div className="bg-[#8274EC] ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,

          modifier: 2,
          slideShadows: true,
        }}
        loop={false}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className=""
      >
        <SwiperSlide style={{}}>
          <div className="">
            <BiSolidQuoteAltLeft className="text-6xl text-[#D9D9D9] "></BiSolidQuoteAltLeft>
            <div className="text-center text-black ">
              <p className="text-lg font-medium text-[#181818]">
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
                  className="absolute top-3 "
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
        </SwiperSlide>
        <SwiperSlide style={{}}>
          <div>
            <BiSolidQuoteAltLeft className="text-6xl text-[#D9D9D9] "></BiSolidQuoteAltLeft>
            <div className="text-center text-black ">
              <p className="text-lg font-medium text-[#181818]">
                consultation discover apartments. ndulgence off under folly
                death wrote cause her way spite. Plan upon yet way get cold spot
                its week. Almost do am or limits hearts 2.
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
                  className="absolute top-3 "
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <BiSolidQuoteAltLeft className="text-6xl text-[#D9D9D9] "></BiSolidQuoteAltLeft>
            <div className="text-center text-black ">
              <p className="text-lg font-medium text-[#181818]">
                consultation discover apartments. ndulgence off under folly
                death wrote cause her way spite. Plan upon yet way get cold spot
                its week. Almost do am or limits hearts 3.
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
                  className="absolute top-3 "
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Test;
