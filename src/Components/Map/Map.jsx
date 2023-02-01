import React from "react";
import map from "../../Assets/map.jpeg";

const Map = () => {
  return (
    <section className="mx-auto max-w-4xl mt-5 px-2 xl:max-w-7xl lg:px-0">
      <a
        href="https://www.google.com/maps/place/Kenya/@0.1540824,33.4009556,6z/data=!3m1!4b1!4m5!3m4!1s0x182780d08350900f:0x403b0eb0a1976dd9!8m2!3d-0.023559!4d37.906193"
        className="w-full"
      >
        <img
          src={map}
          alt=""
          className="h-96 w-full object-cover rounded-xl xl:h-[600px]"
        />
      </a>
    </section>
  );
};

export default Map;
