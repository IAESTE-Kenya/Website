import React from "react";
import Courasel from "../Courasel/Courasel";
import { CouraselItem } from "../Courasel/Courasel";
import plane from "../../Assets/plane2.png";
import students from "../../Assets/students.jpeg";
import image3 from "../../Assets/image3.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials overflow-hidden md:max-w-screen-xl mx-auto my-10">
      <div>
        <div className="w-full md:mx-auto md:w-[90vw] lg:w-[60vw]">
          <Courasel>
            <CouraselItem>
              <img src={students} alt="" className="h-full w-full object-cover" />
              <div className="absolute bg-imgColor w-full h-full">
                <div className="flex flex-col justify-center h-full space-y-5 pl-2 md:space-y-10 md:p-20">
                  <h2 className="text-white font-black text-2xl whitespace-normal md:text-3xl">
                    Paid Professional Experience
                  </h2>
                  <p className="whitespace-normal text-white xl:w-[60%] md:text-lg">
                    An IAESTE internship will be a highlight on your CV whenever
                    you apply for a job. Our paid internships provide real work
                    experience directly connected to your studies and are also
                    flexible in terms of how long they are and when they take
                    place.
                  </p>
                  <button className="w-max bg-buttonColor text-white font-bold  py-3 px-5 rounded">
                    APPLY NOW
                  </button>
                </div>
              </div>
            </CouraselItem>
            <CouraselItem>
              <img src={plane} alt="" className="h-full w-full object-cover" />
              <div className="absolute bg-imgColor w-full h-full">
                <div className="flex flex-col justify-center h-full space-y-5 pl-2 md:space-y-10 md:p-20">
                  <h2 className="text-white font-black text-2xl whitespace-normal md:text-3xl">
                    Experience And Discover With IAESTE
                  </h2>
                  <p className="whitespace-normal text-white xl:w-[60%] md:text-lg">
                    IAESTE offer both remote and onsite internship, the good
                    news is that both internships are paid. You will et a chance
                    to connect with other people, work in a foreign country as a
                    Kenyan student, without having to struggle with visa. Search
                    currently available internships and find a life changing
                    experience
                  </p>
                  <button className="w-max bg-buttonColor text-white font-bold  py-3 px-5 rounded">
                    FIND AN INTERNSHIP
                  </button>
                </div>
              </div>
            </CouraselItem>
            <CouraselItem>
              <img src={image3} alt="" className="h-full w-full object-cover" />
              <div className="absolute bg-imgColor w-full h-full">
                <div className="flex flex-col justify-center h-full space-y-5 pl-2 md:space-y-10 md:p-20">
                  <h2 className="text-white font-black text-2xl whitespace-normal md:text-3xl">
                    Skilled Interns
                  </h2>
                  <p className="whitespace-normal text-white xl:w-[60%] md:text-lg">
                    Trainees with excellent communication skills (English is the
                    working language for the participation in the exchange
                    programme but other languages can be requested). IAESTE
                    students bring an international dimension to the workplace
                    as well as fresh ideas and different, often innovative
                    perspectives.
                  </p>
                  <button className="w-max bg-buttonColor text-white font-bold  py-3 px-5 rounded">
                    OFFER AN INTERNSHIP
                  </button>
                </div>
              </div>
            </CouraselItem>
          </Courasel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
