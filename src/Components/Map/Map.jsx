import React from "react";
import map from "../../Assets/map.jpeg";

const Map = () => {
  return (
    <section className="mx-auto max-w-screen-xl mt-5 px-2 lg:px-0">
      <a
        href="https://www.google.com/maps/place/Kenya/@0.1540824,33.4009556,6z/data=!3m1!4b1!4m5!3m4!1s0x182780d08350900f:0x403b0eb0a1976dd9!8m2!3d-0.023559!4d37.906193"
        className="h-[300px] w-full md:h-[30vw]"
      >
        <img src={map} alt="" className="h-full min-h-full w-full object-cover" />
      </a>
    </section>
  );
};

export default Map;
