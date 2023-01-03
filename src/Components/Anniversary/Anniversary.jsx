import React from "react";
import image from "../../Assets/anniversary.png";
import { FiExternalLink } from "react-icons/fi";

const Anniversary = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-2 md:my-28 md:px-0">
      <div
        className="flex flex-col md:flex-row md:space-x-20"
      >
        <a href="https://iaeste.org/history" className="h-48 md:w-1/2">
          <img src={image} alt="" className="h-full w-full object-contain" />
        </a>
        <div className="flex flex-col md:w-1/2">
          <h2 className="text-2xl text-navColor font-semibold mb-3">
            IAESTE celebrates 75th anniversary
          </h2>
          <p className="text-navColor md:w-[80%]">
            IAESTE was founded in 1948 in London. In the aftermath of World War
            II, a new spirit pervaded the world: desire for international
            understanding and co-operation. It was this spirit that brought
            forth both the United Nations (UN) and IAESTE, organizations
            dedicated to promotting these objectives. Today we beleive that
            students with international experience are the key to tackling
            today's global challenges.
          </p>
          <a
            href="https://iaeste.org/history"
            className="flex flex-row items-center gap-1 text-navColor mt-3 w-max hover:border-b border-navColor"
          >
            <FiExternalLink />
            read
          </a>
        </div>
      </div>
    </section>
  );
};

export default Anniversary;
