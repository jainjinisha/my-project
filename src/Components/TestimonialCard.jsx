import React from "react";
import StarRating from "./StarRating";

const TestimonialCard = ({avataar,name,rating,text}) => {
    return (
   <div className="bg-white/10 w-[512px] h-[480px] border border-white/20 backdrop-blur-xl rounded-xl bg-gradient-to-r from white/20 via black/0 to-white/20 
     shadow-[0_9px_18px_rgba(0,0,0,0.25)] ">
    <div clasName="flex items-center gap-4">
        <img src= {avataar}  className="w-[88px] h-[88px] rounded-[51px] shadow-[0_2.77px_2.21px_rgba(0,0,0,0.422),
                                                                                0_6.65px_5.32px_rgba(0,0,0,0.606)]" />
    <div>
        <h4 className="font-semibold w-[224px] h-[46px] text-white font-inter size-[38px]">{name}</h4>
         <div className="text-sm color-[#FFF84E]">
            <StarRating rating={rating} /></div>
    </div>
</div>
    <p className="text-white w-[403px] h-[174px] font-inter size-[24px] font-normal mt-6">{text}</p>
      </div>
    )
}

export default TestimonialCard;
