import thum1 from "../../../assets/picture/thum1.png";
import thum2 from "../../../assets/picture/thum2.png";
import { FaArrowRightLong } from "react-icons/fa6";
const LatestVlogs = () => {
  return (
    <div>
      <section
        id="Blog"
        className="py-12 lg:py-24 space-y-12  px-4 lg:px-[200px] bg-[#131313]"
      >
        <div className="flex flex-col items-center justify-center text-white lg:flex-row lg:justify-between lg:gap-4">
          <div>
            <h2 className="text-3xl font-bold lg:text-5xl">Latest Blog</h2>
            <p className="mt-2 text-xl text-[#BBBBBB]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              illo nisi recusandae reprehenderit corporis distinctio ipsa?
            </p>
          </div>
          <button className=" hover:from-[#96002B] border-none btn-lg hover:to-[#2809A5] mt-4 lg:mt-0 text-base lg:text-[18px] font-bold text-white btn bg-gradient-to-r from-[#2809A5] to-[#96002B] rounded-lg">
            See All Posts
          </button>
        </div>
        {/* ... */}
        <div className="grid grid-cols-1 gap-8 text-white lg:grid-cols-2 lg:gap-4">
          {/* ..1 */}
          <div className="flex flex-col items-center justify-center lg:items-start">
            <img className="w-full rounded-xl" src={thum1} alt="" />
            <h2 className="mt-6 text-[#BBBBBB] text-lg font-bold lg:text-base">
              UI/UX Design
            </h2>
            <p className="mt-2">
              Design Unraveled: Behind the Scenes of UI/UX Magic
            </p>
            <button className="mt-4  border-[#7755ff] text-white lg:mt-6 btn rounded-full btn-outline">
              See More
              <span>
                <FaArrowRightLong></FaArrowRightLong>
              </span>
            </button>
          </div>
          {/* ..2 */}
          <div className="flex flex-col items-center justify-center lg:items-start">
            <img className="w-full rounded-xl" src={thum2} alt="" />
            <h2 className="mt-6 text-[#BBBBBB] text-lg font-bold lg:text-base">
              UI/UX Design
            </h2>
            <p className="mt-2">
              Design Unraveled: Behind the Scenes of UI/UX Magic
            </p>
            <button className="mt-4 text-white lg:mt-6 btn btn-outline border-[#7755ff] rounded-full ">
              See More
              <span>
                <FaArrowRightLong></FaArrowRightLong>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestVlogs;
