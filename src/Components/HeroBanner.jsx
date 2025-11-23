import React from "react";

const HeroBanner = ({ title, subTitle }) => {
  return (
    <section className="px-[45px] pt-[225px] text-white">
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
