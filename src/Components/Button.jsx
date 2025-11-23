import React from "react";

const BuyButton = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[180px] sm:w-[200px] md:w-[217px] h-[50px] sm:h-[60px] 
        border-2 rounded-xl border-white text-white flex items-center justify-center opacity-[100%] bg-transparent ${className}`}
    >
      <p className="font-inter font-normal text-[18px] sm:text-[22px] md:text-[28px]">
        {text}
      </p>
    </button>
  );
};

export default BuyButton;
