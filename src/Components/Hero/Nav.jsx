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
      className={`py-2 lg:px-2 md:py-4 z-40 ${
        sticky === "sticky"
          ? `fixed w-full top-0 bg-buttonColor lg:bg-navColor`
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
            active ? `-top-2 h-screen` : `top-[-1000%]`
          }  duration-500 w-full pb-4 bg-buttonColor space-y-3 lg:flex-row lg:pb-0 md:bg-none lg:space-x-16 lg:space-y-0 lg:relative lg:w-max lg:top-0 lg:pt-0 lg:bg-transparent`}
        >
          <div className="flex flex-row justify-between items-center w-full my-5 lg:hidden">
            <Link to="/" className="flex flex-row items-center">
              <img src={logo} alt="" className="h-12 w-12" />
              <p className="text-base font-semibold text-white">IAESTE <span className="block text-sm text-center -mt-1">Kenya</span></p>
            </Link>
            <RxCross1 className="text-white font-bold text-3xl" onClick={() =>  setActive(false) }/>
          </div>
          <Link
            to="/"
            className="text-white border-b py-2 pl-2 w-full text-2xl font-bold lg:border-0 lg:w-max lg:py-0"
          >
            About IAESTE
          </Link>
          <Link
            to="/students"
            className="text-white border-b py-2 pl-2 w-full text-2xl font-bold lg:pl-0 lg:border-0 lg:w-max lg:py-0"
          >
            Students
          </Link>
          <a
            href="#contacts"
            className="text-white border-b py-2 pl-2 w-full text-2xl font-bold lg:pl-0 lg:border-0 lg:w-max lg:py-0"
          >
            Employers
          </a>
          <a
            href="#contacts"
            className="text-white border-b py-2 pl-2 w-full text-2xl font-bold lg:pl-0 lg:border-0 lg:w-max lg:py-0"
          >
            Alumni
          </a>
          <Link
            to="/contact-us"
            className="text-white border-b py-2 pl-2 w-full text-2xl font-bold lg:pl-0 lg:border-0 lg:w-max lg:py-0"
          >
            Contact Us
          </Link>
          <div className="flex flex-col gap-3 pt-10 items-center w-full lg:hidden">
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
        <div className="hidden lg:flex">
          <Link
            to="/pricing"
            className="bg-buttonColor rounded py-3 px-6 text-base text-white font-bold hover:opacity-[0.7] duration-700"
          >
            APPLY NOW
          </Link>
        </div>
        <div
          className="logo flex mr-1 lg:hidden"
          onClick={() =>  setActive(!active)}
        >
          <AiOutlineMenu className="text-2xl text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
