// eslint-disable-next-line 
import React, { useState, useEffect } from "react";
import { MdOutlineArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export const CouraselItem = ({ children, padding }) => {
  return (
    <div
      className="courasel w-full inline-flex rounded h-96 lg:h-[450px] xl:h-[650px] relative rounded"
      style={{marginLeft: padding, marginRight: padding}}
    >
      {children}
    </div>
  );
};

const Courasel = ({ children, display }) => {
  const [currentIndex, setIndex] = useState(1);

  const setCurrentIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };
  // console.log(currentIndex)

  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const reactChildren = React.Children.toArray(children);

  return (
    <div>
      <div className="flex-row justify-end space-x-3 mb-2" style={{display: display}}>
        <div
          className="bg-navColor py-2 px-3 rounded cursor-pointer"
          onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          <MdOutlineArrowBackIos className="text-white" />
        </div>
        <div
          className="bg-navColor py-2 px-3 rounded cursor-pointer"
          onClick={() => setCurrentIndex(currentIndex + 1)}
        >
          <MdArrowForwardIos className="text-white" />
        </div>
      </div>
      <div
        onMouseEnter={() => setPaused(!paused)}
        onMouseLeave={() => setPaused(!paused)}
        className={`inner whitespace-nowrap duration-700`}
        style={{ transform: `translate(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(
            child,
            index === currentIndex
              ? { transform: "scale(0.5)" }
              : { transform: "scale(1)" }
          );
        })}
      </div>
      <div className="flex flex-row items-center justify-center space-x-4 mt-5">
        {reactChildren.map((child, i) => (
          <p
            onClick={() => setCurrentIndex(reactChildren.indexOf(child))}
            className={`cursor-pointer py-1.5 rounded-full duration-1000 ${
              reactChildren.indexOf(child) === currentIndex
                ? `bg-navColor px-3`
                : `bg-white px-1.5`
            }`}
            key={i}
          ></p>
        ))}
      </div>
    </div>
  );
};

export default Courasel;
