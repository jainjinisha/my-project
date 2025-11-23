import React from "react";
import SectionTitle from "./SectionTitle";
import AglaonewmaPlant from "../Images/AglaonemaPlant.png";
import RightArrow from "../Images/rightarrow.png";
import Dots from "../Images/Dots.png";

const OurBestO2 = () => {
  return (
    <div className="py-12 bg-[#1B2316]">
      <div className="container mx-auto px-4">
        <SectionTitle title="Our Best o2" />

        <div className="bg-white/10 w-full max-w-6xl mx-auto px-6 py-8 border border-white/20 backdrop-blur-md rounded-2xl flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={AglaonewmaPlant}
              alt="Aglaonema Plant"
              className="w-64 sm:w-80 md:w-[420px] h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 text-white space-y-4">
            <p className="font-semibold text-xl md:text-2xl">
              We Have Small And Best O2 Plants Collection’s
            </p>
            <p className="text-sm md:text-base">
              Oxygen-producing plants, often referred to as "O2 plants," are
              those that release oxygen into the atmosphere through the process
              of photosynthesis.
            </p>
            <p className="text-sm md:text-base">
              Many plants can help filter out pollutants and toxins from the
              air, such as formaldehyde, benzene, and trichloroethylene. This
              makes the air cleaner and healthier to breathe.
            </p>
            <div className="flex items-center justify-between">
              <button className="w-40 h-12 border-2 rounded-xl border-white text-white">
                Explore
              </button>
              <div className="flex items-center gap-4 text-white">
                <img
                  src={RightArrow}
                  alt="Left"
                  className="w-6 h-6 rotate-180 cursor-pointer"
                />
                <span>01/04</span>
                <img
                  src={RightArrow}
                  alt="Right"
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <img src={Dots} alt="Dots" className="h-3" />
      </div>
    </div>
  );
};

export default OurBestO2;
