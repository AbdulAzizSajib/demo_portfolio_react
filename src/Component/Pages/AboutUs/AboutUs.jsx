const AboutUs = () => {
  return (
    <div>
      <section
        id="aboutus"
        className="bg-[#edf0f2] py-12 px-8 lg:px-[200px] lg:py-[140px] "
      >
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="mb-4 text-xl font-bold lg:mb-[10px] text-secondary">
              About Us
            </h2>
            <h2 className="mb-6 text-4xl font-bold lg:mb-6 lg:text-5xl">
              Why Did You <br /> Choose Me?
            </h2>
            <p className="mb-12 text-lg font-semibold lg:mb-[50px] lg:text-xl">
              Were your partners in crafting digital that blend innovation with
              functionality consultation discover apartments. ndulgence off
              under folly death wrote cause her way spite. Plan upon yet way get
              cold spot its week.
            </p>
            <button className="hover:from-[#96002B] hover:to-[#2809A5] text-lg py-[18px] px-8  font-bold text-white btn bg-gradient-to-r from-[#2809A5] to-[#96002B] btn-lg rounded-lg">
              Download CV
            </button>
          </div>
          {/* ..... */}
          <div className="grid grid-cols-2 gap-4 p-4 lg:grid-cols-2 lg:w-1/2 lg:p-24 place-content-center">
            {/* 1 */}
            <div className="flex  flex-col items-center justify-center p-6 bg-white shadow-lg rounded-2xl lg:max-w-[242px] lg:h-[177px]">
              <div>
                <h2 className="text-4xl font-semibold text-center lg:text-5xl text-[#75F] font-clash_display">
                  4+
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-normal text-center lg:text-xl">
                  Year Of Experience
                </h2>
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-2xl lg:max-w-[242px] lg:h-[177px]">
              <div>
                <h2 className="text-4xl font-semibold text-center lg:text-5xl text-[#EC1352] font-clash_display">
                  234+
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-normal text-center lg:text-xl">
                  Completed Projects
                </h2>
              </div>
            </div>
            {/* 3 */}
            <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-2xl lg:max-w-[242px] lg:h-[177px]">
              <div>
                <h2 className="text-4xl font-semibold text-center lg:text-5xl  text-[#EC1352] font-clash_display">
                  80+
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-normal text-center lg:text-xl">
                  Happy Customers
                </h2>
              </div>
            </div>
            {/* 4 */}
            <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-2xl lg:max-w-[242px] lg:h-[177px]">
              <div>
                <h2 className="text-4xl font-semibold text-center lg:text-5xl  text-[#75F] font-clash_display">
                  4.9/5
                </h2>
              </div>
              <div>
                <h2 className="text-lg font-normal text-center lg:text-xl">
                  Average Rating
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
