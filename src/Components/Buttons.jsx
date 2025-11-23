import React from "react";
import BuyButton from "./Button";

const Buttons = ({ btn1, btn2 }) => {
  return (
    <div className="flex items-center gap-4 mx-[45px] pt-[20px]">
      <BuyButton text={btn1} />
      <button
        className="w-[60px] sm:w-[65px] md:w-[70px] h-[60px] sm:h-[65px] md:h-[70px] border-2 
        rounded-full flex items-center justify-center"
      >
        <div
          className="w-0 h-0 
                border-t-[10px] sm:border-t-[12px] md:border-t-[17px] border-t-transparent
                border-b-[10px] sm:border-b-[12px] md:border-b-[17px] border-b-transparent
                border-l-[20px] sm:border-l-[26px] md:border-l-[34px] border-l-white 
                opacity-75 rotate-120 rounded-[3px]"
        >
          {" "}
        </div>
      </button>
      <p className="text-2xl font-indie flower text-white">{btn2}</p>
    </div>
  );
};
export default Buttons;
