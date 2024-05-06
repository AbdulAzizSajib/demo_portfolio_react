import { Link } from "react-router-dom";
import logo from "../../../assets/picture/logo.svg";

const FootNav = () => {
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
    <div>
      <div className="text-black navbar px-[5%] lg:px-[200px] w-full  lg:pb-[96px]">
        <div className="navbar-start">
          <div className="flex items-center gap-3">
            <img className="w-10 h-10 animate-spin" src={logo} alt="logo" />
            <a className="text-2xl font-bold text-white lg:text-4xl">
              Portfolio
            </a>
          </div>
        </div>
        <div className="lg:flex lg:text-base navbar-end">
          <ul className="menu menu-horizontal">{navlinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default FootNav;
