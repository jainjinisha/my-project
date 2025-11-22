import React from "react";
// import bgImage from "../Images/bg.png"

const HeroBanner = ({ title, subTitle, btn2}) => {
  return (
    <section className="px-4 sm:px-8 lg:px-20 py-12 lg:py-20 text-white">
      {/* <div className="min-h-screen w-full bg-top" style={{ backgroundImage:`url(${bgImage})` }}> */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="whitespace-nowrap max-w-3xl opacity-75 font-inter font-semibold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[118px] leading-none text-white">
          {title}
        </h1>
        <p className="max-w-[775px]  opacity-75 font-inter font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] leading-tight mt-4">
          {subTitle}
        </p>
      </div>

      
      
    </section>
  );
};

export default HeroBanner;