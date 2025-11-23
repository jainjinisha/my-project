import React from "react";
import SectionTitle from "./SectionTitle";
import AglaonewmaPlant from "../Images/AglaonemaPlant.png"
import RightArrow from "../Images/rightarrow.png"
import Dots from "../Images/Dots.png"

const OurBestO2 = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-16 pt-16 bg-[#1B2316]">
            <SectionTitle
                title="Our Best o2"
                className="w-[584px] h-[67px] font-inter font-semibold size-[55px] 
                shadow-[0_2.77px_2.21px_rgba(0,0,0,0.422),0_0_6.65px_5.32px_rgba(0,0,0,0.606)]"
            />
            <div className="bg-white/10 w-[1200px] h-[525px] px-[30px] border border-white/20 backdrop-blur-[8px] flex flex-row gap-8 rounded-[4vw]">
                <img src={AglaonewmaPlant} alt="Aglaonema Plant" className="h-[550px] w-[700px] mt-[-88px]" />
                <div className="text-white flex flex-col justify-center gap-8">
                    <p className="font-semibold text-3xl">We Have Small And Best O2 Plants Collection’s</p>
                    <p className="font-semibold text-lg">Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
                    <p className="font-semibold text-lg">Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
                    <div className="flex flex-row justify-between mt-[-20px]">
                     <button
                        className="w-[180px] h-[50px] border-2 rounded-xl border-white text-white flex items-center justify-center opacity-[100%] bg-transparent"
                    >
                        <p className="text-[22px]">
                            Explore
                        </p>
                    </button>
                    <div className="flex items-center gap-8 mt-4 pr-4">
                        <img src={RightArrow} alt="Left Arrow" className="w-6 h-6 rotate-180 cursor-pointer" />
                        <p className="text-xl">01/04</p>
                        <img src={RightArrow} alt="Right Arrow" className="w-6 h-6 cursor-pointer" />
                    </div>
                    </div>
                </div>
            </div>
             <img src={Dots} alt="Dots" className="" />
        </div>
    )
}

export default OurBestO2;