import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo2.png";
import { useState } from "react";

const Nav = () => {
  const [sticky, setSticky] = useState("#");
  const [active, setActive] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 100) {
      return setSticky("sticky");
    }
    setSticky("#");
  });

  //disable nav onscroll
  window.addEventListener("scroll", () => {
    return setActive(false);
  });

  return (
    <nav
      className={`py-2 lg:px-2 md:py-4 z-50 ${
        sticky === "sticky" ? `fixed w-full top-0 bg-stickyNav` : ""
      }`}
    >
      <div className="relative flex flex-row justify-between items-center mx-auto max-w-full md:max-w-screen-xl">
        <Link
          to="/"
          className="logo flex flex-row items-center z-50"
        >
          <img src={logo} alt="" className="h-16 w-16" />
          <p className="text-white text-base font-bold md:text-2xl">
            IAESTE <span className="block -mt-1 text-center md:text-xl">Kenya</span>
          </p>
        </Link>
        <div
          className={`flex flex-col items-start absolute px-3 pt-3 ${
            active ? `top-[4rem]` : `top-[-450%]`
          } duration-500 w-full pb-4 bg-navColor space-y-3 lg:flex-row lg:pb-0 md:bg-none lg:space-x-16 lg:space-y-0 lg:relative lg:w-max lg:top-0 lg:pt-0 lg:bg-transparent`}
        >
          <a href="#home" className="text-white border-b pb-1 w-full text-xl font-bold lg:border-0 lg:w-max lg:pb-0">
            About IAESTE
          </a>
          <Link to="/students" className="text-white border-b pb-1 w-full text-xl font-bold lg:border-0 lg:w-max lg:pb-0">
            Students
          </Link>
          <a href="#contacts" className="text-white border-b pb-1 w-full text-xl font-bold lg:border-0 lg:w-max lg:pb-0">
            Employers
          </a>
          <a href="#contact" className="text-white border-b pb-1 w-full text-xl font-bold lg:border-0 lg:w-max lg:pb-0">
            Contact Us
          </a>
        </div>
        <div className="hidden lg:flex">
          <Link
            to="/pricing"
            className="bg-buttonColor rounded py-3 px-6 text-base text-white font-bold hover:opacity-[0.7] duration-700"
          >
            APPLY NOW
          </Link>
        </div>
        <div
          className="logo flex mr-1 lg:hidden z-50"
          onClick={() => setActive(!active)}
        >
          <AiOutlineMenu className="text-2xl text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
