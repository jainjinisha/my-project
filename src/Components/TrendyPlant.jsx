import React from "react";
import Trendyplant1 from "../Images/photoo1.png";
import Trendyplant2 from "../Images/photoo2.png";
import SectionTitle from "./SectionTitle";
import BuyButton from "./Button";

const TrendyPlant = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <SectionTitle title="Our Trendy plants" />
        <div className="flex flex-col gap-4">
          <div className="bg-white/10 w-3/4 border border-white/20 backdrop-blur-md rounded-4xl flex flex-col md:flex-row items-center gap-2">
            <img
              src={Trendyplant1}
              alt="Trendy Plant 1"
              className="w-full md:w-1/4 h-auto object-contain"
            />
            <div className="w-full md:w-2/3 text-white">
              <p className="text-2xl">For Your Desks Decorations</p>
              <p className="mt-2">
                I recently added a beautiful desk decoration plant to my
                workspace, and it has made such a positive difference!
              </p>
              <p className="font-semibold text-2xl py-3">Rs. 599/-</p>
              <BuyButton text="Explore" />
            </div>
          </div>

          <div className="bg-white/10 w-3/4 border border-white/20 backdrop-blur-md rounded-4xl flex flex-col md:flex-row-reverse items-center gap-2">
            <img
              src={Trendyplant2}
              alt="Trendy Plant 2"
              className="w-full md:w-1/4 h-auto object-contain"
            />
            <div className="w-full md:w-2/3 text-white">
              <p className="text-2xl">For Your Desks Decorations</p>
              <p className="mt-2">
                I recently added a beautiful desk decoration plant to my
                workspace, and it has made such a positive difference!
              </p>
              <p className="font-semibold text-2xl py-3">Rs. 599/-</p>
              <BuyButton text="Explore" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendyPlant;
