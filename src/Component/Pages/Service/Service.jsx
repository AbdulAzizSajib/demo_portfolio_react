import icon1 from "../../../assets/picture/icon1.png";
import icon2 from "../../../assets/picture/icon2.png";
import icon3 from "../../../assets/picture/icon3.png";
import icon4 from "../../../assets/picture/icont4.png";
import deco1 from "../../../assets/picture/deco1.png";
import star2 from "../../../assets/picture/Star 2.svg";
import star1 from "../../../assets/picture/Star 1.svg";
const Service = () => {
  return (
    <div>
      <section
        id="services"
        className="  flex flex-col lg:flex-row gap-10 lg:gap-20 justify-evenly bg-[#030307] px-6 lg:px-28 lg:pt-[120px] lg:pb-[83px] py-24  relative "
      >
        <div className="w-full lg:w-1/2 ">
          <h2 className="mb-4 text-2xl font-bold lg:text-2xl text-secondary lg:mb-[10px]">
            Services
          </h2>
          <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl lg:mb-6">
            My Awesome Service
          </h2>
          <p className="mb-10 text-lg font-semibold text-justify text-[#BBBBBB] lg:text-xl lg:mb-[50px]">
            As a distinguished UI/UX design firm, we offer comprehensive
            solutions encompassing research, wireframing, UI design, and
            development. Here are our specialized services:
          </p>
          <button
            style={{ padding: "18px 32px" }}
            className=" border-none hover:from-[#96002B] hover:to-[#2809A5] text-xl lg:text-lg font-bold text-white btn bg-gradient-to-r from-[#2809A5] to-[#96002B] btn-lg "
          >
            View All Work
          </button>

          <img
            className="absolute bottom-0 left-0 hidden lg:block"
            src={deco1}
            alt=""
          />
          <img
            className="absolute left-[700px] bottom-96  hidden  lg:block"
            src={star2}
            alt=""
          />
          <img
            className="absolute hidden top-24 right-20 lg:block"
            src={star1}
            alt=""
          />
        </div>

        <div className="flex justify-end w-ful lg:mt-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
            {/* ...1... */}
            <div className=" flex-col lg:flex-row  lg:w-[508px] lg:h-[224px]  group hover:shadow-md hover:shadow-[#7755ff] flex items-center justify-center card px-6 py-10 bg-[#090916] border-[#2D3455] border card-side">
              <div className="flex justify-center w-full lg:w-20">
                <img
                  className="m-2 w-1/4 lg:w-20 group-hover:bg-[#7755ff]"
                  src={icon1}
                  alt="UX icon"
                />
              </div>
              <div className="ml-5 mr-8 card-body">
                <h2 className="text-white card-title">UX Design</h2>
                <p className="text-[#BBB] text-base lg:text-lg">
                  Exceptional UX isn&apos;t just design; it&apos;s a journey
                  that builds trust, forges loyalty.
                </p>
              </div>
              <div>
                <button className="  btn btn-circle border-[#2D3455]  btn-outline bg-black ">
                  <svg
                    className="group-hover:-rotate-45"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19 12L13 18M19 12L13 6M19 12L5 12"
                      stroke="#7755FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* .....2......  */}
            <div className=" flex-col lg:flex-row  lg:w-[508px] lg:h-[224px] flex group hover:shadow-md hover:shadow-[#7755ff] items-center justify-center card px-6 py-10 bg-[#090916] border-[#2D3455] border card-side">
              <div className="flex justify-center w-full lg:w-20">
                <img
                  className=" m-2 lg:w-20 group-hover:bg-[#7755ff]"
                  src={icon2}
                  alt="UX icon"
                />
              </div>
              <div className="flex flex-wrap lg:mr-8 lg:ml-5 card-body">
                <h2 className="text-white card-title">Ui Design</h2>
                <p className="text-[#BBB] text-base lg:text-lg">
                  Exceptional UX isn&apos;t just design; it&apos;s a journey
                  that builds trust, forges loyalty.
                </p>
              </div>
              <div>
                <button className="btn  bg-black btn-circle group-hover:-rotate-45 border-[#2D3455]  btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19 12L13 18M19 12L13 6M19 12L5 12"
                      stroke="#7755FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* ......3....... */}
            <div className=" flex-col lg:flex-row  lg:w-[508px] lg:h-[224px] group hover:shadow-md hover:shadow-[#7755ff] flex items-center justify-center card px-6 py-10 bg-[#090916] border-[#2D3455] border card-side">
              <div className="flex justify-center w-full lg:w-20">
                <img
                  className="m-2 lg:w-20  group-hover:bg-[#7755ff]"
                  src={icon3}
                  alt="UX icon"
                />
              </div>
              <div className="ml-5 mr-8 card-body">
                <h2 className="text-white card-title">Product Design</h2>
                <p className="text-[#BBB] text-base lg:text-lg">
                  Exceptional UX isn&apos;t just design; it&apos;s a journey
                  that builds trust, forges loyalty.
                </p>
              </div>
              <div>
                <button className="  bg-black btn btn-circle group-hover:-rotate-45 border-[#2D3455]  btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19 12L13 18M19 12L13 6M19 12L5 12"
                      stroke="#7755FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* ....4..... */}
            <div className=" flex-col lg:flex-row  lg:w-[508px] lg:h-[224px]  group hover:shadow-md hover:shadow-[#7755ff] flex items-center justify-center card px-6 py-10 bg-[#090916] border-[#2D3455] border card-side">
              <div className="flex justify-center w-full lg:w-20">
                <img
                  className="m-2 lg:w-20 group-hover:bg-[#7755ff]"
                  src={icon4}
                  alt="UX icon"
                />
              </div>
              <div className="ml-5 mr-8 card-body">
                <h2 className="text-white card-title">Mobile App</h2>
                <p className="text-[#BBB] text-base lg:text-lg">
                  Exceptional UX isn&apos;t just design; it&apos;s a journey
                  that builds trust, forges loyalty.
                </p>
              </div>
              <div>
                <button className="  bg-black btn btn-circle group-hover:-rotate-45 border-[#2D3455]  btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19 12L13 18M19 12L13 6M19 12L5 12"
                      stroke="#7755FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
