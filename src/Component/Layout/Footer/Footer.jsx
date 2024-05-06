import arrow from "../../../assets/picture/arrow.png";
import FootNav from "../../Pages/FootNav/FootNav";
import logo from "../../../assets/picture/fotlo.png";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="flex px-4 py-12 sm:gap-7  lg:gap-[50px] lg:pt-[121px] lg:px-[200px] lg:flex-row relative ">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div>
              <h2 className="text-lg font-bold lg:text-xl text-[#75F]">
                Subscribe
              </h2>
              <h2 className="text-3xl font-bold lg:text-5xl ">
                Subscribe To Get Latest Update From Us
              </h2>
            </div>
            <div className="hidden w-full lg:block">
              <img src={arrow} alt="" />
            </div>
          </div>
          {/* ... */}
          <div className="flex flex-col justify-between w-full lg:w-1/2 lg:mt-0">
            <div>
              <p className="text-sm font-medium lg:text-xl">
                Consultation discover apartments. ndulgence off sus under folly
                death wrote caa discover apartments
              </p>
            </div>
            <div className="relative flex ">
              <input
                type="text"
                placeholder="Email address"
                className="w-full px-6 rounded-full lg:input-lg input input-bordered drop-shadow-xl"
              />
              <button className=" bg-[#75F] text-white border-none absolute right-0  rounded-full lg:btn-lg  py-[17px] px-6  btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
          <div className="absolute left-0 hidden lg:block lg:bottom-20">
            <img src={logo} alt="" />
          </div>
        </div>
        <div>
          <FootNav></FootNav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
