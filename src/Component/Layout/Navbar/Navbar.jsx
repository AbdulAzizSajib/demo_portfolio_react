import { Link } from "react-router-dom";
import logo from "../../../assets/picture/logo.svg";
import "./Navbar.css";
import star from "../../../assets/picture/star.png";
const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <Link className={"hover:text-[#EC1352] "}> Home </Link>
      </li>
      <li>
        <Link className={"hover:text-[#EC1352] "}> About Us </Link>
      </li>
      <li>
        <Link className={"hover:text-[#EC1352] "}> Service </Link>
      </li>
      <li>
        <Link className={"hover:text-[#EC1352] "}> Portfolio</Link>
      </li>
      <li>
        <Link className={"hover:text-[#EC1352] "}>Blog</Link>
      </li>
    </>
  );

  return (
    <div className="back">
      <div className="max-w-7xl mx-auto  navbar  text-lg text-white py-[25px]  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-black   dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-10 h-10 animate-spin" src={logo} alt="logo" />
            <a className="text-xl font-bold text-white lg:text-2xl">
              Portfolio
            </a>
          </div>
        </div>
        <div className="hidden navbar-center lg:flex ">
          {" "}
          {/* ml-96*/}
          <ul className="gap-[30px] px-1 lg:ml-80 menu menu-horizontal">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="#"
            style={{ padding: "12px 24px" }}
            className=" btn border-none font-bold text-white  hover:from-[#96002B] hover:to-[#2809A5] bg-gradient-to-r from-[#2809A5] to-[#96002B]"
          >
            Contact
          </a>
        </div>
      </div>
      {/* landding page */}
      <div className="items-center justify-center pt-24 pb-44">
        <h1 className=" md:text-4xl lg:text-5xl flex justify-center items-center  font-semibold  text-center mb-[14px] text-[#EC1352]">
          Hello I&apos;m
          <span className="flex items-center bg-[#75F] px-5 py-[11px] ml-[13px] mr-[13px] rounded-full justify-center">
            <img
              className="w-6 mr-1 rounded-full lg:mr-2 lg:w-15"
              src={star}
              alt=""
            />
            <span className="text-white text-[16px] lg:text-[32px]">UI/UX</span>
            <img
              className="w-6 ml-1 rounded-full lg:ml-2 w-15"
              src={star}
              alt=""
            />
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
          <button
            style={{ padding: "15px 32px" }}
            className="text-sm border-none lg:text-[18px]  font-bold btn hover:from-[#96002B] hover:to-[#2809A5] text-white bg-gradient-to-r from-[#2809A5] to-[#96002B] py-2 px-4 btn-lg"
          >
            View All Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
