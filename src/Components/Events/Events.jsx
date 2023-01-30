import React from "react";
import Nav from "../Hero/Nav";
import image from "../../Assets/Events/events.jpeg";
import Event from "./Event";

const Events = () => {
  return (
    <section>
      <div className="bg-buttonColor xl:bg-navColor">
        <Nav />
      </div>
          <div className="mx-auto max-w-4xl lg:px-0 xl:max-w-7xl">
            <img
              src={image}
              alt=""
              className="event-image h-64 w-full object-cover md:h-[500px]"
            />
            <div className="p-2 mt-5 xl:p-0">
              <p className="text-navColor xl:text-lg">
                Welcome to the events section of IAESTE Kenya's website. Here,
                you will find a calendar of all the upcoming events hosted by
                our{" "}
                <a href="#home" className="underline">
                  national committee
                </a>{" "}
                or{" "}
                <a href="#home" className="underline">
                  local committee.
                </a>{" "}
                From networking opportunities to educational
                workshops, there's something for everyone. Mark your calendar
                and join us for an exciting lineup of events that will help you
                gain international exposure, connect with industry leaders, and
                learn about the latest trends and developments in your field.
                Don't miss out on these unique opportunities to grow both
                personally and professionally. Keep an eye on this page for
                updates and new event announcements. Join us and be a part of
                our global community of student exchange.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl p-2 lg:mt-10 xl:p-0 xl:max-w-7xl">
            <Event />
          </div>
    </section>
  );
};

export default Events;
