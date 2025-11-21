import React from "react";

const HeroBanner = ({ title, subTitle, btn1, btn2 }) => {
  return (
    <section>
      <div>
        <h1 className="w-[798px] h-[143px]  opacity-75 font-inter font-semibold text-[118px] leading-[100%] text-white">
          {title}
        </h1>
        <p className="w-[775px] h-[56px] opacity-75 font-inter font-medium text-[23px] leading-[100%] text-white">
          {subTitle}
        </p>
      </div>
      <div className="mt-3 flex gap-3">
        <button className="w-[217px] h-[64px] border-2 rounded-xl border-white flex items-center justify-center opacity-[100%] bg-transparent">
          <p className="font-inter font-normal text-[28px]">
            {btn1}
          </p>
        </button>

        <button className="w-[70px] h-[70px]  border-2 rounded-full flex items-center justify-center">
          <div
            className="w-0 h-0 
                    border-t-[17px] border-t-transparent 
                    border-b-[17px] border-b-transparent
                     border-l-[34px] border-l-white 
                     opacity-75 rotate-120 rounded-[3px]"
          >  
            <p className="px-4 w-[119px] h-[36px] font-indie flower text-white">{btn2}</p>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
