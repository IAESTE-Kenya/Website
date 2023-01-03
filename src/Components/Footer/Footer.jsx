import React from "react";
import logo from "../../Assets/logo-blue.png";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillInstagram, AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pb-2 md:pt-4 lg:px-5 xl:px-0">
      <div className="flex flex-col max-w-screen-xl mx-auto pt-5">
        <div className="flex flex-col md:flex-row md:space-x-20">
          <div className="flex flex-col px-2 space-y-3 md:w-[40%] md:px-0">
            <div className="flex flex-col md:space-y-2 md:-mt-6">
              <Link to="/" className="flex flex-row items-center">
                <img src={logo} alt="our logo" className="h-16 w-16" />
                <p className="text-navColor text-lg font-semibold md:text-xl">
                  IAESTE{" "}
                  <span className="block text-center -mt-1 text-base">
                    Kenya
                  </span>
                </p>
              </Link>
              <p className="text-lg text-navColor font-semibold">Work. Experience. Discover.</p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-navColor text-lg font-semibold lg:text-lg xl:text-xl">
                Join Our Newsletter & Marketing Communication
              </h2>
              <p className="text-navColor md:text-lg">
                We'll send you news and offers.
              </p>
            </div>
            <form className="flex xl:w-[75%]">
              <input
                type="text"
                placeholder="you@yours.com"
                className="w-3/4 px-2 py-2 border outline-none rounded-l-lg md:py-3"
              />
              <input
                type="submit"
                value="Go"
                className="bg-navColor text-white text-lg py-2 w-1/4 rounded-r-lg"
              />
            </form>
            {/* icons for desktop */}
            <div className="hidden flex-row items-center gap-5 md:flex">
              <a href="https://twitter.com/iaesteKe">
                <BsTwitter className="text-navColor text-2xl" />
              </a>
              <a href="https://www.linkedin.com/company/iaeste-kenya/">
                <BsLinkedin className="text-navColor text-2xl" />
              </a>
              <a href="https://www.instagram.com/iaeste.kenya/">
                <AiFillInstagram className="text-navColor text-3xl" />
              </a>
            </div>
          </div>
          <div className="flex flex-col px-2 space-y-8 md:space-y-0 md:justify-between md:flex-row md:w-[60%] md:pl-0">
            <div className="flex flex-col space-y-4 mt-5 md:mt-0 xl:ml-24">
              <div className="flex flex-col">
                <h2 className="text-gray-500 mb-2">Contact Information</h2>
                <a href="tel:+254791686851" className="text-base text-gray-500">
                  <span className="text-navColor font-bold text-base">
                    CONTACT NUMBER:
                  </span>{" "}
                  +254 110002411
                </a>
                <div className="flex flex-col mt-4">
                  <h2 className="text-navColor font-bold text-base">ADDRESS</h2>
                  <p className="text-base text-gray-500">
                    Main Campus Nyeri <br></br> Mweiga Road 10143 <br></br>{" "}
                    Nyeri, Kenya
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <h2 className="text-base text-navColor font-bold">HELP</h2>
                <a
                  href="mailto:info@rentalsuccess.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row items-center text-base text-gray-500"
                >
                  <MdOutlineMailOutline className="mr-1" /> info@iaestekenya.org
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <a
                href="#about"
                className="text-navColor text-base py-1.5 border-b border-gray-300 md:text-lg md:border-0"
              >
                STUDENTS
              </a>
              <a
                href="#about"
                className="text-navColor py-1.5 border-b border-gray-300 text-base md:text-lg md:border-0"
              >
                EMPLOYERS
              </a>
              <a
                href="#about"
                className="text-navColor py-1.5 border-b border-gray-300 text-base md:text-lg md:border-0"
              >
                ALUMNI
              </a>
              <Link
                to="/pricing"
                className="text-navColor border-b border-gray-300 py-1.5 text-base md:border-0"
              >
                EVENTS
              </Link>
              <Link
                to="/pricing"
                className="text-navColor border-b border-gray-300 py-1.5 text-base md:border-0"
              >
                TESTIMONIALS
              </Link>
              <Link
                to="/pricing"
                className="text-navColor border-b border-gray-300 py-1.5 text-base md:border-0"
              >
                ABOUT IAESTE
              </Link>
            </div>
            {/* icons for mobile */}
            <div className="flex flex-row items-center justify-center gap-3 md:hidden">
              <a href="https://twitter.com/iaesteKe">
                <BsTwitter className="text-navColor text-2xl" />
              </a>
              <a href="https://www.linkedin.com/company/iaeste-kenya/">
                <BsLinkedin className="text-navColor text-2xl" />
              </a>
              <a href="https://www.instagram.com/iaeste.kenya/">
                <AiFillInstagram className="text-navColor text-3xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between mt-8 space-y-4 items-center md:flex-row md:space-y-0">
          <div className="flex flex-col text-center space-y-2 md:flex-row md:space-y-0 md:space-x-10">
            <Link to="privacy-policy" className="text-gray-500">
              Privacy Policy
            </Link>
            <Link to="terms and conditions" className="text-gray-500">
              Terms and Conditions
            </Link>
            <Link to="privacy-policy" className="text-gray-500">
              Cookies Policy
            </Link>
            <Link to="privacy-policy" className="text-gray-500">
              Disclaimer
            </Link>
          </div>
          <div className="border-t border-gray-300 w-full pt-3 md:border-0 md:w-max md:pt-0">
            <p className="flex flex-row items-center justify-center gap-1 text-sm text-gray-500">
              IAESTE Kenya <AiOutlineCopyrightCircle /> 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
