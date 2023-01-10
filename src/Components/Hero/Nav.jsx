import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from 'react-icons/rx';
import { Link } from "react-router-dom";
import logo from "../../Assets/logo2.png";
import { useState } from "react";

const Nav = () => {
  const [sticky, setSticky] = useState("#");
  const [active, setActive] = useState(false);

  //sticky nav
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 180) {
      return setSticky("sticky");
    }
    setSticky("#");
  });

  //disbale window scroll
  const overflowFunction = () =>{
    if(active === true){
      document.body.style.overflow = "hidden"
    }else if(active === false){
      document.body.style.overflow = "auto"
    }
  }
  overflowFunction();


  return (
    <nav
      className={`py-2 xl:px-2 md:py-4 z-40 ${
        sticky === "sticky"
          ? `fixed w-full top-0 bg-buttonColor xl:bg-navColor`
          : ""
      }`}
    >
      <div className="relative flex flex-row justify-between items-center mx-auto max-w-full md:max-w-screen-xl">
        <Link to="/" className="logo flex flex-row items-center">
          <img src={logo} alt="" className="h-16 w-16" />
          <p className="text-white text-base font-bold md:text-2xl">
            IAESTE{" "}
            <span className="block -mt-1 text-center md:text-xl">Kenya</span>
          </p>
        </Link>
        <div
          className={`flex flex-col items-start absolute px-3 pt-3 z-50 ${
            active ? `-top-4 h-screen` : `top-[-1000%]`
          }  duration-500 w-full pb-4 bg-buttonColor space-y-3 xl:flex-row xl:pb-0 md:bg-none xl:space-x-16 xl:space-y-0 xl:relative xl:w-max xl:top-0 xl:pt-0 xl:bg-transparent`}
        >
          <div className="flex flex-row justify-between items-center w-full my-5 xl:hidden">
            <Link to="/" className="flex flex-row items-center">
              <img src={logo} alt="" className="h-12 w-12" />
              <p className="text-base font-semibold text-white">IAESTE <span className="block text-sm text-center -mt-1">Kenya</span></p>
            </Link>
            <RxCross1 className="text-white font-bold text-3xl" onClick={() =>  setActive(false) }/>
          </div>
          <Link
            to="/"
            className="text-white border-b py-2 pl-2 w-full text-2xl font-bold xl:border-0 xl:w-max xl:py-0"
          >
            About IAESTE
          </Link>
          <Link
            to="/students"
            className="text-white border-b py-2 pl-2 w-full text-2xl font-bold xl:pl-0 xl:border-0 xl:w-max xl:py-0"
          >
            Students
          </Link>
          <Link
            to="/employers"
            className="text-white border-b py-2 pl-2 w-full text-2xl font-bold xl:pl-0 xl:border-0 xl:w-max xl:py-0"
          >
            Employers
          </Link>
          <Link
            to="/employers"
            className="text-white border-b py-2 pl-2 w-full text-2xl font-bold xl:pl-0 xl:border-0 xl:w-max xl:py-0"
          >
            Alumni
          </Link>
          <Link
            to="/contact-us"
            className="text-white border-b py-2 pl-2 w-full text-2xl font-bold xl:pl-0 xl:border-0 xl:w-max xl:py-0"
          >
            Contact Us
          </Link>
          <div className="flex flex-col gap-3 pt-10 items-center w-full xl:hidden">
          <a
            href="https://iaeste.smartsimple.ie/"
            className="bg-white rounded py-2.5 px-10 text-base text-navColor font-bold hover:opacity-[0.7] duration-700"
          >
            APPLY NOW
          </a>
          <Link
            to="/employees"
            className="bg-white rounded py-2.5 px-10 text-base text-navColor font-bold hover:opacity-[0.7] duration-700"
          >
            OFFER INTERNSHIP
          </Link>
        </div>
        </div>
        <div className="hidden xl:flex">
          <Link
            to="/pricing"
            className="bg-buttonColor rounded py-3 px-6 text-base text-white font-bold hover:opacity-[0.7] duration-700"
          >
            APPLY NOW
          </Link>
        </div>
        <div
          className="logo flex mr-1 xl:hidden"
          onClick={() =>  setActive(!active)}
        >
          <AiOutlineMenu className="text-2xl text-white cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
