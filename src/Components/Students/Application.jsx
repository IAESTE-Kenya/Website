import React from "react";
import none1 from "../../Assets/none1.png";
import none2 from "../../Assets/none2.png";
import none3 from "../../Assets/none3.png";
import none4 from "../../Assets/none4.png";

const Application = () => {
  const steps = [
    {
      id: 1,
      image: none1,
      title: "Find an internship",
      text: "Search our open internships and register on our Exchange Platform to see others available to you and apply!",
    },
    {
      id: 2,
      image: none2,
      title: "Get in contact with your LC",
      text: "Once registered and approved, your national committee with guide you through the application process.",
    },
    {
      id: 3,
      image: none3,
      title: "Be accepted by the employer",
      text: "Once you've been selected by your committee you will prepare your documents which will be forwarded to the employer.",
    },
    {
      id: 4,
      image: none4,
      title: "Go on your dream internship",
      text: "Once accepted by the employer, you will receive all the necessary information needed to start your dream internship!",
    },
  ];

  return steps.map((step) => (
    <div className="lg:w-1/4" key={step.id}>
      <div className="flex flex-col justify-center h-48">
        <img src={step.image} alt="" className="h-full object-contain"/>
      </div>
      <p className="text-navColor text-xl text-center font-semibold mb-2">Step {step.id}.</p>
      <h2 className="text-navColor text-xl text-center font-semibold mb-2">{step.title}</h2>
      <p className="text-center text-navColor">{step.text}</p>
    </div>
  ));
};

export default Application;
