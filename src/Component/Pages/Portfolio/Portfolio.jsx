import img1 from "../../../assets/picture/img1.png";
import img2 from "../../../assets/picture/img2.png";
import img3 from "../../../assets/picture/img3.png";
import img4 from "../../../assets/picture/img4.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Portfolio = () => {
  return (
    <div>
      <section
        id="Portfolio"
        className="bg-[#030307] p-4 lg:px-[200px] lg:py-[140px] flex flex-col  items-center "
      >
        <div>
          <h2 className=" mb-[10px] font-bold text-center lg:text-xl text-primary">
            Portfolio
          </h2>
          <h2 className="text-4xl mb-[30px] font-bold text-center text-white lg:text-5xl">
            My Latest Projects
          </h2>
          <div className="mb-[50px]">
            <nav>
              <ul className="flex flex-wrap justify-center gap-4 text-white lg:gap-[50px]">
                <li className="mb-4 lg:mb-0">
                  <a className="hover:text-[#EC1352]" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="mb-4 lg:mb-0">
                  <a className="hover:text-[#EC1352]" href="#">
                    SEO
                  </a>
                </li>
                <li className="mb-4 lg:mb-0">
                  <a className="hover:text-[#EC1352]" href="#">
                    UI/UX Design
                  </a>
                </li>
                <li className="mb-4 lg:mb-0">
                  <a className="hover:text-[#EC1352]" href="#">
                    Web Design
                  </a>
                </li>
                <li className="mb-4 lg:mb-0">
                  <a className="hover:text-[#EC1352]" href="#">
                    Web Development
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
            {/* .1. */}
            <div className="relative flex flex-col w-full rounded-lg ">
              <img
                className="object-cover w-full  lg:max-w-[508px] lg:h-[500px] rounded-lg "
                src={img1}
                alt=""
              />
              <p className="mt-4 text-lg font-bold text-white">
                Wireframe is a basic layout of the fundamental design.
              </p>
              <div className=" group bg-white rounded-full justify-between items-center absolute  w-[239px] h-[60px]  right-0 flex  bottom-24 left-5  hover:bg-[#7755ff] ">
                <h2 className=" text-lg font-bold  pl-[24px] pr-[10px] text-black  rounded-xl">
                  UX Design
                </h2>
                <a
                  href=""
                  className="group-hover:-rotate-45 border-none  text-2xl btn btn-circle mr-3 bg-[#e4ddff]"
                >
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
            {/* .2. */}
            <div className="relative flex flex-col w-full rounded-lg ">
              <img
                className="object-cover w-full lg:max-w-[508px] rounded-lg lg:h-[500px]"
                src={img2}
                alt=""
              />
              <p className="mt-4 text-lg font-bold text-white">
                Wireframe is a basic layout of the fundamental design.
              </p>
              <div className="  justify-between group bg-white rounded-full items-center absolute  w-[239px] h-[60px]  right-0 flex  bottom-24 left-5  hover:bg-[#7755ff] ">
                <h2 className=" text-lg font-bold  pl-[24px] pr-[10px] text-black  rounded-xl">
                  Visual Design
                </h2>
                <a
                  href=""
                  className="group-hover:-rotate-45 border-none  text-2xl btn btn-circle mr-3 bg-[#e4ddff]"
                >
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
            {/* .3. */}

            <div className="relative flex-col w-full rounded-lg ">
              <img
                className="object-cover w-full lg:max-w-[508px] lg:h-[500px] rounded-lg "
                src={img3}
                alt=""
              />
              <p className="mt-4 text-lg font-bold text-white">
                Wireframe is a basic layout of the fundamental design.
              </p>
              <div className=" group bg-white rounded-full justify-between items-center absolute  w-[239px] h-[60px]  right-0 flex  bottom-24 left-5  hover:bg-[#7755ff] ">
                <h2 className=" text-lg font-bold  pl-[24px] pr-[10px] text-black  rounded-xl">
                  Mobile App
                </h2>
                <a
                  href=""
                  className="group-hover:-rotate-45 border-none  text-2xl btn btn-circle mr-3 bg-[#e4ddff]"
                >
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
            {/* .4. */}
            <div className="relative flex flex-col w-full rounded-lg ">
              <img
                className="object-cover w-full lg:max-w-[508px] lg:h-[500px] rounded-lg "
                src={img4}
                alt=""
              />
              <p className="mt-4 text-lg font-bold text-white">
                Wireframe is a basic layout of the fundamental design.
              </p>
              <div className=" group bg-white rounded-full justify-between items-center absolute  w-[239px] h-[60px]  right-0 flex  bottom-24 left-5  hover:bg-[#7755ff] ">
                <h2
                  className=" text-base
                 font-bold  pl-[24px] pr-[10px] text-black  rounded-xl"
                >
                  Graphic Design
                </h2>
                <a
                  href=""
                  className="group-hover:-rotate-45 border-none  text-2xl btn btn-circle mr-3 bg-[#e4ddff]"
                >
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
