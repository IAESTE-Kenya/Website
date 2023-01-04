import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="px-2 mx-auto lg:px-0 xl:max-w-screen-xl lg:max-w-[85vw]">
      <div
      className="contact p-5 bg-navColor  mt-10 mb-10 rounded-lg md:py-20 md:px-10"
      id="contacts"
    >
      <div className="flex flex-col justify-between items-center space-y-5 md:flex-row md:space-y-0">
        <div className="flex flex-col space-y-3 md:w-2/3 md:space-y-0">
          <h2 className="text-3xl text-white font-bold capitalize md:text-5xl md:mb-4">
            Get in touch with IAESTE!
          </h2>
          <p className="text-white text-base md:text-xl md:text-lg lg:text-lg xl:text-2xl">
            Have any question? You can get in touch with us. We will respond to you
            as soon as possible.
          </p>
        </div>
        <Link className="bg-buttonColor py-2 px-10 text-semibold text-white text-base rounded-lg flex items-center gap-2 md:text-xl md:py-2 md:px-5 hover:opacity-[0.7] ease-in-out duration-500">
          Contact us <HiOutlineArrowNarrowRight />
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Contact;
