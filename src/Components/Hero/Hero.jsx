import React from "react";
import students from '../../Assets/image5.jpeg';
import employer from '../../Assets/internship.jpg'
import  { MdOutlineArrowRightAlt } from 'react-icons/md'
import { Link } from "react-router-dom";

import Nav from "./Nav";

const Hero = () => {
  return (
    <section className="hero flex flex-col bg-navColor relative" id="home">
      {/* nav */}

      <div className="bg-buttonColor xl:bg-transparent">
        <Nav />
      </div>

      {/* hero */}
      <div className="flex flex-col space-y-10 mt-10 px-2 h-full pb-10 w-full max-w-4xl mx-auto md:mt-0 lg:gap-5 xl:gap-20 xl:px-0 lg:px-5 lg:mt-20 lg:flex-row md:space-y-0 xl:max-w-7xl">
        <div className="flex flex-col lg:w-1/2">
          <img src={students} alt="" className="h-46 w-full object-cover md:h-96"/>
          <div className="flex flex-col mt-5 pb-2">
            <h2 className="text-xl text-white mb-2">FOR STUDENTS</h2>
            <p className="text-white text-xl md:text-2xl">Are you currently studying and want to do a work placement abroad?</p>
          </div>
          <div className="flex flex-col border-t pt-2">
            <Link to="/students" className="italic text-white text-lg flex flex-row items-center gap-1 hover:border-b w-max"><MdOutlineArrowRightAlt className="text-3xl"/>Internship abroad</Link>
            <a href="https://iaeste.org/internships" className="italic text-white text-lg flex flex-row items-center gap-1 hover:border-b w-max"><MdOutlineArrowRightAlt className="text-3xl"/>Current Internship Offers</a>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2">
          <img src={employer} alt="" className="h-46 w-full object-cover md:h-96"/>
          <div className="flex flex-col mt-5 pb-2">
            <h2 className="text-xl text-white mb-2">FOR EMPLOYERS</h2>
            <p className="text-white text-xl md:text-2xl">Are you running a business, and would you like to employ an international intern?</p>
          </div>
          <div className="flex flex-col border-t pt-2">
          <Link to="/employers" className="italic text-white text-lg flex flex-row items-center gap-1 hover:border-b w-max"><MdOutlineArrowRightAlt className="text-3xl"/>Offer an internship</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
