import React from "react";
import Bag from "../Images/bag1.png";

const PlantCard = ({ img, name, desc, price }) => {
  return (
    <div className="w-[400px] h-auto max-w-sm sm:max-w-md">
      <div className="bg-white/5 border border-white/20 backdrop-blur-xl rounded-[40px] shadow-[0_9px_18px_rgba(0,0,0,0.25)] p-6 flex flex-col">
        <div className="flex justify-center">
          <img
            src={img}
            alt={name}
            className="w-full max-w-[260px] sm:max-w-[320px] h-auto object-contain"
          />
        </div>

        <h3 className="text-2xl sm:text-3xl text-center text-white mt-4">
          {name}
        </h3>

        <p className="text-white/80 mt-2 text-base sm:text-lg">{desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-white text-xl sm:text-2xl">Rs. {price}/-</span>
          <img src={Bag} alt="bag" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
