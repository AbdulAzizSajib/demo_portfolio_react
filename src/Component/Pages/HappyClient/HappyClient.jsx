import grp1 from "../../../assets/picture/Group1.svg";
import grp2 from "../../../assets/picture/group2.svg";
import grp3 from "../../../assets/picture/group3.svg";
import grp4 from "../../../assets/picture/group4.svg";
import star from "../../../assets/picture/Star 2.svg";
import "./HP.css";
const HappyClient = () => {
  return (
    <div>
      <section className="p-8 relative flex flex-col items-center bg-gradient lg:px-[200px] lg:pt-[111px] lg:pb-[132px] ">
        <div className="">
          <h1 className="mb-6 text-5xl font-bold ` text-white">
            Happy Clients
          </h1>
          <p className="text-xl mb-[44px] font-medium ` text-white">
            Lorem Ipsum is not simply random text. It has roots in a piece of 45
            BC, making it over 2000 years old.
          </p>
        </div>
        {/* ...... */}
        <div className="grid grid-cols-2 gap-6 rounded-lg md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:w-[242px] lg:h-[160px] flex justify-center p-6 rounded-lg bg-[#100d24]">
            <img src={grp1} alt="" className="h-auto max-w-full lg:p-6" />
          </div>
          <div className="lg:w-[242px] lg:h-[160px] flex justify-center items-center p-6 rounded-lg bg-[#100d24]">
            <img src={grp2} alt="" className="h-auto max-w-full lg:p-6" />
          </div>
          <div className="lg:w-[242px] lg:h-[160px] flex justify-center items-center p-6 rounded-lg bg-[#100d24]">
            <img src={grp3} alt="" className="h-auto max-w-full lg:p-6" />
          </div>
          <div className="flex lg:w-[242px] lg:h-[160px] justify-center items-center p-6 rounded-lg bg-[#100d24]">
            <img src={grp4} alt="" className="h-auto max-w-full lg:p-6" />
          </div>
          <div className="flex lg:w-[242px] lg:h-[160px] justify-center items-center p-6 rounded-lg bg-[#100d24]">
            <img src={grp2} alt="" className="h-auto max-w-full lg:p-6" />
          </div>
          <div className="flex lg:w-[242px] lg:h-[160px] justify-center items-center p-6 rounded-lg bg-[#100d24]">
            <img src={grp3} alt="" className="h-auto max-w-full lg:p-6" />
          </div>
          <div className="flex lg:w-[242px] lg:h-[160px] justify-center items-center p-6 rounded-lg bg-[#100d24]">
            <img src={grp4} alt="" className="h-auto max-w-full lg:p-6" />
          </div>
          <div className="flex lg:w-[242px] lg:h-[160px] justify-center items-center p-6 rounded-lg bg-[#100d24]">
            <img src={grp1} alt="" className="h-auto max-w-full lg:p-6" />
          </div>
        </div>

        {/* ..... */}
        <div className="absolute hidden ml-64 top-20 lg:block ">
          <img src={star} alt="" />
        </div>
      </section>
    </div>
  );
};

export default HappyClient;
