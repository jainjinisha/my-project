import React from "react";
import Trendyplant1 from "../Images/photoo1.png"
import Trendyplant2 from "../Images/photoo2.png"
import SectionTitle from "./SectionTitle";
import BuyButton from "./Button";

const TrendyPlant = () => {
    return (
        <div>
          <SectionTitle title="Our Trendy plants" className="w-[584px] h-[67px] font-inter font-semibold size-[70px] 
         shadow-[0_2.77px_2.21px_rgba(0,0,0,0.422),0_0_6.65px_5.32px_rgba(0,0,0,0.606)]" />

         <div className="flex flex-col gap-32 justify-center items-center pt-[20px] pb-[180px]">
            <div className="bg-white/10 w-[1200px] h-[350px] px-[30px] border border-white/20 backdrop-blur-[8px] rounded-[4vw] flex flex-row justify-around gap-32">
                <img src={Trendyplant1} alt="Trendy Plant 1" className="h-[500px] w-[500px] mt-[-150px]" />
                <div className="py-[75px]">
                    <p className="text-2xl text-white">For Your Desks Decorations</p>
                    <p className="text-white">I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
                    <p className="font-semibold text-white text-3xl py-[15px]">Rs. 599/-</p>
                    <div>
                        <BuyButton text="Explore"/>
                    </div>
                </div>
            </div>
              <div className="bg-white/10 w-[1200px] h-[350px] px-[60px] border border-white/20 backdrop-blur-[8px] rounded-[4vw] flex flex-row justify-around gap-32">
                <div className="py-[75px]">
                    <p className="text-2xl text-white">For Your Desks Decorations</p>
                    <p className="text-white">I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
                    <p className="font-semibold text-white text-3xl py-[15px]">Rs. 599/-</p>
                    <div>
                        <BuyButton text="Explore"/>
                    </div>
                 </div>
                    <img src={Trendyplant2} alt="Trendy Plant 2" className="h-[500px] w-[500px] mt-[-150px]" />
            </div>
         </div>
        </div>
    )
}

export default TrendyPlant;