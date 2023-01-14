import React, { useState } from "react";
import { data } from "./Data";
import { AiFillEyeInvisible } from "react-icons/ai";

const Pagitation = ({ setNextPage, setPreviousPage, setPage, data, dataPerPage }) => {
  const page = data.length / dataPerPage;
  const pageItems = [];
  for( let i = 1; i <= page; i++){
    pageItems.push(i)
  }
  return (
    <nav onClick={() => setPreviousPage()}>
      <ul className="flex flex-row items-center rounded-xl border border-gray-300 overflow-hidden h-full py-[9px]">
        <li className="">
          <a
            className="p-3 bg-white font-bold text-navColor rounded-l-lg"
            href="#home"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pageItems.map((number, i) => (
          <li className="border border-gray-100" key={i} onClick={() => setPage(number)}>
            <a
              className="py-3 px-4 text-navColor font-semibold bg-white"
              href="#home"
            >
              {number}
            </a>
          </li>
        ))}
        <li onClick={() => setNextPage()}>
          <a
            className="p-3 bg-white font-bold text-navColor rounded-r-lg"
            href="#home"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Event = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState("8");

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = data.slice(firstIndex, lastIndex);

  const setPreviousPageOnClick = () => {
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  };
  const setNextPageOnClick = () => {
    if(currentPage < (data.length / postsPerPage)){
      setCurrentPage(currentPage + 1)
    }
  };
  const setPageOnNumberClick = (number) => {
    setCurrentPage(number)
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 cursor-pointer md:grid-cols-4">
        {currentPosts.map((event, i) => (
          <div className="event-list relative h-48 xl:h-64" key={i}>
            <img
              src={event.image}
              alt=""
              className="h-full w-full rounded-xl object-cover brightness-50 hover:brightness-75 duration-500"
            />
            <div className="absolute text-white flex flex-row items-end justify-between p-1 left-0 bottom-0 w-full xl:p-3">
              <div>
                <p className="text-[11px]">{event.title}</p>
                <p className="text-[10px]">{event.host}</p>
              </div>
              <div>
                <p className="text-[10px]">{event.date}</p>
                <p className="flex flex-row items-center text-[10px]">
                  <AiFillEyeInvisible />
                  View
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 w-max mx-auto">
        <Pagitation
          setPreviousPage={setPreviousPageOnClick}
          setNextPage={setNextPageOnClick}
          data={data}
          dataPerPage ={postsPerPage}
          setPage={setPageOnNumberClick}
        />
      </div>
    </div>
  );
};

export default Event;
