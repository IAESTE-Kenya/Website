import React from "react";
import Nav from "../Hero/Nav";

const Form = () => {
  return (
    <section className="forms">
      <div className="form h-max md:h-screen">
        <div className="bg-buttonColor lg:bg-transparent">
        <Nav />
        </div>
        <div className="flex flex-col justify-center mx-auto h-full py-10 max-w-screen-xl md:py-0">
          <div className="mx-auto w-full text-center lg:w-3/4">
            <h2 className="text-white text-4xl font-semibold">Contact Us</h2>
            <p className="mt-2 text-white text-xl font-semibold">
              Hi, send us a message!
            </p>
          </div>
          <form action="#" className="mt-5 mx-auto w-full px-3 md:px-0 md:p-2 md:mt-10 md:w-3/4 lg:w-3/4">
            <label htmlFor="" className="block text-white text-xl">
              Name
              <input
                type="text"
                placeholder="Enter your name"
                className="block bg-transparent text-white border-b outline-none mt-2 w-full lg:w-1/2"
              />
            </label>
            <label htmlFor="" className="block text-white text-xl mt-8">
              Email
              <input
                type="text"
                placeholder="Enter your Email"
                className="block bg-transparent text-white border-b outline-none mt-2 w-full lg:w-1/2"
              />
            </label>
            <label htmlFor="" className="block text-white text-xl mt-8">
              <textarea
                name=""
                id=""
                cols="10"
                rows="3"
                placeholder="Message"
                className="text-white border-b outline-none w-full  bg-transparent lg:w-1/2"
              ></textarea>
            </label>
                <input type="submit" value="Submit" className="text-white font-semibold bg-buttonColor w-max py-2 px-8 rounded mt-5"/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
