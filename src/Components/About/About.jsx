import React from "react";

const About = () => {
  return (
    <div className="about mt-10 px-2 lg:px-5 xl:px-0" id="about">
      <div className="flex flex-col w-full max-w-screen-xl mx-auto px-2 md:px-0">
        <div className="flex flex-col">
          <h2 className="text-navColor font-semibold text-2xl">
            What is IAESTE
          </h2>
          <p className="text-navColor mt-3 md:text-lg">
            The International Association for the Exchange of Students for
            Technical Experience, Association sans but lucratif (non-profit
            association), commonly known as IAESTE A.s.b.l. is an association of
            national committees representing academic, industrial and student
            interests. It serves 3500+ students, 3000 employers and 1000
            academic institutions through career-focused professional
            internships abroad, social and intercultural reception programmes,
            international networking and other career and employer branding
            activities in more than 80 countries worldwide.
          </p>
        </div>
        <div className="flex flex-col mt-10">
          <h2 className="text-2xl text-navColor font-semibold">
            Kenya as an IAESTE Member
          </h2>
          <p className="text-navColor mt-5 md:text-lg">
            IAESTE Kenya is a University Consortium of six universities, former
            Cooperating Institutions namely:{" "}
            <span className="font-semibold">IAESTE Kenya-JKUAT</span> (Jomo
            Kenyatta University of Agriculture and Technology),{" "}
            <span className="font-semibold">IAESTE Kenya-DeKUT</span> (Dedan
            Kimathi University of Technology),{" "}
            <span className="font-semibold">IAESTE Kenya-MUT</span> (Murang’a
            University of Technology),{" "}
            <span className="font-semibold">IAESTE Kenya-EU</span> (Egerton
            University),
            <span className="font-semibold">IAESTE Kenya-MUST</span> (Meru
            University of Science and Technology) and
            <span className="font-semibold">IAESTE Kenya-KIBU</span>(Kibabii
            University) The consortium was admitted as an Associate Member of
            IAESTE A.s.b.l.{" "}
            <span className="font-semibold">
              on 24th January 2021 during the Annual Conference in Vienna,
              Austria
            </span>
            .Prior to this, the institutions undertook their exchange processes
            largely in an independent manner.
          </p>
        </div>
        <div className="flex flex-col mt-10">
          <h2 className="text-2xl text-navColor font-semibold">What we do</h2>
          <p className="text-navColor mt-5 md:text-lg">
            IAESTE Kenya offers internships to Kenyan University Abroad. The
            internships are paid ones. You get a chance to work in a foreign
            country as an Kenya student. Also, IAESTE Kenya receives
            international students from other IAESTE member countres who want to
            come and work in Kenya. This means that IAESTE Kenya also provides
            Kenyan companies, firms and organizations with international
            students as interns. Throught this, IAESTE Kenya promotes
            intercultural work experiences to both foreign students as well as
            Kenyan students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
