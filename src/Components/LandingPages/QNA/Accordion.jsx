import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const Accordion = ({ titleQ, ans }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-black/30 p-4 sm:p-7 md:p-12 rounded-2xl sm:rounded-[2rem] cursor-pointer mt-4 sm:mt-8 sm:w-[80%] md:w-[65%] lg:w-[55%] mx-auto"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-ThirdPagetextClr font-semibold text-xl sm:text-2xl">
          {titleQ}
        </h2>
        <span className="text-xl mr-4 text-ThirdPagetextClr">
          {isOpen ? <FaAngleDown /> : <FaChevronUp />}
        </span>
      </div>

      {/* Transition Effect */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-ThirdPagetextClr text-[1.05rem] sm:text-lg font-medium mt-3">
          {ans}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
