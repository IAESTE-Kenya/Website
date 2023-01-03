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
      className={`py-2 md:px-2 md:py-4 z-50 ${
        sticky === "sticky" ? `fixed w-full top-0 bg-stickyNav` : ""
      }`}
    >
      <div className="relative flex flex-row justify-between items-center mx-auto max-w-full md:max-w-screen-xl">
        <Link
          to="/"
          className="flex flex-row items-center z-50"
        >
          <img src={logo} alt="" className="h-16 w-16" />
          <p className="text-white text-base font-bold md:text-2xl">
            IAESTE <span className="block -mt-1 text-center md:text-xl">Kenya</span>
          </p>
        </Link>
        <div
          className={`flex flex-col items-start absolute px-3 pt-3 ${
            active ? `top-[4rem]` : `top-[-450%]`
          } duration-500 w-full pb-4 bg-navColor space-y-3 md:flex-row md:pb-0 md:bg-none md:space-x-16 md:space-y-0 md:relative md:w-max md:top-0 md:pt-0`}
        >
          <a href="#home" className="text-white border-b pb-1 w-full text-xl font-bold md:border-0 md:w-max md:pb-0">
            About IAESTE
          </a>
          <a href="#about" className="text-white border-b pb-1 w-full text-xl font-bold md:border-0 md:w-max md:pb-0">
            Students
          </a>
          <a href="#contacts" className="text-white border-b pb-1 w-full text-xl font-bold md:border-0 md:w-max md:pb-0">
            Employers
          </a>
          <a href="#contact" className="text-white border-b pb-1 w-full text-xl font-bold md:border-0 md:w-max md:pb-0">
            Contact Us
          </a>
        </div>
        <div className="hidden md:flex">
          <Link
            to="/pricing"
            className="bg-buttonColor rounded py-3 px-6 text-base text-white font-bold hover:opacity-[0.7] duration-700"
          >
            APPLY NOW
          </Link>
        </div>
        <div
          className="flex mr-1 md:hidden z-50"
          onClick={() => setActive(!active)}
        >
          <AiOutlineMenu className="text-2xl text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
