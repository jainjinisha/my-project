import React from "react";
import Star from "../Images/Star.png";

const TestimonialCard = ({ Avataar, name, text }) => {
  return (
    <div className="bg-white/10 w-full max-w-md px-6 py-6 border border-white/20 backdrop-blur-[8px] rounded-2xl">
      <div className="flex items-center gap-4">
        <img src={Avataar} className="w-16 h-16 rounded-full shadow-md" />
        <div className="mt-6">
          <h4 className="font-semibold text-white">{name}</h4>
          <div className="flex gap-1 mt-1">
            <img src={Star} alt="Star" className="w-20 h-4" />
          </div>
        </div>
      </div>
      <p className="text-white mt-4 text-sm md:text-base leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default TestimonialCard;
