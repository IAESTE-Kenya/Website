import React from "react";
import Nav from "../Hero/Nav";
import EmployerApp from "./EmployerApp";
import { benefits, process } from "./Data";

import image from "../../Assets/offer.jpg";

const Employers = () => {
  return (
    <section>
      <div className="student">
        <div className="students pb-10 lg:pb-[10vw] xl:h-[75vh]">
          <div className="bg-buttonColor md:bg-transparent">
            <Nav />
          </div>
          <div className="flex flex-row px-2 h-max items-center mx-auto mt-10 max-w-screen-xl md:h-full xl:px-0">
            <div className="lg:w-3/4">
              <button className="bg-buttonColor w-max py-2 px-10 text-white text-lg font-semibold rounded md:py-3 px-10">
                Employers
              </button>
              <div className="flex flex-col mt-10 md:mt-10 xl:mt-20">
                <h2 className="text-white text-4xl md:text-6xl font-bold md:leading-tight">
                  Youth, Diversity and Excellence - Hire the best young talent
                  from around the world
                </h2>
                <p className="text-white font-semibold mt-5 md:text-2xl">
                  Access to a pool of over 100,000 students from more than 80
                  countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 lg:px-5 xl:px-0">
        <div className="mx-auto max-w-screen-xl mt-10">
          <h2 className="text-3xl text-navColor font-semibold lg:text-4xl xl:text-5xl">
            Offering an Internship?
          </h2>
          <img
            src={image}
            alt=""
            className="employer-image w-full h-96 mt-2 object-cover md:mt-10 xl:h-[500px]"
          />
          <p className="mt-5 text-navColor text-lg">
            Are you a Kenyan employer and would like to offer an internship
            opportunity to an international student? IAESTE Kenya provides
            employers with international skills in different fields such as
            science and engineering from around the world. <br></br> <br></br>
            To get started, you must register as an employer on the{" "}
            <a
              href="https://iaeste.smartsimple.ie/s_Login.jsp"
              className="items-center gap-1 border-b border-gray-500 w-max"
            >
              IAESTE Exchange Platform.
            </a>{" "}
            After verification, we will send your login details, and guidelines
            on drafting a placement offer. IAESTE Kenya will offer free
            recruitment to employers. Notice that the intern's salary will be
            your only expense.The IAESTE statutes stipulate that the intern’s
            salary must, at a minimum, cover student living costs incurred while
            staying in the host country.
          </p>
        </div>

        <div className="flex flex-col mx-auto max-w-screen-xl px-2 mt-5 lg:mt-10 xl:px-0">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:flex lg:flex-row">
            <EmployerApp />
          </div>
          <a
            href="https://iaeste.smartsimple.ie/"
            className="bg-buttonColor w-max mx-auto text-white font-semibold py-2 px-5 rounded mt-10 md:mt-16"
          >
            SIGN UP NOW
          </a>
        </div>

        <div className="mx-auto max-w-screen-xl my-20">
          <h2 className="text-buttonColor text-3xl font-semibold lg:text-4xl xl:text-5xl">
            Why IAESTE Interns?
          </h2>
          <ul className="space-y-3 mt-5 list-decimal ml-6">
            {benefits.map((benefit, i) => (
              <li className="text-navColor text-xl font-semibold lg:text-2xl" key={i}>
                {benefit.title} -{" "}
                <span className="text-base font-normal lg:text-lg">{benefit.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mx-auto max-w-screen-xl my-10 lg:my-20">
          <h2 className="text-buttonColor text-3xl font-semibold lg:text-4xl xl:text-5xl">
            You handle the work, we handle everything else
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2">
            {process.map((item, i) => (
              <div
                className="bg-white flex flex-col p-2 rounded gap-5 md:p-5 lg:flex-col xl:flex-row"
                key={i}
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-48 rounded w-full xl:w-[40%]"
                />
                <div className="space-y-3 w-full xl:w-[60%]">
                  <h2 className="text-navColor text-2xl font-semibold">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-gray-600 text-base xl:text-lg">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employers;
