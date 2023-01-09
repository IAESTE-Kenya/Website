import React from "react";
import Courasel, { CouraselItem } from "../Courasel/Courasel";
import image from "../../Assets/amani.jpeg";
import kelvin from "../../Assets/kelvin.png";
import amon from "../../Assets/amon.jpg";
import image2 from '../../Assets/all.png'
import { MdLocationOn } from "react-icons/md";

const Stories = () => {
  return (
    <div className="overflow-hidden mt-10 md:mt-0 md:w-[60%]">
      <Courasel display="none">
        <CouraselItem>
          <div className="flex flex-col w-full">
            <img src={image} alt="" className="h-[65%] w-full object-cover" />
            <div className="bg-white h-full flex flex-row items-center justify-between">
              <h2 className="w-1/3 whitespace-normal text-center text-navColor font-semibold text-sm md:text-xl">
                Amani Wanjau, DeKUT
              </h2>
              <p className="w-1/3 text-center whitespace-normal text-navColor font-semibold text-sm md:text-xl">
                Mechanical Engineering
              </p>
              <p className="w-1/3 text-center whitespace-normal text-navColor font-semibold text-sm flex flex-col items-center md:text-lg">
                <MdLocationOn />
                Germany
              </p>
            </div>
          </div>
        </CouraselItem>
        <CouraselItem>
          <div className="flex flex-col w-full">
            <img src={amon} alt="" className="h-[65%] w-full object-cover" />
            <div className="bg-white h-full flex flex-row items-center justify-between">
              <h2 className="w-1/3 whitespace-normal text-center text-navColor font-semibold text-sm md:text-xl">
                Amon Cheruiyot, DeKUT
              </h2>
              <p className="w-1/3 text-center whitespace-normal text-navColor font-semibold text-sm md:text-xl">
                Mechanical Engineering
              </p>
              <p className="w-1/3 text-center whitespace-normal text-navColor font-semibold text-sm flex flex-col items-center md:text-lg">
                <MdLocationOn />
                Germany
              </p>
            </div>
          </div>
        </CouraselItem>
        <CouraselItem>
          <div className="flex flex-col w-full">
            <img src={kelvin} alt="" className="h-[65%] w-full object-cover" />
            <div className="bg-white h-full flex flex-row items-center justify-between">
              <h2 className="w-1/3 whitespace-normal text-center text-navColor font-semibold text-sm md:text-xl">
                Kelvin Kelvin, JKUAT
              </h2>
              <p className="w-1/3 text-center whitespace-normal text-navColor font-semibold text-sm md:text-xl">
                Mechanical Engineering
              </p>
              <p className="w-1/3 text-center whitespace-normal text-navColor font-semibold text-sm flex flex-col items-center md:text-lg">
                <MdLocationOn />
                Switzerland
              </p>
            </div>
          </div>
        </CouraselItem>
        <CouraselItem>
          <div className="flex flex-col w-full">
            <img src={image2} alt="" className="h-[65%] w-full object-cover" />
            <div className="bg-white h-full flex flex-row items-center justify-between">
              <h2 className="w-1/3 whitespace-normal text-center text-navColor font-semibold text-sm md:text-xl">
                Kelvin Kelvin, JKUAT
              </h2>
              <p className="w-1/3 text-center whitespace-normal text-navColor font-semibold text-sm md:text-xl">
                Mechanical Engineering
              </p>
              <p className="w-1/3 text-center whitespace-normal text-navColor font-semibold text-sm flex flex-col items-center md:text-lg">
                <MdLocationOn />
                Germany
              </p>
            </div>
          </div>
        </CouraselItem>
      </Courasel>
    </div>
  );
};

export default Stories;
