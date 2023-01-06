import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Nav from "../Hero/Nav";
import Application from "./Application";
import display from "../../Assets/amani.jpeg";
import display2 from "../../Assets/display.jpeg";

const Students = () => {
  return (
    <section className="mx-auto">
      <div className="student">
        <div className="students pb-10 lg:pb-[6vw] md:h-[60vh]">
          <div className="bg-buttonColor md:bg-transparent">
            <Nav />
          </div>
          <div className="flex flex-row px-2 h-max items-center mx-auto mt-16 max-w-screen-xl md:mt-0 md:h-full lg:px-0">
            <div className="lg:w-1/2">
              <button className="bg-buttonColor w-max py-2 px-10 text-white text-lg font-semibold rounded md:py-3 px-10">
                Students
              </button>
              <div className="flex flex-col mt-10 lg:mt-20">
                <h2 className="text-white text-4xl md:text-6xl font-bold md:leading-tight">
                  Experience a life-changing internship with IAESTE
                </h2>
                <p className="text-white font-semibold mt-5 md:text-2xl">
                  Paid internships in more than 80 countries around the world
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 mx-auto max-w-screen-xl px-2 lg:px-0">
        <h2 className="text-navColor text-4xl font-semibold text-center md:text-5xl lg:text-6xl">
          How it Works
        </h2>
        <div className="flex flex-col mt-5">
          <h2 className="text-navColor text-xl font-semibold my-2 md:my-5 md:text-2xl">
            1. Internship Abroad
          </h2>
          <img
            src={display}
            alt=""
            className="h-64 md:h-[500px] object-cover image2"
          />
          <p className="text-navColor mt-3 md:text-lg">
            Placements both in industry and at research institutes are
            available. The majority of IAESTE placements last for 2–3 months and
            frequently take place in summer. In general, the placements are
            paid, with salaries usually adjusted in line with country-specific
            student living costs. The IAESTE committee abroad will make suitable
            living arrangements for you and will be on hand to provide you with
            guidance at all times. IAESTE Kenya will take care of all the
            necessary formalities on your behalf.
          </p>
        </div>
        <div className="flex flex-col mt-5 md:mt-16">
          <h2 className="text-navColor text-xl font-semibold my-2 md:my-5 md:text-2xl">
            2. Internship in Kenya
          </h2>
         <img
            src={display2}
            alt=""
            className="h-64 md:h-[500px] object-cover image"
          />
          <p className="text-navColor mt-3 md:text-lg">
            Unfortunately, no applications for an internship in Kenya can be
            accepted directly by the Kenyan Committee. Anyone interested in
            doing a work placement in Kenya is advised to contact the IAESTE
            National Committee in their home country.<br></br>
            <br></br>
            Dear applicant, we are delighted that you have applied for a work
            placement in Kenya. As soon as the employer has accepted your
            application, nothing will stand in the way of your work placement.
            We organise various excursions and events for our interns as part of
            our summer mentoring programme. During your work placement, you will
            be able to gain important experience of your subject, as well as
            learning a host of new things.
          </p>
          <p className="mt-2 text-navColor">
            You can find more about Kenya in the link(s) below:
          </p>
          <div className="flex flex-col gap-3 mt-3 ml-2">
            <a
              href="https://en.wikipedia.org/wiki/Kenya"
              className="flex flex-row items-center gap-2 text-navColor underline border-navColor w-max md:text-lg"
            >
              <MdOutlineArrowRightAlt className="text-2xl" />
              Information about Kenya
            </a>
            <a
              href="https://www.gov.uk/foreign-travel-advice/kenya/entry-requirements"
              className="flex flex-row items-center gap-2 text-navColor underline border-navColor w-max md:text-lg"
            >
              <MdOutlineArrowRightAlt className="text-2xl" />
              Information about travelling to Kenya
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-auto max-w-screen-xl px-2 mt-10 lg:mt-16 lg:px-0">
        <h2 className="text-navColor text-center my-5 text-4xl font-semibold md:text-5xl lg:text-6xl">
          How to Apply
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:flex lg:flex-row">
          <Application />
        </div>
        <a
          href="https://iaeste.smartsimple.ie/"
          className="bg-buttonColor w-max mx-auto text-white font-semibold py-2 px-5 rounded mt-10 md:mt-16"
        >
          SIGN UP NOW
        </a>
      </div>

      <div className="internships mt-16">
        <div className="internship">
          <div className="py-10 px-2 mx-auto max-w-screen-xl lg:p-16">
            <h2 className="bg-buttonColor py-3 md:py-2 md:px-10 mx-auto rounded text-white font-semibold text-center text-2xl mb-5 md:mb-0 md:text-3xl md:w-max">
              Types of Internships
            </h2>
            <div className="flex flex-col space-y-10 md:flex-row md:mt-10 md:space-y-0">
              <div className="flex-col text-center md:w-1/2">
                <h2 className="text-semibold text-white text-3xl font-semibold lg:text-4xl">
                  On Site Internships
                </h2>
                <p className="text-white mt-3 mx-auto md:mt-5 md:text-xl lg:w-[80%]">
                  Our traditional internships offer you the chance to live and
                  work in a foreign country, gain valuable experience, enhance
                  your CV, make new friends from all over the world and have a
                  truly life-changing experience.
                </p>
                <button className="bg-buttonColor text-white w-full text-semibold font-semibold py-4 px-5 mt-5 rounded md:w-max md:py-3 md:mt-10">
                  <a href="https://iaeste.org/internships?utf8=%E2%9C%93&commit=find+an+internship+abroad">
                    FIND AN INTERNSHIP ABROAD
                  </a>
                </button>
              </div>
              <div className="hidden border md:flex"></div>
              <div className="flex-col text-center md:w-1/2">
                <h2 className="text-semibold text-white text-3xl font-semibold lg:text-4xl">
                  Remote Internships
                </h2>
                <p className="text-white mt-3 mx-auto md:mt-5 md:text-xl lg:w-[80%]">
                  Remote internships offer the chance to gain experience for
                  those that for one reason or another cannot travel. They offer
                  the same real work and expectation but you can do them from
                  the comfort of your own home.
                </p>
                <button className="bg-buttonColor text-white w-full text-semibold font-semibold py-4 px-5 mt-5 rounded md:w-max md:py-3 md:mt-10">
                  <a href="https://iaeste.org/internships?utf8=%E2%9C%93&ref_no=&internship_type=remote&sort=deadline_at">
                    FIND REMOTE INTERNSHIP
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
