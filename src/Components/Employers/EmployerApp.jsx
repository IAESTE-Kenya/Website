import React from "react";
import image1 from '../../Assets/Employer/employer1.png'
import image2 from '../../Assets/Employer/employer2.png'
import image3 from '../../Assets/Employer/employer3.png'
import image4 from '../../Assets/Employer/employer4.png'

const Application = () => {
  const steps = [
    {
      id: 1,
      image: image1,
      title: "Get in touch with IAESTE Kenya",
      text: "Register on our platform and enter your company details. We'll then get in touch with you to start the recruitment process.",
    },
    {
      id: 2,
      image: image2,
      title: "Create an Internship",
      text: "We will guide you on how to create a high-quality internship and take care of finding students according to your requirements.",
    },
    {
      id: 3,
      image: image3,
      title: "Select a suitable intern",
      text: "We will guide you on how to create a high-quality internship and take care of finding students according to your requirements.",
    },
    {
      id: 4,
      image: image4,
      title: "Benefit from internship",
      text: "Benefit from the interns' skills and intercultural experience. We support you in the visa process and arrange to onboard the intern.",
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