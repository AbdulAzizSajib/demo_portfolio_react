import star from "../../../assets/picture/star.png";
const LandingPage = () => {
  return (
    <div className="items-center pt-24 pb-44 ">
      <h1 className="text-[24px] lg:text-[48px] flex justify-center  font-semibold  text-center mb-[14px] text-[#EC1352]">
        Hello, I&apos;m
        <span className="flex items-center bg-[#75F] px-5 py-[11px] ml-[13px] mr-[13px] rounded-full justify-center">
          <img className="mr-2 w-15" src={star} alt="" />
          <span className="text-white text-[16px] lg:text-[32px]">UI/UX</span>
          <img className="ml-2 w-15" src={star} alt="" />
        </span>
        Designer
      </h1>
      <h2 className="text-[48px] lg:text-[70px] text-center font-bold mb-[30px] text-white">
        Show My Design & Portfolio
      </h2>
      <p className="text-center text-[16px] lg:text-[24px] mb-[50px] text-white">
        Lorem Ipsum is not simply random text. It has roots in a piece of 45
        <br /> BC, making it over 2000 years old.
      </p>
      <div className="flex justify-center">
        <button className="text-sm lg:text-[18px]  font-bold btn hover:from-[#96002B] hover:to-[#2809A5] text-white bg-gradient-to-r from-[#2809A5] to-[#96002B] py-2 px-4 rounded-lg">
          View All Work
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
